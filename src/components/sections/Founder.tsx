"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Twitter, Linkedin, Github } from "lucide-react";

export const Founder = () => {
    return (
        <section id="founder" className="py-24 relative overflow-hidden bg-gray-50/30">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Founder Image Container */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-electric-blue/20 via-neon-purple/20 to-neon-cyan/20 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                        <Card className="p-0 overflow-hidden border-none aspect-square max-w-md mx-auto lg:mx-0 shadow-2xl rounded-full">
                            <Image
                                src={`/founder.png?v=${new Date().getTime()}`}
                                alt="Founder of roxr.ai"
                                width={600}
                                height={600}
                                className="object-cover w-full transition-transform duration-700 group-hover:scale-110"
                                unoptimized
                            />
                        </Card>

                        {/* Experience Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-6 -right-6 md:right-0 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block"
                        >
                            <div className="text-3xl font-bold text-gradient mb-1">10+ Years</div>
                            <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">Innovation DNA</div>
                        </motion.div>
                    </motion.div>

                    {/* Founder Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-100 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-neon-purple" />
                            <span className="text-xs text-gray-500 font-bold tracking-wider uppercase">Meet the Visionary</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Architecting the <br />
                            <span className="text-gradient">AI Era</span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            With a focus on AI Consultation and Business Transformation, our founder established roxr.ai
                            to help organizations navigate the intelligence revolution. We bridge the gap between
                            cutting-edge tech and real-world impact.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-1 h-12 bg-gradient-to-b from-electric-blue to-neon-purple rounded-full shrink-0" />
                                <div>
                                    <h4 className="text-gray-900 font-bold mb-1">Founder's Philosophy</h4>
                                    <p className="text-gray-500 italic">"AI should not just exist; it should evolve alongside human ambition to create unprecedented value."</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-400 hover:text-electric-blue hover:border-electric-blue/50 transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-900/50 transition-all duration-300">
                                <Github size={20} />
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
