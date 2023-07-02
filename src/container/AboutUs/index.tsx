import { useState } from "react"
import { getData } from "@/services/apis"
import { AboutUsApiResponse } from "@/services/types/resources/about_us"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"

import AboutUsItems from "./AboutUsItem"

const Index = () => {
  const [data, setData] = useState<AboutUsApiResponse["about_us"]>()
  const dataQuery = useQuery<AboutUsApiResponse>(["about_us"], getData, {
    onSuccess(data) {
      setData(data.about_us)
    },
  })
  return (
    <div className="container">
      <PagesHeader
        buttonText=""
        h1="The Userback Story"
        h2="We're in it for those wanting to build better software"
        text="Feedback is not a loop. It’s a knot. Userback untangles it by putting the user back in the center of product development"
      />
      <AboutUsItems />
      <ContactUs section={data?.section7} />
    </div>
  )
}

export default Index
