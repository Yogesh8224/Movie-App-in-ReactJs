import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoImg from "/NoImg.jpg"

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSearches = async () => {
    try {
      const {data} = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);
  
  return (
    
      <div className="w-[50%] mx-auto h-[10vh] relative flex  items-center">
        <i className="ri-search-fill text-zinc-400 text-3xl"></i>
        <input
          className="w-[50%] text-white mx-10 p-5 text-xl outline-none border-none bg-transparent"
          onChange={(e) => setquery(e.target.value)}
          value={query}
          type="text"
          placeholder="Search anything"
        />
        {query.length > 0 && (
          <i
            onClick={() => setquery("")}
            className="ri-close-fill text-zinc-400 text-3xl right-0"
          ></i>
        )}

        <div className="z-[100] absolute w-[80%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto">
          {searches.map((s, i) => (
            <Link
              to={`/${s.media_type}/details/${s.id}`}
              key={i}
              className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 "
            >
              <img 
              className="w-[10vh] h-[10vh] object-cover rounded mr-10 shadow-lg" 
              src={
                s.backdrop_path || s.profile_path ? 
                `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`
              : NoImg} 
              alt="" />
              <span>
                {s.title || s.name || s.original_name || s.original_title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    
  );
};

export default Topnav;
