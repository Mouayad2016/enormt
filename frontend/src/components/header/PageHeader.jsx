import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PageHeader = ({ title, desc, integration, blogtags }) => {
  return (
    <>
      {integration ? (
        <section
          className="page-header position-relative overflow-hidden ptb-120 bg-dark"
          style={{
            background:
              "url('assets/img/page-header-bg.svg')no-repeat bottom left",
          }}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-8 col-12">
                <div className="company-info-wrap align-items-center">
                  <div className="company-logo p-4 bg-white shadow rounded-custom me-4 mt-2">
                    <div className="logo justify-content-center">
                      <Image
                        src="assets/img/integations/2.png"
                        alt="company logo"
                        className="img-fluid"
                        height={80}
                        width={200}
                      />
                    </div>
                  </div>
                  <div className="company-overview">
                    <h1 className="display-5 fw-bold text-center-mobile">
                      {title}
                    </h1>
                    <p className="lead mb-0">{desc}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <div className="action-btns mt-4 mt-lg-0 mt-xl-0">
                  <Link to="#" className="btn btn-outline-light">
                    Connect with Google
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
          </div>
          bg-circle
        </section>
      ) : (
        <section className="gradient-backgroud position-relative overflow-hidden ptb-60">
          <div className="container pt-5">
            <div
              className={`row ${
                blogtags ? 'justify-content-center text-center' : ''
              }`}
            >
              <div className="col-lg-8 col-md-12">
                <h1 className="display-5 fw-bold text-dark pt-50 text-center-mobile">
                  {title}
                </h1>
                <p className="text-dark res-fs-5 text-center-mobile pt-20 ">
                  {desc}
                </p>
              </div>
            </div>
            {blogtags ? (
              <div className="row justify-content-center text-center">
                <div className="col-xl-8">
                  <Link
                    to="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    Marketing
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    Sales
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    Design
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    Development
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    Product Design
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    Customers
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    Agency
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    Investors
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-soft-primary btn-pill btn-sm m-2"
                  >
                    Research
                  </Link>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default PageHeader;
