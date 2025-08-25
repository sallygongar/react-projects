import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NikePLP from "./pages/NikePLP";
import MujerPLP from "./pages/MujerPlp";
import HombrePLP from "./pages/HombrePlp";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nike" element={<NikePLP />} />
            <Route path="/mujer" element={<MujerPLP />} />
            <Route path="/hombre" element={<HombrePLP />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
