/* eslint-disable react/prop-types */
import { useState } from "react";

function WorkHistory( { data, onChange }) {
  const [workHistoryFields, setWorkHistoryFields] = useState(data)

  const handleInput = (e) => {
    const update = {...workHistoryFields,
      [e.target.name]: e.target.value,
    };
    setWorkHistoryFields(update)
    onChange(update);
    console.log("sending")
    console.log(update);
  }
  
  return (
    <>
      <form className="form" action="">
        <div className="formElementWide">
          <label>Company</label>
          <input type="text" name="company" placeholder="Company" onChange={handleInput}/>
        </div>
        <div className="formElementWide">
          <label>City/County</label>
          <input type="text" name="citycounty" placeholder="City/County" onChange={handleInput}/>
        </div>
        <div className="formElementWide">
          <label>Position</label>
          <input type="text" name="position" placeholder="Position" onChange={handleInput}/>
        </div>
        <div className="formElement">
          <label>Start Date</label>
          <input type="date" name="dateStart" onChange={handleInput}/>
        </div>
        <div className="formElement">
          <label>End Date</label>
          <input type="date" name="dateEnd" onChange={handleInput}/>
        </div>
        <div className="formElementTextbox">
          <label htmlFor="description">Description</label>
          <textarea id="description" type="text" name="description" placeholder="Describe your role and achievements" onChange={handleInput}/>
        </div>
      </form>
    </>
  )
}

export default WorkHistory;