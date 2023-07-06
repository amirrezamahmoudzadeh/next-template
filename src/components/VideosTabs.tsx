/* eslint-disable tailwindcss/classnames-order */
import { setLocaleText } from "@/functions/setLocaleText"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { PlayCircle, User } from "lucide-react"
import React, { useState } from "react"

interface Props {
  section: {
    image1: string
    text1_en?: string
    text1_fa?: string
    title1_en: string
    title1_fa: string
    title2_en?: string
    title2_fa?: string
    video1: string
  }[]
  type: 1 | 2
  locale: string
}

const VideosTabs: React.FC<Props> = ({ type, section, locale }) => {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <Tabs align="center" onChange={(index) => setTabIndex(index)} size={"md"}>
      <TabList borderBottom={type === 1 ? "0" : "1px solid #e1e1e1"}>
        {section.map((slide) => {
          return (
            <Tab
              borderBottom={"1px solid #e1e1e1"}
              mb={"-1px"}
              _selected={{
                borderBottom: "3px solid #6042ec",
                color: "#6042ec",
              }}
            >
              <div className="flex flex-col items-center gap-2">
                {type === 1 ? <User /> : <PlayCircle />}
                <p>{setLocaleText(slide.title1_fa, slide.title1_en, locale)}</p>
              </div>
            </Tab>
          )
        })}
      </TabList>
      <TabPanels>
        {section.map((panel) => {
          return (
            <TabPanel py={"16"}>
              <div className={`flex flex-col gap-10`}>
                {panel.text1_en &&
                  panel.text1_fa &&
                  panel.title2_en &&
                  panel.title2_fa && (
                    <div className="flex flex-col items-center self-center gap-2 text-center max-w-[1280px]">
                      <p className="font-medium text-[17px]">
                        {setLocaleText(
                          panel.title2_fa,
                          panel.title2_en,
                          locale
                        )}
                      </p>
                      <p>
                        {setLocaleText(panel.text1_fa, panel.text1_en, locale)}
                      </p>
                    </div>
                  )}
                <video
                  width="1280"
                  height="720"
                  className="mx-auto"
                  preload="auto"
                  loop={true}
                  autoPlay={true}
                  muted={true}
                >
                  <source
                    src={panel.video1}
                    type="video/mp4"
                  />
                </video>
              </div>
            </TabPanel>
          )
        })}
      </TabPanels>
    </Tabs>
  )
}

export default VideosTabs
