export const siteConfig = {
  siteUrl: "https://devlog-jose.vercel.app",
  siteName: "Jose Luna Devlog",
  heroTitle: "Devlog",
  defaultSocialImage:
    "https://firebasestorage.googleapis.com/v0/b/dashboard-blogs-app.appspot.com/o/images%2FThzROsREBLP9kFuUvCnohZ2IABw2%2Fhero.jpg?alt=media&token=6b0b5a43-9fa0-4d13-831f-4e6dc7f8d912",
  defaultDescriptions: {
    en: "A bilingual developer blog with notes on Astro, Rust, Flutter, Swift, and web projects.",
    es: "Un blog bilingue de desarrollo con notas sobre Astro, Rust, Flutter, Swift y proyectos web.",
  },
} as const;

export function getLocale(lang: string) {
  return lang === "es" ? "es_ES" : "en_US";
}

export function toAbsoluteUrl(pathname: string, base: string = siteConfig.siteUrl) {
  return new URL(pathname, base).toString();
}
