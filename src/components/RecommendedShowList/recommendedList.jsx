import ListItem from "./RecommendedItem";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

export default function RecommendedList({ RecommendedList, onClick }) {
  const RecommendedItems = (
    <Swiper
      spaceBetween={30}
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      breakpoints={{
        1500: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        250: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }}
      className="mySwiper"
    >
      {RecommendedList.map((item) => {
        return (
          <SwiperSlide>
            <ListItem
              tvShow={item}
              onClick={onClick}
              img={item.backdrop_path}
              title={item.name}
              key={item.id}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );

  return <div className="recommendations_wrapper">{RecommendedItems}</div>;
}
