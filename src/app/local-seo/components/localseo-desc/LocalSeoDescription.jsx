import React from 'react';
import './LocalSeoDescription.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faChartBar,
  faPieChart,
  faMobilePhone,
} from '@fortawesome/free-solid-svg-icons';

const localSeoMetricsData = [
  {
    icon: <FontAwesomeIcon icon={faShoppingCart} />,
    value: '32.8%',
    name: 'Increase in online transactions',
  },
  {
    icon: <FontAwesomeIcon icon={faChartBar} />,
    value: '56.48%',
    name: 'Revenue increase',
  },
  {
    icon: <FontAwesomeIcon icon={faPieChart} />,
    value: '148%',
    name: 'Increase in organic traffic',
  },
  {
    icon: <FontAwesomeIcon icon={faMobilePhone} />,
    value: '46%',
    name: 'Increase in mobile traffic',
  },
];

const LocalSeoDescription = () => {
  return (
    <div className='localseo_desc_container'>
      <h3>
        Local SEO increases visibility of your business by driving your website
        to the top of local listings. If you have a local business, you need
        geographically-relevant traffic to your site through specifically
        targeted local rankings that will launch your company to reach the
        target customer demographic in your market.
      </h3>
      <div className='localseo_desc_content'>
        <p>
          Our agency offers a local SEO search strategy specifically tailored to
          your location to ensure the right external location signals are sent
          as well as inbound links, on-page and social signals, and review
          signals to Google about the locations most relevant to your business.
          We use marketing strategies that allow you to build a stronger
          customer base that allows your business to grow organically.
        </p>
        <p>
          We put great effort to achieve higher rankings in local search results
          by regularly checking the traffic source and continuously
          re-evaluating information for accuracy. We create profiles on popular
          web and social media platforms, and provide useful information to
          target audiences.
        </p>
      </div>
      <div className='seo_metrics_container'>
        {localSeoMetricsData.map(({ icon, value, name }, index) => (
          <div key={index} className='seo_metrics'>
            <div className='seo_metric_icon'> {icon}</div>
            <p>{value}</p>
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalSeoDescription;
