/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */

import { setLocaleText } from "@/functions/setLocaleText"
import React from "react"

interface section {
  image1: string
  image2: string
  image3: string
  image4: string
  image5: string
  image6: string
  title1_fa?: string
  title1_en?: string
}

interface Props {
  section: section
  locale: string
}

const ShowCase: React.FC<Props> = ({ locale, section }) => {
  return (
    <div className="flex flex-col items-center mt-20">
      {!!section.title1_fa && !!section.title1_en && (
        <h2 className="max-w-[780px] text-[24px] leading-[1] md:text-[32px] text-center font-semibold">
          {setLocaleText(section.title1_fa, section.title1_en, locale)}
        </h2>
      )}
      <div className="grid items-center self-stretch grid-cols-2 gap-2 mt-10 sm:grid-cols-3 lg:grid-cols-6 lg:px-[10%]">
        <div className="flex items-center justify-center">
          <img
            src={section.image1}
            alt="showcase"
            className="w-full max-w-[100px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={section.image2}
            alt="showcase"
            className="w-full max-w-[100px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={section.image3}
            alt="showcase"
            className="w-full max-w-[100px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={section.image4}
            alt="showcase"
            className="w-full max-w-[100px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={section.image5}
            alt="showcase"
            className="w-full max-w-[100px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={section.image6}
            alt="showcase"
            className="w-full max-w-[100px]"
          />
        </div>
      </div>
    </div>
  )
}

export default ShowCase
