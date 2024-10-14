import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import Loading from "./Loading";
import HorizontalCards from "../components/partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";

const PersonDetails = () => {
  const [category, setcategory] = useState("movie");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.person);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    // part 1 Navigation

    <div className="px-[10%] w-screen h-[230vh] bg-[#1f1e24] ">
      <nav className="h-[10vh] w-full text-zinc-100 items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-purple-500 ri-arrow-left-line"
        ></Link>
      </nav>

      {/*  Part 2 Left Poster and Details */}

      <div className="w-full flex">
        <div className="w-[30%]">
          <img
            className="shadow-xl shadow-black h-[50vh]  object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

          <div className="text-2xl text-white flex gap-x-5">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-fill"></i>
            </a>
          </div>

          {/* Personal Information */}

          <h1 className="text-2xl text-zinc-400 font-semibold my-5">
            Person Info
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
            Known for
          </h1>

          <h1 className="text-zinc-400">{info.detail.known_for_department}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
          <h1 className="text-zinc-400 ">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-zinc-400 font-semibold mt-3">BirthDay</h1>
          <h1 className="text-zinc-400">{info.detail.birthday}</h1>

          <h1 className="text-zinc-400 font-semibold mt-3">DeathDay</h1>
          <h1 className="text-zinc-400">
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>

          <h1 className="text-zinc-400 font-semibold mt-3">Place of Birth</h1>
          <h1 className="text-zinc-400">{info.detail.place_of_birth}</h1>

          <h1 className="text-zinc-400 font-semibold mt-3">Also Known as </h1>
          <h1 className="text-zinc-400 ">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>

        {/* Part 3 Right details and information */}

        <div className="w-[80%] ml-[5%]">
          <h1 className="text-5xl text-zinc-400 font-black my-5">
            {info.detail.name}
          </h1>

          <h1 className=" text-zinc-400 font-semibold">Biography </h1>
          <p>{info.detail.biography}</p>

          <h1 className="mt-5 text-lg text-zinc-400 font-semibold">
            Known for
          </h1>
          <HorizontalCards data={info.combinedCredits.cast} />

          <div className="w-full flex justify-between">
            <h1 className="mt-5 text-xl text-zinc-400 font-semibold">Acting</h1>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>

          <div
            className="list-disc text-zinc-400 w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto 
        shadow-xl shadow-yellow-50 border-2 border-zinc-700 p-5"
          >
            {info[category + "Credits"].cast.map((c, i) => (
              <li key={i} className="p-3 hover:text-white rounded hover:bg-zinc-600 duration-300 cursor-pointer">
                <Link 
                 to={`/${category}/details/${c.id}`}
                className="">
                  <span>{c.name || c.title || c.original_name || c.original_title}</span>
                  <span className="block ml-5 mt-2">{c.character && `Character Name : ${c.character}`}</span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
