import "../assets/css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Landing from "../components/Landing";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills.js";
import Works from "../components/Works.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing></Landing>}></Route>
            <Route path="/AboutMe" element={<AboutMe></AboutMe>}></Route>
            <Route path="/Skills" element={<Skills></Skills>}></Route>
            <Route path="/Works" element={<Works></Works>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
