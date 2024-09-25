import React from "react";

const SingleContent = ({title , description}) => {
  return (<article className="content">
    <header>
        <h3>{title}</h3>
        <button className="btn">+</button>
    </header>
    <p>{description}</p>

  </article>);
};

export default SingleContent;
