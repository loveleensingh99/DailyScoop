import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = ({ country = "in", pageSize = 6, category = "science" }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = (pageNo) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=38ec2f563a3d47828bdef6ff85fdaa7d&page=${pageNo}&pageSize=${pageSize}`;

    setLoading(true);
    fetch(url)
      .then((result) => result.json())
      .then((res) => {
        setArticles(res.articles);
        setTotalResults(res.totalResults);
        setLoading(false);
      });
  };

  useEffect(() => {
    updateNews(page);
  }, [page]);

  const handleNextClick = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  const handlePrevClick = (e) => {
    e.preventDefault();
    setPage(page - 1);
  };

  return (
    <>
      <div className="container my-3">
        <h2 className="text-center" style={{ margin: "40px" }}>
          Daily Scoop-Latest News
        </h2>

        {loading && <Spinner />}

        <div className="row">
          {!loading &&
            articles.map((element) => (
              <div className="col-md-4 mb-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  publishedAt={element.publishedAt}
                  author={element.author ? element.author : "Unknown"}
                  source={element.source.name}
                />
              </div>
            ))}
        </div>

        <div className="container my-3">
          <nav aria-label="Page navigation example">
            <ul className="pagination display-flex justify-content-between">
              <li className={`page-item ${page <= 1 ? "disabled" : ""}`}>
                <a className="page-link" href="#" onClick={handlePrevClick}>
                  &larr; Previous
                </a>
              </li>
              <li
                className={`page-item ${
                  page + 1 >= Math.ceil(totalResults / pageSize)
                    ? "disabled"
                    : ""
                }`}
              >
                <a className="page-link " href="#" onClick={handleNextClick}>
                  Next &rarr;
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Pagination */}
        <div className="">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a
                  class="page-link"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "science",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
