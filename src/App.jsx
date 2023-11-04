import General from "./components/General";
import Header from "./components/Header";
import Output from "./components/Output";
import Education from "./components/Education";
import WorkHistory from "./components/WorkHistory";
import { useState } from "react";
import "./styles/App.css";

function App() {

  const [nextEducationID, setNextEducationID] = useState(3);
  const [nextWorkID, setnextWorkID] = useState(3);

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

  function addEducation() {
    const newEducation = {
      id: nextEducationID,
    }
    const updatedArray = Array.from(educationArray)
    updatedArray.push(newEducation)
    setNextEducationID(nextEducationID + 1)
    setEducationArray(updatedArray);
  }

  function deleteEducation(id) {
    const trimmedArray = educationArray.filter((item) => item.id !== id)
    setEducationArray(trimmedArray);
  }

  function addWork() {
    const newWork = {
      id: nextWorkID,
    }
    const updatedArray = Array.from(workArray)
    updatedArray.push(newWork)
    setnextWorkID(nextWorkID + 1)
    setWorkArray(updatedArray);
  }

  function deleteWork(id) {
    const trimmedArray = workArray.filter((item) => item.id !== id)
    setWorkArray(trimmedArray);
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
            <General data={generalFields} onChange={handleGeneralChange}/>
            <h2>Education</h2>
            <hr></hr>
            {educationArray.map((item, index) => (
              <>
                <Education key={item.id} data={item} onChange={handleEducationChange}/>
                {educationArray.length > 1 && <button className="deleteButton" onClick={() => deleteEducation(item.id)}>Delete</button>}
                {index === lastEducationIndex && <button className="addButton" onClick={addEducation}>Add</button>}
                <hr></hr>
              </>
            ))}
            <h2>Work History</h2>
            {workArray.map((item, index) => (
              <>
                <WorkHistory key={item.id} data={item} onChange={handleWorkHistoryChange}/>
                {workArray.length > 1 && <button className="deleteButton" onClick={() => deleteWork(item.id)}>Delete</button>}
                {index === lastWorkIndex && <button className="addButton" onClick={addWork}>Add</button>}
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
