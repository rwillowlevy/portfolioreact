import React from "react";

function Contact() {
  const style = {
    card: {
      "maxWidth": "18rem"
    }
  }
  return (
    <>
      <div className="row mt-2 py-1 px-1">
            <h1>Contact</h1>
      </div>
      <div className= "row">
        <div className="col-md-4 col-sm-12 mb-3">
          <div className="card bg-light mb-2" style={ style.card }>
            <div className="card-header"><i className="fas fa-phone-square"> Phone Number</i></div>
            <div className="card-body">
              <p className="card-text"><a href="tel:+18479176334">(847)917-6334</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-3">
          <div className="card bg-light mb-2" style={ style.card }>
            <div className="card-header"><i className="fas fa-inbox"> Email</i></div>
            <div className="card-body">
              <p className="card-text"><a href="mailto:rwillowlevy@gmail.com">rwillowlevy@gmail.com</a></p>
            </div>
          </div>
        </div> 
        <div className="col-md-4 col-sm-12 mb-3">
          <div className="card bg-light mb-2" style={ style.card }>
            <div className="card-header"><i className="fab fa-github-square"> Github</i></div>
            <div className="card-body">
              <p className="card-text"><a href="https://github.com/rwillowlevy" target="_blank"> Github Link</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-3">
          <div className="card bg-light mb-2" style={ style.card }>
            <div className="card-header"><i className="fab fa-linkedin"> Linked-In</i></div>
            <div className="card-body">
              <p className="card-text"><a href="https://www.linkedin.com/in/rachel-levy-416427151/" target="_blank"> linkedin Link</a></p>
            </div>
          </div>
        </div> 
        <div className="col-md-4 col-sm-12 mb-3">
          <div className="card bg-light mb-2" style={ style.card }>
          <div className="card-header"><i className="fas fa-file-pdf"> Resume</i></div>
            <div className="card-body">
              <p className="card-text"><a href="https://github.com/rwillowlevy/resume/blob/master/Portfolioresume.pdf" target="_bkank"> Resume File</a></p>
            </div>
          </div>
        </div>      
      </div>
    </>
  );
}

export default Contact;