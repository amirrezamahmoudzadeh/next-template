import { useState } from "react"
import { getData } from "@/services/apis"
import { ForDevelopersApiResponse } from "@/services/types/useCase/userback_for_developers"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"

import ForDevelopersItems from "./ForDevelopersItems"

const Index = () => {
  const [data, setData] =
    useState<ForDevelopersApiResponse["userback_for_developers"]>()
  const dataQuery = useQuery<ForDevelopersApiResponse>(
    ["userback_for_developers"],
    getData,
    {
      onSuccess(data) {
        setData(data.userback_for_developers)
      },
    }
  )
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start your free trial and skip the back-and-forth"
        h1="Userback for Developers"
        h2="Spend less time fixing and more time building"
        text="Automatically get the user and system information you need to instantly understand issues and fix them faster."
      />
      <ForDevelopersItems />
      <ContactUs section={data?.section7} />
    </div>
  )
}

export default Index
