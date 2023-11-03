import React from 'react';
import SectionTitle from '../section/SectionTitle';

const FeatureImgThree = ({ paddingTop }) => {
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="30000"
        className={`feature-section-two ${
          paddingTop ? 'ptb-120' : 'pt-60 pb-60'
        } `}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <SectionTitle
              subtitle="Policy"
              title="Konkurrenskraft & Insyn"
              description="Vi är övertygade om att äkta konkurrens leder till optimal utveckling och framsteg."
              // centerAlign
            />

            <div className="col-lg-5 col-md-12">
              <div className="align-items-center">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-primary rounded me-4">
                      <i className="fas fa-bezier-curve text-white"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5 text-dark">Kvalitet framför allt</h3>

                      <p>
                        Vårt mål är att ständigt leverera toppklassiga
                        IT-lösningar till våra klienter.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-success rounded me-4">
                      <i className="fas fa-hands-helping text-white"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5 text-dark">Optimala lösning</h3>
                      <p>
                        Vi garanterar att ni får en lösning anpassad efter era
                        specifika behov, med hjälp av den mest lämpliga
                        teknologin.
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
                    <div className="icon-box bg-secondary rounded me-4">
                      <i className="fas fa-leaf text-white"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5 text-dark">Grön teknologi</h3>
                      <p>
                        Genom att enbart använda oss av grön teknologi ser vi
                        till att våra lösningar bidrar till en mer hållbar
                        framtid.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-danger rounded me-4">
                      <i className="fas fa-people-carry text-white"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5 text-dark">
                        Transparens och öppen dialog
                      </h3>
                      <p>
                        Främjar öppenhet och transparens i våra affärsrelationer
                        med tydlig information om priser och kvalitet genom hela
                        leveranskedjan.
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
