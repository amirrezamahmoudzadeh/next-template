/* eslint-disable tailwindcss/classnames-order */

import { setLocaleText } from "@/functions/setLocaleText"
import { AboutUsApiResponse } from "@/services/types/resources/about_us"
import { FC } from "react"

import Header from "@/components/Header"
import ShowCase from "@/components/ShowCase"

import AboutItem from "./AboutItems"
import OurValues from "./OurValues"

interface Props {
  section2: AboutUsApiResponse["about_us"]["section2"]
  section3: AboutUsApiResponse["about_us"]["section3"]
  section4: AboutUsApiResponse["about_us"]["section4"]
  section5: AboutUsApiResponse["about_us"]["section5"]
  locale: string
}

const AboutUsItems: FC<Props> = ({
  locale,
  section2,
  section3,
  section4,
  section5,
}) => {
  return (
    <div className="flex flex-col gap-32">
      <div
        style={{ background: `url("/images/Our-Story-1.webp")` }}
        className="flex items-center h-[700px] bg-no-repeat bg-cover md:pl-[22%]"
      >
        <div className="flex-[2] flex flex-col gap-8 pt-[200px]">
          <h1 className="text-[30px] font-medium">
            {setLocaleText(
              section2.title1_fa,
              section2.title1_en,
              locale as string
            )}
          </h1>
          <p className="text-gray-700">
            {setLocaleText(
              section2.text1_fa,
              section2.text1_en,
              locale as string
            )}
          </p>
          <p className="text-gray-700">
            {setLocaleText(
              section2.text2_fa,
              section2.text2_en,
              locale as string
            )}
          </p>
        </div>
        <div className="flex-1 hidden md:block"></div>
      </div>
      <div className="flex justify-between px-[10%] gap-12 flex-col md:flex-row">
        <AboutItem
          image={section3.image1}
          text={setLocaleText(
            section3.text1_fa,
            section3.text1_en,
            locale as string
          )}
          title={setLocaleText(
            section3.title1_fa,
            section3.title1_en,
            locale as string
          )}
        />
        <AboutItem
          image={section3.image2}
          text={setLocaleText(
            section3.text2_fa,
            section3.text2_en,
            locale as string
          )}
          title={setLocaleText(
            section3.title2_fa,
            section3.title2_en,
            locale as string
          )}
        />
        <AboutItem
          image={section3.image3}
          text={setLocaleText(
            section3.text3_fa,
            section3.text3_en,
            locale as string
          )}
          title={setLocaleText(
            section3.title3_fa,
            section3.title3_en,
            locale as string
          )}
        />
      </div>
      <ShowCase locale={locale as string} section={section4} />
      <div className="flex flex-col gap-16">
        <Header
          desktopSize={42}
          maxWidth={500}
          mobileSize={16}
          text={setLocaleText(
            section5.title1_fa,
            section5.title1_en,
            locale as string
          )}
          className="self-start pl-8 lg:pl-32"
        />
        <div className="grid-cols-1 px-[10%] gap-16 lg:grid-cols-2 grid pb-32">
          <OurValues
            image={
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 32 32"
                fill="#6042ec"
              >
                <path d={section5.svg1}></path>
              </svg>
            }
            text={setLocaleText(
              section5.text1_fa,
              section5.text1_en,
              locale as string
            )}
            title={setLocaleText(
              section5.title2_fa,
              section5.title2_en,
              locale as string
            )}
          />
          <OurValues
            image={
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 32 32"
                fill="#ff4060"
              >
                <path d={section5.svg2}></path>
              </svg>
            }
            text={setLocaleText(
              section5.text2_fa,
              section5.text2_en,
              locale as string
            )}
            title={setLocaleText(
              section5.title3_fa,
              section5.title3_en,
              locale as string
            )}
          />
          <OurValues
            image={
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 32 32"
                fill="#ff8040"
              >
                <path d={section5.svg3}></path>
              </svg>
            }
            text={setLocaleText(
              section5.text3_fa,
              section5.text3_en,
              locale as string
            )}
            title={setLocaleText(
              section5.title4_fa,
              section5.title4_en,
              locale as string
            )}
          />
          <OurValues
            image={
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 39 32"
                fill="#ffc040"
              >
                <path d={section5.svg4}></path>
              </svg>
            }
            text={setLocaleText(
              section5.text4_fa,
              section5.text4_en,
              locale as string
            )}
            title={setLocaleText(
              section5.title5_fa,
              section5.title5_en,
              locale as string
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUsItems
