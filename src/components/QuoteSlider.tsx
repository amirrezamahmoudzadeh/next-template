/* eslint-disable tailwindcss/classnames-order */

import { FC } from "react"
import { motion } from "framer-motion"
// import Swiper and modules styles
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface Props {
  titles: string[]
  texts: string[]
}

const QuoteSlider: FC<Props> = ({ texts, titles }) => {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides
      spaceBetween={10}
      grabCursor
      loop={true}
      navigation={{ nextEl: "#slider-next-btn", prevEl: "#slider-prev-btn" }}
      modules={[Pagination, Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      {titles.map((title, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center gap-8">
              <div className={`quote-wrapper`}>
                <div className="opacity-40">
                  <Quote
                    fill="rgba(156 ,163 ,175)"
                    color="rgba(156 ,163 ,175)"
                  />
                </div>
                <p className="text-[1.25rem]">{title}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xs">
                  {texts[index].split(" ")[0] +
                    " " +
                    texts[index].split(" ")[1]}
                </p>
                <p className="text-sm text-gray-500">
                  {texts[index].split(" ").slice(2).join(" ")}
                </p>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
      <div className="flex items-center justify-center gap-8 pt-8">
        <motion.div
          whileHover={{ scale: 1.16 }}
          className="p-4 bg-white rounded-full cursor-pointer"
          id="slider-prev-btn"
        >
          <ArrowLeft id="asdfg" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.16 }}
          className="p-4 bg-white rounded-full cursor-pointer"
          id=""
        >
          <ArrowRight id="slider-next-btn" />
        </motion.div>
      </div>
    </Swiper>
  )
}

export default QuoteSlider
