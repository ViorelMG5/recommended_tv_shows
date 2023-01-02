import "./App.css";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TvShowApi } from "./api/tvShow";
import Rating from "./components/Rating/rating";
import logoImg from "./assets/images/logo.webp";
import RecommendedList from "./components/RecommendedShowList/recommendedList";
import SearchBar from "./components/SearchBar/SearcBar";
import { Video } from "./components/Video/Video";

function App() {
  const [currentTvShow, setCurrentTvShow] = useState();
  const [currentTvRecommendations, setCurrentTvRecommendations] = useState([]);
  const [currentVideo, setCurrentVideo] = useState([]);
  const [currentSearchList, setCurrentSearchList] = useState([]);

  async function FetchByTitle(title) {
    const searchRequest = await TvShowApi.fetchByTitle(title);
    if (searchRequest.length > 0) {
      setCurrentSearchList(searchRequest.slice(0, 10));
    }
  }

  // Fetch Video
  async function fetchByVideo(tv_id) {
    const getVideo = await TvShowApi.fetchByVideo(tv_id);
    console.log(getVideo);
    if (getVideo.length > 0) {
      const filterTrailer = getVideo.filter((video) => {
        return video.name.includes("Trailer");
      });
      setCurrentVideo(
        filterTrailer[0] === undefined ? getVideo[0] : filterTrailer[0]
      );
    } else {
      setCurrentVideo([]);
    }
  }
  useEffect(() => {
    if (currentTvShow) {
      fetchByVideo(currentTvShow.id);
    }
  }, [currentTvShow]);

  // Fetch popular shows
  async function fetchPopulars() {
    const popularTvShowList = await TvShowApi.fetchPopulars();
    if (popularTvShowList.length > 0) {
      setCurrentTvShow(popularTvShowList[0]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  // Fetch recommended shows
  async function fetchRecommendation(tvShowId) {
    const recommendationsTvShows = await TvShowApi.fetchRecommendation(
      tvShowId
    );
    if (recommendationsTvShows.length > 0) {
      setCurrentTvRecommendations(recommendationsTvShows.slice(0, 10));
    }
  }
  useEffect(() => {
    if (currentTvShow) {
      fetchRecommendation(currentTvShow.id);
    }
  }, [currentTvShow]);

  // Update State
  function updateCurrentShow(tvShow) {
    setCurrentTvShow(tvShow);
    setCurrentSearchList([]);
  }

  // Background Color
  const getBackground = () => {
    return currentTvShow
      ? `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url("${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}") no-repeat center / cover`
      : "black";
  };
  // Vote rating
  const voteRating =
    currentTvShow && (currentTvShow.vote_average / 2).toFixed(1);
  return (
    <div className="App" style={{ background: getBackground() }}>
      <div className="content_outer_wrapper">
        <div className="header">
          <div className="logo">
            <img alt="blog" src={logoImg} />
          </div>
          <div className="search_wrapper">
            <SearchBar
              getShow={updateCurrentShow}
              getShowList={FetchByTitle}
              showList={currentSearchList}
            />
          </div>
        </div>

        <div className="content_wrapper d-flex">
          <div className="info">
            <div className="title">
              <h1>{currentTvShow && currentTvShow.name}</h1>
            </div>
            <div className="rating_wrapper">
              <span className="rating">{voteRating}</span>
              <div>
                {currentTvShow && <Rating voteScore={voteRating}></Rating>}
              </div>
            </div>
            <div className="description">
              <p>{currentTvShow && currentTvShow.overview}</p>
            </div>
          </div>
          <div className="video_wrapper">
            <Video videoReq={currentVideo.key} />
          </div>
        </div>

        <div className="recommendations">
          <h2>Recommended shows</h2>
          {currentTvShow && (
            <RecommendedList
              RecommendedList={currentTvRecommendations}
              onClick={updateCurrentShow}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
