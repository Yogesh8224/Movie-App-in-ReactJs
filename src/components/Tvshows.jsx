import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Tvshows = () => {

    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv,settv] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "Tv_shows"
  

    
const GetTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
  
      if (data.results.length > 0) {
        settv((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  
  const refreshHandler = () => {
    if (tv.length === 0) {
      GetTv();
    } else {
      setpage(1);
      settv([]);
      GetTv()
    }
  }; 
  
  useEffect(() => {
    refreshHandler();
  }, [category]);
  
  return tv.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="w-[20%] text-2xl font-semibold text-zinc-400 ">
          <i
            onClick={() => navigate(-1)}
            className="text-blue-500 ri-arrow-left-line"
          ></i>
          Movie<small className="ml-2 text-sm text-zinc-200">({category})</small>
        </h1>

        <div className="flex items-center w-[80%]">
          <Topnav />

          <Dropdown
            title="Category"
            options={["popular", "top_rated", "on_the_air", "airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />

          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<h1>Loading....</h1>}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading/>
  );

}

export default Tvshows
