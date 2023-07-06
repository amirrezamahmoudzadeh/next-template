/* eslint-disable tailwindcss/classnames-order */

import { setLocaleText } from "@/functions/setLocaleText"
import { ForWebAgenciesApiResponse } from "@/services/types/useCase/userback_for_web_agencies"
import { FC } from "react"

import ListItem from "@/components/ListItem"
import ListItemWrapper from "@/components/ListItemWrapper"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section2: ForWebAgenciesApiResponse["userback_for_web_agencies"]["section2"]
  section3: ForWebAgenciesApiResponse["userback_for_web_agencies"]["section3"]
  section4: ForWebAgenciesApiResponse["userback_for_web_agencies"]["section4"]
  section5: ForWebAgenciesApiResponse["userback_for_web_agencies"]["section5"]
  locale: string
}

const FixItems: FC<Props> = ({
  locale,
  section2,
  section3,
  section4,
  section5,
}) => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl={section2.image1}>
        <TextCol
          header={setLocaleText(section2.title1_fa, section2.title1_en, locale)}
          button={setLocaleText(
            section2.button1_fa,
            section2.button1_en,
            locale
          )}
        >
          <p>{setLocaleText(section2.text1_fa, section2.text1_en, locale)}</p>
        </TextCol>
      </RowComponent>
      <ListItemWrapper>
        <ListItem
          icon={section3.image1}
          text={setLocaleText(section3.text1_fa, section3.text1_en, locale)}
          title={setLocaleText(section3.title1_fa, section3.title1_en, locale)}
          hasLine
        />
        <ListItem
          icon={section3.image2}
          text={setLocaleText(section3.text2_fa, section3.text2_en, locale)}
          title={setLocaleText(section3.title2_fa, section3.title2_en, locale)}
          hasLine
        />
      </ListItemWrapper>
      <RowComponent imgUrl={section4.image1}>
        <TextCol
          header={setLocaleText(section4.title1_fa, section4.title1_en, locale)}
        >
          <p>{setLocaleText(section4.text1_fa, section4.text1_en, locale)}</p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl={section5.image1}>
        <TextCol
          header={setLocaleText(section5.title1_fa, section5.title1_en, locale)}
        >
          <p>{setLocaleText(section5.text1_fa, section5.text1_en, locale)}</p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default FixItems
