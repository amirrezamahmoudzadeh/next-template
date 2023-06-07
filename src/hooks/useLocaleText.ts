import { useRouter } from "next/router"

export function useLocaleText(faText: string, enText: string) {
  const { locale } = useRouter()
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
