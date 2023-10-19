import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import data from '../../data/db/team';
import TeamMember from './teamMember';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Team() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000, // Adjust to your preference
    slidesToShow: 5,
    slidesToScroll: 1, // scroll one item at a time for smooth effect
    autoplay: true,
    autoplaySpeed: 0, // Set this to 0 for continuous effect
    cssEase: 'linear', // This will keep the movement consistent
    pauseOnHover: false,
    swipeToSlide: false, // You may want to disable swiping to maintain the continuous effect
    lazyLoad: 'ondemand',
  };

  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setKey((prevKey) => prevKey + 1), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-main-pink hero-nine-bg ptb-120">
      <div className="container">
        <div className="counter-content section-title mb-30 lh-1">
          <h2 className="mb-md-5 text-dark justify-content-center text-center">
            Våra fasta priser
          </h2>
          <h2 className="mb-4 text-body fs-2">
            Skalbara Webblösningar för Växande Affärsbehov
            <span className="fw-bold text-info"> 12 mån garanti</span> och{' '}
            <span className="text-info fw-bold">6 månader IT-suppor</span>
          </h2>
          <p className="fs-5">
            Vi är experter på hemsidor och jobbar med allt från{' '}
            <span className="text-omaina-green fw-bold"> JavaScript </span>
            till <span className="text-omaina-green fw-bold">
              {' '}
              WordPress{' '}
            </span>{' '}
            och <span className="text-omaina-green fw-bold"> PHP</span>. Vi
            anpassar tekniken efter just ditt behov.
          </p>
          <p className="fs-6 text-dark">
            Om du söker en lösning som inte finns i våra paket, eller önskar en
            mer anpassad hemsida, är du välkommen att kontakta oss.
          </p>
        </div>
      </div>

      <div className="team-slider">
        {/* <Slider key={key} {...settings}>
                    {data.map(member => <TeamMember key={member.id} member={member} />)}
                </Slider> */}
      </div>
    </section>
  );
}

export default Team;
