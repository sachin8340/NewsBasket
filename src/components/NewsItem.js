import React from 'react';
import './NewsItem.css';
import './VanillaTilt.js';

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (

        <div className="my-3">
            <div className="card cardbg" data-tilt>

                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }>


                </div>

                <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top img_m" alt="..." />

                <div className="card-body">
                    <span className="badge rounded-pill bg-success mb-2"> {source} </span>
                    <h5 className="card-title">{title}  </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-outline-success">Read More</a>
                </div>
            </div>

        </div>


    )
}

export default NewsItem
