import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import TweetList from "./components/TweetList";

function App() {
  return (
    <>
      <SearchBar></SearchBar>
      <h1 className=" mt-3 mb-3 font-weight-bold text-center">Algo8 Assignment</h1>
      <hr style={{ width: "150px", backgroundColor: "maroon" }}></hr>
      <TweetList></TweetList>
    </>
  );
}

export default App;
