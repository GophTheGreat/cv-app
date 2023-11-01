import "../Education.css"
import { useState } from "react";

function Education(data) {
  const [educationFields, setEducationFields] = useState(data)
  
  const handleInput = (e) => {
    const update = {...educationFields,
      [e.target.name]: e.target.value
    };
    setEducationFields(update)
    data.onChange(update)
    console.log("Sending Education object")
    console.log(update)
  };

  return (
    <>
      <form className="form" action="">
        <div className="formElementWide">
          <label>School/University</label>
          <input type="text" name="school" placeholder="School/University" onChange={handleInput}/>
        </div>
        <div className="formElementWide">
          <label>City/County</label>
          <input type="text" name="cityCounty" placeholder="City/County" onChange={handleInput}/>
        </div>
        <div className="formElementWide">
          <label>Degree</label>
          <input type="text" name="degree" placeholder="Degree/Program" onChange={handleInput}/>
        </div>
        <div className="formElement">
          <label>Start Date</label>
          <input type="date" name="dateStart" onChange={handleInput}/>
        </div>
        <div className="formElement">
          <label>End Date</label>
          <input type="date" name="dateEnd" onChange={handleInput}/>
        </div>
      </form>
      <button>Delete</button>
      {/* TODO make Delete button function */}
      <hr></hr>
    </>
  )
}

export default Education;