import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/Login/Login';
import RegPage from './Pages/Register/register';
import ForgotPass from './Pages/ForgotPW/ForgotPW';
import ChangePass from './Pages/ChangePW/ChangePW';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><LoginPage /></>} />
        <Route path='/Reg' element={<><RegPage /></>} />
        <Route path='/ForgotPass' element={<><ForgotPass /></>} />
        <Route path='/ChangePass' element={<><ChangePass /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
