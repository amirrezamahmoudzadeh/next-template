/* eslint-disable tailwindcss/classnames-order */

import { FC } from "react"
import { setLocaleText } from "@/functions/setLocaleText"
import { UserAcceptanceApiResponse } from "@/services/types/useCase/user_acceptance_testing"

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section3: UserAcceptanceApiResponse["user_acceptance_testing"]["section3"]
  section4: UserAcceptanceApiResponse["user_acceptance_testing"]["section4"]
  locale: string
}

const FixItems: FC<Props> = ({ section3, section4, locale }) => {
  return (
    <div className="flex flex-col gap-32">
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

export default FixItems
