import React from "react";
import avatarIImg from "../../assets/1.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

SwiperCore.use([Autoplay]);
export default function Testimonial() {
  return (
    <>
      <section>
        <div>
          <h4 className="font-bold text-white text-center sm:text-[40px] text-[24px] mb-2">
            TESTIMONIAL
          </h4>
          <p className="mt-4">
          What our cclient says about us
          </p>
          <Swiper
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="text-white"
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 10,
              stretch: 50,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 150,
              },
            }}
          >
            <SwiperSlide className="my-[20px]">
              <div className="flex flex-col items-center p-10">
                <div className="w-[105px] h-[105px] bg-white text-black flex justify-center rounded-full items-center">
                  <img
                    src={avatarIImg}
                    alt="testimonial-avatar"
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>
                <p className="my-5 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique praesentium voluptate natus sunt, molestiae dolorum?
                </p>
                <h6 className="mt-5">- Lorem ipsum dolor sit amet.</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className="my-[20px]">
              <div className="flex flex-col items-center p-10">
                <div className="w-[105px] h-[105px] bg-white flex justify-center rounded-full items-center">
                  <img
                    src={avatarIImg}
                    alt="testimonial-avatar"
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>
                <p className="my-5 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique praesentium voluptate natus sunt, molestiae dolorum?
                </p>
                <h6 className="mt-5">- Lorem ipsum dolor sit amet.</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className="my-[20px]">
              <div className="flex flex-col items-center p-10">
                <div className="w-[105px] h-[105px] bg-white flex justify-center rounded-full items-center">
                  <img
                    src={avatarIImg}
                    alt="testimonial-avatar"
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>
                <p className="my-5 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique praesentium voluptate natus sunt, molestiae dolorum?
                </p>
                <h6 className="mt-5">- Lorem ipsum dolor sit amet.</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className="my-[20px]">
              <div className="flex flex-col items-center p-10">
                <div className="w-[105px] h-[105px] bg-white flex justify-center rounded-full items-center">
                  <img
                    src={avatarIImg}
                    alt="testimonial-avatar"
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>
                <p className="my-5 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique praesentium voluptate natus sunt, molestiae dolorum?
                </p>
                <h6 className="mt-5">- Lorem ipsum dolor sit amet.</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className="my-[20px]">
              <div className="flex flex-col items-center p-10">
                <div className="w-[105px] h-[105px] bg-white flex justify-center rounded-full items-center">
                  <img
                    src={avatarIImg}
                    alt="testimonial-avatar"
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>
                <p className="my-5 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique praesentium voluptate natus sunt, molestiae dolorum?
                </p>
                <h6 className="mt-5">- Lorem ipsum dolor sit amet.</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

