import React from "react";
import Carousel from "./Carousel";
export default function Main() {
  return (
    <main className="main">
      <div className="main-container">
        <div className="main-container__carousel">
          <Carousel />
        </div>
      </div>
    </main>
  );
}
