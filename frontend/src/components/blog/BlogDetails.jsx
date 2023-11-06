import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import { useRouter } from 'next/router';
import db from '../../data/db/blogsData';
import RegisterForm from './smallregForm';
import Image from 'next/image';
const BlogDetails = () => {
  const [item, setitem] = useState({});
  const router = useRouter();

  var { title } = router.query;
  useEffect(() => {
    const selectedItem = db.find((item) => item.title === title);
    selectedItem ? setitem(selectedItem) : setitem({});
  }, [title]);

  let rubrik = '';
  let dec = '';
  // console.log(item.page.desc)
  if (item) {
    rubrik = item.page?.title || '';
    dec = item.page?.desc || '';
  }
  return (
    <>
      <section className="blog-details ptb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="">
              {/* <RegitserSmall/> */}
              <div className="blog-details-wrap text-center-mobile">
                <p className="res-fs-5">{item.page?.desc}</p>
                <div className="blog-details-info mt-5">
                  <h3 className="h5">{item.page?.listTile1}</h3>
                  <div className="text-start-mobile paddin_mobile justify-content-mobile-center">
                    <ul className="list-unstyled">
                      {item.page?.topicKeyFocuse.map((e, index) => {
                        return <li key={index}>{e}</li>;
                      })}
                    </ul>
                  </div>
                  <blockquote className="bg-white custom-shadow p-5 mt-5 rounded-custom border-4 border-primary border-top">
                    <p className="text-muted">
                      <i className="fas fa-quote-left me-2 text-primary"></i>{' '}
                      {item.page?.citat}
                      <i className="fas fa-quote-right ms-2 text-primary"></i>
                    </p>
                  </blockquote>
                </div>
                {/* <RegisterForm hideOnMobile={false} /> */}
                <Image
                  src={`/assets/img/enormt/webinare/${item.page?.coverBild}`}
                  className="img-fluid mt-4 rounded-custom"
                  alt="Picture of a Minimal Viable Product concept illustration"
                  width={500}
                  height={500}
                />
                <div className="job-details-info mt-5">
                  <h3 className="h5">{item.page?.listTitle2}</h3>
                  <p>{item.page?.whyThisTopicunderText}</p>
                  <ul className="content-list list-unstyled">
                    {item.page?.whyThisTopicList.map((e, index) => {
                      return <li key={index}>{e}</li>;
                    })}
                  </ul>
                </div>

                <div className="blog-details-info mt-5 content-list">
                  <h3 className="h5">{item.page?.listTitle3}</h3>
                  <p>{item.page?.listTitle3text}</p>
                  <ul className="list-unstyled">
                    {item.page?.list3.map((e, index) => {
                      return <li key={index}>{e}</li>;
                    })}
                  </ul>
                </div>
                {/* <RegisterForm hideOnMobile={false} /> */}
                <iframe
                  width="1051"
                  height="591"
                  loading="lazy"
                  src="https://www.youtube.com/embed/dxLMrXwtTzI"
                  title="Så lyckas du med din första mobil- & webbapp"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="col-lg-4">{/* <ProfileCard /> */}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
