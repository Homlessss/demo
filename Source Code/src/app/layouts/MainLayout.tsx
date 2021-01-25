import React, { FunctionComponent } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../../styles/index.css";

export const MainLayout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        {children}
        <Footer />
      </div>
    </>
  );
};
