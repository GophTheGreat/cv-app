import "../General.css"

function General() {
  return (
    <>
      <form className="form" action="submit">
        <div className="formElement">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name"/>
        </div>
        <div className="formElement">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email"/>
        </div>
        <div className="formElement">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" name="phone"/>
        </div>
      </form>
    </>
  )
}

export default General;