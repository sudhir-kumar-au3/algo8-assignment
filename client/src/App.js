import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import GoogleNews from "./components/GoogleNews";
import Axios from "axios";
import moment from "moment";
import TwitterFeed from "./components/TwitterFeed";
function App() {
  const [newsList, setNewsList] = useState([]);
  const [err, setError] = useState(null);
  const [query, setQuery] = useState("india");
  const [totalNews, setTotalNews] = useState(0);
  const fetchData = async () => {
    try {
      const res = await Axios.get(`/api/news?q=${query}`);
      const twits = await Axios.post(`/api/twitter`, query);
      const twitRes = await twits.data;
      const output = await res.data;
      const response = await output.articles;
      const total = await output.totalResults;
      console.log({ response, total });
      setTotalNews(total);
      return setNewsList(response);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  const handleSearch = (e) => {
    const query = e.target.value;
    setQuery(query);
  };
  return (
    <>
      <SearchBar query={query} onChange={handleSearch}></SearchBar>
      <h1 className=" mt-3 mb-3 font-weight-bold text-center">
        Algo8 Assignment
      </h1>
      <hr style={{ width: "150px", backgroundColor: "maroon" }}></hr>
      <div className="row p-3">
        <div className="col-md-6">
          <TwitterFeed></TwitterFeed>
        </div>
        <div className="col-md-6">
          {err && (
            <div className="alert alert-danger container text-center">
              Something went wrong
            </div>
          )}
          <div className="border rounded p-2">
            <div className="text-center alert alert-dark text-secondary">
              {totalNews} Results
            </div>
            {newsList
              ? newsList.map((data, index) => {
                  return (
                    <GoogleNews
                      key={index}
                      image={data.urlToImage}
                      author={data.author}
                      description={data.description}
                      publishedAt={moment(data.publishedAt).format(
                        "YYYY-MM-D h:mm a"
                      )}
                      title={data.title}
                      url={data.url}
                    ></GoogleNews>
                  );
                })
              : "Loading..."}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
