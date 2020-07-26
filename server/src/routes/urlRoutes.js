/**
 * @file contains all the routes for the implemented url endpoints
 */

// local imports
import UrlShortner from '../controllers/urlController';

// constants
const { shortenUrl, fetchUrl, redirectUrl } = UrlShortner;

const routes = (app) => {
  app.route('/api/short').post(shortenUrl);
  app.route('/api/short').get(fetchUrl);
  app.route('/api/:shortUrl').get(redirectUrl);
  return app;
};

export default routes;
