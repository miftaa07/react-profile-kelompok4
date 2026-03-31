import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Mifta from "./pages/Mifta";
import Oribel from "./pages/Oribel";
import Retno from "./pages/Retno";

import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <Navbar />
      
    
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/miftakhul-dzakirah-asma" element={<Mifta />} />
          <Route path="/oribel-renata-geraldine" element={<Oribel />} />
          <Route path="/retno-ayu-agustina-utari" element={<Retno />} />

        </Routes>
      
        <Footer />
    </Router>
  );
}

export default App;