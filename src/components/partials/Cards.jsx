import React from "react";
import { Link } from "react-router-dom";
import noimage from "/NoImg.jpg"

const Cards = ({ data, title }) => {
  console.log(title)
  return (
    <div className="flex flex-wrap w-full p-[5%] bg-[#1f1e24]">
      {data.map((c, i) => (
        <Link to={`/${c.media_type || title}/details/${c.id}`} className="relative w-[25vh] mr-[5%] mb-[5%]" key={i}>
          <img
            className="shadow-xl shadow-black h-[40vh] object-cover"
            src={ c.poster_path || c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }`:noimage
          }
            alt=""
          />
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
          {c.vote_average && (
            <div className="absolute right-[-10%] bottom-[25%] text-xl rounded-full bg-yellow-500 font-semibold text-white w-[7vh] h-[7vh] flex justify-center items-center">
              {(c.vote_average * 10).toFixed()}
              <sup>%</sup>
            </div>
          )}{" "}
        </Link>
      ))}
    </div>
  );
};

export default Cards;

// {(c.vote_average * 10).toFixed()}
