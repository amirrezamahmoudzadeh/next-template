/* eslint-disable tailwindcss/classnames-order */

import { setLocaleText } from "@/functions/setLocaleText"
import { ForProductManagersApiResponse } from "@/services/types/useCase/userback_for_product_managers"
import { FC } from "react"

import ButtonComponent from "@/components/ButtonComponent"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

import ProductCard from "./ProductCard"

interface Props {
  section2: ForProductManagersApiResponse["userback_for_product_managers"]["section2"]
  section3: ForProductManagersApiResponse["userback_for_product_managers"]["section3"]
  section4: ForProductManagersApiResponse["userback_for_product_managers"]["section4"]
  section5: ForProductManagersApiResponse["userback_for_product_managers"]["section5"]
  section6: ForProductManagersApiResponse["userback_for_product_managers"]["section6"]
  section7: ForProductManagersApiResponse["userback_for_product_managers"]["section7"]
  section8: ForProductManagersApiResponse["userback_for_product_managers"]["section8"]
  locale: string
}

const FixItems: FC<Props> = ({
  locale,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
}) => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl={section2.image1}>
        <TextCol
          header={setLocaleText(section2.title1_fa, section2.title1_en, locale)}
          items={[
            setLocaleText(section2.text2_fa, section2.text2_en, locale),
            setLocaleText(section2.text3_fa, section2.text3_en, locale),
            setLocaleText(section2.text4_fa, section2.text4_en, locale),
            setLocaleText(section2.text5_fa, section2.text5_en, locale),
            setLocaleText(section2.text6_fa, section2.text6_en, locale),
          ]}
        >
          <p>{setLocaleText(section2.text1_fa, section2.text1_en, locale)}</p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl={section3.image1}>
        <TextCol
          header={setLocaleText(section3.title1_fa, section3.title1_en, locale)}
          button={setLocaleText(
            section3.button1_fa,
            section3.button1_en,
            locale
          )}
        >
          <p>{setLocaleText(section3.text1_fa, section3.text1_en, locale)}</p>
        </TextCol>
      </RowComponent>
      <ProductCard locale={locale} section={section4} />
      <RowComponent imgUrl={section5.image1}>
        <TextCol
          header={setLocaleText(section5.title1_fa, section5.title1_en, locale)}
        >
          <p>{setLocaleText(section5.text1_fa, section5.text1_en, locale)}</p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl={section6.image1}>
        <TextCol
          header={setLocaleText(section6.title1_fa, section6.title1_en, locale)}
        >
          <p>{setLocaleText(section6.text1_fa, section6.text1_en, locale)}</p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl={section7.image1}>
        <TextCol
          header={setLocaleText(section7.title1_fa, section7.title1_en, locale)}
        >
          <p>{setLocaleText(section7.text1_fa, section7.text1_en, locale)}</p>
        </TextCol>
      </RowComponent>
      <ButtonComponent
        text={setLocaleText(section8.button1_fa, section8.button1_en, locale)}
        className="self-center"
      />
    </div>
  )
}

export default FixItems
