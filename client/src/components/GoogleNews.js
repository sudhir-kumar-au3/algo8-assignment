import React from "react";

function GoogleNews(props) {
  return (
    <React.Fragment>
      <div className="card mb-3">
        <img className="card-img-top" src={props.image} alt="Card image cap" height='200px'/>
        <div className="card-body">
          <h5 className="card-title">
              <a href={props.url}>{props.title}</a>
          </h5>
          <small className="text-muted ">{props.author}</small>
          <p className="card-text">
              {props.description}
          </p>
          <p className="card-text">
            <small className="text-muted">{props.publishedAt}</small>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GoogleNews;
