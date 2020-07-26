import React, { Fragment, useState, useEffect } from 'react';

import { urlService } from '../../services/urlService';
import UrlView from "./urlView";

const CreateUrl: React.FC = () => {
  type Url = {
    originalUrl: string;
    isLoading: boolean;
  };

  const initialFormState = {
    originalUrl: '',
    isLoading: false,
  };
  const [url, setUrl] = useState<Url>(initialFormState);
  const [urlStateTemp, seturlStateTemp] = useState<any>(null);

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    const data = await urlService.get("short");
    seturlStateTemp(data);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUrl({ ...url, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUrl({
      originalUrl: '',
      isLoading: true,
    });
    const { originalUrl } = url;
    const payload = {
      originalUrl,
    };
    if (originalUrl) {
      await urlService.post('short', payload);
      
    }
    setUrl({
      originalUrl: '',
      isLoading: false,
    });
    fetchUrls();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={url.originalUrl}
            name="originalUrl"
            className="form-control"
            id="textInput"
            placeholder="Enter Url"
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-success btn-lg"
          disabled={url.isLoading ? true : false}
        >
          {url.isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
      <UrlView urlStateTemp={urlStateTemp} />
    </Fragment>
  );
};

export default CreateUrl;
