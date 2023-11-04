/* eslint-disable react/prop-types */
import "../styles/Output.css"

function Output( {generalFields, educationArray, workArray} ) {
  // const [generalFields, setGeneralFields] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   description: ''
  // })

  //const [educationArray, setEducationArray] = useState([
  //  {id: 1, school:'', cityCounty:'', degree:'', dateStart:'', dateEnd:''},
  //  {id: 2, school:'', cityCounty:'', degree:'', dateStart:'', dateEnd:''}
  //]);
//
  //const [workArray, setWorkArray] = useState([
  //  {id: 1, cityCounty:'ddd', position:'dd', dateStart:'', dateEnd:'', description:''},
  //  {id: 2, cityCounty:'', position:'', dateStart:'', dateEnd:'', description:''}
  //]);

  const lastEducationIndex = educationArray.length - 1;
  const lastWorkIndex = workArray.length - 1;

  return (
      <div id="output">
        <h2>Preview</h2>
        <div className="cvOuter">
          <div className="cvTop">
            <h2 className="generalName">{generalFields.firstName + ' ' + generalFields.lastName}</h2>
            <ul>
              <li><b>email: {generalFields.email}</b></li>
              <li><b>phone: {generalFields.phone}</b></li>
            </ul>
            <p className="generalDesc">{generalFields.description}</p>
          </div>
          <hr></hr>
          <h3>Education</h3>
          {educationArray.map((item, index) => (
            <div key={item.id}>
              <div className="education">
                <div className="educationLeft">
                  <p>Attended:</p> 
                  <p><b>{item.dateStart}</b> - <b>{item.dateEnd}</b></p>
                  {/* //TODO format date */}
                </div>
                <div className="educationRight">
                  <h4>{item.school}</h4>
                  <p>{item.cityCounty}</p>
                  <p>Degree: <b>{item.degree}</b></p>
                </div>
              </div>
              {index !== lastEducationIndex && <p>~~~</p>}
            </div>
          ))}
          <hr></hr>
          <h3>Work Experience</h3>
          {workArray.map((item, index) => (
            <div key={item.id}>
              <div className="work">
                <div className="workLeft">
                  <p>Worked:</p>
                  <p><b>{item.dateStart}</b> - <b>{item.dateEnd}</b></p>
                  {/* //TODO format date */}
                </div>
                <div className="workRight">
                  <h4>{item.company}</h4>
                  <p>{item.cityCounty}</p>
                  <p>Position: <b>{item.position}</b></p>
                </div>
                <p className="workDescription">{item.description}</p>
              </div>
              {index !== lastWorkIndex && <p>~~~</p>}
            </div>
          ))}
      </div>
    </div>

  )
}

export default Output;