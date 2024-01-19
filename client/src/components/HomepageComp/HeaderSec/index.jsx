import React from 'react'
import "./index.scss"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



import { Pagination } from 'swiper/modules';
const Header = () => {
    return (
        <section id='header-sec'>

            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='div1 headers'>
                        <div className="content">
                            <h1>Book a table for yourself at a time convenient for you</h1>
                            <div className="butt">
                                Book a table
                            </div>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>
                    <div className='div2 headers'>
                        <div className="content">
                            <h1>Book a table for yourself at a time convenient for you</h1>
                            <div className="butt">
                                Book a table
                            </div>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>
                    <div className='div3 headers'>
                        <div className="content">
                            <h1>Book a table for yourself at a time convenient for you</h1>
                            <div className="butt">
                                Book a table
                            </div>
                        </div>
                    </div>


                </SwiperSlide>
            </Swiper>
        </section>

    )
}

export default Header