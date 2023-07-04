/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */

import { setLocaleText } from "@/functions/setLocaleText"
import { getData } from "@/services/apis"
import { BlogapiResponse } from "@/services/types/resources/blog"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useState } from "react"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"

import BlogCard from "./BlogCard"
import { BlogData } from "./BlogData"

const Index = () => {
  const [data, setData] = useState<BlogapiResponse["blog"]>()
  const dataQuery = useQuery<BlogapiResponse>(["blog"], getData, {
    onSuccess(data) {
      setData(data.blog)
    },
  })
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
          <div className="flex flex-wrap px-[12%] justify-between gap-y-8">
            {BlogData.map((blog) => {
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
          <ContactUs section={data?.section3} />
        </div>
      )}
    </>
  )
}

export default Index
