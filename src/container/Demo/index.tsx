import { useState } from "react"
import { getData } from "@/services/apis"
import { HandsOnDemoApiResponse } from "@/services/types/platform/hands_on_demo"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"
import ShowCase from "@/components/ShowCase"
import TitleAndButton from "@/components/TitleAndButton"

const Index = () => {
  const [data, setData] = useState<HandsOnDemoApiResponse["hands_on_demo"]>()
  const dataQuery = useQuery<HandsOnDemoApiResponse>(
    ["hands_on_demo"],
    getData,
    {
      onSuccess(data) {
        setData(data.hands_on_demo)
      },
    }
  )
  return (
    <div className="container">
      <PagesHeader
        buttonText=""
        h1="Interactive Feedback Demo"
        h2="Get hands-on with Userback"
        text="Explore the features of Userback and join the 20,000 + software teams managing feedback throughout the entire product development lifecycle"
      />
      <ShowCase hideText />
      <div className="mt-32 h-[50vh] w-full bg-indigo-100"></div>
      <QuoteComponent
        job="President + Founder"
        name="Just S."
        text={`One of my best investments ever. I love the simplicity of the tool and the features have been generous and powerful. I love that I can embed the feedback tools anywhere I work across multiple CMS systems. The reliability has been great as well.`}
      />
      <TitleAndButton
        buttonText="Start collecting user feedback for free"
        desktopSize={35}
        maxWidth={765}
        mobileSize={24.5}
        text="Bring Product Managers and Devs into alignment. No guesswork required"
      />
      <ContactUs section={data?.section7} />
    </div>
  )
}

export default Index
