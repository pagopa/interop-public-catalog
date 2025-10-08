export const LANGUAGES = {
  it: 'Italiano',
  en: 'English',
} as const

export const DEFAULT_LANG: keyof typeof LANGUAGES = 'it'
