/* eslint-disable tailwindcss/classnames-order */

import { useState } from "react"
import { useRouter } from "next/router"
import { setLocaleText } from "@/functions/setLocaleText"
import { getData } from "@/services/apis"
import { HomeApiResponse } from "@/services/types/useCase/home"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import QuoteComponent from "@/components/QuoteComponent"
import ShowCase from "@/components/ShowCase"
import TitleAndButton from "@/components/TitleAndButton"

import HomeItems from "./HomeItems"
import HomeLanding from "./HomeLanding"

const Index = () => {
  const [data, setData] = useState<HomeApiResponse["home"]>()
  const dataQuery = useQuery<HomeApiResponse>(["home"], getData, {
    onSuccess(data) {
      setData(data.home)
    },
  })

  const { locale } = useRouter()

  return (
    <>
      {!data && <Loading />}
      {data && (
        <>
          <HomeLanding data={data.section1} locale={locale as string} />
          <div className="container">
            <ShowCase locale={locale as string} section={data.section2} />
            <HomeItems 
            locale={locale as string}
            section3={data.section3}
            section4={data.section4}
            section5={data.section5}
            section6={data.section6}
             />
            <QuoteComponent
              locale={locale as string}
              section={data.section7}
            />
            <TitleAndButton
              buttonText={setLocaleText(
                data.section7.button1_fa,
                data.section7.button1_en,
                locale as string
              )}
              className="mb-10"
              text={setLocaleText(
                data.section7.text3_fa,
                data.section7.text3_en,
                locale as string
              )}
              desktopSize={35}
              maxWidth={670}
              mobileSize={24}
            />
            <ContactUs section={data?.section8} />
          </div>
        </>
      )}
    </>
  )
}

export default Index
