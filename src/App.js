import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";

let page = 6;

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <News
                key="general1"
                pageSize={page}
                country="in"
                category="general"
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={page}
                country="in"
                category="business"
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={page}
                country="in"
                category="entertainment"
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                key="general"
                pageSize={page}
                country="in"
                category="general"
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                pageSize={page}
                country="in"
                category="health"
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={page}
                country="in"
                category="science"
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                pageSize={page}
                country="in"
                category="sports"
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={page}
                country="in"
                category="technology"
              ></News>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
