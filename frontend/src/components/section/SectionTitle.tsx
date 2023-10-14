import React from 'react';


type ServiceProps = {
  subtitle?: string;
  dark?: string;
  title?: string;
  centerAlign?: string;
  description?: boolean;
};


const SectionTitle : React.FC<ServiceProps> = ({ subtitle, dark, title, centerAlign, description }) => {
  return (
    <>
      {subtitle ? (
        <div
          className={`${
            centerAlign ? 'section-heading text-center' : 'section-heading'
          }`}
          // data-aos='fade-up'
        >
          <h4 className={`h5 ${dark ? 'text-warning' : 'text-primary'}`}>
            {subtitle}
          </h4>
          <h2 className='text-dark pt-20'>{title}</h2>
          <p className='text-body pt-20'>{description}</p>
        </div>
      ) : (
        <div
          className={`${
            centerAlign ? 'section-heading text-center' : 'section-heading'
          }`}
      
        >
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      )}
    </>
  );
};

export default SectionTitle;
