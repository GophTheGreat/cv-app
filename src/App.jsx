import General from "./components/General";
import Header from "./components/Header";
import Output from "./components/Output";
import Education from "./components/Education";
import WorkHistory from "./components/WorkHistory";
import { useState } from "react";
import "./App.css";

function App() {

  const [inputText, setInputText] = useState('');

  const handleInputChange = (text) => {
    setInputText(text);
  };

  return (
    <>
      <div id="app">
        <Header />
        <main>
          <div className="formWrapper">
            <General onInputChange={handleInputChange}/>
            <h2>Education</h2>
            <Education/>
            <h2>Work History</h2>
            <WorkHistory/>
          </div>
          <Output inputText={inputText}/>
        </main>
      </div>
    </>
  );
}

export default App;
