/* eslint-disable tailwindcss/classnames-order */

import { setLocaleText } from "@/functions/setLocaleText"
import { CaptureCollectaptureCollectApiResponse } from "@/services/types/platform/capture_collect"
import { FC } from "react"

import ListItem from "@/components/ListItem"
import ListItemWrapper from "@/components/ListItemWrapper"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

interface Props {
  section4: CaptureCollectaptureCollectApiResponse["capture_and_collect"]["section4"]
  section5: CaptureCollectaptureCollectApiResponse["capture_and_collect"]["section5"]
  section6: CaptureCollectaptureCollectApiResponse["capture_and_collect"]["section6"]
  section7: CaptureCollectaptureCollectApiResponse["capture_and_collect"]["section7"]
  locale: string
}

const CaptureCollectItems: FC<Props> = ({
  locale,
  section4,
  section5,
  section6,
  section7,
}) => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl="/images/Capture-Feedback (1).webp">
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
      <ListItemWrapper>
        <ListItem
          hasLine
          icon={section6.image1}
          text={setLocaleText(
            section6.text1_fa,
            section6.text1_en,
            locale as string
          )}
          title={setLocaleText(
            section6.title1_fa,
            section6.title1_en,
            locale as string
          )}
          button="Discover Javascript API"
        />
        <ListItem
          hasLine
          icon={section6.image2}
          text={setLocaleText(
            section6.text2_fa,
            section6.text2_en,
            locale as string
          )}
          title={setLocaleText(
            section6.title2_fa,
            section6.title2_en,
            locale as string
          )}
          button="Learn about extensions"
        />
      </ListItemWrapper>
      <RowComponent imgUrl={section7.image1}>
        <TextCol
          header={setLocaleText(
            section7.title1_fa,
            section7.title1_en,
            locale as string
          )}
        >
          <p>
            {setLocaleText(
              section7.text1_fa,
              section7.text1_en,
              locale as string
            )}
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default CaptureCollectItems
