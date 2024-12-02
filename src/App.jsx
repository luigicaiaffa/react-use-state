import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { languages } from "./data/languages";

// import Header from "./components/layout/Header";
// import Main from "./components/layout/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div>
          <h1 className="title-header">Learn Web Development</h1>
        </div>
      </header>

      <main>
        <div className="container">
          <nav className="my-4 navbar navbar-expand">
            <ul className="navbar-nav">
              {languages.map((language) => {
                return (
                  <li key={language.id} className="nav-item list-btn">
                    <button className="btn btn-primary">
                      {language.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <section>
            {languages.map((language) => {
              return (
                <div key={language.id} className="card d-none">
                  <div className="card-body">
                    <h5 className="card-title">{language.title}</h5>
                    <p className="card-text">{language.description}</p>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
