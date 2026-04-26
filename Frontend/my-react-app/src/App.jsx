import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ProjectsPage from "./pages/projectPage";
import ContactPage from "./pages/contactPage";

function App() {
  return (
    <Router>
      <Navbar />

      <div style={{ minHeight: "80vh" }}>
        <Routes>x
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;