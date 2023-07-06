/* eslint-disable tailwindcss/classnames-order */
import React from "react"

import { useLocaleText } from "@/hooks/useLocaleText"
import FooterCol from "@/components/footer/FooterCol"
import FooterLinksWrapper from "@/components/footer/FooterLinksWrapper"

const Footer = () => {
  return (
    <div className="text-white bg-mainBlue">
      <div className="container pt-12">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-5">
          <FooterCol>
            <div className="w-36">
              <img src="/images/UB-Logo.svg" alt="" />
            </div>
            <div className="w-36">
              <img src="/images/G2-svg.svg" alt="" />
            </div>
            <div className="w-36">
              <img src="/images/Capterra-svg.svg" alt="" />
            </div>
          </FooterCol>
          <FooterCol>
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
            />
            <FooterLinksWrapper
              header={useLocaleText("USERBACK برای", "USERBACK FOR")}
              links={[
                {
                  title: useLocaleText("مدیران محصول", "For Product Managers"),
                  link: "/userback-for-product-managers",
                },
                {
                  title: useLocaleText("توسعه دهندگان", "For Developers"),
                  link: "/userback-for-developers",
                },
                {
                  link: "/userback-for-web-agencies",
                  title: useLocaleText("آژانس های وب", "For Web Agencies"),
                },
              ]}
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
            />
          </FooterCol>
          <FooterCol>
            <FooterLinksWrapper
              header={useLocaleText("مرکز دمو", "DEMO CENTER")}
              links={[
                {
                  link: "/demo",
                  title: useLocaleText("نسخه ی نمایشی عملی", "Hands-on Demo"),
                },
              ]}
            />
            <FooterLinksWrapper
              header={useLocaleText("پلتفرم", "PLATFORM")}
              links={[
                {
                  link: "/in-app-feedback",
                  title: useLocaleText(
                    "بازخورد درون برنامه",
                    "In App Feedback"
                  ),
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
            />
            <FooterLinksWrapper
              header={useLocaleText("چرخه بازخورد", "FEEDBACK LIFECYCLE")}
              links={[
                {
                  link: "/capture-collect",
                  title: useLocaleText("ضبط و جمع آوری", "Capture & Collect"),
                },
                {
                  link: "/assess-prioritize",
                  title: useLocaleText(
                    "ارزیابی و اولویت بندی",
                    "Assess & Prioritize"
                  ),
                },
                {
                  link: "/assign-action",
                  title: useLocaleText("تعیین و اقدام", "Assign & Action"),
                },
                {
                  link: "/follow-up-close",
                  title: useLocaleText("پیگیری و بستن", "Follow up & Close"),
                },
              ]}
            />
          </FooterCol>
          <FooterCol>
            <FooterLinksWrapper
              header="RESOURCES"
              links={[
                { link: "/blog", title: useLocaleText("وبلاگ", "Blog") },
                {
                  link: "/integrations",
                  title: useLocaleText("ادغام ها", "Integrations"),
                },
                { link: "", title: useLocaleText("مستندات", "Documentation") },
                {
                  link: "",
                  title: useLocaleText("مقالات پشتیبانی", "Support Articles"),
                },
                { link: "", title: useLocaleText("مرجع API", "API Refrence") },
                {
                  link: "",
                  title: useLocaleText("افزونه مرورگر", "Browser Extension"),
                },
              ]}
            />
            <FooterLinksWrapper
              header={useLocaleText("کاربری", "Userversity")}
              links={[
                { link: "", title: useLocaleText("مرکز محتوا", "Content Hub") },
              ]}
            />
          </FooterCol>
          <FooterCol>
            <FooterLinksWrapper
              header={useLocaleText("شرکت", "COMPANY")}
              links={[
                {
                  link: "/about",
                  title: useLocaleText("درباره ما", "About Us"),
                },
                { link: "", title: useLocaleText("نقشه راه", "Roadmap") },
                {
                  link: "/terms",
                  title: useLocaleText(
                    "قوانین و مقررات",
                    "Terms and Conditions"
                  ),
                },
                {
                  link: "/privacy",
                  title: useLocaleText("حریم خصوصی", "Privacy Policy"),
                },
                {
                  link: "/security",
                  title: useLocaleText("مروری بر امنیت", "Security Overview"),
                },
                {
                  link: "/gdpr-commitment",
                  title: useLocaleText("تعهد GDPR", "GDPR Commitment"),
                },
              ]}
            />
            <FooterLinksWrapper
              header={useLocaleText("مقایسه", "COMPARE")}
              links={[
                {
                  link: "/marker-alternative",
                  title: useLocaleText(
                    "Userback و Marker.io",
                    "Userback vs Marker.io"
                  ),
                },
                {
                  link: "/usersnap-alternative",
                  title: useLocaleText(
                    "Userback و Usersnap",
                    "Userback vs Usersnap"
                  ),
                },
                {
                  link: "/bugherd-alternative",
                  title: useLocaleText(
                    "Userback و Bugherd",
                    "Userback vs Bugherd"
                  ),
                },
              ]}
            />
          </FooterCol>
        </div>
        <div className="flex items-center justify-center py-10">
          <h6>{useLocaleText("کپی رایت ۱۴۰۲.کلیه حقوق این سایت متعلق به شرکت Userback است.","Copyright © 2023 Userback. All Rights Reserved.")}</h6>
        </div>
      </div>
    </div>
  )
}

export default Footer
