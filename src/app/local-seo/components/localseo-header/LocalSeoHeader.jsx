import React from 'react';
import Image from 'next/image';
import image1 from '../../assets/services-local-seo.png';
import './LocalSeoHeader.css';

const LocalSeoHeader = () => {
  return (
    <div className='localseo_header'>
      <Image src={image1} alt='Local Seo' />
      <h2>Local SEO</h2>
      <p>Local SEO is about bringing customers through your doors.</p>
    </div>
  );
};

export default LocalSeoHeader;
