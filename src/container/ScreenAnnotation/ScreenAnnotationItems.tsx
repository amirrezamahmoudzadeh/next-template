/* eslint-disable tailwindcss/classnames-order */

import { setLocaleText } from "@/functions/setLocaleText"
import { ScreenAnnotationApiResponse } from "@/services/types/platform/screen_annotation"
import { FC } from "react"

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section3: ScreenAnnotationApiResponse["screen_annotation"]["section3"]
  section4: ScreenAnnotationApiResponse["screen_annotation"]["section4"]
  locale: string
}

const ScreenAnnotationItems: FC<Props> = ({ locale, section3, section4 }) => {
  return (
    <div className="flex flex-col gap-32 py-32">
      <RowComponent imgUrl={section3.image1}>
        <TextCol
          header={setLocaleText(section3.title1_fa, section3.title1_en, locale)}
        >
          <p>{setLocaleText(section3.text1_fa, section3.text1_en, locale)}</p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl={section4.image1}>
        <TextCol
          header={setLocaleText(section4.title1_fa, section4.title1_en, locale)}
          button={setLocaleText(
            section4.button1_fa,
            section4.button1_en,
            locale
          )}
        >
          <p>{setLocaleText(section4.text1_fa, section4.text1_en, locale)}</p>
          <p>{setLocaleText(section4.text2_fa, section4.text2_en, locale)}</p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default ScreenAnnotationItems
