import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class WorkPage extends BasePage {
  readonly startProjectCta: Locator;
  readonly talkToEngineerCta: Locator;
  readonly caseStudyLinks: Locator;

  constructor(page: Page) {
    super(page);
    this.startProjectCta = page
      .getByRole("link", { name: "Start a project" })
      .last();
    this.talkToEngineerCta = page.getByRole("link", {
      name: "Hablar con un Ingeniero",
    });
    this.caseStudyLinks = page.getByRole("link", {
      name: "Ver Caso Completo",
    });
  }

  async goto(): Promise<void> {
    await this.navigate("/work");
  }

  async openFirstCaseStudy(): Promise<void> {
    await this.caseStudyLinks.first().click();
  }

  async goToContactFromCta(): Promise<void> {
    await this.startProjectCta.click();
  }

  async goToContactFromCaseStudy(): Promise<void> {
    await this.talkToEngineerCta.click();
  }
}
