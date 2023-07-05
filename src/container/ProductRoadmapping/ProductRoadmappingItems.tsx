/* eslint-disable tailwindcss/classnames-order */
import { setLocaleText } from "@/functions/setLocaleText"
import { ProductRoadmappingApiResponse } from "@/services/types/useCase/product_roadmapping"
import { FC } from "react"

import ButtonComponent from "@/components/ButtonComponent"
import ListItem from "@/components/ListItem"
import ListItemWrapper from "@/components/ListItemWrapper"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section2: ProductRoadmappingApiResponse["product_roadmapping"]["section2"]
  section3: ProductRoadmappingApiResponse["product_roadmapping"]["section3"]
  section4: ProductRoadmappingApiResponse["product_roadmapping"]["section4"]
  section5: ProductRoadmappingApiResponse["product_roadmapping"]["section5"]
  section6: ProductRoadmappingApiResponse["product_roadmapping"]["section6"]
  locale: string
}

const FixItems: FC<Props> = ({
  locale,
  section2,
  section3,
  section4,
  section5,
  section6,
}) => {
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
          button={setLocaleText(
            section3.button2_fa,
            section3.button1_en,
            locale
          )}
        >
          <p>{setLocaleText(section3.text1_fa, section3.text1_en, locale)}</p>
        </TextCol>
      </RowComponent>
      <ListItemWrapper>
        <ListItem
          icon={section4.image1}
          text={setLocaleText(section4.text1_fa, section4.text1_en, locale)}
          title={setLocaleText(section4.title1_fa, section4.title1_en, locale)}
          hasLine
        />
        <ListItem
          icon={section4.image2}
          text={setLocaleText(section4.text2_fa, section4.text2_en, locale)}
          title={setLocaleText(section4.title2_fa, section4.title2_en, locale)}
          hasLine
        />
        <ListItem
          icon={section4.image3}
          text={setLocaleText(section4.text3_fa, section4.text3_en, locale)}
          title={setLocaleText(section4.title3_fa, section4.title3_en, locale)}
          hasLine
        />
      </ListItemWrapper>
      <RowComponent imgUrl={section5.image1}>
        <TextCol
          header={setLocaleText(section5.title1_fa, section5.title1_en, locale)}
        >
          <p>{setLocaleText(section5.text1_fa, section5.text1_en, locale)}</p>
        </TextCol>
      </RowComponent>
      <div className="flex flex-col items-center max-w-[700px] mx-auto my-16">
        <h1 className="text-[32px] font-medium text-center tracking-tighter">
          {setLocaleText(section6.title1_fa, section6.title1_en, locale)}
        </h1>
        <ButtonComponent
          text={setLocaleText(section6.button1_fa, section6.button1_en, locale)}
          className="mt-8"
          style={{ fontSize: 15 }}
        />
      </div>
    </div>
  )
}

export default FixItems
