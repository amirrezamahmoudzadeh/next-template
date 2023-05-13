import Page from "@/layout/Page"
import { NextPage } from "next"
import Home from '@/container/Home'

const Index: NextPage = () => {
  return (
    <Page title="Home" className="bg-[#F8F8F8]">
      <Home />
    </Page>
  )
}

export default Index
