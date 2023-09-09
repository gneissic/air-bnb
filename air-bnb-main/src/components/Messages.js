// import React from 'react'

// const Messages = () => {
//   return (
//     <div className='text-center mt-[2rem] text-2xl font-bold font-nun'>You have no messages yet......</div>
//   )
// }

// export default Messages
import { A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Messages =  () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[ A11y]}
      spaceBetween={50}
      slidesPerView={3}

      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
export default Messages

