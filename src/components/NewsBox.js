import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { focusNew } from "../actions";

export default function NewsBox() {
  const dispatch = useDispatch()
  const focusNewFn = (news) => dispatch(focusNew(news))
  const news = useSelector( state => state.news)
  return (
    <div className="news-box">
      <div className="news-box__name-container">
        <h3>Noticias</h3>
      </div>
      <div className="article-container">
        { news.length !== 0 
        ? news.map( news => (
          <article className="article">
            <div className="article-image">
              <img src={news.imgUrl} />
            </div>
            <div className="article-context">
              <Link to='/news' onClick={() => focusNewFn(news)}>{news.title}</Link>
              <p>{news.shortDesc}</p>
            </div>
            <div className="article-small">
              <small>20/04/2021</small> 
            </div>
          </article>
        )) 
        : null
      }
      </div>
    </div>
  );
}
