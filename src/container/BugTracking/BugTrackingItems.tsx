/* eslint-disable tailwindcss/classnames-order */

import { FC } from "react"
import { setLocaleText } from "@/functions/setLocaleText"
import { BugTrackingApiResponse } from "@/services/types/useCase/bug-tracking"

import ListItem from "@/components/ListItem"
import ListItemWrapper from "@/components/ListItemWrapper"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section2: BugTrackingApiResponse["bug_tracking"]["section2"]
  section3: BugTrackingApiResponse["bug_tracking"]["section3"]
  section4: BugTrackingApiResponse["bug_tracking"]["section4"]
  section5: BugTrackingApiResponse["bug_tracking"]["section5"]
  section6: BugTrackingApiResponse["bug_tracking"]["section6"]
  locale: string
}

const FixItems: FC<Props> = ({
  section2,
  section3,
  section4,
  section5,
  section6,
  locale,
}) => {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <div className="flex flex-col items-center gap-4 sm:px-24 xl:px-64">
        <h1 className="text-[32px] font-medium text-center">
          {setLocaleText(section2.title1_fa, section2.title1_en, locale)}
        </h1>
        <p className="text-center">
          {setLocaleText(section2.text1_fa, section2.text1_en, locale)}
        </p>
        <img
          src={section2.image1}
          alt="Bug-Tracking"
          className="max-w-[1000px] w-full"
        />
        <h1 className="text-[32px] font-medium text-center">
          {setLocaleText(section2.title1_fa, section2.title2_en, locale)}
        </h1>
        <p className="text-center">
          {setLocaleText(section2.text2_fa, section2.text2_en, locale)}
        </p>
        <p className="text-center">
          {setLocaleText(section2.text3_fa, section2.text3_en, locale)}
        </p>
      </div>
      <RowComponent imgUrl={section3.image2}>
        <TextCol
          header={setLocaleText(section3.title1_fa, section3.title1_en, locale)}
          items={[
            setLocaleText(section3.text2_fa, section3.text2_en, locale),
            setLocaleText(section3.text3_fa, section3.text3_en, locale),
            setLocaleText(section3.text4_fa, section3.text4_en, locale),
            setLocaleText(section3.text5_fa, section3.text5_en, locale),
            setLocaleText(section3.text6_fa, section3.text6_en, locale),
            setLocaleText(section3.text7_fa, section3.text7_en, locale),
          ]}
        >
          <p>{setLocaleText(section3.text1_fa, section3.text1_en, locale)}</p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl={section4.image2}>
        <TextCol
          header={setLocaleText(section4.title1_fa, section4.title1_en, locale)}
          items={[
            setLocaleText(section4.text3_fa, section4.text3_en, locale),
            setLocaleText(section4.text4_fa, section4.text4_en, locale),
            setLocaleText(section4.text5_fa, section4.text5_en, locale),
            setLocaleText(section4.text6_fa, section4.text6_en, locale),
            setLocaleText(section4.text7_fa, section4.text7_en, locale),
            setLocaleText(section4.text8_fa, section4.text8_en, locale),
          ]}
        >
          <p>{setLocaleText(section4.text1_fa, section4.text1_en, locale)}</p>
          <p>{setLocaleText(section4.text2_fa, section4.text2_en, locale)}</p>
        </TextCol>
      </RowComponent>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-[32px] font-medium">
          {setLocaleText(section5.title1_fa, section5.title1_en, locale)}
        </h1>
        <ListItemWrapper>
          <ListItem
            icon={section5.image1}
            text={setLocaleText(section5.text1_fa, section5.text1_en, locale)}
            title={setLocaleText(section5.title2_fa, section5.title2_en, locale)}
            hasLine={false}
          />
          <ListItem
            icon={section5.image2}
            text={setLocaleText(section5.text2_fa, section5.text2_en, locale)}
            title={setLocaleText(section5.title3_fa, section5.title3_en, locale)}
            hasLine={false}
          />
          <ListItem
            icon={section5.image3}
            text={setLocaleText(section5.text3_fa, section5.text3_en, locale)}
            title={setLocaleText(section5.title4_fa, section5.title4_en, locale)}
            hasLine={false}
          />
        </ListItemWrapper>
      </div>
     <RowComponent imgUrl={section6.image2}>
        <TextCol
          header={setLocaleText(section6.title1_fa, section6.title1_en, locale)}
          items={[
            setLocaleText(section6.text3_fa, section6.text3_en, locale),
            setLocaleText(section6.text4_fa, section6.text4_en, locale),
            setLocaleText(section6.text5_fa, section6.text5_en, locale),
            setLocaleText(section6.text6_fa, section6.text6_en, locale),
            setLocaleText(section6.text7_fa, section6.text7_en, locale),
            setLocaleText(section6.text8_fa, section6.text8_en, locale),
          ]}
        >
          <p>{setLocaleText(section6.text1_fa, section6.text1_en, locale)}</p>
          <p>{setLocaleText(section6.text2_fa, section6.text2_en, locale)}</p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default FixItems
