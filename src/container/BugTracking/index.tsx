import { useState } from "react"
import { useRouter } from "next/router"
import { setLocaleText } from "@/functions/setLocaleText"
import { bugTrackingData } from "@/services/apis"
import { BugTrackingApiResponse } from "@/services/types/useCase/bug-tracking"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import QuoteSlider from "@/components/QuoteSlider"

import BugTrackingItems from "./BugTrackingItems"

const Index = () => {
  const [data, setData] = useState<BugTrackingApiResponse["bug_tracking"]>()
  const dataQuery = useQuery(["bug-tracking"], bugTrackingData, {
    onSuccess(data) {
      setData(data.bug_tracking)
    },
  })
  const { locale } = useRouter()
  return (
    <>
      {(!data)  && <Loading />}
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
          <BugTrackingItems
            section2={data.section2}
            section3={data.section3}
            section4={data.section4}
            section5={data.section5}
            section6={data.section6}
            locale={locale as string}
          />
          <QuoteSlider />
          <ContactUs />
        </div>
      )}
    </>
  )
}

export default Index
