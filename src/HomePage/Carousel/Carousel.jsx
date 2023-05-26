import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const Carousel = () => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="w-full h-96 flex items-center justify-center  bg-gray-400">
                    <h2 className=" text-center text-3xl font-bold">Cricket Ball</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-96 flex items-center justify-center  bg-gray-400">
                    <h2 className=" text-center text-3xl font-bold">Cricket Gloves</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-96 flex items-center justify-center  bg-gray-400">
                    <h2 className=" text-center text-3xl font-bold">Cricket Guards</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-96 flex items-center justify-center  bg-gray-400">
                    <h2 className=" text-center text-3xl font-bold">Football</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-96 flex items-center justify-center  bg-gray-400">
                    <h2 className=" text-center text-3xl font-bold">Football Gloves</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-96 flex items-center justify-center  bg-gray-400">
                    <h2 className=" text-center text-3xl font-bold">Football Guards</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-96 flex items-center justify-center  bg-gray-400">
                    <h2 className=" text-center text-3xl font-bold">Football Goal Post</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-96 flex items-center justify-center  bg-gray-400">
                    <h2 className=" text-center text-3xl font-bold">Badminton Bat</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-96 flex items-center justify-center  bg-gray-400">
                    <h2 className=" text-center text-3xl font-bold">Badminton Grip</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-96 flex items-center justify-center  bg-gray-400">
                    <h2 className=" text-center text-3xl font-bold">Badminton Net</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-96 flex items-center justify-center  bg-[#b5ff2c71]">
                    <h2 className=" text-center text-3xl font-bold">And Sports Toys</h2>
                </div>
            </SwiperSlide>



        </Swiper>
    );
};

export default Carousel;












