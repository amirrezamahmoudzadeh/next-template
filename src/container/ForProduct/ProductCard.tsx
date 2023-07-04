/* eslint-disable tailwindcss/classnames-order */

import { setLocaleText } from "@/functions/setLocaleText"
import { ForProductManagersApiResponse } from "@/services/types/useCase/userback_for_product_managers"
import { FC } from "react"

import ButtonComponent from "@/components/ButtonComponent"

interface Props {
  section: ForProductManagersApiResponse["userback_for_product_managers"]["section4"]
  locale: string
}

const ProductCard: FC<Props> = ({ locale, section }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#e7e8f6] justify-between children:flex-1 md:px-[5%] lg-px-[15%] items-center py-16 px-4 gap-16">
      <div className="flex flex-col items-center gap-6 text-center ">
        <h1 className="text-[26px] lg:text-[35px] leading-9 text-gray-700">
          {setLocaleText(section.title1_fa, section.title1_en, locale)}
        </h1>
        <p>{setLocaleText(section.text1_fa, section.text1_en, locale)}</p>
        <ButtonComponent
          text={setLocaleText(section.button1_fa, section.button1_en, locale)}
          className="mt-6"
        />
      </div>
      <div className="flex flex-col items-center">
        <img src={section.image1} alt="b" />
        <img
          src={section.image2}
          alt="a"
          className="w-[386px] md:w-[520px] lg:w-[440px]"
        />
      </div>
    </div>
  )
}

export default ProductCard
