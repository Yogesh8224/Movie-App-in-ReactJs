import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import Loading from "./Loading";
import HorizontalCards from "../components/partials/HorizontalCards";

const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.tv);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4),rgba(0,0,0,.4)),
  url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no repeat",
      }}
      className="w-screen h-[175vh] px-[10%] relative"
    >
      {/* {Part 1 Navigation } */}
      <nav className=" w-full h-[10vh] text-zinc-100 flex gap-10 text-xl items-center">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-blue-500 ri-arrow-left-line"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          <i className="">imdb</i>
        </a>
      </nav>

      {/* {Part 2 Poster and Details } */}

      <div className="w-full flex text-white">
        <img
          className="shadow-xl shadow-black h-[65vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-5">
          <h1 className="text-5xl font-black text-white">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <small className="text-2xl font-bold text-zinc-200">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className="mt-5 mb-5 flex text-white items-center gap-x-3">
            <span className="text-xl rounded-full bg-yellow-500 font-semibold text-white w-[7vh] h-[7vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()}%
            </span>

            <h1 className="w-[60px] font-semibold text-2xl leading-6">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>

          <h1 className="text-2xl mb-3 mt-5">Overview</h1>
          <p>{info.detail.overview}</p>

          <h1 className="text-2xl mb-3 mt-5">tv Translated</h1>
          <p className="mb-10">{info.translations.join(" , ")}</p>

          <Link
            className="py-3 px-5 font-semibold bg-purple-500 rounded-lg"
            to={`${pathname}/trailer`}
          >
            <i className="ri-play-fill text-xl mr-1"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/* {Part 3 Available on Platforms} */}

      <div className="w-[80%] flex flex-col gap-y-5 mt-10">
        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Platforms</h1>
            {info.watchproviders.buy.map((w) => (
              <img
                key={w.id}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w) => (
              <img
                key={w.id}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Platforms</h1>
            {info.watchproviders.buy.map((w) => (
              <img
                key={w.id}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
      {/* part 4 Seasons */}

      <h1 className="text-3xl font-bold text-white">Seasons</h1>
      <div className="w-[100%] flex overflow-y-hidden mb-5 p-5">
        {info.detail.seasons.length > 0 ? (
          info.detail.seasons.map((s, i) => (
            <div>
              <img
                className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] min-w-[14vw] h-[30vh]"
                src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
                alt=""
              />

              <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
                {s.name}
              </h1>
            </div>
          ))
        ) : (
          <h1 className="text-3xl text-whit font-black text-center">
            No Recommendations
          </h1>
        )}
      </div>

      {/* part 5 Recommendation and similar */}

      <h1 className=" text-3xl font-bold text-white">
        Recommended and Similar tvs
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default TvDetails;
