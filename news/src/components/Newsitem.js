import React from 'react';
import { Link } from 'react-router-dom';

export default function Newsitem(props) {
let { title, description, urlToImage, url, author, time, source } = props;
  return (
    <div className="card my-3" style={{ height: '36rem' }}>
      <img src={!urlToImage ? "https://img.etimg.com/thumb/msid-91319817,width-1070,height-580,imgsize-624482,overlay-etmarkets/photo.jpg" : urlToImage} className="card-img-top" alt='...' />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 40)}...</h5>
        <p className="card-text">{description.slice(0, 88)}...</p>
        <span className="badge bg-danger py-2">{source}</span>
        <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(time).toGMTString()}</small></p>
        <Link to={url} target="_blank" className="btn btn-dark">Read more</Link>
      </div>

    </div>
  )
}

