import { useState } from "react"
import { useRouter } from "next/router"
import { getData } from "@/services/apis"
import { BuildAppsAndWebsitesApiResponse } from "@/services/types/useCase/build_apps_and_websites"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import BuildItems from "./BuildItems"

const Index = () => {
  const [data, setData] =
    useState<BuildAppsAndWebsitesApiResponse["build_apps_and_websites"]>()
  const dataQuery = useQuery<BuildAppsAndWebsitesApiResponse>(
    ["build_apps_and_websites"],
    getData,
    {
      onSuccess(data) {
        setData(data.build_apps_and_websites)
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
            buttonText="Start your free trial and build better"
            h1="User feedback for building web apps & websites"
            h2="Know what users need so you can build what users love"
            text="Understand what customers really need with with annotated visual and
        video-based feature requests and bug reports"
          />
          <BuildItems
            locale={locale as string}
            section2={data.section2}
            section3={data.section3}
            section4={data.section4}
            section5={data.section5}
          />

          <QuoteComponent
            job="Director, Big Budda Boom"
            name="Andy Pudmenzky"
            text={`Allowing clients to click on the designs and show us exactly what they're referring to has completely changed the way we gather client feedback. We've been so impressed with Userback. I'm not joking when I say it's saved us hours of time!`}
          />
          <ContactUs section={data?.section7} />
        </div>
      )}
    </>
  )
}

export default Index
