import "./assets/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Header />

          <main className="container flex-grow-1 py-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
