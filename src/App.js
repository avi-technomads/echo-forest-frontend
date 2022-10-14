import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Layout/Header";
import About from "./components/About/About";
import Roadmap from "./components/Roadmap/Roadmap";
import Team from "./components/Team/Team";
import SignUp from "./components/Sign-up/Sign-Up";
import Footer from "./components/Layout/Footer";
import Sliders from "./components/Slider";
import UpcomingMint from "./components/Upcoming-Mint";
import Home from "./components/Home";
import MintPage from "./components/MintPage/MintPage";
// import Stable from "./components/Stable";
// <Stable />
function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/mint-page" ? "" : <Header />}
      <Routes>
        <Route exact path="/mint-page" element={<MintPage />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/mint" element={<UpcomingMint />} />
        <Route element={<Sliders />} />
        <Route exact path="/roadmap" element={<Roadmap />} />
        <Route exact path="/ourteam" element={<Team />} />

        <Route element={<SignUp />} />
      </Routes>
      {location.pathname === "/mint-page" ? "" : <Footer />}
    </>
  );
}

export default App;
