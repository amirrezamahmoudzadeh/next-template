export function setLocaleText(faText: string, enText: string, locale: string) {
  switch (locale) {
    case "fa":
      return faText
      break

    case "en":
      return enText
      break

    default:
      return faText
      break
  }
}
