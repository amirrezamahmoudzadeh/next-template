import React from "react"
import { motion } from "framer-motion"

interface Props {
  onClick: () => void
  isOpen: boolean
  className?: string
  bgColor?: string
  lineColor?: string
  hasDelay?: boolean
}

const CloseButton: React.FC<Props> = ({
  onClick,
  isOpen,
  className,
  bgColor,
  lineColor,
  hasDelay,
}) => {
  return (
    <div
      onClick={() => onClick()}
      className={`relative flex min-h-[48px] min-w-[48px] items-center justify-center self-end rounded-full ${
        className && className
      }`}
      style={{ backgroundColor: bgColor ? bgColor : "rgba(0,0,0,.1)" }}
    >
      <motion.div
        className="w-0.5 bg-white"
        style={{ backgroundColor: lineColor ? lineColor : "white" }}
        initial={{ x: 0, rotate: 45 }}
        animate={
          isOpen
            ? { x: 0, rotate: 45, opacity: 1, height: "26px" }
            : { opacity: 0, height: 0 }
        }
        transition={{
          duration: 0.8,
          ease: [0.15, 0.2, 0.1, 0],
          delay: hasDelay ? 0.5 : 0,
        }}
      ></motion.div>
      <motion.div
        className="absolute w-0.5 bg-white"
        style={{ backgroundColor: lineColor ? lineColor : "white" }}
        initial={{ x: 0, rotate: 135 }}
        animate={
          isOpen
            ? { x: 0, rotate: 135, opacity: 1, height: "26px" }
            : { opacity: 0, height: 0 }
        }
        transition={{
          duration: 0.8,
          ease: [0.15, 0.2, 0.1, 0],
          delay: hasDelay ? 0.5 : 0,
        }}
      ></motion.div>
    </div>
  )
}

export default CloseButton
