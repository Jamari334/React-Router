import { Route, Routes,Link } from 'react-router-dom'
import './App.css'
import './index.css'
import red from './components/Red'
import blue from './components/Blue'
import home from './components/Home'


function App() {


  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>



        <div id="navbar">
          <Link to= {"/"} >HOME</Link>
          <Link to = {"/red"}>RED</Link>
          <Link to = {"/blue"}>BLUE</Link>
         </div>



        <div id="main-section">
          <Routes>
            <Route path="/" element = {home}/>
            <Route path="/red" element={red} />
            <Route path="/blue" element={blue} />
          </Routes></div>
      </div>
    </>
  )
}

export default App
