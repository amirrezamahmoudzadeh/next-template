import { useState } from "react"
import { useRouter } from "next/router"
import { setLocaleText } from "@/functions/setLocaleText"
import { getData } from "@/services/apis"
import { BugTrackingApiResponse } from "@/services/types/useCase/bug-tracking"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import QuoteSlider from "@/components/QuoteSlider"

import BugTrackingItems from "./BugTrackingItems"

const Index = () => {
  const [data, setData] = useState<BugTrackingApiResponse["bug_tracking"]>()
  const dataQuery = useQuery<BugTrackingApiResponse>(
    ["bug_tracking"],
    getData,
    {
      onSuccess(data) {
        setData(data.bug_tracking)
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
          <BugTrackingItems
            section2={data.section2}
            section3={data.section3}
            section4={data.section4}
            section5={data.section5}
            section6={data.section6}
            locale={locale as string}
          />
          <QuoteSlider
            texts={[
              setLocaleText(
                data.section7.text1_fa,
                data.section7.text1_en,
                locale as string
              ),
              setLocaleText(
                data.section7.text2_fa,
                data.section7.text2_en,
                locale as string
              ),
              setLocaleText(
                data.section7.text3_fa,
                data.section7.text3_en,
                locale as string
              ),
              setLocaleText(
                data.section7.text4_fa,
                data.section7.text4_en,
                locale as string
              ),
              setLocaleText(
                data.section7.text5_fa,
                data.section7.text5_en,
                locale as string
              ),
              setLocaleText(
                data.section7.text6_fa,
                data.section7.text6_en,
                locale as string
              ),
            ]}
            titles={[
              setLocaleText(
                data.section7.title1_fa,
                data.section7.title1_en,
                locale as string
              ),
              setLocaleText(
                data.section7.title2_fa,
                data.section7.title2_en,
                locale as string
              ),
              setLocaleText(
                data.section7.title3_fa,
                data.section7.title3_en,
                locale as string
              ),
              setLocaleText(
                data.section7.title4_fa,
                data.section7.title4_en,
                locale as string
              ),
              setLocaleText(
                data.section7.title5_fa,
                data.section7.title5_en,
                locale as string
              ),
              setLocaleText(
                data.section7.title6_fa,
                data.section7.title6_en,
                locale as string
              ),
            ]}
          />
          <ContactUs section={data?.section8} />
        </div>
      )}
    </>
  )
}

export default Index
