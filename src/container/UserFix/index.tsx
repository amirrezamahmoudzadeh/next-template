import { setLocaleText } from "@/functions/setLocaleText"
import { getData } from "@/services/apis"
import { FixAppsAndWebsitesApiResponse } from "@/services/types/useCase/fix_apps_and_websites"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useState } from "react"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import FixItems from "./FixItems"

const Index = () => {
  const [data, setData] =
    useState<FixAppsAndWebsitesApiResponse["fix_apps_and_websites"]>()
  const dataQuery = useQuery<FixAppsAndWebsitesApiResponse>(
    ["fix_apps_and_websites"],
    getData,
    {
      onSuccess(data) {
        setData(data.fix_apps_and_websites)
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
          <FixItems
            locale={locale as string}
            section2={data.section2}
            section3={data.section3}
            section4={data.section4}
            section5={data.section5}
          />
          <QuoteComponent
           locale={locale as string}
           section={data.section6}
          />
          <ContactUs section={data?.section7} />
        </div>
      )}
    </>
  )
}

export default Index
