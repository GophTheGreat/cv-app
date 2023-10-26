import "../Output.css"

function Output( {inputText} ) {
  return (
    <div id="output">
      <h3>Preview</h3>
      <div>
        <p>
          My dude's (or dudette's) name is:  <b>{inputText}</b>
        </p>
      </div>
    </div>
  )
}

export default Output;