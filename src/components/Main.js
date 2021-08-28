import React from "react";
import NewsBox from "./NewsBox";
import Slider from "./Slider";
export default function Main() {
  return (
    <main className="main">
      <div className="main-container">
        <Slider />
        <NewsBox />
      </div>
    </main>
  );
}
