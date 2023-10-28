import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Contact from "./components/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("");
    }, 1500);
  };

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#13466e";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <BrowserRouter>
      <Navbar title="Textutils" mode={mode} toogleMode={toogleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <TextForm headline="Enter your text to analyze" mode={mode} />
          }
        />
        <Route exact path="/about" element={<About />} mode={mode} />
        <Route exact path="/contact" element={<Contact mode={mode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
