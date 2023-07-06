/* eslint-disable tailwindcss/classnames-order */

import { useState } from "react"
import { useRouter } from "next/router"
import BlogCard from "@/container/Blog/BlogCard"
import { BlogData } from "@/container/Blog/BlogData"
import { setLocaleText } from "@/functions/setLocaleText"
import { getData } from "@/services/apis"
import { InAppFeedbackApiResponse } from "@/services/types/platform/in_app_feedback"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import Header from "@/components/Header"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"
import VideosTabs from "@/components/VideosTabs"

import InAppFeedbackItems from "./InAppFeedbackItems"

const Index = () => {
  const [data, setData] =
    useState<InAppFeedbackApiResponse["in_app_feedback"]>()
  const dataQuery = useQuery<InAppFeedbackApiResponse>(
    ["in_app_feedback"],
    getData,
    {
      onSuccess(data) {
        setData(data.in_app_feedback)
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
          <VideosTabs
            type={1}
            locale={locale as string}
            section={[data.section3_tab1, data.section3_tab2]}
          />
          <QuoteComponent locale={locale as string} section={data.section4} />
          <InAppFeedbackItems
            locale={locale as string}
            section6={data.section6}
            section5={data.section5}
          />
          <div className="flex flex-wrap px-[12%] justify-between gap-y-8">
            {BlogData.slice(0, 3).map((blog) => {
              return (
                <BlogCard
                  image={blog.image}
                  keyWords={blog.keyWords}
                  link={blog.link}
                  text={blog.text}
                  title={blog.title}
                  key={blog.title}
                />
              )
            })}
          </div>
          <ContactUs section={data?.section8} />
        </div>
      )}
    </>
  )
}

export default Index
