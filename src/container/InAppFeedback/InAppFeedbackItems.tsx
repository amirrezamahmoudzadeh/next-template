/* eslint-disable tailwindcss/classnames-order */

import { setLocaleText } from "@/functions/setLocaleText"
import { InAppFeedbackApiResponse } from "@/services/types/platform/in_app_feedback"
import { FC } from "react"

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section6: InAppFeedbackApiResponse["in_app_feedback"]["section6"]
  section5: InAppFeedbackApiResponse["in_app_feedback"]["section5"]
  locale: string
}

const FixItems: FC<Props> = ({ locale, section6, section5 }) => {
  return (
    <div className="flex flex-col gap-32 py-32">
      <RowComponent imgUrl={section5.image1}>
        <TextCol
          header={setLocaleText(section5.title1_fa, section5.title1_en, locale)}
          button={setLocaleText(
            section5.button1_fa,
            section5.button1_en,
            locale
          )}
        >
          <p>{setLocaleText(section5.text1_fa, section5.text1_en, locale)}</p>
          <p>{setLocaleText(section5.text2_fa, section5.text2_en, locale)}</p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl={section6.image1}>
        <TextCol
          header={setLocaleText(section6.title1_fa, section6.title1_en, locale)}
        >
          <p>{setLocaleText(section6.text1_fa, section6.text1_en, locale)}</p>
          <p>{setLocaleText(section6.text2_fa, section6.text2_en, locale)}</p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default FixItems
