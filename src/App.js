import './App.css';
import Login from './login'
import { Routes,Route } from 'react-router-dom';
import Home from './home/index'

function App(props) {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/home' element={<Home />}/>
    </Routes>
      
    </>
    
   
  );
}

export default App;
