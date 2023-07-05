/* eslint-disable tailwindcss/classnames-order */

import { setLocaleText } from "@/functions/setLocaleText"
import { UserInsightsApiResponse } from "@/services/types/platform/user_insights"
import { FC } from "react"

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section2: UserInsightsApiResponse["user_insights"]["section2"]
  section3: UserInsightsApiResponse["user_insights"]["section3"]
  section4: UserInsightsApiResponse["user_insights"]["section4"]
  locale: string
}

const UserInsightsItems: FC<Props> = ({
  locale,
  section2,
  section3,
  section4,
}) => {
  return (
    <div className="flex flex-col gap-32 pb-24">
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
        >
          <p>{setLocaleText(section4.text1_fa, section4.text1_en, locale)}</p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default UserInsightsItems
