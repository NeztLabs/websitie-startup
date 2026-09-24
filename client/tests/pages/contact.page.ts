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
    this.nameInput = page.getByLabel("Nombre completo");
    this.emailInput = page.getByLabel("Email de trabajo");
    this.companyInput = page.getByLabel("Empresa");
    this.projectTypeSelect = page.getByLabel("Tipo de proyecto");
    this.budgetSelect = page.getByLabel("Presupuesto");
    this.messageInput = page.getByLabel("¿Qué estás construyendo?");
    this.submitButton = page.getByRole("button", { name: "Enviar mensaje" });
    this.successHeading = page.getByRole("heading", {
      name: "Mensaje recibido.",
    });
    this.sendAnotherButton = page.getByRole("button", {
      name: "Enviar otro mensaje",
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
        "Gracias. Un ingeniero senior te responderá dentro de un día hábil con los próximos pasos."
      )
    ).toBeVisible();
  }
}
