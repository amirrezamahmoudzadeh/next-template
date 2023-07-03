/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */

import { useState } from "react"
import { useRouter } from "next/router"
import { setLocaleText } from "@/functions/setLocaleText"
import { getData } from "@/services/apis"
import { AssessPrioritizeApiResponse } from "@/services/types/platform/assess_prioritize"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import Header from "@/components/Header"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import AssessPrioritizeItems from "./AssessPrioritizeItems"

const Index = () => {
  const [data, setData] =
    useState<AssessPrioritizeApiResponse["assess_and_prioritize"]>()
  const dataQuery = useQuery<AssessPrioritizeApiResponse>(
    ["assess_and_prioritize"],
    getData,
    {
      onSuccess(data) {
        setData(data.assess_and_prioritize)
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
          <AssessPrioritizeItems
            locale={locale as string}
            section4={data.section4}
            section5={data.section5}
            section6={data.section6}
          />
          <QuoteComponent
            job="Product Manager"
            name="JP S"
            text="I recently started a new position and needed to re-invigorate user feedback. After some research, I selected Userback, because it integrated well with everything I needed."
            color="#ff4060"
          />
          <ContactUs section={data?.section8} />
        </div>
      )}
    </>
  )
}

export default Index
