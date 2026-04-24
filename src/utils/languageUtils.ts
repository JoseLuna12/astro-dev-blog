export const supportedLanguages = [
  {
    key: "en",
    value: "English",
  },
  {
    key: "es",
    value: "Español",
  },
] as const;

export type SupportedLanguagesTypes = (typeof supportedLanguages)[number]["key"];

export const defaultLanguage: SupportedLanguagesTypes = "en";

export function isSupportedLanguage(value: string): value is SupportedLanguagesTypes {
  return supportedLanguages.some((language) => language.key === value);
}

export function getLanguageLabel(language: string) {
  return supportedLanguages.find((item) => item.key === language)?.value ?? language;
}
