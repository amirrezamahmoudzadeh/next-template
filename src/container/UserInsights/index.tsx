import { setLocaleText } from "@/functions/setLocaleText"
import { getData } from "@/services/apis"
import { UserInsightsApiResponse } from "@/services/types/platform/user_insights"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useState } from "react"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import UserInsightsItems from "./UserInsightsItems"

const Index = () => {
  const [data, setData] = useState<UserInsightsApiResponse["user_insights"]>()
  const dataQuery = useQuery<UserInsightsApiResponse>(
    ["user_insights"],
    getData,
    {
      onSuccess(data) {
        setData(data.user_insights)
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
          <UserInsightsItems
            locale={locale as string}
            section2={data.section2}
            section3={data.section3}
            section4={data.section4}
          />
          <QuoteComponent
            job="Founder"
            name="Dashbite T."
            text="Userback is the perfect way to collect and control our user feedback for our website projects and keep it in one location. it also allows you to provide customer support at a high-end level."
          />
          <ContactUs section={data?.section6} />
        </div>
      )}
    </>
  )
}

export default Index
