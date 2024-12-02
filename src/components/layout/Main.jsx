import { useState } from "react";

import Button from "../Button";
import Card from "../Card";

import { languages } from "../../data/languages";

export default function Main() {
  const [languagesData, setClick] = useState(languages);

  const updatedLanguages = [...languagesData];

  const clickHandler = (id) => {
    updatedLanguages[id - 1].isClicked = !updatedLanguages[id - 1].isClicked;
    setClick(updatedLanguages);
  };

  const languagesClicked = updatedLanguages.map(
    (language) => language.isClicked
  );

  const isOneCliked = languagesClicked.includes(true);

  return (
    <main>
      <div className="container">
        <section>
          <nav className="my-4 navbar navbar-expand">
            <ul className="navbar-nav">
              {languages.map((language) => {
                return (
                  <Button
                    key={language.id}
                    id={language.id}
                    title={language.title}
                    isClicked={language.isClicked}
                    clickHandler={clickHandler}
                  />
                );
              })}
            </ul>
          </nav>
        </section>

        <section>
          {isOneCliked ? (
            languages.map((language) => {
              return (
                <Card
                  key={language.id}
                  id={language.id}
                  title={language.title}
                  description={language.description}
                  isClicked={language.isClicked}
                />
              );
            })
          ) : (
            <div className="card mb-3 ">
              <div className="card-body">
                <h5 className="card-title">Nessun linuaggio selezionato</h5>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
