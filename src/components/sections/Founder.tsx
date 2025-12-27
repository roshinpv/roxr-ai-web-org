"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Twitter, Linkedin, Github, ExternalLink, Calendar, MessageSquare, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const Founder = () => {
    return (
        <section id="founder" className="relative overflow-hidden bg-white">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-l from-neon-purple/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-screen bg-gradient-to-r from-electric-blue/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 py-12">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32">
                    {/* Visual Portrait */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative aspect-square max-w-sm mx-auto">
                            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gray-50">
                                <Image
                                    src={`/founder.png?v=${new Date().getTime()}`}
                                    alt="Founder of roxr.ai"
                                    fill
                                    className="object-cover object-top"
                                    unoptimized
                                />
                            </div>

                            {/* Floating Achievement */}
                            <motion.div
                                initial={{ y: 20, opacity: 0, x: "-50%" }}
                                whileInView={{ y: 0, opacity: 1, x: "-50%" }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-0 left-1/2 translate-y-1/2 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-20 hidden md:block whitespace-nowrap"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-neon-purple/10 flex items-center justify-center text-neon-purple">
                                        <Award size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">20 Years</p>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold">Industry Expertise</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-6">
                                <span className="w-2 h-2 rounded-full bg-neon-purple" />
                                <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">The Perspective</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
                                Visionary <br />
                                <span className="text-gradient">Leadership</span>
                            </h1>

                            <div className="space-y-6 text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
                                <p>
                                    Founded on the principle that AI should be an extension of human ambition, not a replacement for it.
                                    I believe every business has a "hidden intelligence" waiting to be unlocked.
                                </p>
                                <p>
                                    At <span className="font-bold text-gray-900">roxr.ai</span>, we don't just build tools; we architect the
                                    frameworks that allow organizations to evolve at the speed of thought.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 mb-12">
                                <Link href="/contact">
                                    <Button size="lg" className="rounded-full px-8 shadow-lg shadow-neon-purple/20">
                                        Schedule a Chat
                                    </Button>
                                </Link>
                                <div className="flex items-center gap-3">
                                    <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all">
                                        <Twitter size={20} />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-electric-blue hover:border-electric-blue/50 transition-all">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Values/Goals Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        {
                            icon: MessageSquare,
                            title: "Human-First AI",
                            desc: "Intelligence designed to augment creativity and empathetic decision-making.",
                            color: "text-neon-purple"
                        },
                        {
                            icon: Briefcase,
                            title: "Practical Impact",
                            desc: "Moving beyond hype to deliver industrial-grade solutions that solve real problems.",
                            color: "text-neon-cyan"
                        },
                        {
                            icon: ExternalLink,
                            title: "Strategic Growth",
                            desc: "Scaling businesses through autonomous systems and self-optimizing workflows.",
                            color: "text-electric-blue"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="h-full p-8 bg-gray-50/50 border-none hover:bg-white hover:shadow-xl transition-all group">
                                <div className={`w-12 h-12 rounded-xl mb-6 bg-white shadow-sm flex items-center justify-center ${item.color}`}>
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Encouraging Quote/Philosophy */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="relative p-12 md:p-24 bg-[#050505] rounded-[60px] overflow-hidden text-center"
                >
                    {/* Background Graphic */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-blue/20 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <p className="text-neon-cyan font-bold uppercase tracking-[0.3em] text-xs mb-8">The Philosophy</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 italic leading-tight">
                            "The next decade will be defined by those who see AI as a
                            <span className="text-gradient"> creative partner</span>, rather than just a tool."
                        </h2>

                        <div className="w-16 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto mb-10" />

                        <p className="text-gray-400 text-lg">
                            Ready to explore what AI can do for your unique mission? Let's build something prophetic together.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
