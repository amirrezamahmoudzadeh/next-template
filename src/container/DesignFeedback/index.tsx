import { useState } from "react"
import { getData } from "@/services/apis"
import { DesignFeedbackToolApiRespone } from "@/services/types/useCase/design_feedback_tool"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import DesignFeedbackItems from "./DesignFeedbackItems"

const Index = () => {
  const [data, setData] =
    useState<DesignFeedbackToolApiRespone["design_feedback_tool"]>()
  const dataQuery = useQuery<DesignFeedbackToolApiRespone>(
    ["design_feedback_tool"],
    getData,
    {
      onSuccess(data) {
        setData(data.design_feedback_tool)
      },
    }
  )
  return (
    <div className="container">
      <PagesHeader
        buttonText="Try Userback free for 14 days"
        h1="Design Feedback Tools"
        h2="Get feedback on your designs in an instant"
        text="Collect and incorporate real-time feedback from your clients."
      />
      <DesignFeedbackItems />
      <QuoteComponent
        job="CMO, Vision6"
        name="Jess Pantalleresco"
        text="Userback is so amazing! We used to rely on spreadsheets and emails for managing internal feedback on our website improvements. With Userback though it is so much easier. It has saved us hours of work with our website re-design project!"
      />
      <ContactUs section={data?.section7} />
    </div>
  )
}

export default Index
