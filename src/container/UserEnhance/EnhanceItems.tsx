/* eslint-disable tailwindcss/classnames-order */

import { setLocaleText } from "@/functions/setLocaleText"
import { EnhanceAppsAndWebsitesApiReasponse } from "@/services/types/useCase/enhance_apps_and_websites"
import { FC } from "react"

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section2: EnhanceAppsAndWebsitesApiReasponse["enhance_apps_and_websites"]["section2"]
  section3: EnhanceAppsAndWebsitesApiReasponse["enhance_apps_and_websites"]["section3"]
  section4: EnhanceAppsAndWebsitesApiReasponse["enhance_apps_and_websites"]["section4"]
  locale: string
}

const EnhanceItems: FC<Props> = ({ locale, section2, section3, section4 }) => {
  return (
    <div className="flex flex-col gap-32">
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
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default EnhanceItems
