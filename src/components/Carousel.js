import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";

export default function () {
  const notice = useSelector((state) => state.notice);

  return (
    <Carousel
      showArrows={false}
      autoPlay
      infiniteLoop
      showIndicators={false}
      showStatus={false}
    >
      {notice.map((notice, index) => (
        <div key={index}>
          <img alt="" className="image" src={notice.url} />
          <div className="legend">
            <div className="legend-category">
              <p>{notice.category}</p>
            </div>
            <div className="legend-container">
              <h3>{notice.name}</h3>
              <div className="legend-container__icon">
                <i className="fas fa-caret-right"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
