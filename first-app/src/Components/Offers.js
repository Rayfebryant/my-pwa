import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Offers.css'



export default function Offers() {
    return (
        <div>
            <h4 className='offers-text'>Special Offers !!! </h4>
        <Swiper
        spaceBetween={5}
        slidesPerView={1}
        centeredSlides={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img className='offers-item' src={require('../Assets/Sportswear banner design - social media banner design (2).jpg')} alt=''></img></SwiperSlide>
            <SwiperSlide><img className='offers-item' src={require('../Assets/Sportswear banner design - social media banner design (3).jpg')} alt=''></img></SwiperSlide>
            <SwiperSlide><img className='offers-item' src={require('../Assets/Sportswear banner design - social media banner design (4).jpg')} alt=''></img></SwiperSlide>
        </Swiper>
    </div>
    );
};