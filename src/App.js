import Navbar from "./Navbar";
import Contact from "./components/Contact"
import About from "./components/About"
import Home from "./components/Home"
import { Route,Routes } from "react-router-dom";
function App(){
  
  return(
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </>
    
  )
}
export default App