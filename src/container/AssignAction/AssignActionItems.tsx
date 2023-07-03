/* eslint-disable tailwindcss/classnames-order */

import { setLocaleText } from "@/functions/setLocaleText"
import { AssignActionApiResponse } from "@/services/types/platform/assign_action"
import { FC } from "react"

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section4: AssignActionApiResponse["assign_and_action"]["section4"]
  section5: AssignActionApiResponse["assign_and_action"]["section5"]
  section6: AssignActionApiResponse["assign_and_action"]["section6"]
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
          color="#ff8040"
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
          items={[
            setLocaleText(
              section5.text2_fa,
              section5.text2_en,
              locale as string
            ),
            setLocaleText(
              section5.text3_fa,
              section5.text3_en,
              locale as string
            ),
            setLocaleText(
              section5.text4_fa,
              section5.text4_en,
              locale as string
            ),
            setLocaleText(
              section5.text5_fa,
              section5.text5_en,
              locale as string
            ),
          ]}
          color="#ff8040"
        >
          <p className="font-bold">
            {setLocaleText(
              section5.title2_fa,
              section5.title2_en,
              locale as string
            )}
          </p>
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
        <TextCol header= {setLocaleText(
              section6.title1_fa,
              section6.title1_en,
              locale as string
            )}>
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
