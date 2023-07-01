import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"

import BugTrackingItems from "./BugTrackingItems"
import QuoteSlider from "@/components/QuoteSlider"
import { useQuery } from "@tanstack/react-query"
import { bugTrackingData } from "@/servises/apis"

const Index = () => {
  const data = useQuery(['bug-tracking'] , bugTrackingData)
  console.log(data)
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start bug tracking for free"
        h1="Bug Tracking Software"
        h2="Replicate and resolve issues faster with contextual and visual bug reports"
        text="StreaLet people report bugs in-app and give developers the session, system and user details they need to get things fixed faster."
      />
      <BugTrackingItems />
      <QuoteSlider />
      <ContactUs />
    </div>
  )
}

export default Index
