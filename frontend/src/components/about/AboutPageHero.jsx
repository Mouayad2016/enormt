import React from "react";
import { Link } from "react-router-dom";
import Candle from "./candle";

const AboutPageHero = () => {
  const handleSmothScrol = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElemet = document.querySelector(targetId);
    if (targetElemet) {
      window.scrollTo({
        top: targetElemet.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <section className="gradient-backgroud pt-120 position-relative overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className=" section-heading-wrap d-flex justify-content-between z-5 position-relative">
                <div className="about-content-left mt-5">
                  <div className="about-info mb-5 text-center-mobile">
                    <h1 className="fw-bold display-5 text-dark pt-5 text-center-mobile">
                      MER ÄN EN IT-LEVERANTÖR
                    </h1>
                    <p className="lead pt-20 res-fs-5 text-center-mobile text-dark ">
                    Vi är experter inom IT-sektorn, specialiserade på att erbjuda skräddarsydda och högkvalitativa IT-lösningar till våra klienter i Norden. 
                    Inom vårt engagerade team kombinerar vi teknisk skicklighet med en djup förståelse för våra klienters affärsbehov. Detta möjliggör oss att inte bara svara på, utan även förutse, de unika kraven i varje projekt. 
                    Vi omvandlar dessa insikter till skräddarsydda lösningar som integrerar smidigt med befintliga system och främjar affärsutveckling och innovation.
                    </p>
               
                    <a
                      href="#our-team"
                      onClick={handleSmothScrol}
                      className="btn btn-soft-primary mt-4"
                    >
                      Lär känna oss
                    </a>
                  </div>
          

                </div>

                            <div className="col-6 display-none-on-ipad">
                            <Candle className=""></Candle>
</div>
           
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPageHero;
