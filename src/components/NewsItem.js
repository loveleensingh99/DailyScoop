import React, { Component } from "react";

export default function NewsItem({
  title,
  description,
  imgUrl,
  newsUrl,
  publishedAt,
  author,
  source,
}) {
  return (
    <>
      <div className="card h-100 mb-2">
        <span className="position-absolute top-0 badge bg-danger">
          {source}
        </span>
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://photos5.appleinsider.com/gallery/51911-102961-AirTag-Red-xl.jpg"
          }
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body d-flex flex-column justify-content-between ">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} on{" "}
              {new Date(publishedAt).toLocaleString(undefined, {
                timeZone: "Asia/Kolkata",
              })}
            </small>
          </p>

          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
}
