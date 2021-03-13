import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay, EffectFade, Thumbs } from 'swiper'

SwiperClass.use([Pagination, Mousewheel, Autoplay, EffectFade, Thumbs])

Vue.use(VueAwesomeSwiper)
