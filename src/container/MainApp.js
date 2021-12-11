import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";

const MainApp = () => {
  // States
  const [page, setPage] = useState(1);
  const [searchfield, setSearchField] = useState("");

  // selector
  const data = useSelector((state) => state.data);

  const dataPerPage = 6;
  const indexOfLastComment = page * dataPerPage;
  const indexOfFirstComment = indexOfLastComment - dataPerPage;
  const DatatoShow = data.data.slice(indexOfFirstComment, indexOfLastComment);

  const OnSearchChange = (e) => setSearchField(e.target.value);

  const FilteredData = DatatoShow.filter((items) =>
    items.title.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <div
      className="w-full h-full flex-cols bg-blue-500  py-10"
      style={{ overflow: "hidden" }}
    >
      <div className=" flex flex justify-center">
        <SearchBox OnSearchChange={OnSearchChange} />
      </div>
      <div className="overflow-y-scroll " style={{ height: "80%" }}>
        <CardList
          data={FilteredData}
          setPage={() => setPage(page + 1)}
          DatatoShow={DatatoShow}
          dataPerPage={dataPerPage}
        />
      </div>
    </div>
  );
};

export default MainApp;
