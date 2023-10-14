import React from "react";
import SectionTitle from "./SectionTitle";
import "./style.module.css";
import { list } from "postcss";

type ServiceProps = {
  paddingTop?: boolean;
  sections?: any;

};



const Section : React.FC<ServiceProps> = ({ paddingTop, sections }) => {
  return (
    <section
      className={`feature-section   ${
        paddingTop ? "ptb-120" : "pt-60 pb-120"
      } `}
    >
      {sections.map((section:any, index:any) =>
        index % 2 !== 0 ? (
          <section key={section.index} className="section_one" data-aos="fade-right" data-aos-duration="30000">
            <div className="container container_one">
              <div className="row align-items-lg-center justify-content-between">
                <div className="col-lg-5 order-lg-1 mb-7 mb-lg-0">
                  <div className="mb-4">
                    <SectionTitle
                      key={section.id}
                      title={section.title}
                      description={section.kortDes}
                    />
                  </div>
                  <ul className="list-unstyled d-flex flex-wrap list-two-col mt-5">
                    {section.nytta.map((e:any) => (
                      <li key={e.index}>
                        <span>
                          <i
                            className={`${e.icon} mb-4
`}
                          ></i>
                        </span>
                        <h3 className="h5"> {e.rubrik} </h3>
                        <p> {e.underRubrik}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 order-lg-2">
                  <img
                    src={`/assets/img/enormt/services/${section.imge}`}
                    alt={section.imge}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>{" "}
          </section>
        ) : (
          <section key={section.index} className="section_tow" data-aos="fade-left" data-aos-duration="30000">
            <div className="container">
              <div className="row align-items-lg-center justify-content-between">
                <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
                  <div className="mb-4" >
                    <SectionTitle
                      title={section.title}
                      description={section.kortDes}
                    />
                  </div>
                  <ul
                    className="list-unstyled d-flex flex-wrap list-two-col mt-5"
                  >
                    {section.nytta.map((e:any) => (
                      <li key={e.index}>
                        <span className="d-block mb-4">
                          <i className={e.icon}></i>
                        </span>
                        <h3 className="h5">{e.rubrik}</h3>
                        <p>{e.underRubrik}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 order-lg-1">
                  <img
                    src={`/assets/img/enormt/services/${section.imge}`}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </section>
        )
      )}
    </section>
  );
};

export default Section;
