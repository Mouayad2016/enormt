import React from 'react';

const HeroTitle = ({ subtitle, title, desc }) => {
  return (
    <>
      {subtitle ? <h5 className="text-warning">{subtitle}</h5> : ''}
      <h1 className="fw-bold display-5 text-dark">{title}</h1>
      <p className="lead text-dark">{desc}</p>
    </>
  );
};

export default HeroTitle;
