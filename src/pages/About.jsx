import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
    const skills = ["Python", "React", "Node.js", "Next.js", "OpenCV", "Machine Learning", "Deep Learning", "Docker", "Firebase", "Supabase"];

    // 1. แอนิเมชันตอนเปลี่ยนหน้า (Page Transition)
    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    // 2. Parallax Effect สำหรับก้อนพื้นหลัง
    const { scrollY } = useScroll();
    const bgY1 = useTransform(scrollY, [0, 1000], [0, 300]); // เพิ่มระยะเลื่อนให้ดูมีมิติ
    const bgY2 = useTransform(scrollY, [0, 1000], [0, -200]);

    // Variants สำหรับ Stagger Children (Skills)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            {/* Main Wrapper */}
            <div className="bg-[#050505] text-white min-h-screen font-sans overflow-x-hidden relative">
                
                {/* --- ส่วนพื้นหลัง Animated Background Elements (ปรับปรุงใหม่) --- */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
                    {/* ก้อน Glow สีฟ้า (ขวาบน)  */}
                    <motion.div 
                        style={{ y: bgY1 }}
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.35, 0.2] 
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-blue-600/30 blur-[130px] rounded-full"
                    />
                    {/* ก้อน Glow สีม่วง (ซ้ายล่าง)  */}
                    <motion.div 
                        style={{ y: bgY2 }}
                        animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute top-1/2 -left-40 w-[700px] h-[700px] bg-indigo-600/20 blur-[150px] rounded-full"
                    />
                </div>

                <div className="relative z-10">
                    {/* 1. Hero Section */}
                    <section className="min-h-[65vh] flex items-center max-w-7xl mx-auto px-6 border-b border-white/10 py-0 relative">
                        {/* Glow เล็กๆ ประจำ Section */}
                        <motion.div 
                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 blur-[100px] -z-10"
                        />

                        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20 w-full relative z-10 py-16">
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="lg:flex-1 space-y-8"
                            >
                                <h2 className="text-blue-500 font-black tracking-[0.4em] uppercase text-sm mb-2 italic">Introduction</h2>
                                
                                <div className="overflow-hidden">
                                    <motion.h1 
                                        initial={{ y: "100%" }}
                                        whileInView={{ y: 0 }}
                                        transition={{ duration: 0.8, ease: "circOut" }}
                                        className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-10 uppercase"
                                    >
                                        I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">NICKNAME.</span>
                                    </motion.h1>
                                </div>

                                <div className="text-xl md:text-2xl lg:text-[1.75rem] text-gray-300 font-light leading-[1.8] max-w-full italic">
                                    <p className="mb-2">ผมเป็นนักศึกษา <span className="text-white font-bold italic whitespace-nowrap">สาขาเทคโนโลยีอิเล็กทรอนิกส์ (คอมพิวเตอร์)</span></p>
                                    <p className="mb-2">จาก <span className="text-white font-bold italic whitespace-nowrap text-nowrap">มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</span></p>
                                    <p>โดยมีความสนใจด้านการพัฒนา <span className="text-blue-500 font-bold underline decoration-blue-500/20 underline-offset-8">AI</span> และ <span className="text-blue-500 font-bold underline decoration-blue-500/20 underline-offset-8">Web Application</span></p>
                                    <p className="mt-2 text-gray-400">มุ่งเน้นการสร้างระบบที่ช่วยเพิ่มประสิทธิภาพการทำงาน และยกระดับประสบการณ์ของผู้ใช้งานให้ดียิ่งขึ้น</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ rotateY: 10, rotateX: -10, scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                className="lg:w-[400px] relative shrink-0 perspective-1000"
                            >
                                <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden border-2 border-blue-500 shadow-[0_0_60px_rgba(37,99,235,0.3)]">
                                    <img 
                                        src="/about.jpg" 
                                        alt="Nickname" 
                                        className="w-full h-full object-cover transition-all duration-700"
                                    />
                                </div>
                                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-white/5 rounded-[2.5rem] -z-10"></div>
                            </motion.div>
                        </div>
                    </section>

                    {/* 2. Education Section */}
                    <section className="bg-white text-black py-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 blur-[80px] rounded-full pointer-events-none"></div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-10"
                        >
                            <div className="md:col-span-4">
                                <h2 className="text-5xl font-black tracking-tighter uppercase leading-none text-nowrap">
                                    Education<br/>
                                    <span className="text-blue-600">Background</span>
                                </h2>
                            </div>
                            <div className="md:col-span-8 border-l-4 border-black pl-10 py-2">
                                <h3 className="text-3xl md:text-4xl font-black mb-2 uppercase tracking-tight">
                                    King Mongkut’s University of Technology North Bangkok
                                </h3>
                                <p className="text-xl font-bold text-blue-600 mb-1">College of Industrial Technology</p>
                                <p className="text-lg text-gray-500 font-bold uppercase tracking-widest italic">
                                    Electronics Technology (Computer)
                                </p>
                            </div>
                        </motion.div>
                    </section>

                    {/* 3. Skills Section */}
                    <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5 pt-20 relative">
                        <div className="mb-20">
                            <h2 className="text-blue-500 font-black tracking-[0.3em] uppercase text-sm mb-4 italic">Core Expertise</h2>
                            <h3 className="text-5xl font-black tracking-tighter uppercase">Technical Mastery</h3>
                        </div>
                        
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
                        >
                            {skills.map((skill) => (
                                <motion.div 
                                    key={skill}
                                    variants={itemVariants}
                                    whileHover={{ 
                                        scale: 1.05, 
                                        backgroundColor: "#2563eb",
                                        boxShadow: "0px 0px 30px rgba(37, 99, 235, 0.6)"
                                    }}
                                    className="h-32 flex items-center justify-center border border-white/10 rounded-xl bg-white/5 transition-all duration-300 group shadow-lg cursor-default backdrop-blur-md"
                                >
                                    <span className="text-xl font-black uppercase tracking-tighter group-hover:text-white transition-colors text-gray-400">{skill}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>
                </div>
            </div>
        </motion.div>
    );
}