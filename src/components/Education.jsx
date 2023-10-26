import "../Education.css"

function Education() {
  return (
    <>
      <hr></hr>
      <form className="form" action="">
        <div className="formElementWide">
          <label>School/University</label>
          <input type="text" name="school" placeholder="School/University"/>
        </div>
        <div className="formElementWide">
          <label>City/County</label>
          <input type="text" name="citycounty" placeholder="City/County"/>
        </div>
        <div className="formElementWide">
          <label>Degree</label>
          <input type="text" name="degree" placeholder="Degree/Program"/>
        </div>
        <div className="formElement">
          <label>Start Date</label>
          <input type="date" name="dateStart"/>
        </div>
        <div className="formElement">
          <label>End Date</label>
          <input type="date" name="dateEnd"/>
        </div>
      </form>
      <button>Add</button>
      <button>Delete</button>
      <hr></hr>
    </>
  )
}

export default Education;