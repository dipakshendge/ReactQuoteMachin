import React, { useEffect, useState } from "react";
import './quote.css';
import $, { get } from "jquery";

const Quote=(()=>{

  const [quote,setQuote]=useState({})

  var colors = ['#FF6633', '#FFB399', '#FF33FF','#00B3E6', 
		  '#E6B333', '#3366E6',  '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
          const colorRandom= Math.floor(Math.random()*colors.length)

  useEffect(()=>{
    getQuote();
  },[],2000);

  const getQuote=(()=>{
    fetch("https://type.fit/api/quotes")
    .then((res)=>{return res.json();})
    .then((data)=>{
        const random=Math.floor(Math.random()*data.length);
        setQuote(data[random]);
    })
  })
  
  $(document).ready(()=>{
    
    $("#new-quote").click(()=>{
       
        $("#tweet-quote").css({backgroundColor: colors[colorRandom]})
        $("#text").css({color: colors[colorRandom]})
        $(".container").css({backgroundColor: colors[colorRandom]})
        $("#new-quote").css({backgroundColor: colors[colorRandom]})
       
    })
  })
  
//   console.log(quote)
    return(
    <>
        <div className="container">
            <div id="quote-box" className="main">
                <div id="text">
                    <p id="quote-text">{quote.text}</p>
                    <h3 id="author">- {quote.author}</h3>
                </div>
               <div id="buttons">
                <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">tweet Quote</a>
                <button id="new-quote" onClick={getQuote}>New Quote</button>
               </div>
            </div>
            <span>By Dipak</span>
        </div>
    </>)
});


export default Quote;
