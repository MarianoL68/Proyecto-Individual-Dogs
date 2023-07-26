import './App.css';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './views/Landing/LandingPage';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import NavBar from './components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';



function App() {
  const location = useLocation();
  return (
  <div>
    {
      location.pathname !== '/' ? <NavBar/> : null
    }
   <Routes>
    <Route exact path = "/" element = {<LandingPage/>} />
    <Route path = "/home" element = {<Home/>} />
    <Route path ="/home/:id" element= {<Detail/>} />
    <Route path='/form' element= {<Form/>} />
   </Routes>
   </div>
   
  );
}

export default App;
