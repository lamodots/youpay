import react from 'react';
// import './App.css'
import { Container } from './components/Container';
import { NavBar } from './components/nav/NavBar';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import {SignUp} from './pages/signup/SignUp';
import {Login} from './pages/login/Login';
import {ErrorPage} from './pages/ErrorPage/ErrorPage';
import { Home } from './pages/Home/Home';
import { NavigationBar } from './components/nav/NavigationBar';



function App() {


  return (
   
<Container>
  <BrowserRouter>
  {/* <NavBar /> */}
  <NavigationBar />

  <Routes>
    <Route path='/' element={ <Home />}/>
    <Route path='/signup' element={< SignUp />}/>
    <Route path='/login' element={ <Login />}/>
    <Route path='*' element={ <ErrorPage />}/>

   
  
  </Routes>
 
  </BrowserRouter>

</Container>

  
  )
}

export default App
