import ListItem from "./RecommendedItem";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

export default function RecommendedList({ RecommendedList, onClick }) {
  const RecommendedItems = (
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
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
