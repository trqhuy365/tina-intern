import React from "react";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Props from "./pages/Props";
import State from "./pages/State";
import Effect from "./pages/Effect";
import CompanyList from "./pages/CompanyList";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="props" element={<Props />} />
            <Route path="state" element={<State />} />
            <Route path="effect" element={<Effect />} />
            <Route path="companylist" element={<CompanyList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
