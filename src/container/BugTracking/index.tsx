import { setLocaleText } from "@/functions/setLocaleText"
import { bugTrackingData } from "@/servises/apis"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
import PagesHeader from "@/components/PagesHeader"
import QuoteSlider from "@/components/QuoteSlider"

import BugTrackingItems from "./BugTrackingItems"

const Index = () => {
  const { data } = useQuery(["bug-tracking"], bugTrackingData)
  const { locale } = useRouter()
  console.log(data?.bug_tracking)
  return (
    <>
      {!data && <Loading />}
      {data && (
        <div className="container">
          <PagesHeader
            buttonText={setLocaleText(
              data.bug_tracking.section1.button1_fa,
              data.bug_tracking.section1.button1_en,
              locale as string
            )}
            h1={setLocaleText(
              data.bug_tracking.section1.title1_fa,
              data.bug_tracking.section1.title1_en,
              locale as string
            )}
            h2="Replicate and resolve issues faster with contextual and visual bug reports"
            text="StreaLet people report bugs in-app and give developers the session, system and user details they need to get things fixed faster."
          />
          <BugTrackingItems />
          <QuoteSlider />
          <ContactUs />
        </div>
      )}
    </>
  )
}

export default Index
