import { NextPage } from "next"
import FeedbackPortal from "@/container/FeedbackPortal"
import Page from "@/layout/Page"

import { useLocaleText } from "@/hooks/useLocaleText"

const Index: NextPage = () => {
  return (
    <Page
      title={useLocaleText("پورتال بازخورد", "Feedback Portal")}
      className="bg-[#F8F8F8]"
    >
      <FeedbackPortal />
    </Page>
  )
}

export default Index
