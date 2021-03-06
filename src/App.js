import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "./Redux/actions/data";
import Loader from "react-loader-spinner";
import MainApp from "./container/MainApp";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const GetAllNarutoCards = () => {
    fetch(`https://api.jikan.moe/v3/search/anime?q=naruto&amp;limit=16`, {})
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(updateData(responseJson.results));
        setLoading(false)
      
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    GetAllNarutoCards();
  }, []);

  return loading ? (
    <Loader
      type="Puff"
      color="blue"
      height={60}
      width={60}
      className="flex justify-center items-center py-20"
    />
  ) : (
    <div
      className=" w-full flex justify-center items-center mx-auto"
      style={{ height: "100vh" }}
    >
      <MainApp />
    </div>
  );
}

export default App;
