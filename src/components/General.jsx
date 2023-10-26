/* eslint-disable react/prop-types */
import "../General.css"

function General( {onInputChange}) {

  const handleInput = (e) => {
    const text = e.target.value;
    onInputChange(text);
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
          <input id="lastName" type="text" name="lastName" placeholder="Last Name (Family Name)" />
        </div>
        <div className="formElement">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" placeholder="Email Address"/>
        </div>
        <div className="formElement">
          <label htmlFor="phone">Contact Number</label>
          <input id="phone" type="tel" name="phone" placeholder="Home, Cell, or Work phone (whichever is best)"/>
        </div>
        <div className="formElementTextbox">
          <label htmlFor="description">Profile Description</label>
          <textarea id="description" type="text" name="description" placeholder="Describe yourself!"/>
        </div>
      </form>
      <hr></hr>
    </>
  )
}

export default General;