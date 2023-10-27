import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div>
      {/* <Navbar title="ShuvoBlog" /> */}
      <Navbar title="Textutils" />
      <TextForm headline="Enter text to analyze" />
      <About />
    </div>
  );
}

export default App;
