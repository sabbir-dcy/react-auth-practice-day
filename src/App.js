import { Route, Routes } from 'react-router-dom'
import './App.css'
import {
  Details,
  Header,
  Home,
  Login,
  RequireAuth,
  SignUp,
  Store,
} from './pages'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route
          path='/store'
          element={
            <RequireAuth>
              <Store></Store>
            </RequireAuth>
          }
        ></Route>

        <Route path='/details'>
          <Route path=':mealId' element={<Details></Details>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
