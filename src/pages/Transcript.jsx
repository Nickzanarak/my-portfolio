import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Award, Calendar, BookOpen, CheckCircle2, Star, Download } from 'lucide-react';

export default function Transcript() {
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 1000], [0, 300]);

    // 1. ปรับปรุง Page Transition เป็นแบบ 3D Flip (พลิกกระดาษ)
    const pageVariants = {
        initial: {
            opacity: 0,
            rotateY: -30, // พลิกจากด้านข้าง
            x: -50,
            originX: 0
        },
        animate: {
            opacity: 1,
            rotateY: 0,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        exit: {
            opacity: 0,
            rotateY: 30,
            x: 50,
            transition: { duration: 0.4 }
        }
    };

    const semesters = [
        {
            title: "1st Semester 2024",
            gpa: "3.14",
            courses: [
                { id: "030523106", name: "ELECTRONICS TECHNOLOGY", credit: 2, grade: "A" },
                { id: "030523206", name: "ELECTRONICS TECHNOLOGY LAB", credit: 1, grade: "A" },
                { id: "030523500", name: "DATABASE & DATA TECHNOLOGY", credit: 2, grade: "A" },
                { id: "030523600", name: "DATABASE & DATA TECH LAB", credit: 1, grade: "A" },
                { id: "030953103", name: "ENTREPRENEURSHIP", credit: 3, grade: "A" },
                { id: "030933152", name: "COMMU ENG & REPORT WRITING", credit: 3, grade: "B" },
                { id: "030943111", name: "DIFFERENTIAL EQUATIONS", credit: 3, grade: "B" },
                { id: "030523501", name: "COMP NETW SYS & DATA COMMU", credit: 2, grade: "C+" },
            ]
        },
        {
            title: "2nd Semester 2024",
            gpa: "2.73",
            courses: [
                { id: "080303701", name: "DESIGN THINKING", credit: 3, grade: "A" },
                { id: "030523107", name: "MICROCONTROLLER SYSTEM", credit: 2, grade: "B" },
                { id: "030523126", name: "LINUX OPERATING SYS & ADMIN", credit: 2, grade: "B" },
                { id: "030523226", name: "LINUX OPG SYS & ADMIN LAB", credit: 1, grade: "B" },
                { id: "030943112", name: "MATRICES & VECTOR ANALYSIS", credit: 3, grade: "B" },
                { id: "030523118", name: "OBJECT ORIENTED PROGRAMMING", credit: 2, grade: "C+" },
                { id: "030523124", name: "WEB APPLICATION DEVELOPMENT", credit: 2, grade: "C" },
            ]
        },
        {
            title: "1st Semester 2025",
            gpa: "3.14",
            isLatest: true,
            courses: [
                { id: "030523503", name: "MOBILE APPL DEVELOPMENT", credit: 2, grade: "A" },
                { id: "030523603", name: "MOBILE APPL DEVELOPMENT LAB", credit: 1, grade: "A" },
                { id: "030923102", name: "SCIENCES IN DAILY LIFE", credit: 3, grade: "A" },
                { id: "030523701", name: "CLOUD COMPUTING", credit: 2, grade: "B" },
                { id: "030523801", name: "CLOUD COMPUTING LABORATORY", credit: 1, grade: "B" },
                { id: "030523504", name: "ARTIFICIAL INTELLIGENCE", credit: 2, grade: "C+" },
                { id: "030523200", name: "SPECIAL PROJECT I", credit: 1, grade: "Ip" },
            ]
        }
    ];

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="perspective-2000" // เพิ่มมิติความลึกให้แอนิเมชัน 3D
        >
            <div className="bg-[#050505] text-white min-h-screen font-sans overflow-hidden relative selection:bg-blue-500/30">
                <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                    <motion.div
                        style={{ y: bgY }}
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
                    <header className="border-b border-white/5 pb-16 mb-20">
                        <div className="flex items-center gap-3 text-blue-500 mb-8 uppercase tracking-[0.4em] text-xs font-black italic">
                            <span className="h-[2px] w-12 bg-blue-500"></span>
                            Academic Records
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                            <div>
                                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase italic">
                                    Official <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Transcript</span>
                                </h1>
                                <p className="text-gray-500 mt-6 text-xl font-medium uppercase tracking-widest italic">
                                    KMUTNB | College of Industrial Technology
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 w-full lg:w-auto">
                                <div className="grid grid-cols-2 gap-4">
                                    <InfoCard label="Current GPAX" value="3.00" icon={<Award size={20} />} />
                                    <InfoCard label="Total Credits" value="63" icon={<CheckCircle2 size={20} />} />
                                </div>

                                <a
                                    href="/Transcript.pdf"
                                    download="Pathawee_Transcript.pdf"
                                    className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-white hover:text-black text-white px-6 py-4 rounded-2xl font-black uppercase text-xs transition-all duration-500 shadow-2xl shadow-blue-600/20"
                                >
                                    <Download size={18} /> Download Transcript
                                </a>
                            </div>
                        </div>
                    </header>

                    <div className="space-y-32">
                        {semesters.map((sem, idx) => (
                            <div key={idx} className="relative">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                                    <h3 className="text-4xl font-black uppercase italic tracking-tighter flex items-center gap-4">
                                        <Calendar className="text-blue-500" /> {sem.title}
                                        {sem.isLatest && <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full not-italic tracking-normal flex items-center gap-1"><Star size={10} /> Latest</span>}
                                    </h3>
                                    <div className="text-2xl font-black font-mono text-blue-500 bg-blue-500/10 px-6 py-2 rounded-full border border-blue-500/20">
                                        GPA: {sem.gpa}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    {sem.courses.map((course, cIdx) => (
                                        <motion.div
                                            key={cIdx}
                                            whileHover={{ x: 10 }}
                                            className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500"
                                        >
                                            <div className="flex gap-6 items-center">
                                                <span className="text-xs font-mono text-gray-600 group-hover:text-blue-500 transition-colors uppercase font-bold tracking-widest">{course.id}</span>
                                                <h4 className="text-xl font-black uppercase italic group-hover:text-blue-400 transition-colors">{course.name}</h4>
                                            </div>
                                            <div className="flex gap-12 items-center w-full md:w-auto mt-4 md:mt-0 justify-between md:justify-end">
                                                <div className="flex flex-col items-end">
                                                    <span className="text-[10px] text-gray-600 font-black uppercase tracking-widest">Credits</span>
                                                    <span className="font-bold">{course.credit}</span>
                                                </div>
                                                <div className={`w-16 h-16 flex items-center justify-center rounded-2xl border transition-all duration-500 ${course.grade === 'A' ? 'bg-blue-600/20 border-blue-500 text-blue-400' : 'bg-white/5 border-white/5 group-hover:bg-blue-600'}`}>
                                                    <span className="text-2xl font-black italic">{course.grade}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* ส่วน Footer Decor ที่มีข้อมูล Graduation Status ได้ถูกเอาออกเรียบร้อยแล้ว */}
                </div>
            </div>
        </motion.div>
    );
}

function InfoCard({ label, value, icon }) {
    return (
        <div className="p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 flex flex-col justify-center items-center md:items-start min-w-[160px]">
            <div className="text-blue-500 mb-2">{icon}</div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 mb-1">{label}</span>
            <span className="text-3xl font-black italic tracking-tighter">{value}</span>
        </div>
    );
}