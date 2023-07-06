import { useState } from "react"
import { useRouter } from "next/router"
import { setLocaleText } from "@/functions/setLocaleText"
import { getData } from "@/services/apis"
import { HandsOnDemoApiResponse } from "@/services/types/platform/hands_on_demo"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"
import ShowCase from "@/components/ShowCase"
import TitleAndButton from "@/components/TitleAndButton"

const Index = () => {
  const [data, setData] = useState<HandsOnDemoApiResponse["hands_on_demo"]>()
  const dataQuery = useQuery<HandsOnDemoApiResponse>(
    ["hands_on_demo"],
    getData,
    {
      onSuccess(data) {
        setData(data.hands_on_demo)
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
            buttonText=""
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
          <ShowCase locale={locale as string} section={data.section2} />
          <div className="mt-32 h-[50vh] w-full bg-indigo-100"></div>
          <QuoteComponent locale={locale as string} section={data.section3} />
          <TitleAndButton
            buttonText={setLocaleText(
              data.section4.button1_fa,
              data.section4.button1_en,
              locale as string
            )}
            desktopSize={35}
            maxWidth={765}
            mobileSize={24.5}
            text={setLocaleText(
              data.section4.title1_fa,
              data.section4.title1_en,
              locale as string
            )}
          />
          <ContactUs section={data?.section5} />
        </div>
      )}
    </>
  )
}

export default Index
