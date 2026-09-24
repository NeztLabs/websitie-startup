import { test, expect, type Page } from "@playwright/test";
import { WorkPage } from "../pages/work.page";
import { ContactPage } from "../pages/contact.page";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

async function mockContactApi(
  page: Page,
  status: number
): Promise<{ requests: ContactPayload[] }> {
  const requests: ContactPayload[] = [];
  await page.route("**/api/contact", async (route) => {
    if (route.request().method() !== "POST") {
      await route.fallback();
      return;
    }
    requests.push((await route.request().postDataJSON()) as ContactPayload);
    await route.fulfill({
      status,
      contentType: "application/json",
      body:
        status === 200
          ? JSON.stringify({ ok: true })
          : JSON.stringify({ ok: false, error: "Failed to send message." }),
    });
  });
  return { requests };
}

test.describe("Work → send email (contact form)", () => {
  let workPage: WorkPage;
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    workPage = new WorkPage(page);
    contactPage = new ContactPage(page);
  });

  test("CTA on /work leads to contact form and sends email @critical", async ({
    page,
  }) => {
    const { requests } = await mockContactApi(page, 200);

    await workPage.goto();
    await workPage.goToContactFromCta();

    await expect(page).toHaveURL("/contact");
    await expect(contactPage.submitButton).toBeVisible();

    await contactPage.fillForm({
      name: "Jane Doe",
      email: "jane@company.com",
      company: "Acme Inc",
      projectType: "Custom software",
      budget: "$25k – $75k",
      message: "We need an internal portal to replace a manual process.",
    });
    await contactPage.submit();

    await contactPage.expectSuccess();

    expect(requests).toHaveLength(1);
    expect(requests[0]).toMatchObject({
      name: "Jane Doe",
      email: "jane@company.com",
      company: "Acme Inc",
      projectType: "Custom software",
      budget: "$25k – $75k",
      message: "We need an internal portal to replace a manual process.",
    });
  });

  test("case study page CTA leads to contact form and sends email @critical", async ({
    page,
  }) => {
    const { requests } = await mockContactApi(page, 200);

    await workPage.goto();
    await workPage.openFirstCaseStudy();
    await workPage.goToContactFromCaseStudy();

    await expect(page).toHaveURL("/contact");

    await contactPage.fillForm({
      name: "John Smith",
      email: "john@startup.io",
      projectType: "Applied AI",
      message: "Similar routing challenge to the Orbit case study.",
    });
    await contactPage.submit();

    await contactPage.expectSuccess();
    expect(requests).toHaveLength(1);
    expect(requests[0].email).toBe("john@startup.io");
  });

  test("shows error state when the API fails", async ({ page }) => {
    await mockContactApi(page, 502);

    await contactPage.goto();
    await contactPage.fillForm({
      name: "Jane Doe",
      email: "jane@company.com",
      projectType: "Custom software",
      message: "Testing failure handling.",
    });
    await contactPage.submit();

    const alert = page.getByRole("alert").filter({ hasText: "Something went wrong" });
    await expect(alert).toBeVisible();
    await expect(alert).toContainText("Something went wrong");
    await expect(contactPage.successHeading).toBeHidden();
    await expect(contactPage.submitButton).toBeEnabled();
  });

  test("form blocks submission with empty required fields", async ({
    page,
  }) => {
    await contactPage.goto();
    await contactPage.submit();

    await expect(contactPage.successHeading).toBeHidden();

    const invalidCount = await page
      .locator(":invalid")
      .evaluateAll((els) => els.length);
    expect(invalidCount).toBeGreaterThan(0);
  });

  test("form blocks submission with invalid email", async ({ page }) => {
    await contactPage.goto();
    await contactPage.fillForm({
      name: "Jane Doe",
      email: "not-an-email",
      projectType: "Custom software",
      message: "Testing email validation.",
    });
    await contactPage.submit();

    await expect(contactPage.successHeading).toBeHidden();
    const message = await contactPage.emailInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage
    );
    expect(message).toContain("@");
  });

  test("send another message resets the form", async ({ page }) => {
    await mockContactApi(page, 200);

    await contactPage.goto();
    await contactPage.fillForm({
      name: "Jane Doe",
      email: "jane@company.com",
      projectType: "Custom software",
      message: "First message.",
    });
    await contactPage.submit();
    await contactPage.expectSuccess();

    await contactPage.sendAnotherButton.click();
    await expect(contactPage.nameInput).toBeVisible();
    await expect(contactPage.nameInput).toHaveValue("");
    await expect(contactPage.messageInput).toHaveValue("");
  });

  test("contact email link opens Gmail with labsnezt@gmail.com", async ({
    page,
  }) => {
    await contactPage.goto();
    const contactSection = page.locator("#contact");
    await expect(
      contactSection.getByRole("link", { name: "labsnezt@gmail.com" })
    ).toHaveAttribute("href", "mailto:labsnezt@gmail.com");
  });

  test("footer social Gmail link on /work points to the mailbox", async ({
    page,
  }) => {
    await workPage.goto();
    const gmailLink = page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Gmail", exact: true });
    await expect(gmailLink).toBeVisible();
    await expect(gmailLink).toHaveAttribute(
      "href",
      "mailto:labsnezt@gmail.com"
    );
  });
});
