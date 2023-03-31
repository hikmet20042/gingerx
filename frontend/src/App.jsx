import { Route, Routes } from "react-router-dom";
import NavBar from "./components/utils/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
