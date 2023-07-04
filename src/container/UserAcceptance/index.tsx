import { useState } from "react"
import { useRouter } from "next/router"
import { setLocaleText } from "@/functions/setLocaleText"
import { getData } from "@/services/apis"
import { UserAcceptanceApiResponse } from "@/services/types/useCase/user_acceptance_testing"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"
import VideosTabs from "@/components/VideosTabs"

import UserAcceptanceItems from "./UserAcceptanceItems"

const Index = () => {
  const [data, setData] =
    useState<UserAcceptanceApiResponse["user_acceptance_testing"]>()
  const dataQuery = useQuery<UserAcceptanceApiResponse>(
    ["user_acceptance_testing"],
    getData,
    {
      onSuccess(data) {
        setData(data.user_acceptance_testing)
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
          <VideosTabs type={2} />
          <UserAcceptanceItems
            locale={locale as string}
            section3={data.section3}
            section4={data.section4}
          />
          <QuoteComponent
            job="Founder"
            name="Ralf L."
            text={`Saves time, improves communication. 
        Easy to install and easy to use by clients and colleagues (designer/developer). Communication via comments on the Userback site works well. Meanwhile I have used Userback for several years and am still happy with it.`}
          />
          <ContactUs section={data?.section6} />
        </div>
      )}
    </>
  )
}

export default Index
