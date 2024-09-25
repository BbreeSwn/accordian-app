import { useState } from "react";

const SingleContent = ({title , description}) => {
    const [show , setShow] = useState(false)
  return (<article className="content">
    <header>
        <h3>{title}</h3>
        <button className="btn" onClick={()=>setShow(!show)}>{show? "-" : "+"}</button>
    </header>
    {show && <p>{description}</p>}

  </article>);
};

export default SingleContent;
