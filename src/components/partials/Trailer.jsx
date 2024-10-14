import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Notfound from "../Notfound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);

  return (
    <div className="absolute w-screen bg-[(0,0,0,.9)] z-[100] top-5 left-0 flex items-center justify-center">
      <Link
        onClick={() => navigate(-1)}
        className="absolute hover:text-purple-500 text-3xl ri-close-fill text-white right-[2%] top-[0.5%]"
      ></Link>

      {ytvideo ? (
        <ReactPlayer
          controls
          height={700}
          width={1400}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <Notfound />
      )}
    </div>
  );
};

export default Trailer;
