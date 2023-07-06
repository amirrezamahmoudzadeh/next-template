/* eslint-disable tailwindcss/classnames-order */

import { setLocaleText } from "@/functions/setLocaleText"
import { FeedbackPortalApiResponse } from "@/services/types/platform/feedback_portal"
import { FC } from "react"

import ListItem from "@/components/ListItem"
import ListItemWrapper from "@/components/ListItemWrapper"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section2: FeedbackPortalApiResponse["feedback_portal"]["section2"]
  section3: FeedbackPortalApiResponse["feedback_portal"]["section3"]
  section4: FeedbackPortalApiResponse["feedback_portal"]["section4"]
  locale: string
}

const FeedbackPortalItems: FC<Props> = ({
  locale,
  section2,
  section3,
  section4,
}) => {
  return (
    <div className="flex flex-col gap-32 pb-32">
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
    </div>
  )
}

export default FeedbackPortalItems
