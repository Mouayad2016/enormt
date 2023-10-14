import React from "react";
import SectionTitle from "../section/SectionTitle";

const FeatureImgThree = ({ paddingTop }) => {
  return (
    <>
      <section  data-aos="fade-up" data-aos-duration="30000"
        className={`feature-section-two ${
          paddingTop ? "ptb-120" : "pt-60 pb-60"
        } `}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">

          <SectionTitle
                subtitle="Policy"
                title="Konkurrens & Transparens"
                description="Stark övertygelse att öppen konkurrens skapar de bästa förutsättningarna för lyckad utveckling."
              />

            <div className="col-lg-5 col-md-12">
             
              <div>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-primary rounded me-4">
                      <i className="fas fa-bezier-curve text-white"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5 text-dark">Kvalité är avgörande</h3>
                      <p>
                        Leverera högkvalitativa IT-system till våra kunder,
                        eftersom vi vet att vår framgång bygger på er
                        tillfredsställelse och förtroende.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-primary rounded me-4">
                      <i className="fas fa-bezier-curve text-white"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5 text-dark">Gemensam målsättning</h3>
                      <p>
                        Säkerställer att kunder och leverantörer arbetar mot
                        gemensam målsättning så att slutresultatet ska bli det
                        kunden eftersöker.
                      </p>
                    </div>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-7">
              <div>
              <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-primary rounded me-4">
                      <i className="fas fa-bezier-curve text-white"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5 text-dark">Goda arbetsförhållanden </h3>
                      <p>
                        Samarbeta endast med leverantörer som behandlar sina
                        anställda schysst, rättvist och erbjuder goda
                        arbetsförhållanden.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-danger rounded me-4">
                      <i className="fas fa-fingerprint text-white"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5 text-dark">Öppenhet och transparens</h3>
                      <p>
                        Främjar öppenhet och transparens i våra affärsrelationer
                        genom att vara tydliga med prissättning och kvalitet
                        genom leveranskedjan.
                      </p>
                    </div>
                  </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgThree;
