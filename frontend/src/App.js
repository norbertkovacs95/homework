import React, { useState } from "react";
import "./App.css";

import Form from "./Form/Form";
import Header from "./Header/Header";
import Blogs from "./Blogs/Blogs";
import Footer from './Footer/Footer';

function App() {
  const [pages, setPages] = useState(0);
  const handleFormSubmit = (_pages) => {
    setPages(_pages);
  };

  return (
    <div className="App">
      <Header title={"Blog Parser"} colo={"primary"} variant="h5" />
      <div className="mainContent">
        <Form handler={handleFormSubmit} />
        {pages > 0 && <Blogs pages={pages} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
