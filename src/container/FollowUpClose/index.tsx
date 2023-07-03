/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */

import { useState } from "react"
import { useRouter } from "next/router"
import { getData } from "@/services/apis"
import { FollowUpCloseApiResponse } from "@/services/types/platform/follow_up_close"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import Header from "@/components/Header"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import FollowUpCloseItems from "./FollowUpCloseItems"
import { setLocaleText } from "@/functions/setLocaleText"

const Index = () => {
  const [data, setData] =
    useState<FollowUpCloseApiResponse["follow_up_and_close"]>()
  const dataQuery = useQuery<FollowUpCloseApiResponse>(
    ["follow_up_and_close"],
    getData,
    {
      onSuccess(data) {
        setData(data.follow_up_and_close)
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
          <div className="flex flex-col items-center mx-auto text-center max-w-[700px] gap-4 pb-32">
            <Header
              desktopSize={35}
              maxWidth={700}
              mobileSize={24}
              text={setLocaleText(
                data.section2.title1_fa,
                data.section2.title1_en,
                locale as string
              )}
            />
            <p>
             {setLocaleText(
                data.section2.text1_fa,
                data.section2.text1_en,
                locale as string
              )}
            </p>
          </div>
          <div className="md:px-[10%] pb-32">
            <img src={data.section3.image1} alt="a" />
          </div>
          <FollowUpCloseItems
           locale={locale as string}
            section4={data.section4}
            section5={data.section5}
           />
          <QuoteComponent
            job="Founder"
            name="Juan Manuel G."
            text="EGA Futura Software is in love with Userback. It's easy to use, and very intuitive for our support representatives and our end users."
            color="#ffc040"
          />
          <ContactUs section={data?.section7} />
        </div>
      )}
    </>
  )
}

export default Index
