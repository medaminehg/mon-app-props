import React from 'react'

function Btn({Persons}) {
  return (
    <div>
      <button onClick={() => alert('HEllo  '+Persons.name)}>Clik Me</button>
    </div>
  )
}

export default Btn
