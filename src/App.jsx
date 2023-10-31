import General from "./components/General";
import Header from "./components/Header";
import Output from "./components/Output";
import Education from "./components/Education";
import WorkHistory from "./components/WorkHistory";
import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [generalFields, setGeneralFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    description: ''
  })

  const handleChange = (fieldData) => {
    setGeneralFields(fieldData)
  };

  return (
    <>
      <div id="app">
        <Header />
        <main>
          <div className="formWrapper">
            <General onChange={handleChange}/>
            <h2>Education</h2>
            <Education/>
            <h2>Work History</h2>
            <WorkHistory/>
          </div>
          <Output generalFields={generalFields}/>
        </main>
      </div>
    </>
  );
}

export default App;
