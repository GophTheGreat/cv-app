/* eslint-disable react/prop-types */
import "../Output.css"

function Output( {generalFields} ) {
  return (
    <div id="output">
      <h3>Preview</h3>
      <div>
        <p>
          My dude's (or dudette's) name is:  <b>{generalFields.firstName + ' ' + generalFields.lastName}</b>
           More stuff:  <b>{'Email: ' + generalFields.email}</b>
        </p>
      </div>
    </div>
  )
}

export default Output;