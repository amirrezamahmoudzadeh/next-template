/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */

import { getData } from "@/services/apis"
import { CaptureCollectaptureCollectApiResponse } from "@/services/types/platform/capture_collect"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useState } from "react"

import ContactUs from "@/components/ContactUs"
import Header from "@/components/Header"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import CaptureCollectItems from "./CaptureCollectItems"
import { setLocaleText } from "@/functions/setLocaleText"

const Index = () => {
  const [data, setData] =
    useState<CaptureCollectaptureCollectApiResponse["capture_and_collect"]>()
  const dataQuery = useQuery<CaptureCollectaptureCollectApiResponse>(
    ["capture_and_collect"],
    getData,
    {
      onSuccess(data) {
        setData(data.capture_and_collect)
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
          <CaptureCollectItems
            locale={locale as string}
            section4={data.section4}
            section5={data.section5}
            section6={data.section6}
            section7={data.section7}
           />
          <QuoteComponent
            job=""
            name="G2 Review"
            text="The fact that I don't have to schedule multiple review meetings, go back and fort emails of emails and text just make sure I understand what the feed is before investing hours on changes that could be hit or miss."
          />
          <ContactUs section={data?.section9} />
        </div>
      )}
    </>
  )
}

export default Index
