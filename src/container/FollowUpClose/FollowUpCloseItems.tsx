/* eslint-disable tailwindcss/classnames-order */

import { FC } from "react"
import { setLocaleText } from "@/functions/setLocaleText"
import { FollowUpCloseApiResponse } from "@/services/types/platform/follow_up_close"

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section4: FollowUpCloseApiResponse["follow_up_and_close"]["section4"]
  section5: FollowUpCloseApiResponse["follow_up_and_close"]["section5"]
  locale: string
}

const FollowUpCloseItems: FC<Props> = ({ locale, section4, section5 }) => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl={section4.image1}>
        <TextCol
          header={setLocaleText(
            section4.title1_fa,
            section4.title1_en,
            locale as string
          )}
          color="#ffc040"
          items={[
            setLocaleText(
              section4.text2_fa,
              section4.text2_en,
              locale as string
            ),
            setLocaleText(
              section4.text3_fa,
              section4.text3_en,
              locale as string
            ),
            setLocaleText(
              section4.text4_fa,
              section4.text4_en,
              locale as string
            ),
            setLocaleText(
              section4.text5_fa,
              section4.text5_en,
              locale as string
            ),
          ]}
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
          button={setLocaleText(
            section5.button1_fa,
            section5.button1_en,
            locale as string
          )}
          color="#ffc040"
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
    </div>
  )
}

export default FollowUpCloseItems
