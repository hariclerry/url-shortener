import React, { Fragment } from "react";
import { NotificationContainer } from "react-notifications";

import UrlShortener from "./components/url-shortener";

function App() {
  return (
    <Fragment>
      <UrlShortener />
      <NotificationContainer />
    </Fragment>
  );
}

export default App;
