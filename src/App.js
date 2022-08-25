import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cardes from './Compoment/Cardes';


import Navbars from './Compoment/Navbars';


function App() {
  return (
    <div className="App">
      <Navbars></Navbars>
      <Cardes name="khaled" /> 
      <Cardes username="Benouada"/>
     <Cardes age= "25 years old" />
     <Cardes profession="Developer "></Cardes>
     <img class='ima'src='profile.jpg'></img>
    
      
    </div>
  );
}

export default App;
