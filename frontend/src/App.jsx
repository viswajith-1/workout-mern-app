import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbvar.jsx";
import Home from "./pages/Home.jsx";
import Workouts from "./pages/Workouts.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
