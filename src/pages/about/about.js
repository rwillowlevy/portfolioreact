import React from "react";
import image from "./Profilepicture.JPEG"

function about() {
  return (
    <>
        <div className="row mt-2 mb-2 py-1 px-1">
          <h1>About Me</h1>
        </div>
        <div className="row">
          <div className="col-lg-6 pb-1 mb-3">
            <img src={ image } className="img-fluid" alt=" of Alex Bailon at the Grand Canyon"/>
          </div>
          <div className="col-lg-6">
            <p>
            Full-Stack Web Developer with a background focusing in content management, social media marketing, web deisgn, and 
            traffic tracking. Working with numerous amounts of start up companies has given me the knowledge and experience with
            creativity and watching growth throughout the company as the time moves forth. Going forward with computer science has not 
            only given me more credibility and more of an asset to any given company, but shows women empowerment when it comes to the coding 
            society. I am excited and eager to see where these skills take me.
            </p>
            <p>
              Currently doing internship work with a podcast called The Louis and Kyle Show based in Alabama. They produce 
              shows geared towards indivual and business growth. Interviewing entreprenurs, ceo's, investors, stock traders, etc gives
              an audience an insight to whole different side of the business. As I create there website and run all there socials I am 
              excited to see where these updates can take there production.
            </p>
          </div>
        </div>
    </>
  );
}

export default about;