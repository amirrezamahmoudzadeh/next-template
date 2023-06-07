import { useLocaleText } from "@/hooks/useLocaleText"
import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"

import FeedbackPortalItems from "./FeedbackPortalItems"

const Index = () => {
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
      <ContactUs />
    </div>
  )
}

export default Index
