import { useState } from "react"
import { getData } from "@/services/apis"
import { FeedbackPortalApiResponse } from "@/services/types/platform/feedback_portal"
import { useQuery } from "@tanstack/react-query"

import { useLocaleText } from "@/hooks/useLocaleText"
import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"

import FeedbackPortalItems from "./FeedbackPortalItems"

const Index = () => {
  const [data, setData] =
    useState<FeedbackPortalApiResponse["feedback_portal"]>()
  const dataQuery = useQuery<FeedbackPortalApiResponse>(
    ["feedback_portal"],
    getData,
    {
      onSuccess(data) {
        setData(data.feedback_portal)
      },
    }
  )
  return (
    <div className="container">
      <PagesHeader
        buttonText={useLocaleText(
          "آزمایش رایگان را شروع کنید و به پورتال بازخورد خود دسترسی پیدا کنید",
          "Start free trial and access your feedback portal"
        )}
        h1={useLocaleText("پورتال بازخورد", "Feedback Portal")}
        h2={useLocaleText(
          "کاربران را در جریان نگه دارید و یک جامعه محصول درگیرتر بسازید",
          "Keep users in the loop and build a more engaged product community"
        )}
        text={useLocaleText(
          "تمام جنبه های بازخورد کاربر را در یک مکان متمرکز کنید، جایی که می توانید افکار خود را به اشتراک بگذارید، ایده ها را تأیید کنید، وظایف را تعیین کنید و پیشرفت را پیگیری کنید.",
          "Centralize all aspects of user feedback in one place where you can share thoughts, validate ideas, assign tasks and track progress."
        )}
      />
      <FeedbackPortalItems />
      <ContactUs section={data?.section7} />
    </div>
  )
}

export default Index
