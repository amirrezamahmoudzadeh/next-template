import { useState } from "react"
import { getData } from "@/services/apis"
import { ProductRoadmappingApiResponse } from "@/services/types/useCase/product_roadmapping"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"

import ProductRoadmappingItems from "./ProductRoadmappingItems"

const Index = () => {
  const [data, setData] =
    useState<ProductRoadmappingApiResponse["product_roadmapping"]>()
  const dataQuery = useQuery<ProductRoadmappingApiResponse>(
    ["product_roadmapping"],
    getData,
    {
      onSuccess(data) {
        setData(data.product_roadmapping)
      },
    }
  )
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start your free trial - No credit card required"
        h1="Product Roadmapping"
        h2="Place users at the center of your Product Roadmap"
        text="Take the guesswork out of product decisions with actionable insights based on better customer understanding."
      />
      <ProductRoadmappingItems />
      <ContactUs section={data?.section7} />
    </div>
  )
}

export default Index
