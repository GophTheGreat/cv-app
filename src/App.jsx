import General from "./components/General";
import Header from "./components/Header";
import Output from "./components/Output";
import Education from "./components/Education";
import WorkHistory from "./components/WorkHistory";
import { useState } from "react";
import "./App.css";

function App() {

  const [generalFields, setGeneralFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    description: ''
  })

  const [educationArray, setEducationArray] = useState([
    {id: 1, school:'', cityCounty:'', degree:'', dateStart:'', dateEnd:''},
    {id: 2, school:'', cityCounty:'', degree:'', dateStart:'', dateEnd:''}
  ]);

  const workArray = [

  ];

  const handleGeneralChange = (fieldData) => {
    setGeneralFields(fieldData)
  };

  const handleEducationChange = (updatedEducation) => {
    console.log("Updating with");
    console.log(updatedEducation);
    console.log("see");
    const updatedItems = educationArray.map((item) =>
      item.id === updatedEducation.id ? updatedEducation : item
    );

    setEducationArray(updatedItems)
    console.log("New education is");
    console.log(educationArray);
  };

  // so the Education component is returning the wrong item somehow

  return (
    <>
      <div id="app">
        <Header />
        <main>
          <div className="formWrapper">
            <General onChange={handleGeneralChange}/>
            <h2>Education</h2>
            <hr></hr>
            {educationArray.map(item => (
              <Education key={item.id} data={item} onChange={handleEducationChange}/>
            ))}
            {/* TODO add "add" button */}
            <h2>Work History</h2>
            <WorkHistory/>
          </div>
          <Output generalFields={generalFields} educationArray={educationArray}/>
        </main>
      </div>
    </>
  );
}

export default App;
