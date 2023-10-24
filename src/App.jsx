import General from "./components/General";
import Header from "./components/Header";
import Output from "./components/Output";
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
          <General onInputChange={handleInputChange}/>
          <Output inputText={inputText}/>
        </main>
      </div>
    </>
  );
}

export default App;
