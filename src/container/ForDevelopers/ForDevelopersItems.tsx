/* eslint-disable tailwindcss/classnames-order */

import { setLocaleText } from "@/functions/setLocaleText"
import { ForDevelopersApiResponse } from "@/services/types/useCase/userback_for_developers"
import { FC } from "react"

import ButtonComponent from "@/components/ButtonComponent"
import ListItem from "@/components/ListItem"
import ListItemWrapper from "@/components/ListItemWrapper"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"
import TitleAndButton from "@/components/TitleAndButton"

interface Props {
  section2: ForDevelopersApiResponse["userback_for_developers"]["section2"]
  section3: ForDevelopersApiResponse["userback_for_developers"]["section3"]
  section4: ForDevelopersApiResponse["userback_for_developers"]["section4"]
  section5: ForDevelopersApiResponse["userback_for_developers"]["section5"]
  section6: ForDevelopersApiResponse["userback_for_developers"]["section6"]
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
            section3.button1_fa,
            section3.button1_en,
            locale
          )}
        >
          <p>{setLocaleText(section3.text1_fa, section3.text1_en, locale)}</p>
        </TextCol>
      </RowComponent>

      <div className="flex flex-col items-center gap-4">
        <ListItemWrapper>
          <ListItem
            icon={section4.image1}
            text={setLocaleText(section4.text1_fa, section4.text1_en, locale)}
            title={setLocaleText(
              section4.title1_fa,
              section4.title1_en,
              locale
            )}
            hasLine
          />
          <ListItem
            icon={section4.image2}
            text={setLocaleText(section4.text2_fa, section4.text2_en, locale)}
            title={setLocaleText(
              section4.title2_fa,
              section4.title2_en,
              locale
            )}
            hasLine
          />
          <ListItem
            icon={section4.image3}
            text={setLocaleText(section4.text3_fa, section4.text3_en, locale)}
            title={setLocaleText(
              section4.title3_fa,
              section4.title3_en,
              locale
            )}
            hasLine
          />
        </ListItemWrapper>
        <ButtonComponent
          text={setLocaleText(section4.button1_fa, section4.button1_en, locale)}
          style={{ fontSize: 12, paddingInline: 12, paddingBlock: 8 }}
        />
      </div>

      <RowComponent imgUrl={section5.image1}>
        <TextCol
          header={setLocaleText(section5.title1_fa, section5.title1_en, locale)}
        >
          <p>{setLocaleText(section5.text1_fa, section5.text1_en, locale)}</p>
        </TextCol>
      </RowComponent>
      <TitleAndButton
        buttonText={setLocaleText(
          section6.button1_fa,
          section6.button1_en,
          locale
        )}
        text={setLocaleText(section6.title1_fa, section6.title1_en, locale)}
        className="mb-32"
        desktopSize={35}
        maxWidth={910}
        mobileSize={26}
      />
    </div>
  )
}

export default FixItems
