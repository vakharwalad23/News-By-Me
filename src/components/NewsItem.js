import React from 'react'

const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card w-100" style={{ height: "auto" }}>
        <div className="newsimg">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-light">
            {source}
          </span>
          <img className="card-img-top" src={!imageUrl ? "https://images.hindustantimes.com/tech/img/2022/06/20/1600x900/HT_Tech_(2)_1646663162557_1655739810379.jpg" : imageUrl} alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{ height: "auto", maxHeight: "auto" }}>{title}</h5>
          <p className="card-text" style={{ height: "max-content", maxHeight: "max-content" }}>{description}</p>
          <p className="card-text" style={{ height: "auto" }}><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark" >Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem