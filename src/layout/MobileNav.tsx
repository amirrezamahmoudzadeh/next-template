/* eslint-disable tailwindcss/classnames-order */

import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { ExternalLink } from "@/functions/ExternalLinks"
import MobileNavItem from "@/layout/MobileNavItem"
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react"
import { motion } from "framer-motion"

import { useLocaleText } from "@/hooks/useLocaleText"
import CloseButton from "@/components/CloseButton"

interface Props {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const MobileNav: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const router = useRouter()
  const alertText = useLocaleText(
    "این یک لینک خارجی است",
    "This is an external Link"
  )
  return (
    <motion.div
      initial={{ right: -320, zIndex: -1, top: 0 }}
      animate={
        isOpen ? { right: 0, zIndex: 0 } : { right: -320, zIndex: -1, top: 0 }
      }
      transition={{ duration: 0.8, ease: [0.15, 0.2, 0.1, 0] }}
      className={`fixed flex flex-col gap-10 text-white sm:w-[360px] py-14 sm:px-[60px] justify-center w-[78vw] px-[50px] h-full ${
        isOpen ? "right-0" : "right-[78vw] sm:right-[360px]"
      }`}
      style={{ overflowY: "auto" }}
    >
      <CloseButton isOpen={isOpen} onClick={() => setIsOpen(false)} hasDelay />
      <div
        className="p-4 mb-auto rounded"
        style={{ backgroundColor: "rgba(0,0,0,.1)" }}
        onClick={() => ExternalLink(alertText)}
      >
        {useLocaleText("ورود", "Sign In")}
      </div>
      <ul className="flex flex-col flex-1 gap-12 text-2xl sm:text-4xl">
        <Accordion allowToggle>
          <AccordionItem
            borderTop={0}
            borderBottom={0}
            _last={{ borderBottomWidth: "0px" }}
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  _rtl={{ textAlign: "right" }}
                  className="text-2xl sm:text-4xl"
                >
                  {useLocaleText("موارد استفاده", "Use Case")}
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <MobileNavItem
                title={useLocaleText("موارد استفاده", "USE CASE")}
                links={[
                  {
                    title: useLocaleText("ردیابی اشکال", "Bug Tracking"),
                    link: "/bug-tracking",
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
                      "تست پذیرش کاربر",
                      "User Acceptance Testing"
                    ),
                    link: "/user-acceptance-testing",
                  },
                  {
                    title: useLocaleText(
                      "درخواست ویژگی های نرم افزار",
                      "Software Feature Requests"
                    ),
                    link: "/software-feature-requests",
                  },
                  {
                    title: useLocaleText(
                      "نقشه راه محصول",
                      "Product Roadmapping"
                    ),
                    link: "/product-roadmapping",
                  },
                ]}
              />
              <MobileNavItem
                title={useLocaleText("نقش کاربر", "User Role")}
                links={[
                  {
                    title: useLocaleText("مدیران محصول", "Product Managers"),
                    link: "/userback-for-product-managers",
                  },
                  {
                    title: useLocaleText("توسعه دهندگان", "Developers"),
                    link: "/userback-for-developers",
                  },
                  {
                    link: "/userback-for-web-agencies",
                    title: useLocaleText("آژانس های وب", "Web Agencies"),
                  },
                ]}
              />
              <MobileNavItem
                title={useLocaleText("من به دنبال", "I’M LOOKING TO")}
                links={[
                  {
                    link: "/user-feedback-to-fix",
                    title: useLocaleText(
                      "رفع برنامه ها و وب سایت ها",
                      "Fix Apps & Websites"
                    ),
                  },
                  {
                    link: "/user-feedback-to-build",
                    title: useLocaleText(
                      "ساخت اپلیکیشن و وب سایت",
                      "Build Apps & Websites"
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
              <div className="pl-4 mt-4 text-sm">
                <p className="text-base">
                  {useLocaleText("بررسی های G2", "G2 Reviews")}
                </p>
                <p className="text-gray-400">
                  {useLocaleText(
                    "شما با Userback شرکت خوبی دارید. بررسی کنید که دیگران چه می گویند و با اطمینان خرید کنید.",
                    "You’re in good company with Userback. Check out what others are saying and buy with confidence."
                  )}
                </p>
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderTop={0}
            borderBottom={0}
            _last={{ borderBottomWidth: "0px" }}
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  _rtl={{ textAlign: "right" }}
                  className="text-2xl sm:text-4xl"
                >
                  {useLocaleText("پلتفرم", "Platform")}
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <MobileNavItem
                title={useLocaleText("مرکز دمو", "DEMO CENTER")}
                links={[
                  {
                    link: "/demo",
                    title: useLocaleText("نسخه ی نمایشی عملی", "Hands-on Demo"),
                  },
                ]}
              />
              <MobileNavItem
                title={useLocaleText("پلتفرم", "Platform Features")}
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
              <MobileNavItem
                title={useLocaleText("چرخه بازخورد", "FEEDBACK LIFECYCLE")}
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
              <div className="pl-4 mt-4 text-sm">
                <p className="text-base">
                  {" "}
                  {useLocaleText("نسخه ی نمایشی", "Demo")}
                </p>
                <p className="text-gray-400">
                  {useLocaleText(
                    "با نسخه نمایشی تعاملی ما با Userback آشنا شوید و یاد بگیرید که چگونه هر چهار مرحله چرخه عمر بازخورد را مدیریت کنید. از زمان بسته شدن مجموعه، ما آن را آسان می کنیم.",
                    "Get hands-on with Userback with our interactive demo and learn how to manage all four phases of the feedback lifecycle. From collection to closure, we make it easy."
                  )}
                </p>
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderTop={0}
            borderBottom={0}
            _last={{ borderBottomWidth: "0px" }}
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  _rtl={{ textAlign: "right" }}
                  className="text-2xl sm:text-4xl"
                >
                  {useLocaleText("منابع", "Resources")}
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <MobileNavItem
                title={useLocaleText("بیشتر بدانید", "Learn More")}
                links={[
                  {
                    link: "/about",
                    title: useLocaleText("درباره ما", "About Us"),
                  },
                  { link: "/blog", title: useLocaleText("وبلاگ", "Blog") },
                  {
                    link: "",
                    title: useLocaleText("مرکز پشتیبانی", "Help Center"),
                  },
                ]}
              />
              <MobileNavItem
                title={useLocaleText("مستندات", "Documentation")}
                links={[
                  {
                    link: "",
                    title: useLocaleText(
                      "اسناد پلتفرم",
                      "Platform Documentation"
                    ),
                  },
                  {
                    link: "",
                    title: useLocaleText("مرجع API", "API Refrence"),
                  },
                  {
                    link: "",
                    title: useLocaleText("افزونه مرورگر", "Browser Extension"),
                  },
                ]}
              />
              <MobileNavItem
                title={useLocaleText("کاربری Userback", "Userback Userversity")}
                links={[{ link: "", title: useLocaleText("مرکز منابع", "Resource Hub") }]}
              />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderTop={0}
            borderBottom={0}
            _last={{ borderBottomWidth: "0px" }}
            onClick={() => {
              router.push("/pricing")
            }}
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  _rtl={{ textAlign: "right" }}
                  className="text-2xl sm:text-4xl"
                >
                  <Link href={"/pricing"}>
                    {" "}
                    {useLocaleText("تعرفه ها", "Pricing")}
                  </Link>
                </Box>
              </AccordionButton>
            </h2>
          </AccordionItem>
          <AccordionItem
            borderTop={0}
            borderBottom={0}
            _last={{ borderBottomWidth: "0px" }}
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  _rtl={{ textAlign: "right" }}
                  className="text-2xl sm:text-4xl"
                >
                  {useLocaleText("رایگان شروع کنید", "Get Started Free")}
                </Box>
              </AccordionButton>
            </h2>
          </AccordionItem>
        </Accordion>
      </ul>
    </motion.div>
  )
}

export default MobileNav
