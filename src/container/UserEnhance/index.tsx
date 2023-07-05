import { setLocaleText } from "@/functions/setLocaleText"
import { getData } from "@/services/apis"
import { EnhanceAppsAndWebsitesApiReasponse } from "@/services/types/useCase/enhance_apps_and_websites"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useState } from "react"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import EnhanceItems from "./EnhanceItems"

const Index = () => {
  const [data, setData] =
    useState<EnhanceAppsAndWebsitesApiReasponse["enhance_apps_and_websites"]>()
  const dataQuery = useQuery<EnhanceAppsAndWebsitesApiReasponse>(
    ["enhance_apps_and_websites"],
    getData,
    {
      onSuccess(data) {
        setData(data.enhance_apps_and_websites)
      },
    }
  )
  const { locale } = useRouter()
  return (
    <>
      {!data && <Loading />}
      {data && (
        <div className="container">
          <PagesHeader
            buttonText={setLocaleText(
              data.section1.button1_fa,
              data.section1.button1_en,
              locale as string
            )}
            h1={setLocaleText(
              data.section1.title1_fa,
              data.section1.title1_en,
              locale as string
            )}
            h2={setLocaleText(
              data.section1.title2_fa,
              data.section1.title2_en,
              locale as string
            )}
            text={setLocaleText(
              data.section1.text1_fa,
              data.section1.text1_en,
              locale as string
            )}
          />
          <EnhanceItems
          locale={locale as string}
          section2={data.section2}
          section3={data.section3}
          section4={data.section4}
          />
          <QuoteComponent
            job="Product Manager"
            name="Lora K."
            text={`It is really easy to set the Userback widget on your product, customize how it looks, and link it with whatever other tool you like. It is also extremely straightforward from the end user's perspective - even non tech-savvy users take advantage of it to report issues or make suggestions for our platform.`}
          />
          <ContactUs section={data?.section6} />
        </div>
      )}
    </>
  )
}

export default Index
