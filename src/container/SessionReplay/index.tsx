/* eslint-disable tailwindcss/classnames-order */

import { useState } from "react"
import { getData } from "@/services/apis"
import { SessionReplayApiResponse } from "@/services/types/platform/session_replay"
import { useQuery } from "@tanstack/react-query"

import ContactUs from "@/components/ContactUs"
import Header from "@/components/Header"
import PagesHeader from "@/components/PagesHeader"
import SingleVideo from "@/components/SingleVideo"

import SessionReplayItems from "./SessionReplayItems"

const Index = () => {
  const [data, setData] = useState<SessionReplayApiResponse["session_replay"]>()
  const dataQuery = useQuery<SessionReplayApiResponse>(
    ["session_replay"],
    getData,
    {
      onSuccess(data) {
        setData(data.session_replay)
      },
    }
  )

  return (
    <div className="container">
      <PagesHeader
        buttonText="Start your risk free trial - No credit card required"
        h1="Session Replay"
        h2="See bugs through the eyes of your users"
        text="View the exact steps that cause issues and understand the impact on UX with detailed visual recordings of user actions leading up to problems or bugs."
      />
      <div className="flex flex-col items-center mx-auto text-center max-w-[700px] gap-4 pb-32">
        <Header
          desktopSize={35}
          maxWidth={700}
          mobileSize={24}
          text="From browser version to screen resolution – get the info you need to work without the fuss"
        />
        <p>
          End the broken communication loop between developers and users.
          Supercharge your time to resolution by giving your teams all the
          information they need to solve the problem from the start – without
          the extra email or call.
        </p>
      </div>
      <SingleVideo />
      <SessionReplayItems />
      <ContactUs section={data?.section7} />
    </div>
  )
}

export default Index
