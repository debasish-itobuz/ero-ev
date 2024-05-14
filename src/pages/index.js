import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../scss/app.css";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  return (
    <main>
      <Navbar />
    </main>

  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;