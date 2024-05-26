import React from 'react';
import './LocalSeoInfo.css';
import Image from 'next/image';
import image1 from '../../assets/services-seo-copyrighting-420x420-420x420.png';
import image2 from '../../assets/services-local-seo-services-on-light-440x440-440x440.png';

const LocalSeoInfo = () => {
  return (
    <div className='localseo_info_container'>
      <div className='image'>
        <Image src={image1} alt='Seo Copyrighting' />
      </div>
      <div className=''>
        <p>
          We also ensure that your business appears in local searches not only
          on desktops, but also on mobile devices and tablets. Our goal is to
          earn outstanding listings on top of your local traffic competitors.
        </p>
        <button>Tell us about your project</button>
      </div>
      <div className=''>
        <p>
          With our approach your website will correctly target your audience
          which will significantly increase your profitability. Our team keeps
          your business’ online listings accurate and optimized for potential
          customers and mapping systems, providing an easy access your
          information and your business location.
        </p>
        <button>Request a free quote now</button>
      </div>
      <div className='image'>
        <Image src={image2} alt='Seo Services' />
      </div>
    </div>
  );
};

export default LocalSeoInfo;
