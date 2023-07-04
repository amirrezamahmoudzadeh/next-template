import { useState } from "react"
import { useRouter } from "next/router"
import { setLocaleText } from "@/functions/setLocaleText"
import { getData } from "@/services/apis"
import { ForDevelopersApiResponse } from "@/services/types/useCase/userback_for_developers"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"

import ForDevelopersItems from "./ForDevelopersItems"

const Index = () => {
  const [data, setData] =
    useState<ForDevelopersApiResponse["userback_for_developers"]>()
  const dataQuery = useQuery<ForDevelopersApiResponse>(
    ["userback_for_developers"],
    getData,
    {
      onSuccess(data) {
        setData(data.userback_for_developers)
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
          <ForDevelopersItems
            locale={locale as string}
            section2={data.section2}
            section3={data.section3}
            section4={data.section4}
            section5={data.section5}
            section6={data.section6}
          />
          <ContactUs section={data?.section7} />
        </div>
      )}
    </>
  )
}

export default Index
