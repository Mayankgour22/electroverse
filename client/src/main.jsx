
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import "./css/deep.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import Store from "./store.jsx";
createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <App />
  </Provider>
);
