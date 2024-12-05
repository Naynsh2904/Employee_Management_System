import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import AuthContext from "./context/AuthContext.jsx";
import TaskContext from "./context/TaskContext.jsx"

const Element = document.getElementById('root');
const root = ReactDOM.createRoot(Element);

root.render(
  <AuthContext >
    <TaskContext>
      <App />
    </TaskContext>
  </AuthContext>
)