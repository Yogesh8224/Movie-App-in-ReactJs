import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-3">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] text-2xl  ri-tv-fill"></i>
        <span className="text-2xl"> Movie App</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <Link className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </Link>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-xl p-3">
          <i className="ri-fire-fill mr-2"></i>
          Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-xl p-3">
          <i className="ri-bard-fill mr-2"></i> Popular
        </Link>
        <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-xl p-3">
          <i className="ri-movie-2-line mr-2"></i>
          Movies
        </Link>
        <Link to="/tvshows" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-xl p-3">
          <i className="ri-tv-fill mr-2"></i>
          Tv Shows
        </Link>
        <Link to="/person" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-xl p-3">
          <i className="ri-user-heart-fill mr-2"></i>
          People
        </Link>

        <hr className="border-none h-[1px] bg-zinc-400" />

        <Link className="text-white font-semibold text-xl mt-10 mb-3">
          Website Information
        </Link>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-xl p-3">
          <i className="ri-information-line mr-2"></i> About
        </Link>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-xl p-3">
          <i className="ri-phone-fill mr-2"></i>
          Contact us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
