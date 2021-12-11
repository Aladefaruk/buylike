import React from "react";
import NarutoCard from "./NarutoCard";

const CardList = ({ data, DatatoShow, setPage, dataPerPage }) => {
  return (
    <div className="text-center">
      <div className="flex flex-wrap justify-center w-2/3 mx-auto">
        {data.map((data, i) => (
          <NarutoCard data={data} />
        ))}
      </div>
      <div>
        {DatatoShow.length >= dataPerPage ? (
          <button
            style={{
              color: "#687497",
              cursor: "pointer",
            }}
            onClick={setPage}
            className="my-10 text-2 bg-white rounded-lg mx-auto p-3"
          >
            Load More
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CardList;
