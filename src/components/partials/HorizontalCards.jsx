import React from "react";
import { Link } from "react-router-dom";
import noimage from "/NoImg.jpg"


const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%] flex overflow-y-hidden mb-5 p-5">
      {data.length > 0 ? data.map((d, i) => (
        <Link
          to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className="min-w-[17%] h-[40vh] mr-5 bg-zinc-900 mb-5"
        > 
          <img
            className="w-full h-[45%]  object-cover"
            src={d.backdrop_path || d.poster_path ? 
               `https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path
            }`:noimage} 
            alt=""
          />
          <div className="text-white p-3 h-[55%] overflow-y-auto">
            <h1 className="mt-3 mb-2 text-xl font-semibold text-white">
              {d.title || d.name || d.original_name || d.original_title}
            </h1>
            <p className="">
              {d.overview.slice(0, 28)}...
              <span className="text-blue-400">more</span>
            </p>
          </div>
        </Link> 
      )) : <h1 className="text-3xl text-whit font-black text-center">No Recommendations</h1>}
    </div>
  );
};

export default HorizontalCards;
