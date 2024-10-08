import "./App.css";
import SingleContent from "./component/SingleContent";
import data from "./data/data";
import { useState } from "react";

function App() {
  // eslint-disable-next-line
  const [content, setContent] = useState(data);
  return (
    <main>
      <div className="container">
        <h1>Web developer tools</h1>
        <section>
          {content.map((data) => {
            return <SingleContent key={data.id} {...data} />
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
