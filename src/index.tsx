import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <h1>It's a React app innit</h1>;
}

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />, rootElement);

