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
          <HomeLanding data={data.section1} />
          <div className="container">
            <ShowCase locale={locale as string} section={data.section2} />
            <HomeItems />
            <QuoteComponent
              locale={locale as string}
              section={data.section6}
            />
            <TitleAndButton
              buttonText={setLocaleText(
                data.section7.button1_fa,
                data.section7.button1_en,
                locale as string
              )}
              className="mb-10"
              text={setLocaleText(
                data.section7.text1_fa,
                data.section7.text1_en,
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
