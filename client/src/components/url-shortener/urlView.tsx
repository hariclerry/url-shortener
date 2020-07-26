import React, { Fragment } from 'react';

type Props = {
    urlStateTemp: any;
  };
const UrlView: React.FC<Props> = ({ urlStateTemp }) => {
  return (
    <Fragment>
      {urlStateTemp && urlStateTemp.length > 0 && urlStateTemp !== null ? (
        <div className="card w-100 url-item">
          <div className="card-body">
            <ul>
              {urlStateTemp.map((item: any) => (
                <li key={item._id}>
                  <h5 className="card-title">Short Url</h5>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.originalUrl}
                  >
                    {item.shortUrl}
                  </a>
                  <h5 className="card-title url-card">Original Url</h5>
                  <p>{item.originalUrl}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default UrlView;
