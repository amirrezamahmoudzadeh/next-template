import { useState } from "react"
import { getData } from "@/services/apis"
import { SoftwareFeatureRequestsApiRespone } from "@/services/types/useCase/software_feature_requests"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteSlider from "@/components/QuoteSlider"

import FeatureReqItems from "./FeatureReqItems"

const Index = () => {
  const [data, setData] =
    useState<SoftwareFeatureRequestsApiRespone["software_feature_requests"]>()
  const dataQuery = useQuery<SoftwareFeatureRequestsApiRespone>(
    ["software_feature_requests"],
    getData,
    {
      onSuccess(data) {
        setData(data.software_feature_requests)
      },
    }
  )
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start prioritizing features free"
        h1="Software Feature Requests"
        h2="Prioritize the features that users will love"
        text="Know what users need so you can build the features that add true value."
      />
      <FeatureReqItems />
      <QuoteSlider />
      <ContactUs section={data?.section7} />
    </div>
  )
}

export default Index
