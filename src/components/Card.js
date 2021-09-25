import React from 'react';
import { format } from 'date-fns';

export default function Card({ data }) {
  // const date = new Date(data.publishedOn);
  // const formatDate = format(date, 'MMMM dd, yyyy');

  return (
    <div className="card">
      <div className="row">
        <div className="card-text">
          <div className="card-header">
            <h3>{data.title}</h3>
            <p>Book by {data.author}</p>
          </div>
          <div className="row">
            <div className="card-desc">
              <p>
                <span className="text-mute">ISBN</span>
                <br />
                {data.isbn}
              </p>
              <p>
                <span className="text-mute">Published on</span>
                <br />
                {/* {formatDate} */}
                {data.publishedOn}
              </p>
            </div>
            <div className="card-desc">
              <p>
                <span className="text-mute">Number of Page</span>
                <br />
                {data.numberOfPages}
              </p>
              <p>
                <span className="text-mute">Country Publiser</span>
                <br />
                {data.country}
              </p>
            </div>
          </div>
        </div>
        <div className="card-img">
          <img src={data.imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
}
