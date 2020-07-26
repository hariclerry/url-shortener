/* eslint-disable consistent-return */
/**
 * @file contains all endpoints for url
 */

// Third party imports
import shortid from 'shortid';
import validUrl from 'valid-url';

// local imports
import Url from '../models/urlShortner';

class UrlShortener {
  /**
   * @method shortenUrl
   * called when shortenting url
   */

  static async shortenUrl(req, res) {
    const { originalUrl } = req.body;
    if (!validUrl.isUri(originalUrl)) {
      res.status(400).send('Invalid Url');
    } else {
      try {
        let url = await Url.findOne({ originalUrl });
        if (url) {
          return res.status(200).send(url);
        }
        const uniqueCode = shortid.generate();
        const shortUrl = `shorty/${uniqueCode}`;
        url = new Url({
          uniqueCode,
          originalUrl,
          shortUrl,
        });

        await url.save();
        return res.status(201).send(url);
      } catch (error) {
        res.status(500).send(error.message);
      }
    }
  }

  /**
   * @method fetchUrl
   * called when fectching shortened Url
   */
  static async fetchUrl(req, res) {
    try {
      const shortUrl = await Url.find().sort({ _id: -1 });

      return res.status(200).send({ data: shortUrl });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  /**
   * @method redirectUrl
   * called when redirecting Url
   */
  static async redirectUrl(req, res) {
    try {
      const { shortUrl } = req.params;
      const url = await Url.findOne({ uniqueCode: shortUrl });
      if (url) {
        return res.redirect(url.originalUrl);
      }
      return res.status(404).send({
        message: 'Url not found',
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default UrlShortener;
