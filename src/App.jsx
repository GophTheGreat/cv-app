import General from "./components/General";
import Header from "./components/Header";
import Output from "./components/Output";
import Education from "./components/Education";
import WorkHistory from "./components/WorkHistory";
import { useState } from "react";
import "./styles/App.css";

function App() {

  const [generalFields, setGeneralFields] = useState({
    firstName: 'Name',
    lastName: 'LastName',
    email: 'xXEliteHaxorXx@hotmail.com',
    phone: '1-999-5555',
    description: 'I am the best worker please hire me'
  })

  const [educationArray, setEducationArray] = useState([
    {id: 1, school:'Example School', cityCounty:'Midtown, Arizona', degree:'Making Money', dateStart:'2023-01-01', dateEnd:'2023-12-31'},
    {id: 2, school:'', cityCounty:'', degree:'', dateStart:'', dateEnd:''}
  ]);

  const [workArray, setWorkArray] = useState([
    {id: 1, company:'Example Company', cityCounty:'Endvillage, Minnesota', position:'Bossman', dateStart:'', dateEnd:'', description:'I did the things and made lots of money'},
    {id: 2, company:'', cityCounty:'', position:'', dateStart:'', dateEnd:'', description:''}
  ]);

  const handleGeneralChange = (fieldData) => {
    setGeneralFields(fieldData)
  };

  const handleEducationChange = (updatedEducation) => {
    const updatedItems = educationArray.map((item) =>
      item.id === updatedEducation.id ? updatedEducation : item
    );
    setEducationArray(updatedItems)
  };

  const handleWorkHistoryChange = (updatedWorkHistory) => {
    const updatedItems = workArray.map((item) => 
      item.id === updatedWorkHistory.id ? updatedWorkHistory : item
    );
    setWorkArray(updatedItems);
    console.log("new work array is")
    console.log(workArray)
  }

  const lastEducationIndex = educationArray.length - 1;
  const lastWorkIndex = workArray.length - 1;

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
            {educationArray.map((item, index) => (
              <>
                <Education key={item.id} data={item} onChange={handleEducationChange}/>
                {educationArray.length > 1 && <button>Delete</button>}
                {index === lastEducationIndex && <button>Add</button>}
                <hr></hr>
              </>
            ))}
            {/* TODO add "add" button */}
            <h2>Work History</h2>
            {workArray.map((item, index) => (
              <>
                <WorkHistory key={item.id} data={item} onChange={handleWorkHistoryChange}/>
                {workArray.length > 1 && <button>Delete</button>}
                {index === lastWorkIndex && <button>Add</button>}
                {index !== lastWorkIndex && <hr></hr>}
              </>
            ))}
          </div>
          <Output generalFields={generalFields} educationArray={educationArray} workArray={workArray}/>
        </main>
      </div>
    </>
  );
}

export default App;
