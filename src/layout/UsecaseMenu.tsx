/* eslint-disable tailwindcss/classnames-order */

import React, { use, useState } from "react"
import Link from "next/link"

import { useLocaleText } from "@/hooks/useLocaleText"
import FooterLinksWrapper from "@/components/footer/FooterLinksWrapper"

const UsecaseMenu: React.FC<{ setMenu: (value: boolean) => void }> = ({
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
          header={useLocaleText("موارد استفاده", "USE CASE")}
          links={[
            {
              title: useLocaleText("ردیابی اشکال", "Bug Tracking"),
              link: "/bug-tracking",
            },
            {
              title: useLocaleText(
                "تست پذیرش کاربر",
                "User Acceptance Testing"
              ),
              link: "/user-acceptance-testing",
            },
            {
              title: useLocaleText(
                "ابزار بازخورد وب سایت",
                "Website Feedback Tool"
              ),
              link: "/website-feedback-tool",
            },
            {
              title: useLocaleText(
                "ابزار بازخورد طراحی",
                "Design Feedback Tool"
              ),
              link: "/design-feedback-tool",
            },

            {
              title: useLocaleText(
                "درخواست ویژگی های نرم افزار",
                "Software Feature Requests"
              ),
              link: "/software-feature-requests",
            },
            {
              title: useLocaleText("نقشه راه محصول", "Product Roadmapping"),
              link: "/product-roadmapping",
            },
          ]}
          isInTopNav
        />
        <FooterLinksWrapper
          header={useLocaleText("نقش کاربر", "User Role")}
          links={[
            {
              title: useLocaleText(
                "Userback برای مدیران محصول",
                "Userback For Product Managers"
              ),
              link: "/userback-for-product-managers",
            },
            {
              title: useLocaleText(
                "Userback برای توسعه دهندگان",
                "Userback For Developers"
              ),
              link: "/userback-for-developers",
            },
            {
              link: "/userback-for-web-agencies",
              title: useLocaleText(
                "Userback برای آژانس های وب",
                "Userback For Web Agencies"
              ),
            },
          ]}
          isInTopNav
        />
        <FooterLinksWrapper
          header={useLocaleText("من به دنبال", "I’M LOOKING TO")}
          links={[
            {
              link: "/user-feedback-to-build",
              title: useLocaleText(
                "ساخت اپلیکیشن و وب سایت",
                "Build Apps & Websites"
              ),
            },
            {
              link: "/user-feedback-to-fix",
              title: useLocaleText(
                "رفع برنامه ها و وب سایت ها",
                "Fix Apps & Websites"
              ),
            },
            {
              link: "/user-feedback-to-enhance",
              title: useLocaleText(
                "بهبود برنامه ها و وب سایت ها",
                "Enhance Apps & Websites"
              ),
            },
          ]}
          isInTopNav
        />
      </div>
      <Link
        href={"/"}
        className="relative flex w-1/4 text-white bg-no-repeat bg-cover"
        onMouseEnter={() => setisHover(true)}
        onMouseLeave={() => setisHover(false)}
        style={{
          backgroundImage: "url(/images/usecaseimg.webp)",
        }}
      >
        <div className="z-10 flex flex-col flex-1 p-8">
          <h1 className="text-[33px] ">
            {useLocaleText("بررسی های G2", "G2 Reviews")}
          </h1>
          <p className="leading-5 text-[12px]">
            {useLocaleText(
              "شما با Userback شرکت خوبی دارید. بررسی کنید که دیگران چه می گویند و با اطمینان خرید کنید.",
              "You’re in good company with Userback. Check out what others are saying and buy with confidence."
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

export default UsecaseMenu
