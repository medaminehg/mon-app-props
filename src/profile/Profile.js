import React from 'react'
import '../App.css';
import propTypes from "prop-types"
function Profile({Persons, children}) {
  return (
      <div>
     <h1 style={{"textDecoration":"underline"}}>{Persons.name}</h1> 
     <h3 style={{"textDecoration":"underline"}}>{Persons.email}</h3>
     <h3 style={{"textDecoration":"underline"}}>{Persons.phone}</h3>
     {children }
    </div>
  )
};
Profile.defaultProps={
    Persons:{
        name:"foulen",
        email:"hello",
        phone:"0000"
    }

    }
    Profile.propTypes = {
        Persons:{
            name: propTypes.string,
        email: propTypes.string,
        phone: propTypes.number,
        },
        
        children: propTypes.node.isRequired
    }
export default Profile
