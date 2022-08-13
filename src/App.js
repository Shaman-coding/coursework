import {Route,Routes} from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import Luminaire from './components/pages/svetilnic/luminaire'
import Busket from './components/busket/busket';
import LightContainer from './components/pages/light/lightContainer';
import InfoContainer from './components/pages/infoCards/infoContainer';
import Auth from './components/auth/auth';

function App() {
  return (
    
    <div className="App">
      <Header/> 
      <NavBar/>
     
      <div className='dynamicPage'>
        <Routes>
          <Route path='/' element={<LightContainer/>} />
          <Route path = '/luminaire' element={<Luminaire/>}/> 
          <Route path = '/busket' element={<Busket/>}/> 
          <Route path = '/info/:id' element={<InfoContainer/>}/> 
          <Route path='/login' element={<Auth/>}/>
        </Routes>
      </div>
    </div>
    
     
     
    
   
  );
}

export default App;
