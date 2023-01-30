
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {SliderProducts} from '../../data/products'

import './Slider.css'

const Slider = () => {
  return (
    <div className="s_container">
        <Swiper
        modules={[Pagination, Navigation]}
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3} 
        spaceBetween={40} 
        slidesPerGroup={1} 
        loop={true}
        breakpoints={{
            856: {
                slidesPerView: 3
            },
            300: {
                slidesPerView: 2
            },
            0: {
                slidesPerView: 1
            }
        }}>
            {SliderProducts.map((slide, i) => (
                <SwiperSlide>
                    <div className="left-s">
                        <div className="name">
                            <span>{slide.name}</span>
                            <span>{slide.detail}</span>
                        </div>
                        <span>${slide.price}</span>
                        <div className='shopNow'>Shop now</div>
                    </div>

                    <img src={slide.img} alt="product" className='img-p' />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Slider