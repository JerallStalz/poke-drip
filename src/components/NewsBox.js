import React from "react";
import { useSelector } from "react-redux";

export default function NewsBox() {

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
                      <span>{news.title}</span>
                      <p>{news.description}</p>
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
