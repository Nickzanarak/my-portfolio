import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Home from './pages/home'; 
import About from './pages/About';
import Resume from './pages/Resume';
import Transcript from './pages/Transcript';
import Contact from './pages/Contact';

// --- ส่วน Navbar ดีไซน์ใหม่ (Floating Capsule) ---
function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Transcript', path: '/transcript' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        {/* Floating Capsule Background */}
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 px-6 py-2 md:px-8 md:py-3 rounded-full flex items-center gap-4 md:gap-8 relative overflow-hidden shadow-2xl">
          
          {/* แสงวิ่งแวบๆ (Hover Effect) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link key={link.name} to={link.path} className="relative py-1 group">
                <span className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] italic transition-all duration-300 ${isActive ? 'text-blue-400' : 'text-gray-400 group-hover:text-white'}`}>
                  {link.name}
                </span>

                {/* เส้นใต้สีฟ้าวิ่งตาม (Framer Motion) */}
                {isActive && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

// --- ส่วน Routes แอนิเมชันตอนเปลี่ยนหน้า ---
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
        
        {/* Progress Bar (ปรับให้บางและดูแพงขึ้น) */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 to-indigo-600 origin-left z-[110]"
          style={{ scaleX }}
        />

        {/* New Navigation */}
        <Navbar />

        {/* ส่วนแสดงผลหลัก */}
        <main className="relative z-10">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;