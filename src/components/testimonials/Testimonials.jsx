import React from 'react'
import css from './Testimonials.module.css'

//Importing data from testimonials.js
import Hero from '../../assets/testimonialHero.png'
import { TestimonialsData } from '../../data/testimonials'

//Importing Swiper library
import { Swiper, SwiperSlide } from 'swiper/react'


const testimonials = () => {
  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
            <div className={css.container}>
                <span>Top Rated</span>
                <span>
                    This is something written in very long parargraph, where it says practice daily.
                </span>
                <span>PRACTICE MAKES PERFECT.</span>
            </div>
        
            <img src={Hero} alt="" />

            <div className={css.container}>
                <span>100k</span>
                <span>Happy Customer</span>
            </div>
        </div>

        <div className={css.reviews}>
            Reviews
        </div>

        <div className={css.carousal}>
            <Swiper
            slidesPerView={3}
            loopFillGroupWithBlank={true}
            spaceBetween={40}
            loop={true}
            slidesPerGroup={1}
            className={css.tcarousal}
            breakpoints={{
                856: {
                    slidesPerView: 3
                },
                640: {
                    slidesPerView: 2
                },
                0: {
                    slidesPerView: 1
                }
            }}
            >
                {
                    TestimonialsData.map((testimonial, i)=>(
                        <SwiperSlide>
                            <div className={css.testimonial}>
                                <img src={testimonial.image} alt="" />
                                <span>{testimonial.comment}</span>
                                <hr />
                                <span>{testimonial.name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default testimonials