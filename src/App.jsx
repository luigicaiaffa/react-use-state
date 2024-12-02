import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/layout/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
