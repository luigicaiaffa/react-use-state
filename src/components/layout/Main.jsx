import { languages } from "../../data/languages";

export default function Main() {
  return (
    <main>
      <div className="container">
        <section>
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
        </section>

        <section>
          {
            <div key={languages[0].id} className="card">
              <div className="card-body">
                <h5 className="card-title">{languages[0].title}</h5>
                <p className="card-text">{languages[0].description}</p>
              </div>
            </div>
          }
        </section>
      </div>
    </main>
  );
}
