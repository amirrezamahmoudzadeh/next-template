/* eslint-disable tailwindcss/classnames-order */

import React, { useState } from "react"
import Link from "next/link"

import { useLocaleText } from "@/hooks/useLocaleText"
import FooterLinksWrapper from "@/components/footer/FooterLinksWrapper"
import FeedbackLinkWrapper from "@/components/topnav/FeedbackLinkWrapper"

const PlatformMenu: React.FC<{ setMenu: (value: boolean) => void }> = ({
  setMenu,
}) => {
  const [isHover, setisHover] = useState(false)
  return (
    <div
      className="absolute inset-x-8 top-full bg-white !py-0 flex justify-between pl-8 rounded-lg shadow-lg -translate-y-2 overflow-hidden h-[330px] rtl:pl-0 rtl:pr-8"
      onMouseEnter={() => setMenu(true)}
      onMouseLeave={() => setMenu(false)}
    >
      <div className="flex justify-between flex-1 py-6 children:flex-1">
        <FooterLinksWrapper
          header={useLocaleText("مرکز دمو", "DEMO CENTER")}
          links={[
            {
              link: "/demo",
              title: useLocaleText("نسخه ی نمایشی عملی", "Hands-on Demo"),
            },
          ]}
          isInTopNav
        />
        <FooterLinksWrapper
          header={useLocaleText("پلتفرم","PLATFORM")}
          links={[
            {
              link: "/in-app-feedback",
              title: useLocaleText("بازخورد درون برنامه", "In App Feedback"),
            },
            {
              link: "/screen-annotation",
              title: useLocaleText(
                "حاشیه نویسی روی صفحه نمایش",
                "Screen Annotation"
              ),
            },
            {
              link: "/video-recording",
              title: useLocaleText("ضبط ویدئو", "Video Recording"),
            },
            {
              link: "/session-replay",
              title: useLocaleText("پخش مجدد جلسه", "Session Replay"),
            },
            {
              link: "/user-insights",
              title: useLocaleText("بینش کاربران", "User Insights"),
            },
            {
              link: "/feedback-portal",
              title: useLocaleText("پورتال بازخورد", "Feedback Portal"),
            },
            {
              link: "/integrations",
              title: useLocaleText("ادغام ها", "Integrations"),
            },
          ]}
          isInTopNav
        />
        <FeedbackLinkWrapper
          header={useLocaleText("چرخه بازخورد", "FEEDBACK LIFECYCLE")}
          links={[
            {
              link: "/capture-collect",
              title: useLocaleText("ضبط و جمع آوری", "Capture & Collect"),
              color: "#6042ec",
              iconUrl: "/icons/Collect-icon.webp",
            },
            {
              link: "/assess-prioritize",
              title: useLocaleText(
                "ارزیابی و اولویت بندی",
                "Assess & Prioritize"
              ),
              color: "#ff4060",
              iconUrl: "/icons/Assess-icon.webp",
            },
            {
              link: "/assign-action",
              title: useLocaleText("تعیین و اقدام", "Assign & Action"),
              color: "#ff8040",
              iconUrl: "/icons/Assign-icon.webp",
            },
            {
              link: "/follow-up-close",
              title: useLocaleText("پیگیری و بستن", "Follow up & Close"),
              color: "#ffc040",
              iconUrl: "/icons/Close-icon.webp",
            },
          ]}
        />
      </div>
      <Link
        href={"/"}
        className="relative flex w-1/4 text-white bg-no-repeat bg-cover"
        onMouseEnter={() => setisHover(true)}
        onMouseLeave={() => setisHover(false)}
        style={{
          backgroundImage: "url(/images/platformImg.webp)",
        }}
      >
        <div className="z-10 flex flex-col flex-1 p-8 hover:last:opacity-50">
          <h1 className="text-[33px]">
            {useLocaleText("نسخه ی نمایشی", "Demo")}
          </h1>
          <p className="leading-5 text-[12px]">
            {useLocaleText(
              "با نسخه نمایشی تعاملی ما با Userback آشنا شوید و یاد بگیرید که چگونه هر چهار مرحله چرخه عمر بازخورد را مدیریت کنید. از زمان بسته شدن مجموعه، ما آن را آسان می کنیم.",
              "Get hands-on with Userback with our interactive demo and learn how to manage all four phases of the feedback lifecycle. From collection to closure, we make it easy."
            )}
          </p>
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHover ? "opacity-70" : "opacity-100"
          }`}
          style={{
            backgroundImage: "linear-gradient(360deg,transparent,#6042ec)",
          }}
        ></div>
      </Link>
    </div>
  )
}

export default PlatformMenu
