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
           More stuff:  <b>{'Email: ' + generalFields.email}</b>
        </p>
        {educationArray.map(item => (
          <div key={item.id}>
            <p>I was edumacated at {item.school}</p>
            <p>It&apos;s located in{item.cityCounty}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Output;