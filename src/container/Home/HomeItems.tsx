import React, { FC } from "react"
import { setLocaleText } from "@/functions/setLocaleText"
import { HomeApiResponse } from "@/services/types/useCase/home"

import RowComponent from "@/components/RowComponent"

import HomeItem from "./HomeItem"

interface Props {
  section3: HomeApiResponse["home"]["section3"]
  section4: HomeApiResponse["home"]["section4"]
  section5: HomeApiResponse["home"]["section5"]
  section6: HomeApiResponse["home"]["section6"]
  locale: string
}

const HomeItems: FC<Props> = ({
  locale,
  section3,
  section4,
  section5,
  section6,
}) => {
  return (
    <div className="flex flex-col pt-60 gap-60">
      <RowComponent imgUrl={section3.image2}>
        <HomeItem
          buttonText={setLocaleText(
            section3.button1_fa,
            section3.button1_en,
            locale
          )}
          color="#6042ec"
          header={setLocaleText(section3.title2_fa, section3.title2_en, locale)}
          icon={section3.image1}
          person={setLocaleText(section3.text3_fa, section3.text3_en, locale)}
          quote={setLocaleText(section3.text2_fa, section3.text2_en, locale)}
          text={setLocaleText(section3.text1_fa, section3.text1_en, locale)}
          title={setLocaleText(section3.title1_fa, section3.title1_en, locale)}
        />
      </RowComponent>
      <RowComponent imgUrl={section4.image2}>
        <HomeItem
          buttonText={setLocaleText(
            section4.button1_fa,
            section4.button1_en,
            locale
          )}
          color="#ff4060"
          header={setLocaleText(section4.title2_fa, section4.title2_en, locale)}
          icon={section4.image1}
          person={setLocaleText(section4.text3_fa, section4.text3_en, locale)}
          quote={setLocaleText(section4.text2_fa, section4.text2_en, locale)}
          text={setLocaleText(section4.text1_fa, section4.text1_en, locale)}
          title={setLocaleText(section4.title1_fa, section4.title1_en, locale)}
        />
      </RowComponent>
      <RowComponent imgUrl={section5.image2}>
        <HomeItem
          buttonText={setLocaleText(
            section5.button1_fa,
            section5.button1_en,
            locale
          )}
          color="#ff8040"
          header={setLocaleText(section5.title2_fa, section5.title2_en, locale)}
          icon={section5.image1}
          person={setLocaleText(section5.text3_fa, section5.text3_en, locale)}
          quote={setLocaleText(section5.text2_fa, section5.text2_en, locale)}
          text={setLocaleText(section5.text1_fa, section5.text1_en, locale)}
          title={setLocaleText(section5.title1_fa, section5.title1_en, locale)}
        />
      </RowComponent>
      <RowComponent imgUrl={section6.image2}>
        <HomeItem
          buttonText={setLocaleText(
            section6.button1_fa,
            section6.button1_en,
            locale
          )}
          color="#ffc040"
          header={setLocaleText(section6.title2_fa, section6.title2_en, locale)}
          icon={section6.image1}
          person={setLocaleText(section6.text3_fa, section6.text3_en, locale)}
          quote={setLocaleText(section6.text2_fa, section6.text2_en, locale)}
          text={setLocaleText(section6.text1_fa, section6.text1_en, locale)}
          title={setLocaleText(section6.title1_fa, section6.title1_en, locale)}
        />
      </RowComponent>
    </div>
  )
}

export default HomeItems
