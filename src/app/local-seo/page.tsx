import React from 'react';
import Navigation from '../common/navigation/Navigation';
import LocalSeoHeader from './components/localseo-header/LocalSeoHeader';
import LocalSeoDescription from './components/localseo-desc/LocalSeoDescription';
import LocalSeoInfo from './components/localseo-info/LocalSeoInfo';

const LocalSeoPage = () => {
  return (
    <div>
      <Navigation />
      <LocalSeoHeader />
      <LocalSeoDescription />
      <LocalSeoInfo />
    </div>
  );
};

export default LocalSeoPage;
