import React from 'react';
import SectionTitle from '../section/SectionTitle';

const FeatureFour = () => {
  return (
    <>
      <section className="feature-section ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <SectionTitle
                subtitle="Utvecklat via Enormt"
                title="Advo erbjuder följande "
                description="Notera att dagens Advo är i sin testfas. Den nuvarande appen är framtagen för att utforska AI-potential inom juridik"
                centerAlign
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="position-relative"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0 z-2">
                  <div className="feature-icon d-inline-block bg-primary-soft rounded-circle mb-32">
                    <i className="fad fa-shield-alt text-primary fa-2x"></i>
                  </div>
                  <h3 className="h5">Grundläggande rådgivning</h3>
                  <p className="mb-0">
                    Advo är tränad på en mängd data från lagboken och kan ge dig
                    grundläggande rådgivning i dina ärende{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="position-relative"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0">
                  <div className="feature-icon d-inline-block bg-danger-soft rounded-circle mb-32">
                    <i className="fad fa-comment-alt-smile text-danger fa-2x"></i>
                  </div>
                  <h3 className="h5">Rättsliga frågor</h3>
                  <p className="mb-0">
                    Advo kan ge dig detaljerade svar på dina rättsliga frågor
                    och hjälpa dig att förstå komplex juridik på ett enkelt sätt{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="position-relative"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0">
                  <div className="feature-icon d-inline-block bg-success-soft rounded-circle mb-32">
                    <i className="fad fa-grin-stars text-success fa-2x"></i>
                  </div>
                  <h3 className="h5">Underlätta sökande</h3>
                  <p className="mb-0">
                    Advo kan underlätta din resa inom juridikens värld och
                    hjälper dig att förstå och navigera på ett enkelt och
                    smidigt sätt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureFour;
