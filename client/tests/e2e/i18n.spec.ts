import { test, expect } from "@playwright/test";

test.describe("Language toggle (ES ⇄ EN)", () => {
  test("defaults to Spanish and has a working toggle @critical", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("lang", "es");
    const toggle = page.getByRole("button", { name: "Cambiar a inglés" });
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveText("EN");

    const headerCta = page
      .getByRole("link", { name: "Iniciar un proyecto" })
      .first();
    await expect(headerCta).toBeVisible();

    await toggle.click();

    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.getByRole("button", { name: "Switch to Spanish" })).toHaveText(
      "ES"
    );
    await expect(
      page.getByRole("link", { name: "Start a project" }).first()
    ).toBeVisible();

    const stored = await page.evaluate(() =>
      localStorage.getItem("nezt-lang")
    );
    expect(stored).toBe("en");
  });

  test("language choice persists across reloads", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Cambiar a inglés" }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");

    await page.reload();

    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.getByRole("button", { name: "Switch to Spanish" })).toBeVisible();
  });
});
