import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Facebook, Instagram, MessageCircle, Send, ArrowUpRight } from 'lucide-react';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // ดึงค่าจากไฟล์ .env มาใช้งาน
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
            alert("ส่งข้อความสำเร็จ! ผมจะรีบติดต่อกลับไปนะครับ");
            form.current.reset(); 
        }, (error) => {
            alert("เกิดข้อผิดพลาด: " + error.text);
        });
    };

    const pageVariants = {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.02 }
    };

    const socials = [
        { 
            name: "Facebook", 
            user: "Pathawee Kaewprapol", 
            link: "https://www.facebook.com/partarwee.kaewparphon.58/", 
            icon: <Facebook size={24} />,
            color: "hover:text-blue-500 hover:border-blue-500/50"
        },
        { 
            name: "Instagram", 
            user: "@nickzanaruk", 
            link: "https://www.instagram.com/nickzanaruk/", 
            icon: <Instagram size={24} />,
            color: "hover:text-pink-500 hover:border-pink-500/50"
        },
        { 
            name: "Line ID", 
            user: "partarwee", 
            link: "https://line.me/ti/p/~partarwee", 
            icon: <MessageCircle size={24} />,
            color: "hover:text-green-500 hover:border-green-500/50"
        }
    ];

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-[#050505] text-white py-24 px-6 relative overflow-hidden"
        >
            {/* Background Decor */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-blue-500 font-black tracking-[0.5em] uppercase text-xs mb-6 italic"
                    >
                        Get In Touch
                    </motion.h2>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase italic">
                        Let's start <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">something big.</span>
                    </h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-black uppercase italic tracking-tighter text-gray-400">Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-600">Email</p>
                                        <p className="text-xl font-bold italic">partarwee@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-600">Phone</p>
                                        <p className="text-xl font-bold italic">092-691-1189</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-black uppercase italic tracking-tighter text-gray-400">Social Networks</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {socials.map((social, i) => (
                                    <a 
                                        key={i}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex justify-between items-center p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 transition-all duration-500 group ${social.color}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            {social.icon}
                                            <div>
                                                <p className="font-black uppercase italic text-sm">{social.name}</p>
                                                <p className="text-xs text-gray-500 font-medium">{social.user}</p>
                                            </div>
                                        </div>
                                        <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="bg-white/[0.02] border border-white/5 p-10 md:p-16 rounded-[3.5rem] backdrop-blur-3xl relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-10">Drop a message</h3>
                                
                                <form ref={form} onSubmit={sendEmail} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Full Name</label>
                                            <input 
                                                name="name" 
                                                type="text" 
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all font-bold italic text-white" 
                                                placeholder="Your Name" 
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Email Address</label>
                                            <input 
                                                name="email" 
                                                type="email" 
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all font-bold italic text-white" 
                                                placeholder="email@example.com" 
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Message</label>
                                        <textarea 
                                            name="message" 
                                            rows="4" 
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all font-bold italic resize-none text-white" 
                                            placeholder="Tell me about your project..."
                                        ></textarea>
                                    </div>
                                    <button 
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-white hover:text-black text-white py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-3 shadow-2xl shadow-blue-600/20"
                                    >
                                        <Send size={18} /> Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="max-w-7xl mx-auto px-6 py-12 mt-20 border-t border-white/5 text-center text-[10px] font-black uppercase tracking-[0.4em] opacity-20">
            Pathawee Keawprapol | Available for Internship
            </footer>
        </motion.div>
    );
}