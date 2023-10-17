import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/db/team";

const Team = () => {
  return (
    <>
      {/* <section id="our-team" className="team-section pt-60 pb-120"> */}
      <section id="our-team" className="team-section pt-0 pb-50" data-aos="fade-up" data-aos-duration="30000">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="section-heading text-center ">
                {/* <h5 className="h6 text-primary"> Vårt Team </h5> */}
                <h2 className="text-dark"> Vi på Enormt </h2>
               
              </div>
            </div>
          </div>
          <div className="row">
            {data.map(member =>  <div key={member.id} className="col-lg-2 col-md-6"> <div  className="team-single-wrap mb-5">
                <div className="team-img rounded-custom">
                  <img
                    src={`/assets/img/enormt/team/${member.id}.png`}
                    alt="team"
                    className="img-fluid position-relative"
                  />
                  <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                  {member.linkedin? 
                  <li className="list-inline-item">
                      <a
                        href={member.linkedin}
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>:<></>} 
                  </ul>
                </div>
                <div className="team-info mt-4 text-center">
                  <h5 className="h6 mb-1"> {member.name} </h5>
                  <p className="text-muted small mb-0"> {member.position} </p>
                  <div>
                    
                    <a
                      className="text-info small mb-0"
                      href="mailto:mouayad.mouayad@omania.se"
                    >
                      {member.mail ? member.mail : ""}
                    </a>
                    <p class="text-muted small mb-0">
                      <a href={`tel:$member.phone`} className="text-info">
                      {member.phone ? member.phone : ""}
                      </a>
                    </p>
                  </div>
                </div>
              </div> 
              </div>
              )}          
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
