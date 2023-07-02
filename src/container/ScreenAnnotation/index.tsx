import { useState } from "react"
import { getData } from "@/services/apis"
import { ScreenAnnotationApiResponse } from "@/services/types/platform/screen_annotation"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import VideosTabs from "@/components/VideosTabs"

import ScreenAnnotationItems from "./ScreenAnnotationItems"

const Index = () => {
  const [data, setData] =
    useState<ScreenAnnotationApiResponse["screen_annotation"]>()
  const dataQuery = useQuery<ScreenAnnotationApiResponse>(
    ["screen_annotation"],
    getData,
    {
      onSuccess(data) {
        setData(data.screen_annotation)
      },
    }
  )
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start your free trial and get instant access to visual feedback"
        h1="Screen Annotation"
        h2="Get richer user insights for features and fixes"
        text="Let users enhance their feedback with notes and scribbles on visual and video screen grabs, so your product team has all the background detail they need for features and fixes."
      />
      <VideosTabs type={1} />
      <ScreenAnnotationItems />
      <ContactUs section={data?.section7} />
    </div>
  )
}

export default Index
