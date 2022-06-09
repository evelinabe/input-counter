import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InputView } from "./views/inputView";
import { StatisticsView } from "./views/statisticsView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InputView />} />
        <Route path="/statistics" element={<StatisticsView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
