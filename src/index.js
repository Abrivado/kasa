import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <div className="index-general">
      <Header />
      <div className="index-contenu">
        <AppRoutes />
      </div>
      <div className="index-footer">
        <Footer />
      </div>
    </div>
  </BrowserRouter>,
);
