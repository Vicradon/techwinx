import React from 'react'
import logo from "../../static/images/techwinx-logo.png";

export default function HomeTriangle() {
  return (
    <div>
      <style>
        {
          `
            .triangle-container {
              padding-top:2rem;
            }
            .triangle {
              -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);
              clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);
              padding:3rem 1rem 7rem 1rem;
              background-color:lightblue;
              display:grid;
              row-gap:0.5rem;
              text-align:center;
            }
            .fake-img {
              width:110px;
              height:110px;
              background-color:grey;
              
            }
            .fake-img-container {
              display:flex;
              justify-content:center;
              background-color:lightblue;
              padding-top:2rem;

            }
            .motto {
              font-size:1.3em
            }
            .blog-items {
              font-size:0.8em
            }
            @media(min-width:600px){
              .fake-img {
                width:180px;
                height:180px;
              }
              .motto {
                font-size:3em
              }
              .blog-items {
                font-size:1.2em
              }
            }
          `
        }
      </style>
      <div className = "triangle-container">
        <div className="fake-img-container">
          <img src =  {logo} alt = "Techwinx logo" />
        </div>
        <div className="triangle">
          <h1 className = "motto">The Repository for Everything Tech!</h1>
          <p className = "blog-items">AI, drones, Tech Events, Web Development...</p>
        </div>
      </div>
    </div>
  )
}