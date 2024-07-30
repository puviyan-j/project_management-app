
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Addproject from './addproject/addproject';
import Milestone from './addproject/Milestone';
import Addtask from './addproject/addtask';
import Signup from './login&signup/signup/signup';
import Login from './login&signup/login/login';
import Int from './int';

function App() {
  return (
    <div className='container mt-3 py-3'>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path="/project" element={<Addproject />} />
          <Route path="/milestone/:id/" element={<Milestone />} />
          <Route path="/task/:id/:parentid" element={<Addtask />} />
          <Route path="/p" element={<Int />} />
          


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
