import React, { useEffect } from "react";
import "./News.css"
import parser from 'html-react-parser'
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function News() {
  const actualFocus = useSelector(state => state.actualFocus) 
  useEffect(()=> {
    window.scroll(0,0)
  },[])

  return (
      actualFocus === null 
      ?
        (
          <Redirect to='/' />
        )   
      : 
        (
          <div className='news'>
            <div className='new-container'>
              { parser(actualFocus.desc) }
            </div>
          </div>
        )
)
}
