/* eslint-disable react/prop-types */
import "../Output.css"

function Output( {generalFields, educationArray} ) {
  console.log("in output");
  console.log(educationArray);
  return (
    <div id="output">
      <h3>Preview</h3>
      <div>
        <p>
          My dude&apos;s (or dudette&apos;s) name is:  <b>{generalFields.firstName + ' ' + generalFields.lastName}</b>
        </p>
        <p>You can email them at :  <b>{generalFields.email}</b></p>
        {educationArray.map(item => (
          <div key={item.id}>
            <hr></hr>
            <p>I was edumacated at <b>{item.school}</b></p>
            <p>It&apos;s located in <b>{item.cityCounty}</b></p>
            <p>The degree is <b>{item.degree}</b></p>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Output;