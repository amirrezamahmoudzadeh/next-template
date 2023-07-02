import { useState } from "react"
import { getData } from "@/services/apis"
import { ForWebAgenciesApiResponse } from "@/services/types/useCase/userback_for_web_agencies"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import ForAgenciesItems from "./ForAgenciesItems"

const Index = () => {
  const [data, setData] =
    useState<ForWebAgenciesApiResponse["userback_for_web_agencies"]>()
  const dataQuery = useQuery<ForWebAgenciesApiResponse>(
    ["userback_for_web_agencies"],
    getData,
    {
      onSuccess(data) {
        setData(data.userback_for_web_agencies)
      },
    }
  )
  return (
    <>
      {!data && <Loading />}
      {data && (
        <div className="container">
          <PagesHeader
            buttonText="Start your free trial and manage client feedback with ease"
            h1="Userback for Web Agencies"
            h2="Streamline the client feedback and approval process"
            text="Give clients the power to show you exactly what they mean with annotated  video feedback and screenshots"
          />
          <ForAgenciesItems />
          <QuoteComponent
            job="Founder"
            name="Shane B."
            text={`I've been a Userback customer for several years and it's by far the best tool out there for acquiring visual feedback on our clients websites. And as I'm always testing new tools to compare against those I've been using, I've tried them all, and Userback is by far, the best.`}
          />
          <ContactUs section={data?.section7} />
        </div>
      )}
    </>
  )
}

export default Index
