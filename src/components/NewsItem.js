import React from 'react';

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <div style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "absolute",
                    right: 0
                }}>
                    <span className="badge rounded-pill bg-danger">{source} </span>
                </div>
                <img src={imageUrl ? imageUrl : "https://images.hindustantimes.com/img/2022/02/04/1600x900/Breaking-News-Live-Blog-pic_1626307942790_1643933127366.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">
                        By {author == null ? "Unknown" : author} on
                        {new Date(date).toGMTString()}
                    </small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
                </div>
            </div>
        </div >
    );
}

export default NewsItem;
