/* eslint-disable tailwindcss/classnames-order */

import { setLocaleText } from "@/functions/setLocaleText"
import { SessionReplayApiResponse } from "@/services/types/platform/session_replay"
import { FC } from "react"

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section4: SessionReplayApiResponse["session_replay"]["section4"]
  section5: SessionReplayApiResponse["session_replay"]["section5"]
  locale: string
}

const SessionReplayItems: FC<Props> = ({ locale, section4, section5 }) => {
  return (
    <div className="flex flex-col gap-32 py-32">
      <RowComponent imgUrl={section4.image1}>
        <TextCol
          header={setLocaleText(section4.title1_fa, section4.title1_en, locale)}
          button={setLocaleText(
            section4.button1_fa,
            section4.button1_en,
            locale
          )}
        >
          <p>{setLocaleText(section4.text1_fa, section4.text1_en, locale)}</p>
          <p>{setLocaleText(section4.text2_fa, section4.text2_en, locale)}</p>
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

export default SessionReplayItems
