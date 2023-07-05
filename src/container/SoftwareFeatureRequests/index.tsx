import { useState } from "react"
import { useRouter } from "next/router"
import { setLocaleText } from "@/functions/setLocaleText"
import { getData } from "@/services/apis"
import { SoftwareFeatureRequestsApiRespone } from "@/services/types/useCase/software_feature_requests"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import QuoteSlider from "@/components/QuoteSlider"

import FeatureReqItems from "./FeatureReqItems"

const Index = () => {
  const [data, setData] =
    useState<SoftwareFeatureRequestsApiRespone["software_feature_requests"]>()
  const dataQuery = useQuery<SoftwareFeatureRequestsApiRespone>(
    ["software_feature_requests"],
    getData,
    {
      onSuccess(data) {
        setData(data.software_feature_requests)
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
          <FeatureReqItems
          locale={locale as string}
          section2={data.section2}
          section3={data.section3}
          section4={data.section4}
          section5={data.section5}
           />
          <QuoteSlider
            texts={[
              setLocaleText(
                data.section6.text1_fa,
                data.section6.text1_en,
                locale as string
              ),
              setLocaleText(
                data.section6.text2_fa,
                data.section6.text2_en,
                locale as string
              ),
              setLocaleText(
                data.section6.text3_fa,
                data.section6.text3_en,
                locale as string
              ),
              setLocaleText(
                data.section6.text4_fa,
                data.section6.text4_en,
                locale as string
              ),
              setLocaleText(
                data.section6.text5_fa,
                data.section6.text5_en,
                locale as string
              ),
              setLocaleText(
                data.section6.text6_fa,
                data.section6.text6_en,
                locale as string
              ),
            ]}
            titles={[
              setLocaleText(
                data.section6.title1_fa,
                data.section6.title1_en,
                locale as string
              ),
              setLocaleText(
                data.section6.title2_fa,
                data.section6.title2_en,
                locale as string
              ),
              setLocaleText(
                data.section6.title3_fa,
                data.section6.title3_en,
                locale as string
              ),
              setLocaleText(
                data.section6.title4_fa,
                data.section6.title4_en,
                locale as string
              ),
              setLocaleText(
                data.section6.title5_fa,
                data.section6.title5_en,
                locale as string
              ),
              setLocaleText(
                data.section6.title6_fa,
                data.section6.title6_en,
                locale as string
              ),
            ]}
          />
          <ContactUs section={data?.section7} />
        </div>
      )}
    </>
  )
}

export default Index
