import hero1 from './hero1.jpg';
import './App.css';
import Profile from './profile/Profile';
import Btn from './profile/Btn';

 let Persons ={
  name:"Amin",
  email:"amin@gmail.com",
  phone:123654
  
 }
 const display = () => {
  alert('HEllo  '+Persons.name)
}
function App() {
  return (
    <div className="App">
      <Profile Persons={Persons}display={display} >
      <img src={hero1} style={{"height":"300px","width":"300px"}} />
     
      </Profile>

    </div>
  );
}

export default App;
