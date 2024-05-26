import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faCircleHalfStroke,
  faClock,
  faFile,
  faFlask,
  faDisplay,
} from '@fortawesome/free-solid-svg-icons';

import './SeoGraphComponent.css';

const seoMetricsData = [
  {
    icon: <FontAwesomeIcon icon={faChartLine} />,
    value: '83%',
    name: 'Organic Traffic - increase',
  },
  {
    icon: <FontAwesomeIcon icon={faCircleHalfStroke} />,
    value: '42%',
    name: 'Bounce Rate - Decrease',
  },
  {
    icon: <FontAwesomeIcon icon={faClock} />,
    value: '38%',
    name: 'Average Visit Duration - Increase',
  },
  {
    icon: <FontAwesomeIcon icon={faFile} />,
    value: '21%',
    name: 'Pages Per Session - Increase',
  },
];

const seoReportData = [
  {
    // icon: <FaFlask />,
    icon: <FontAwesomeIcon icon={faFlask} />,
    heading: 'Keyword Research / Strategy',
    description:
      'One of the most Important SEO elements is the target keywords. Let our team determine the best strategy for all your link building activities to increase your search engine ranking and organic traffic.',
  },
  {
    icon: <FontAwesomeIcon icon={faDisplay} />,
    heading: 'Activity Reports',
    description:
      'We provide a detailed report of your website SEO performance evaluation, as well as data about your traffic, top referring keywords and a full explanation of your search engine activity.',
  },
];

const SeoGraphComponent = () => {
  return (
    <div>
      <div className='seo_metrics_container'>
        {seoMetricsData.map(({ icon, value, name }, index) => (
          <div key={index} className='seo_metrics'>
            <div className='seo_metric_icon'> {icon}</div>
            <p>{value}</p>
            <p>{name}</p>
          </div>
        ))}
      </div>
      <div className='seo_button'>
        <button>Tell us about your project</button>
        <button>Request a free quote now</button>
      </div>
      <div className='seo_report_container'>
        {seoReportData.map(({ icon, heading, description }, index) => (
          <div key={index} className='seo_reports'>
            <div className='seo_report_icon'>{icon}</div>
            <h3>{heading}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeoGraphComponent;
