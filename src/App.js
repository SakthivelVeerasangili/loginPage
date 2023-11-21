import './App.css';
import Login from './login'
import { Routes,Route } from 'react-router-dom';
import Home from './home/index'

function App(props) {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
      
    </>
    
   
  );
}

export default App;
