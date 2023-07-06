import React, { FC } from "react"

interface Props {
  video : string
}

const SingleVideo:FC<Props> = ({video}) => {
  return (
    <div className="flex flex-col py-16">
      <video
        width="1280"
        height="720"
        className="mx-auto"
        preload="auto"
        loop={true}
        autoPlay={true}
        muted={true}
      >
        <source
          src={video}
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default SingleVideo
