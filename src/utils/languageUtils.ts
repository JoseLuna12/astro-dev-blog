export const supportedLanguages = [
    {
        key: "en",
        value: "English"
    },
    {
        key: "es",
        value: "Español"
    }
] as const

export type SupportedLanguagesTypes = typeof supportedLanguages[number]["key"]