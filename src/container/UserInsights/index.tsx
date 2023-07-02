import { useState } from "react"
import { getData } from "@/services/apis"
import { UserInsightsApiResponse } from "@/services/types/platform/user_insights"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import UserInsightsItems from "./UserInsightsItems"

const Index = () => {
  const [data, setData] = useState<UserInsightsApiResponse["user_insights"]>()
  const dataQuery = useQuery<UserInsightsApiResponse>(
    ["user_insights"],
    getData,
    {
      onSuccess(data) {
        setData(data.user_insights)
      },
    }
  )
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start your free trial - No credit card required"
        h1="User Insights"
        h2="Make better product decisions based on richer user insights"
        text="Collect more feedback and manage it more effectively to get the information and data you need to drive product success."
      />
      <UserInsightsItems />
      <QuoteComponent
        job="Founder"
        name="Dashbite T."
        text="Userback is the perfect way to collect and control our user feedback for our website projects and keep it in one location. it also allows you to provide customer support at a high-end level."
      />
      <ContactUs section={data?.section7} />
    </div>
  )
}

export default Index
