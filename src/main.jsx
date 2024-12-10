import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

const Element = document.getElementById('root');
const root = ReactDOM.createRoot(Element);

root.render(
  <AuthProvider >
    <App />
  </AuthProvider>
)