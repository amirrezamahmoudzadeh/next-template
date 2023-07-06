/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react"
import Link from "next/link"

interface Props2 {
  imageSrc: string
  link: string
}

const IntegrationsListItem: React.FC<Props2> = ({ imageSrc, link }) => {
  return (
    <Link
      href={link}
      className="flex items-center justify-center w-24 h-24 p-2 mx-auto transition-all bg-white hover:p-0"
    >
      <img src={imageSrc} alt="" />
    </Link>
  )
}

interface Props {
  images: string[]
  title: string
}

const IntegrationsList: FC<Props> = ({ images, title }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-8 pb-32 lg:flex-row children:flex-1">
      <div className="flex items-center justify-center">
        <h3 className="max-w-[300px] font-medium text-[14px] lg:text-[20px]">
          {title}
        </h3>
      </div>
      <div className="grid self-stretch justify-between grid-cols-2 gap-4 sm:grid-cols-5">
        {images.map((item) => {
          return <IntegrationsListItem imageSrc={item} link={""} />
        })}
      </div>
    </div>
  )
}

export default IntegrationsList
