import React from 'react';

import Catalog from '../catalog/catalog';
import PageFooter from '../page-footer/page-footer';

const PageContent = () => {
  return (
    <div className="page-content">
      <Catalog/>
      <PageFooter/>
    </div>
  );
};

export default PageContent;
