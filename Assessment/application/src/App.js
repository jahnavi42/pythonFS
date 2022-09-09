import "./globalStyles.css";
import { Browsing, Details, Mobile, Clothes } from "./screens";
import { Routes, Route } from "react-router-dom";
import Login from "./login/Login";

function App() {
  return (
    <>
   
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/browse" element={<Browsing />} />
    </Routes>
    </>
  );
}

export default App;
