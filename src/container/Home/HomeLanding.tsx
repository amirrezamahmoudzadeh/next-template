/* eslint-disable tailwindcss/classnames-order */

import React from "react"
import { setLocaleText } from "@/functions/setLocaleText"
import { HomeApiResponse } from "@/services/types/useCase/home"

import { useLocaleText } from "@/hooks/useLocaleText"
import ButtonComponent from "@/components/ButtonComponent"

const HomeLanding: React.FC<{
  data: HomeApiResponse["home"]["section1"]
  locale: string
}> = ({ data, locale }) => {
  return (
    <div
      style={{ background: "linear-gradient(45deg,#6042ec 0%,#ff4060 100%)" }}
    >
      <div className="container flex flex-col text-white lg:pl-[15%] py-[100px] px-[10%] lg:pr-8">
        <div>
          <img
            src={data.image1}
            alt="home landing"
            className="w-[80px] md:w-[280px]"
          />
        </div>
        <p className="mt-4 mb-10 font-bold">
          {setLocaleText(data.title1_fa, data.title1_en, locale)}
        </p>
        <h2 className="text-[35px] md:text-[50px] font-bold max-w-[1000px] leading-[1]">
          {setLocaleText(data.title2_fa, data.title2_en, locale)}
        </h2>
        <p className="max-w-[900px] mt-4 leading-[1]">
          {setLocaleText(data.text1_fa, data.text1_en, locale)}
        </p>
        <div className="flex items-center justify-center gap-8 md:justify-start">
          <div className="flex flex-col items-center self-center gap-3 mt-10 md:self-start">
            <ButtonComponent
              text={setLocaleText(data.button1_fa, data.button1_en, locale)}
              style={{ backgroundColor: "rgb(6,182,212)" }}
            />
            <p className="text-sm">
              {setLocaleText(data.text2_fa, data.text2_en, locale)}
            </p>
          </div>
          <ButtonComponent
            text={setLocaleText(data.button2_fa, data.button2_en, locale)}
            style={{ backgroundColor: "transparent" }}
            className="hidden mt-[10px] border-2 md:block"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeLanding
