import React from 'react';
import RegisterForm from '../../components/blog/smallregForm'; 
import Link from 'next/link';

const ProfileCard = () => {
  return (
    <>

      <div className='author-wrap text-center sticky-sidebar rounded-custom mt-5 mt-lg-0'>
      <div className='bg-light p-3 rounded-custom'>
        <img src={`/assets/img/enormt/about/team/mouayad2.jpg`} alt='author'
          width='120'
          className='shadow-sm rounded-circle'
        />
        <div className='author-info my-4'>
          <h5 className='mb-0'>Mouayad Mouayad</h5>
          <span className='small'>CEO</span>
        </div>
        
        <p className='fs-ms'>
        Teknologi är avgörande och vi bör alla ha tillgång till det. Det är mitt uppdrag att upprätthålla kvaliteten på Enormt, samtidigt som jag strävar efter att skapa mervärde för våra kunder genom att dela vår interna process.</p>
        <ul className='list-unstyled author-social-list list-inline mt-3 mb-0'>
          <li className='list-inline-item'>
            <Link href={'https://www.linkedin.com/in/mouayad-mouayad-291220168/'}>
              <i className='fab fa-linkedin-in'></i>
            </Link>
          </li>
      
          <li className='list-inline-item'>
            <Link href={'https://github.com/Mouayad2016/'}>
              <i className='fab fa-github'></i>
            </Link>
          </li>
  
        </ul>


  </div>
  <RegisterForm hideOnMobile={true}/>
      </div>

    </>
  );
};

export default ProfileCard;