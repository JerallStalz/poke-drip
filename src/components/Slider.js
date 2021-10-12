import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { focusNew } from "../actions";

export default function Slider() {
  const notice = useSelector((state) => state.notice);
  const [slideIndex, setSlideIndex] = useState(1);
  const [sliderRun, setSliderRun] = useState(true);

  const dispatch = useDispatch()
  const focusNewFn = (news) => dispatch(focusNew(news))
  const news = useSelector( state => state.news)

  const prevSlide = () => {
    if (slideIndex < notice.length) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(1);
    }
  };
  const nextSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(notice.length);
    }
  };

  useEffect(() => {
    var interval = null;
    let count = slideIndex;
    setTimeout(() => setSliderRun(true), 10);
    if (sliderRun === true) {
      interval = setInterval(() => {
        if (count === 1) {
          setSlideIndex(2);
          count = 3;
        } else if (count > notice.length) {
          setSlideIndex(1);
          count = slideIndex;
        } else {
          setSlideIndex(count);
          count++;
        }
      }, 3000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [sliderRun]);

  const runStopper = () => {
    setSliderRun(false);
  };
  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="slider-container" onClick={() => runStopper()}>
      {notice.map((notice, index) => (
        <article
          key={notice.id}
          className={
            slideIndex === index + 1
              ? "slider-container__slide active-slide"
              : "slider-container__slide"
          }
        >
          <section className="slider-container__slide-section">
            <p>{notice.category}</p>
            <Link to='/news' onClick={() => focusNewFn(notice) }>{notice.title}</Link>
          </section>
          <figure><img src={notice.imgUrl} /></figure>
        </article>
      ))}
      <button
        className="slider-container__button left"
        onClick={() => nextSlide()}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className="slider-container__button right"
        onClick={() => prevSlide()}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
      <div className="thumbs-container">
        {notice.map((notice, index) => (
          <div
            className={
              slideIndex === index + 1 ? " thumbs thumbs-active" : "thumbs"
            }
            key={index}
            onClick={() => moveDot(index + 1)}
          ></div>
        ))}
      </div>
    </div>
  );
}
