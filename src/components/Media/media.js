import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectCoverflow, Pagination],
        };
    },
    data(){
        return {
            images: [
                {
                    id: 1,
                    src: '1.jpg'
                },
                {
                    id: 2,
                    src: '1.jpg'
                },
                {
                    id: 3,
                    src: '1.jpg'
                },
                {
                    id: 4,
                    src: '1.jpg'
                }

            ]
        }
    }
};