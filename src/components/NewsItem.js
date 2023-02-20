import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
            <span className="badge rounded-pill bg-danger" >
              {source}
            </span>
          </div>
          <img src={imageUrl ? imageUrl : "https://www.incimages.com/uploaded_files/image/1920x1080/getty_639637280_374912.jpg"} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newsUrl} target={'_blank'} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem