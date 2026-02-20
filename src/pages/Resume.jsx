import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Download, ArrowUpRight, GraduationCap, Briefcase, Code2, Terminal } from 'lucide-react';

export default function Resume() {
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 1000], [0, 300]);

    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    const skills = {
        frontend: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
        backend: ["Node.js", "FastAPI (Python)", "JSON"],
        languages: ["Python", "C/C++", "Java", "JavaScript"],
        tools: ["Git/GitHub", "Google Colab", "Postman"]
    };

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
        >
            <div className="bg-[#050505] text-white min-h-screen font-sans overflow-hidden relative selection:bg-blue-500/30">
                
                {/* 1. Background Animation - ปรับให้ Glow ดูมีความลึกขึ้น */}
                <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                    <motion.div 
                        style={{ y: bgY }}
                        animate={{ 
                            scale: [1, 1.15, 1],
                            opacity: [0.15, 0.25, 0.15] 
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
                    
                    {/* 2. Hero Section - Typography เน้นความดุดัน */}
                    <header className="border-b border-white/5 pb-20 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 text-blue-500 mb-8"
                        >
                            <span className="h-[2px] w-12 bg-blue-500"></span>
                            <h2 className="font-black tracking-[0.5em] uppercase text-xs italic">Curriculum Vitae</h2>
                        </motion.div>
                        
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase italic">
                                Pathawee <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-800">
                                    Keawprapol
                                </span>
                            </h1>
                            
                            <div className="flex flex-col gap-6 bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] backdrop-blur-3xl lg:w-80">
                                <div className="space-y-4 text-sm text-gray-400 font-medium italic">
                                    <div className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                                        <Mail size={16} className="text-blue-500"/> partarwee@gmail.com
                                    </div>
                                    <div className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                                        <Phone size={16} className="text-blue-500"/> 092-691-1189
                                    </div>
                                    <div className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors line-clamp-1">
                                        <MapPin size={16} className="text-blue-500"/> Nonthaburi, Thailand
                                    </div>
                                </div>
                                <a 
                                    href="/resume-pathawee.pdf" // แก้ชื่อไฟล์ให้ตรงกับที่วางในโฟลเดอร์ public
                                    download="Pathawee_Resume.pdf" // ชื่อไฟล์ที่จะปรากฏเมื่อผู้ใช้ดาวน์โหลด
                                    className="group mt-2 flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-2xl font-black uppercase text-xs hover:bg-white hover:text-black transition-all duration-500 shadow-2xl shadow-blue-600/20 text-center"
                                >
                                    <Download size={16} className="group-hover:translate-y-1 transition-transform" /> 
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </header>

                    {/* 3. Main Content - จัดเป็น Grid ระบบระเบียบมากขึ้น */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
                        {/* Profile Section */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="inline-flex items-center gap-2 text-blue-500 font-bold uppercase text-xs tracking-widest italic bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                                <Terminal size={14} /> Profile
                            </div>
                            <p className="text-2xl text-gray-300 leading-relaxed font-light italic">
                                "Computer Electronics student focusing on <span className="text-white font-medium underline decoration-blue-500/30 underline-offset-8">web technologies</span>. I build applications using React and Node.js, with a strong emphasis on Git workflow and API testing."
                            </p>
                        </div>

                        {/* Education Section */}
                        <div className="lg:col-span-8 space-y-12">
                            <div className="inline-flex items-center gap-2 text-blue-500 font-bold uppercase text-xs tracking-widest italic bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                                <GraduationCap size={14} /> Education
                            </div>
                            <div className="space-y-16 relative before:absolute before:left-0 before:top-4 before:bottom-0 before:w-[1px] before:bg-white/5 pl-8">
                                <div className="group relative">
                                    <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#050505] shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-transform group-hover:scale-125" />
                                    <span className="text-blue-600 font-black font-mono text-xs uppercase tracking-[0.2em]">2024 — Present / GPAX 3.00</span>
                                    <h4 className="text-4xl font-black uppercase mt-4 italic leading-tight">King Mongkut's University <span className="text-gray-500 font-light block md:inline md:ml-2">of Technology North Bangkok</span></h4>
                                    <p className="text-gray-400 text-lg mt-2 font-medium">B.Ind.Tech in Electronics Technology (Computer)</p>
                                </div>
                                <div className="group relative opacity-40 hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-gray-600 border-4 border-[#050505] group-hover:bg-blue-600 transition-colors" />
                                    <span className="text-gray-500 font-black font-mono text-xs uppercase tracking-[0.2em]">2021 — 2023 / GPAX 3.86</span>
                                    <h4 className="text-4xl font-black uppercase mt-4 italic leading-tight">Pongsawadi Technological <span className="text-gray-500 font-light block md:inline md:ml-2">College</span></h4>
                                    <p className="text-gray-400 text-lg mt-2 font-medium">High Vocational Certificate in IT</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Skills Section - ปรับเป็น Horizontal Scrolling Feel หรือ List ที่ดูดีขึ้น */}
                    <div className="space-y-12 mb-32">
                        <div className="inline-flex items-center gap-2 text-blue-500 font-bold uppercase text-xs tracking-widest italic bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                            <Code2 size={14} /> Core Expertise
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 border-t border-white/5 pt-16">
                            {[
                                { title: "Programming", list: skills.languages },
                                { title: "Frontend", list: skills.frontend },
                                { title: "Backend", list: skills.backend },
                                { title: "Platforms", list: skills.tools }
                            ].map((cat, idx) => (
                                <div key={idx} className="space-y-8">
                                    <h4 className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] italic">{cat.title}</h4>
                                    <ul className="space-y-4 font-black text-2xl uppercase italic">
                                        {cat.list.map(s => (
                                            <li key={s} className="group flex items-center gap-3 cursor-default">
                                                <span className="h-[1px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-4"></span>
                                                <span className="opacity-40 group-hover:opacity-100 group-hover:text-blue-500 transition-all duration-300">{s}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 5. Project Highlights - การวาง Card แบบ Modern Bento */}
                    <div className="space-y-12">
                        <div className="inline-flex items-center gap-2 text-blue-500 font-bold uppercase text-xs tracking-widest italic bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                            <Briefcase size={14} /> Project Experience
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { 
                                    name: "EduGen AI-Powered", 
                                    desc: "Developed a full-stack web application that generates interactive quizzes and summaries from uploaded documents using Generative AI.",
                                    tags: ["Next.js", "FastAPI", "Python"] 
                                },
                                { 
                                    name: "IoT Smart Gas Monitoring", 
                                    desc: "Designed and built an IoT safety device utilizing ESP32 and MQ2 sensors with LINE Notify integration for real-time alerts.",
                                    tags: ["ESP32", "C++", "REST API"] 
                                }
                            ].map((project, i) => (
                                <motion.div 
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-700 flex flex-col justify-between min-h-[400px] group"
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-8">
                                            <h4 className="text-4xl font-black uppercase italic leading-none group-hover:text-blue-500 transition-colors duration-500">{project.name}</h4>
                                            <div className="bg-white/5 p-4 rounded-full group-hover:bg-blue-600 transition-colors duration-500">
                                                <ArrowUpRight className="text-white" size={20} />
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-lg font-light leading-relaxed italic">{project.desc}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-3 mt-12">
                                        {project.tags.map(t => (
                                            <span key={t} className="px-5 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest text-blue-400">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Footer Decor */}
                <div className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 flex justify-between items-center opacity-20 text-[10px] font-black uppercase tracking-[0.5em]">
                    <span>Pathawee Keawprapol</span>
                    <span>Electronics Technology (Computer)</span>
                </div>
            </div>
        </motion.div>
    );
}