import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbvar.jsx";
import Home from "./pages/Home.jsx";
import AddWorkout from "./pages/AddWorkout.jsx";
import ViewWorkout from "./pages/ViewWorkout.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-workout" element={<AddWorkout />} />
          <Route path="/view-workouts" element={<ViewWorkout/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
