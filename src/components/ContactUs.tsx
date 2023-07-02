/* eslint-disable tailwindcss/classnames-order */

import { FC } from "react"

import { useLocaleText } from "@/hooks/useLocaleText"

interface Props {
  section: {
    text1_en: string
    text1_fa: string
    text2_en: string
    text2_fa: string
    button1_en: string
    button1_fa: string
  }
}

const ContactUs: FC<Props> = ({ section }) => {
  return (
    <div
      className="flex flex-col items-center gap-6 px-4 py-10 mx-4 my-10 text-md rounded-2xl md:flex-row md:gap-10 md:justify-center"
      style={{
        background:
          "linear-gradient(90deg,rgba(227, 45, 109, 0.5) 0%,rgba(255 ,117, 87, 0.5) 100%)",
      }}
    >
      <p className="leading-[1] max-w-[400px] text-xl font-medium">
        {useLocaleText(section.text1_fa, section.text1_en)}
      </p>
      <form className="flex flex-col self-stretch">
        <label htmlFor="mail" className="mb-1 text-sm">
          {useLocaleText(section.text2_fa, section.text2_en)}
          <span className="text-red">*</span>
        </label>
        <input
          type="email"
          name="mail"
          id="mail"
          className="px-4 py-2 bg-white rounded-2xl focus-visible:outline-none"
          required
        />
        <p className="self-start px-5 py-2 mt-6 text-sm text-white rounded-xl bg-mainBlue">
          {useLocaleText(section.button1_fa, section.button1_en)}
        </p>
      </form>
    </div>
  )
}

export default ContactUs
