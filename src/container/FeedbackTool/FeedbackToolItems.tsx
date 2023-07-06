/* eslint-disable tailwindcss/classnames-order */

import { FC } from "react"
import { setLocaleText } from "@/functions/setLocaleText"
import { WebsiteFeedbackToolApiRespone } from "@/services/types/useCase/website_feedback_tool"

import ListItem from "@/components/ListItem"
import ListItemWrapper from "@/components/ListItemWrapper"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section2: WebsiteFeedbackToolApiRespone["website_feedback_tool"]["section2"]
  section3: WebsiteFeedbackToolApiRespone["website_feedback_tool"]["section3"]
  section4: WebsiteFeedbackToolApiRespone["website_feedback_tool"]["section4"]
  locale: string
}

const FixItems: FC<Props> = ({ locale, section2, section3, section4 }) => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl={section2.image1}>
        <TextCol
          header={setLocaleText(section2.title1_fa, section2.title1_en, locale)}
          items={[
            setLocaleText(section2.text2_fa, section2.text2_en, locale),
            setLocaleText(section2.text3_fa, section2.text3_en, locale),
            setLocaleText(section2.text4_fa, section2.text4_en, locale),
          ]}
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
          hasLine={false}
        />
        <ListItem
          icon={section3.image2}
          text={setLocaleText(section3.text2_fa, section3.text2_en, locale)}
          title={setLocaleText(section3.title2_fa, section3.title2_en, locale)}
          hasLine={false}
        />
        <ListItem
          icon={section3.image3}
          text={setLocaleText(section3.text3_fa, section3.text3_en, locale)}
          title={setLocaleText(section3.title3_fa, section3.title3_en, locale)}
          hasLine={false}
        />
      </ListItemWrapper>
      <RowComponent imgUrl={section4.image1}>
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-[32px] font-medium">
            {setLocaleText(section4.title1_fa, section4.title1_en, locale)}
          </h1>
          <p>
            {setLocaleText(section4.text1_fa, section4.text1_en, locale)}
          </p>
        </div>
      </RowComponent>
    </div>
  )
}

export default FixItems
