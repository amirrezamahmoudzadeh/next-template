import { setLocaleText } from "@/functions/setLocaleText"
import { getData } from "@/services/apis"
import { ScreenAnnotationApiResponse } from "@/services/types/platform/screen_annotation"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useState } from "react"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import VideosTabs from "@/components/VideosTabs"

import ScreenAnnotationItems from "./ScreenAnnotationItems"

const Index = () => {
  const [data, setData] =
    useState<ScreenAnnotationApiResponse["screen_annotation"]>()
  const dataQuery = useQuery<ScreenAnnotationApiResponse>(
    ["screen_annotation"],
    getData,
    {
      onSuccess(data) {
        setData(data.screen_annotation)
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
          <VideosTabs type={1} />
          <ScreenAnnotationItems
            locale={locale as string}
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
