import React from "react";

const SearchBox = ({ OnSearchChange }) => {
  return (
    <div className="flex flex-col w-3/4 mx-auto  justify-center lg:ml-56 xl:ml-72">
      <div className="flex ">
        <input
          type="text"
          placeholder="search naruto movies "
          className="bg-blue-400 text white py-4 px-2 lg:py-10 lg:px-5 w-full lg:w-3/4  border border-white text-white"
          style={{ borderRadius: "10px 0 0 10px", outline: "none" }}
          onChange={OnSearchChange}
        />
        <div
          className="mx-2 py-4 px-2 lg:py-5 lg:px-3 text-center  text-white w-20 border border-white bg-blue-400"
          style={{ cursor: "pointer", borderRadius: "0 10px 10px 0" }}
        >
          Go
        </div>
      </div>
      <p
        style={{ color: "whitesmoke" }}
        className="text-1.5 lg:text-2 my-4 item-center"
      >
        Requesting:{" "}
        <span className="text-white ">
          https://api.jikan.moe/v3/search/anime?q=naruto&amp;limit=16
        </span>
      </p>
    </div>
  );
};

export default SearchBox;
