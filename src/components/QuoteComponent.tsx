/* eslint-disable tailwindcss/classnames-order */

import { setLocaleText } from "@/functions/setLocaleText"
import { Quote } from "lucide-react"
import React from "react"

interface Props {
  section: {
    text1_en: string
    text1_fa: string
    text2_en: string
    text2_fa: string
  }
  color?: string
  locale: string
}

const QuoteComponent: React.FC<Props> = ({ locale, section, color }) => {
  return (
    <div className="flex flex-col items-center gap-8 my-20">
      <Quote
        size={20}
        color={color ? color : "#6042ec"}
        fill={color ? color : "#6042ec"}
      />
      <p className="max-w-[990px] text-center text-xl font-medium text-gray-800">
        {setLocaleText(section.text1_fa, section.text1_en, locale)}
      </p>
      <div className="flex flex-col items-center">
        <p>
          {setLocaleText(
            section.text2_fa.split(" ")[0] +
              " " +
              section.text2_fa.split(" ")[1],
            section.text2_en.split(" ")[0] +
              " " +
              section.text2_en.split(" ")[1],
            locale
          )}
        </p>
        <p className="text-gray-500 text-[14px]">
          {setLocaleText(
            section.text2_fa.split(" ").slice(2).join(" "),
            section.text2_en.split(" ").slice(2).join(" "),
            locale
          )}
        </p>
      </div>
    </div>
  )
}

export default QuoteComponent
