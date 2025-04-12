import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation } from "swiper/modules";
function HomeSwiper() {
  const year = new Date().getFullYear();

  const data = [
    {
      picture:
        "https://cdn.wallart.com/img/psk/oXuJJmuXhBmZQ/peel-and-stick-wallpaper-white-wavy-structure-59.jpg",
    },
    {
      picture:
        "https://cdn.wallart.com/img/pin/qduxx2SJhDO/wallpaper-inspiration-white-wavy-structure-1583.jpg",
    },
    {
      picture:
        "https://cdn.wallart.com/img/psk/b9uNN0uqhb8O5/peel-and-stick-wallpaper-white-wavy-structure-69.jpg",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={true}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide>
            <div className="flex justify-center items-center relative">
              <h2 className="absolute text-[40px] font-[600] backdrop-blur-[10px] px-4 py-2 rounded-[10px]">
                GipsLepka # {year}
              </h2>
              <img
                src={item.picture}
                className="w-full object-cover rounded-[10px] h-[500px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HomeSwiper;
