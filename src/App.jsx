
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Shared/Footer'
import NavBar from './Shared/NavBar'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
