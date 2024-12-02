import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
