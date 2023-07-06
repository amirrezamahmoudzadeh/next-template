/* eslint-disable tailwindcss/classnames-order */

import { FC } from "react"
import { setLocaleText } from "@/functions/setLocaleText"
import { SoftwareFeatureRequestsApiRespone } from "@/services/types/useCase/software_feature_requests"

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section2: SoftwareFeatureRequestsApiRespone["software_feature_requests"]["section2"]
  section3: SoftwareFeatureRequestsApiRespone["software_feature_requests"]["section3"]
  section4: SoftwareFeatureRequestsApiRespone["software_feature_requests"]["section4"]
  section5: SoftwareFeatureRequestsApiRespone["software_feature_requests"]["section5"]
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
    <div className="flex flex-col gap-32 pb-32">
      <div className="flex flex-col items-center max-w-[900px] mx-auto gap-8">
        <h1 className="text-[32px] font-medium text-center">
        {setLocaleText(section2.title1_fa, section2.title1_en, locale)}
        </h1>
        <p className="text-center">
        {setLocaleText(section2.text1_fa, section2.text1_en, locale)}
        </p>
      </div>
      <RowComponent imgUrl={section3.image1}>
        <TextCol
          header={setLocaleText(section3.title1_fa, section3.title1_en, locale)}
        >
          <p>{setLocaleText(section3.text1_fa, section3.text1_en, locale)}</p>
          <p>{setLocaleText(section3.text2_fa, section3.text2_en, locale)}</p>
        </TextCol>
      </RowComponent>
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
          button={setLocaleText(
            section5.button2_fa,
            section5.button1_en,
            locale
          )}
        >
          <p>{setLocaleText(section5.text1_fa, section5.text1_en, locale)}</p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default FixItems
