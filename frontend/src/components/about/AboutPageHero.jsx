import React from 'react';
import Candle from './candle';
import Link from 'next/link';
const AboutPageHero = () => {
  const handleSmothScrol = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElemet = document.querySelector(targetId);
    if (targetElemet) {
      window.scrollTo({
        top: targetElemet.offsetTop,
        behavior: 'smooth',
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
                      Vi är experter inom IT-sektorn, specialiserade på att
                      erbjuda skräddarsydda och högkvalitativa IT-lösningar till
                      våra klienter. Genom att kombinera teknisk expertis med en
                      djup förståelse av era behov, har vi möjlighet att inte
                      bara hantera, utan också att förutse de specifika krav som
                      dyker upp i varje projekt.
                    </p>

                    <Link
                      href="/contact"
                      // onClick={handleSmothScrol}
                      className="btn btn-soft-primary mt-4"
                    >
                      Kontakta oss
                    </Link>
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
