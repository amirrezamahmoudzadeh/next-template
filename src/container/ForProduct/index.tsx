import { setLocaleText } from "@/functions/setLocaleText"
import { getData } from "@/services/apis"
import { ForProductManagersApiResponse } from "@/services/types/useCase/userback_for_product_managers"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useState } from "react"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import ForProductItems from "./ForProductItems"

const Index = () => {
  const [data, setData] =
    useState<ForProductManagersApiResponse["userback_for_product_managers"]>()
  const dataQuery = useQuery<ForProductManagersApiResponse>(
    ["userback_for_product_managers"],
    getData,
    {
      onSuccess(data) {
        setData(data.userback_for_product_managers)
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
          <ForProductItems
            locale={locale as string}
            section2={data.section2}
            section3={data.section3}
            section4={data.section4}
            section5={data.section5}
            section6={data.section6}
            section7={data.section7}
            section8={data.section8}
          />
          <QuoteComponent
           locale={locale as string}
           section={data.section8}
          />
          <ContactUs section={data?.section9} />
        </div>
      )}
    </>
  )
}

export default Index
