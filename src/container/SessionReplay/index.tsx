/* eslint-disable tailwindcss/classnames-order */

import { useState } from "react"
import { useRouter } from "next/router"
import { getData } from "@/services/apis"
import { SessionReplayApiResponse } from "@/services/types/platform/session_replay"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import Header from "@/components/Header"
import PagesHeader from "@/components/PagesHeader"
import SingleVideo from "@/components/SingleVideo"

import SessionReplayItems from "./SessionReplayItems"
import Loading from "@/components/Loading"
import { setLocaleText } from "@/functions/setLocaleText"

const Index = () => {
  const [data, setData] = useState<SessionReplayApiResponse["session_replay"]>()
  const dataQuery = useQuery<SessionReplayApiResponse>(
    ["session_replay"],
    getData,
    {
      onSuccess(data) {
        setData(data.session_replay)
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
          <SingleVideo />
          <SessionReplayItems 
          locale={locale as string}
          section4={data.section4}
          section5={data.section5}
          />
          <ContactUs section={data?.section6} />
        </div>
      )}
    </>
  )
}

export default Index
