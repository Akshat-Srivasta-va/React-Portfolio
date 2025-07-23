import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"




function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
     <Route path="*" element={<NotFound />}/>   {/* if we go any other route it will show not Found */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
