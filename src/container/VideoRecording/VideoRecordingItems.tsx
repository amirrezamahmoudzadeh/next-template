/* eslint-disable tailwindcss/classnames-order */

import { FC } from "react"
import { setLocaleText } from "@/functions/setLocaleText"
import { VideoRecordingApiResponse } from "@/services/types/platform/video_recording"

import ListItem from "@/components/ListItem"
import ListItemWrapper from "@/components/ListItemWrapper"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section3: VideoRecordingApiResponse["video_recording"]["section3"]
  section4: VideoRecordingApiResponse["video_recording"]["section4"]
  section5: VideoRecordingApiResponse["video_recording"]["section5"]
  locale: string
}

const VideoRecordingItems: FC<Props> = ({
  locale,
  section3,
  section4,
  section5,
}) => {
  return (
    <div className="flex flex-col gap-32 py-32">
      <RowComponent imgUrl={section3.image1}>
        <TextCol
          header={setLocaleText(section3.title1_fa, section3.title1_en, locale)}
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
      </ListItemWrapper>
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

export default VideoRecordingItems
