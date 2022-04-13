import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Header, Home, Login, SignUp, Store } from './pages';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/store' element={<Store></Store>}></Route>
      </Routes>
    </div>
  );
}

export default App;
