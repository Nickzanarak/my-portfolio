import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Home() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        let isMounted = true;
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            if (isMounted) setInit(true);
        });
        return () => { isMounted = false; };
    }, []);

    const particlesComponent = useMemo(() => {
    if (!init) return null;
    return (
        <Particles
            id="tsparticles"
            className="fixed inset-0"
            options={{
                fullScreen: { enable: true, zIndex: -1 },
                background: { color: "#050505" }, 
                particles: {
                    color: { value: "#3b82f6" }, // เปลี่ยนเป็นสีฟ้าที่สว่างขึ้น (Blue-500)
                    links: { 
                        color: "#3b82f6", 
                        distance: 150, 
                        enable: true, 
                        opacity: 0.5, // เพิ่มความสว่างของเส้นจาก 0.2 เป็น 0.5
                        width: 1.5    // เพิ่มความหนาของเส้นเล็กน้อยเพื่อให้ดูคมชัด
                    },
                    move: { enable: true, speed: 1.2, outModes: { default: "bounce" } },
                    number: { value: 70, density: { enable: true, area: 800 } }, // เพิ่มจำนวนจุดเล็กน้อย
                    opacity: { 
                        value: 0.6, // เพิ่มความสว่างของจุด
                        animation: { enable: true, speed: 1, minimumValue: 0.2, sync: false } 
                    },
                    size: { value: { min: 1, max: 3 } },
                },
                interactivity: {
                    events: { 
                        onHover: { 
                            enable: true, 
                            mode: "grab" // เมื่อเมาส์ไปใกล้ เส้นจะดึงเข้าหาเมาส์
                        } 
                    },
                    modes: { 
                        grab: { 
                            distance: 220, 
                            links: { opacity: 0.8 } // เมื่อเมาส์จ่อ เส้นจะสว่างเป็นพิเศษ (0.8)
                        } 
                    }
                }
            }}
        />
    );
}, [init]);

    const words = ["Nicknamezanarak", "เป็น AI Developer", "และเป็น Web Developer"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 1500);
            return;
        }
        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : 150, parseInt(Math.random() * 200)));
        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    const marqueeVariants = {
        animate: {
            x: [0, -936], 
            transition: { x: { repeat: Infinity, repeatType: "loop", duration: 18, ease: "linear" } }
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] w-full overflow-hidden bg-[#050505] text-white">
            {particlesComponent}

            <div className="relative z-10 text-center px-4 w-full pt-8 pb-2"> 
                <h1 className="font-extrabold text-white mb-4 leading-tight flex flex-row flex-nowrap items-center justify-center gap-3 md:gap-4 overflow-visible whitespace-nowrap">
                    <span className="shrink-0" style={{ fontSize: "clamp(1.5rem, 5vw, 3.8rem)" }}>
                        สวัสดีครับ ผม
                    </span>
                    <div className="inline-flex items-center shrink-0">
                        <span className="text-blue-500 border-r-4 border-blue-500 animate-pulse"
                              style={{ fontSize: "clamp(1.5rem, 5vw, 3.8rem)" }}>
                            {words[index].substring(0, subIndex)}
                        </span>
                    </div>
                </h1>
                
                <p className="text-base md:text-lg text-gray-400 mb-8 max-w-xl mx-auto font-medium leading-snug italic">
                    นักศึกษา Electronics Computer จาก พระจอมเกล้าพระนครเหนือ <br className="hidden md:block" />
                    ผู้หลงใหลในการสร้างสรรค์ AI และ Web Application
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-4">
                    <Link 
                        to="/resume" 
                        className="w-40 bg-blue-600 text-white py-3 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(37,99,235,0.4)] hover:bg-blue-700 shadow-lg text-center text-sm text-nowrap"
                    >
                        ดูผลงานของผม
                    </Link>
                    <Link 
                        to="/contact" 
                        className="w-40 bg-transparent text-white border-2 border-white/20 py-3 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/10 hover:border-white/40 shadow-md text-center text-sm text-nowrap"
                    >
                        ติดต่อผม
                    </Link>
                </div>
            </div>

            <div className="w-full overflow-hidden py-8 z-10"> 
                <motion.div className="flex gap-8 w-max px-4" variants={marqueeVariants} animate="animate">
                    {[1, 2, 3, 4, 5].map((set) => (
                        <div key={set} className="flex gap-8 pr-8 items-center">
                            <HighlightCard title="Build Intelligent Systems" desc="ออกแบบระบบ AI ที่นำไปใช้งานจริง" />
                            <HighlightCard title="Develop Scalable Web Apps" desc="พัฒนา Web Application ที่ขยายต่อได้" />
                            <HighlightCard title="Bridge Hardware & Software" desc="เชื่อมโลก Electronics กับ Software" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

function HighlightCard({ title, desc }) {
    return (
        <div className="p-6 bg-white/5 backdrop-blur-md rounded-[1.2rem] shadow-2xl border border-white/10 w-72 h-25 shrink-0 text-left flex flex-col justify-center transition-transform hover:scale-105 duration-300">
            <h3 className="font-bold text-blue-400 mb-1 text-base leading-tight uppercase tracking-tight">{title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed font-medium italic">
                {desc}
            </p>
        </div>
    );
}