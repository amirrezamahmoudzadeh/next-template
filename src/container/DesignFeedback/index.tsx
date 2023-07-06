import { useState } from "react"
import { useRouter } from "next/router"
import { setLocaleText } from "@/functions/setLocaleText"
import { getData } from "@/services/apis"
import { DesignFeedbackToolApiRespone } from "@/services/types/useCase/design_feedback_tool"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import DesignFeedbackItems from "./DesignFeedbackItems"

const Index = () => {
  const [data, setData] =
    useState<DesignFeedbackToolApiRespone["design_feedback_tool"]>()
  const dataQuery = useQuery<DesignFeedbackToolApiRespone>(
    ["design_feedback_tool"],
    getData,
    {
      onSuccess(data) {
        setData(data.design_feedback_tool)
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
          <DesignFeedbackItems
            locale={locale as string}
            section2={data.section2}
            section3={data.section3}
            section4={data.section4}
            section5={data.section5}
          />
          <QuoteComponent
            locale={locale as string}
            section={{
              text1_en: data.section6.text1_en,
              text1_fa: data.section6.text1_fa,
              text2_en:data.section6.title1_en,
              text2_fa:data.section6.title1_fa,
            }}
          />
          <ContactUs section={data?.section7} />
        </div>
      )}
    </>
  )
}

export default Index
