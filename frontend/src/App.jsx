import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbvar.jsx";
import Home from "./pages/Home.jsx";
import Workouts from "./pages/Workouts.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
