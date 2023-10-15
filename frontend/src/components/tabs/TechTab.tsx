import React, {useState} from "react";
import Link from "next/link";
import data from "../../data/db/data";
import Pyramid from "../hem/pyramidElement";
const TechTab = () => {
  const [selectedTab, setSelectedTab] = useState(data.length ? data[0].hem_sida.namn : null);

  return (
    <section className="gradient-backgroud-switched ptb-120" >
      <div className="container" data-aos="fade-up" data-aos-duration="30000">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6">
            <div className="text-center">
              <h2 className="text-dark">Skräddarsydda IT-lösningar

</h2>
              <p className="res-fs-5">
              Dyk ner i det omfattande utbud av IT-tjänster vi erbjuder och upptäck hur vår breda expertis kan tillgodose just dina unika behov     </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-lg-5">
            <div className="service-tabs">
            <div className="radio-inputs ">
              {data.map((e, index) => (
            <label className={`radio`} key={index} 
            onClick={() => setSelectedTab(e.hem_sida.namn)}>
      <input
        type="radio"
        name="radio"
        role={e.hem_sida.role}
        checked={selectedTab === e.hem_sida.namn}

        aria-controls={e.hem_sida.aria_controls}
        aria-selected={e.hem_sida.aria_selected}
      />
      {/* <i className="fas fa-desktop me-3 text-body"></i> */}
      <span className="name text-dark">{e.hem_sida.namn}</span>
    </label>
  ))}
</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="tab-content text-center-mobile" id="pills-tabContent">
            {data.map((e) => (
              <div
                className={e.hem_sida.tabs.className}
                id={e.hem_sida.tabs.id}
                role="tabpanel"
                key={e.hem_sida.tabs.id}
                aria-labelledby={e.hem_sida.tabs.aria_labelledby}
              >
                
        {data.map((e, index) => {
        if (selectedTab === e.hem_sida.namn) {
          return (
            <div className="tab-content-wrapper pt-60 " key={index}>
              <div className="row align-items-center justify-content-center">
                <div className="col-md-4">
                  <div className={e.hem_sida.tabs.className2}>
                  <Pyramid className= {`${e.hem_sida.namn} display-none-on-mobile`}></Pyramid>

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-right-content">
                    <h2 className="text-dark fs-4">
                      {e.hem_sida.tabs.rubrik}
                    </h2>
                    <p className="res-fs-5 text-dark">{e.hem_sida.tabs.des}</p>
                    <ul className="list-unstyled res-fs-5 text-dark">
                      {e.hem_sida.tabs.list.map((item, listIndex) => (
                        <li key={listIndex}>
                          <i className="fas fa-check text-primary"></i>
                          <span> {item} </span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/service/${e.tjänst_sida.rubrik}`}
                      className="text-primary link-with-icon text-decoration-none mt-4"
                    >
                      Mer om tjänsten
                      <i className="fas fa-arrow-right text-primary"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
                
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechTab;
