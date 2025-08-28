import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppState from "./context/AppState";

import Layout from "./components/Layout";
import PageRenderer from "./components/PageRenderer";
import NotFound from "./components/NotFound";

import "./App.css";

const App = () => {
  return (
    <AppState>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path=":slug?" element={<PageRenderer />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </AppState>
  );
};

export default App;
