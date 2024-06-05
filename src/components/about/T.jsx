import React from "react";
import Swiper from 'swiper';
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// const swiper = new Swiper(...);

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
//   ...
});

export default function Team() {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

  return (
    <div>
      <div class="swiper">
        {/* <!-- Additional required wrapper --> */}
        <div class="swiper-wrapper">
          {/* <!-- Slides --> */}
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          ...
        </div>
        {/* <!-- If we need pagination --> */}
        <div class="swiper-pagination"></div>

        {/* <!-- If we need navigation buttons --> */}
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        {/* <!-- If we need scrollbar --> */}
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
  );
}
