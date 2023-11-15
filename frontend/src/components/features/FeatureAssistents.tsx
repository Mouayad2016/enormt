import React from 'react';
import SectionTitle from '../section/SectionTitle';

import data from '../../data/db/assistent.json';
import Link from 'next/link';
const FeatureAssistent = ({ paddingTop }) => {
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
          <div className="row align-items-center">
            <SectionTitle
              subtitle=""
              title="Showcase av Skräddarsydda AI-Assistenter"
              description="I avsnittet nedan presenterar vi en samling av AI-assistenter som vi har skräddarsytt för olika företag, var och en anpassad för att uppfylla specifika affärsmål och krav. Upptäck hur varje AI-assistent unikt bidrar till att effektivisera kommunikationen och förbättra kundupplevelsen."
              // centerAlign
            />

            {data.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <div className="col-lg-2 chat_assistent_item d-flex justify-content-center">
                <Link href={`/assistent/${item.id}`}>
                  <div className="align--center">
                    <ul className="list-unstyled">
                      <li className="d-flex m-4 text-center">
                        <div className="icon-content">
                          <h3 className="h5 text-dark">{item.title}</h3>
                        </div>
                      </li>
                      <div className="icon-box bg-primary rounded text-center">
                        <i className="fas fa-duotone fa-user-doctor-message text-white"></i>
                      </div>
                    </ul>
                  </div>{' '}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureAssistent;
