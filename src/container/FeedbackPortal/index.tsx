import { setLocaleText } from "@/functions/setLocaleText"
import { getData } from "@/services/apis"
import { FeedbackPortalApiResponse } from "@/services/types/platform/feedback_portal"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useState } from "react"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"

import FeedbackPortalItems from "./FeedbackPortalItems"

const Index = () => {
  const [data, setData] =
    useState<FeedbackPortalApiResponse["feedback_portal"]>()
  const dataQuery = useQuery<FeedbackPortalApiResponse>(
    ["feedback_portal"],
    getData,
    {
      onSuccess(data) {
        setData(data.feedback_portal)
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
          <FeedbackPortalItems
            locale={locale as string}
            section2={data.section2}
            section3={data.section3}
            section4={data.section4}
          />
          <ContactUs section={data?.section5} />
        </div>
      )}
    </>
  )
}

export default Index
