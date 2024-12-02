import { useState } from "react";

import Button from "../Button";
import Card from "../Card";

import { languages } from "../../data/languages";

export default function Main() {
  const [languagesData, setClick] = useState(languages);

  const clickHandler = (id) => {
    const updatedLanguages = [...languagesData];
    updatedLanguages[id - 1].isClicked = !updatedLanguages[id - 1].isClicked;
    setClick(updatedLanguages);
  };

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
          {languages.map((language) => {
            return (
              <Card
                key={language.id}
                id={language.id}
                title={language.title}
                description={language.description}
                isClicked={language.isClicked}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}
