/* eslint-disable tailwindcss/classnames-order */

import { setLocaleText } from "@/functions/setLocaleText"
import { IntegrationsApiResponse } from "@/services/types/platform/integrations"
import { FC } from "react"

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section2: IntegrationsApiResponse["integrations"]["section2"]
  section3: IntegrationsApiResponse["integrations"]["section3"]
  locale: string
}

const IntegrationsItems: FC<Props> = ({ locale, section2, section3 }) => {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <RowComponent imgUrl={section2.image1}>
        <TextCol
          header={setLocaleText(section2.title1_fa, section2.title1_en, locale)}
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
    </div>
  )
}

export default IntegrationsItems
