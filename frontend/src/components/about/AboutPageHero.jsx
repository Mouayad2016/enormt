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
              <div className="section-heading-wrap d-flex justify-content-between z-5 position-relative">
                <div className="about-content-left">
                  <div className="about-info mb-5">
                    <h1 className="fw-bold display-5 text-dark pt-50">
                      MER ÄN EN IT-LEVERANTÖR
                    </h1>
                    <p className="lead pt-20 text-dark">
                      Vi är en specialiserad IT-beställare med erfarenhet av
                      att leverera högkvalitativa IT-system till kunder i
                      Norden. Vi har ett ständigt växande utbud av IT-lösningar,
                      som utvecklas av våra utländska kvalitetssäkrade
                      leverantörer. Våra kunder njuter av högsta kvalitet till
                      internationellt konkurrenskraftiga priser, med en trygg
                      och säker beställningsprocess och dedikerad kundsupport.
                      Vårt team består av erfarna IT-experter som strävar efter
                      att skapa lösningar som passar våra kunders unika behov.
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
