import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Home from './pages/home'; 
import About from './pages/About';
import Resume from './pages/Resume';
import Transcript from './pages/Transcript';
import Contact from './pages/Contact';

// --- แยกส่วน Routes เพื่อให้ AnimatePresence ตรวจจับ Key ของ Path ได้ ---
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/transcript" element={<Transcript />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-[#050505]">
        
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]"
          style={{ scaleX }}
        />

        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-sm shadow-md p-4 flex justify-center gap-4 md:gap-8 font-bold text-blue-600 sticky top-0 z-[50]">
          <Link to="/" className="hover:text-blue-800 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-800 transition">About</Link>
          <Link to="/resume" className="hover:text-blue-800 transition">Resume</Link>
          <Link to="/transcript" className="hover:text-blue-800 transition">Transcript</Link>
          <Link to="/contact" className="hover:text-blue-800 transition">Contact</Link>
        </nav>

        {/* ส่วนแสดงผลหลักพร้อมแอนิเมชัน */}
        <main>
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;