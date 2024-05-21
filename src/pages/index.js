import * as React from "react";
import "../scss/_app.scss"
import Navbar from "../components/Navbar";
import Home from "./home";

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Home/>
    </main>

  );
};

export default IndexPage;

export const Head = () => <title>ERO EV</title>;