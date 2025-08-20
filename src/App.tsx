import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppState from "./context/AppState";

import Layout from "./components/Layout";
import PageRenderer from "./components/PageRenderer";
import DynamicPage from "./components/DynamicPage";

import type { WebsiteCopy } from "./@types/sanity";

import { client } from "./sanityClient";

import "./App.css";

const App = () => {
  const [copy, setCopy] = useState<WebsiteCopy>(null);

  useEffect(() => {
    client
      .fetch<WebsiteCopy>(
        `*[_type == "copy"][0] {
          brandName,
          copyright
        }`
      )
      .then((data) => {
        setCopy(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <AppState>
      <Router>
        <Routes>
          <Route path="/" element={<Layout copy={copy} />}>
            <Route index element={<PageRenderer slug="about" />} />
            <Route path="/:slug" element={<DynamicPage />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </Router>
    </AppState>
  );
};

export default App;
