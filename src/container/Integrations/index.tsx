import { useState } from "react"
import { getData } from "@/services/apis"
import { IntegrationsApiResponse } from "@/services/types/platform/integrations"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"

import IntegrationsItems from "./IntegrationsItems"
import IntegrationsList from "./IntegrationsList"

const Index = () => {
  const [data, setData] = useState<IntegrationsApiResponse["integrations"]>()
  const dataQuery = useQuery<IntegrationsApiResponse>(
    ["integrations"],
    getData,
    {
      onSuccess(data) {
        setData(data.integrations)
      },
    }
  )
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start free trial - No credit card required"
        h1="Integrations"
        h2="Seamlessly integrate feedback into every part of the product roadmap"
        text="Automate feedback distribution throughout the entire user feedback lifecycle and eliminate information silos"
      />
      <IntegrationsItems />
      <IntegrationsList />
      <ContactUs section={data?.section7} />
    </div>
  )
}

export default Index
