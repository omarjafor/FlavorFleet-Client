import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Success from "./Pages/Success"
import Error from "./Pages/Error"
import PrivateRoute from "./Private/PrivateRoute"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<PrivateRoute element={<Success />}/>} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
