import React, { Fragment } from 'react';

import CreateUrl from './createUrl';
// import UrlView from './urlView';
import './index.css';

const UrlShortener: React.FC = () => {
  return (
    <Fragment>
      <div className="main">
        <div className="container url-content">
          <h1> Url Shortner </h1>
          <CreateUrl />
          {/* <UrlView /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default UrlShortener;
