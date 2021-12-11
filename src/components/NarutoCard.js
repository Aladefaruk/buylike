import React from "react";

const NarutoCard = ({ data }) => {
  return (
    <div className="m-2 w-full md:w-1/3 lg:w-1/4">
      <img
        alt=""
        src={data.image_url}
        className="h-80 w-full "
        style={{ borderRadius: "10px 10px 0 0" }}
      />
      <div
        className="h-20 text-1.5 lg-text-2 bg-white text-center"
        style={{ borderRadius: "0 0 10px 10px" }}
      >
        {data.title}
      </div>
    </div>
  );
};

export default NarutoCard;
