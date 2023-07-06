import { setLocaleText } from "@/functions/setLocaleText"
import { getData } from "@/services/apis"
import { IntegrationsApiResponse } from "@/services/types/platform/integrations"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useState } from "react"

import ContactUs from "@/components/ContactUs"
import Loading from "@/components/Loading"
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
  const { locale } = useRouter()
  return (
    <>
      {!data && <Loading />}
      {data && (
        <div className="container">
          <PagesHeader
            buttonText={setLocaleText(
              data.section1.button1_fa,
              data.section1.button1_en,
              locale as string
            )}
            h1={setLocaleText(
              data.section1.title1_fa,
              data.section1.title1_en,
              locale as string
            )}
            h2={setLocaleText(
              data.section1.title2_fa,
              data.section1.title2_en,
              locale as string
            )}
            text={setLocaleText(
              data.section1.text1_fa,
              data.section1.text1_en,
              locale as string
            )}
          />
          <IntegrationsItems
            locale={locale as string}
            section2={data.section2}
            section3={data.section3}
          />
          <IntegrationsList
            images={[
              data.section4.image1,
              data.section4.image2,
              data.section4.image3,
              data.section4.image4,
              data.section4.image5,
              data.section4.image6,
              data.section4.image7,
              data.section4.image8,
              data.section4.image9,
              data.section4.image10,
              data.section4.image11,
              data.section4.image12,
              data.section4.image13,
              data.section4.image14,
              data.section4.image15,
              data.section4.image16,
              data.section4.image17,
              data.section4.image18,
              data.section4.image19,
              data.section4.image20,
              data.section4.image21,
              data.section4.image22,
              data.section4.image23,
              data.section4.image24,
              data.section4.image25,
            ]}
            title={setLocaleText(
              data.section4.title1_fa,
              data.section4.title1_en,
              locale as string
            )}
          />
          <ContactUs section={data?.section5} />
        </div>
      )}
    </>
  )
}

export default Index
