import "../Output.css"

function Output( {inputText} ) {
  return (
    <div id="output">
      <p>
        My dude's (or dudette's) name is:  <b>{inputText}</b>
      </p>
    </div>
  )
}

export default Output;