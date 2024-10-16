import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Cloth from "./pages/Cloth"
import About from "./pages/About"
// import Signup from "./pages/Signup"
// import Login from "./pages/Login"
// import { IoIosLogIn } from "react-icons/io"


function App() {
  

  return (
   
<BrowserRouter>
<div>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/cloth" element={<Cloth />}/>
    
    
    
  </Routes>
</div>
</BrowserRouter>
  )
}

export default App
