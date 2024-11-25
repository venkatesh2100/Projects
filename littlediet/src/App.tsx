import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Blog } from "./pages/Blog"
import { Contact } from "./pages/Contact"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/blog" element={ <Blog/> }/>
          <Route path="/contact" element={ <Contact/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
