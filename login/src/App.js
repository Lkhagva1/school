import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./pages/Home";
import UserContext from "./components/context/authContext";
import { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import About from "./components/navbar/About";
import Notfound from "./components/navbar/Notfound";
import Service from "./components/navbar/Service";
import Sign from "./components/Sign/Sign";
import ImageSlider from "./components/navbar/ImageSlider";

function App() {
  const { User } = useContext(UserContext);
  return (
    <BrowserRouter>
      {User ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/notfound" element={<Notfound />} />
          {/* <Route path='/*' element={<Notfound/>}/> */}
          <Route path="/sign" element={<Sign />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/about" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<About />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
