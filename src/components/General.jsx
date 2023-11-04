/* eslint-disable react/prop-types */
import "../styles/General.css"
import { useState } from "react";

function General( { data, onChange } ) {

  //I want to return an object
  //That contains text from all the fields
  const [generalFields, setGeneralFields] = useState(data)

  const handleInput = (e) => {
    //console.log(e.target.value)
    const update = {...generalFields,
      [e.target.name]: e.target.value
    };
    setGeneralFields(update)
    onChange(update)
  };

  return (
    <>
      <form className="form" action="">
        <h2 id="generalTitle">General Info</h2>
        <div className="formElement">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="text" name="firstName" placeholder="First Name (Given Name)" onChange={handleInput}/>
        </div>
        <div className="formElement">
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" name="lastName" placeholder="Last Name (Family Name)" onChange={handleInput}/>
        </div>
        <div className="formElement">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" placeholder="Email Address" onChange={handleInput}/>
        </div>
        <div className="formElement">
          <label htmlFor="phone">Contact Number</label>
          <input id="phone" type="tel" name="phone" placeholder="Home, Cell, or Work phone (whichever is best)" onChange={handleInput}/>
        </div>
        <div className="formElementTextbox">
          <label htmlFor="description">Profile Description</label>
          <textarea id="description" type="text" name="description" placeholder="Describe yourself!" onChange={handleInput}/>
        </div>
      </form>
      <hr></hr>
    </>
  )
}

export default General;