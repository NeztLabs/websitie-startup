import { es, type Dictionary, type Project } from "./es";
import { en } from "./en";

export type Locale = "es" | "en";

export const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getProjectBySlug(
  slug: string,
  locale: Locale = "es"
): Project | undefined {
  return dictionaries[locale].projects.find((p) => p.slug === slug);
}
