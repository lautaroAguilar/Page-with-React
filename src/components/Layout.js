import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
