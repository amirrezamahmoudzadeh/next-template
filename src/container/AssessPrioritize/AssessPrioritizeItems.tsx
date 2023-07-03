/* eslint-disable tailwindcss/classnames-order */

import { FC } from "react"
import { setLocaleText } from "@/functions/setLocaleText"
import { AssessPrioritizeApiResponse } from "@/services/types/platform/assess_prioritize"

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section4: AssessPrioritizeApiResponse["assess_and_prioritize"]["section4"]
  section5: AssessPrioritizeApiResponse["assess_and_prioritize"]["section5"]
  section6: AssessPrioritizeApiResponse["assess_and_prioritize"]["section6"]
  locale: string
}

const FixItems: FC<Props> = ({ locale, section4, section5, section6 }) => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl={section4.image1}>
        <TextCol
          header={setLocaleText(
            section4.title1_fa,
            section4.title1_en,
            locale as string
          )}
          button={setLocaleText(
            section4.button1_fa,
            section4.button1_en,
            locale as string
          )}
          color="#ff4060"
        >
          <p className="font-bold">
            {setLocaleText(
              section4.title2_fa,
              section4.title2_en,
              locale as string
            )}
          </p>
          <p>
            {setLocaleText(
              section4.text1_fa,
              section4.text1_en,
              locale as string
            )}
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl={section5.image1}>
        <TextCol
          header={setLocaleText(
            section5.title1_fa,
            section5.title1_en,
            locale as string
          )}
        >
          <p>
            {setLocaleText(
              section5.text1_fa,
              section5.text1_en,
              locale as string
            )}
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl={section6.image1}>
        <TextCol
          header={setLocaleText(
            section6.title1_fa,
            section6.title1_en,
            locale as string
          )}
        >
          <p className="font-bold">
            {setLocaleText(
              section6.title2_fa,
              section6.title2_en,
              locale as string
            )}
          </p>
          <p>
            {setLocaleText(
              section6.text1_fa,
              section6.text1_en,
              locale as string
            )}
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default FixItems
