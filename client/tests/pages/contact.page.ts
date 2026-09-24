import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class ContactPage extends BasePage {
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly companyInput: Locator;
  readonly projectTypeSelect: Locator;
  readonly budgetSelect: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly successHeading: Locator;
  readonly sendAnotherButton: Locator;
  readonly emailLink: Locator;

  constructor(page: Page) {
    super(page);
    this.nameInput = page.getByLabel("Full name");
    this.emailInput = page.getByLabel("Work email");
    this.companyInput = page.getByLabel("Company");
    this.projectTypeSelect = page.getByLabel("Project type");
    this.budgetSelect = page.getByLabel("Budget range");
    this.messageInput = page.getByLabel("What are you building?");
    this.submitButton = page.getByRole("button", { name: "Send message" });
    this.successHeading = page.getByRole("heading", {
      name: "Message received.",
    });
    this.sendAnotherButton = page.getByRole("button", {
      name: "Send another message",
    });
    this.emailLink = page.getByRole("link", { name: "labsnezt@gmail.com" });
  }

  async goto(): Promise<void> {
    await this.navigate("/contact");
  }

  async fillForm(data: {
    name: string;
    email: string;
    company?: string;
    projectType: string;
    budget?: string;
    message: string;
  }): Promise<void> {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    if (data.company) await this.companyInput.fill(data.company);
    await this.projectTypeSelect.selectOption({ label: data.projectType });
    if (data.budget) await this.budgetSelect.selectOption({ label: data.budget });
    await this.messageInput.fill(data.message);
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  async expectSuccess(): Promise<void> {
    await expect(this.successHeading).toBeVisible();
    await expect(
      this.page.getByText(
        "Thank you. A senior engineer will get back to you within one business day with next steps."
      )
    ).toBeVisible();
  }
}
