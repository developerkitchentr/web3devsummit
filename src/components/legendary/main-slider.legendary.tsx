import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "next/image";

const MainSliderLegendary = () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
                768: {
                    slidesPerView: 8,
                    spaceBetween: 10
                },

            }}
            className="main-slider-legendary"
        >
            <SwiperSlide>
                <div className="mx-2">
                    <Image className="slider-img" src="/images/etherium-logo.svg" alt="" width={240} height={60}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mx-2">
                    <Image className="slider-img" src="/images/logo-polygon.svg" alt="" width={240} height={60}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mx-2">
                    <Image className="slider-img" src="/images/logo-near-protocol.svg" alt="" width={240} height={60}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mx-2">
                    <Image className="slider-img" src="/images/logo-solana.svg" alt="" width={240} height={60}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mx-2">
                    <Image className="slider-img" src="/images/logo-polkadot.svg" alt="" width={240} height={60}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <Image className="slider-img" src="/images/logo-stacks.svg" alt="" width={60} height={60}/>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mx-2">
                    <Image className="slider-img" src="/images/logo-avalanche.svg" alt="" width={240} height={60}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <Image className="slider-img" src="/images/logo-wax.svg" alt="" width={60} height={60}/>
            </SwiperSlide>

        </Swiper>
    )
}

export default MainSliderLegendary
