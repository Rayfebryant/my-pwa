import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './RecentSend.css'



export default function RecentSend() {
    return (
        <div>
            <h4 className='send-money-text'>Send Your Money</h4>
        <Swiper
        spaceBetween={5}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img className='recent-avatar' src={require('../Assets/avatar1.png')} alt='' ></img></SwiperSlide>
            <SwiperSlide><img className='recent-avatar' src={require('../Assets/avatar2.png')} alt=''></img></SwiperSlide>
            <SwiperSlide><img className='recent-avatar' src={require('../Assets/avatar3.png')} alt=''></img></SwiperSlide>
            <SwiperSlide><img className='recent-avatar' src={require('../Assets/avatar4.png')} alt=''></img></SwiperSlide>
            <SwiperSlide><img className='recent-avatar' src={require('../Assets/avatar1.png')} alt=''></img></SwiperSlide>
            <SwiperSlide><img className='recent-avatar' src={require('../Assets/avatar2.png')} alt=''></img></SwiperSlide>
            <SwiperSlide><img className='recent-avatar' src={require('../Assets/avatar3.png')} alt=''></img></SwiperSlide>
            <SwiperSlide><img className='recent-avatar' src={require('../Assets/avatar4.png')} alt=''></img></SwiperSlide>
        </Swiper>
        </div>
    );
};

