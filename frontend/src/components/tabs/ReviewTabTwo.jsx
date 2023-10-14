import React from "react";
const ReviewTwo = ({ reqPage }) => {
  return (
    <>
      <div className="col-xl-5 col-lg-5 col-md-12 order-1 order-lg-0">
        <div className="testimonial-tab-slider-wrap mt-5 ">
          {reqPage ? (
            <h1 className="fw-bold display-5 text-dark">
              Här börjar din nya IT-lösning
            </h1>
          ) : (
            <h2 className="text-white text-body">Här börjar din nya IT-lösning</h2>
          )}
          <p className="pt-20">
            Fyll i formuläret här på sidan för att ge oss den information vi
            behöver för att kunna påbörja processen. Beskriv projektet koncist
            och tydligt så att vi får en övergripande förståelse av dina behov.
            Så snart vi har handlagt din förfrågan kontaktar vi dig med
            ytterligare information.
          </p>
     
        </div>
      </div>
    </>
  );
};

export default ReviewTwo;
