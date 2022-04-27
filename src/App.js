import './App.css';
import Home from './component/Home';
import {useState} from 'react'
import './component/Project.css';
import Register from './component/Register'
import Login from  './component/Login'
import Admin from './component/Admin'
import Logout from './component/Logout';
import Vegetables from './component/vegetables';
import {Routes,Route} from 'react-router-dom';
import Fruits from './component/Fruits';
import DryFruits from './component/DryFruits';
import Cart from './component/Cart';
import DairyProduct from './component/DairyProduct';
// import Cart from './component/Cart';
  function App() {
    
    return (
      <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/Logout" element={<Logout/>}/>
          <Route path="/vegetables" element={<Vegetables/>}/>
          <Route path="/Fruits" element={<Fruits/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/DryFruits" element={<DryFruits/>}/>
          <Route path="/DairyProduct" element={<DairyProduct/>}/>
        </Routes>
    </div>
  );
}

export default App;
