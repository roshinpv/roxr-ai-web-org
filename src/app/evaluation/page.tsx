"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Cpu, ShieldCheck, Zap, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function EvaluationPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 relative overflow-hidden">
            {/* Background Futuristic Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[150px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-[150px] animate-pulse pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <Link href="/">
                        <motion.button
                            whileHover={{ x: -5 }}
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
                        >
                            <ArrowLeft size={16} /> Back to Hub
                        </motion.button>
                    </Link>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 backdrop-blur-md"
                    >
                        <Loader2 size={16} className="text-neon-purple animate-spin" />
                        <span className="text-xs font-bold uppercase tracking-widest text-neon-purple">Phase 01: Initializing Neural Engine</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                        AI Transformation <br />
                        <span className="text-gradient">Evaluator</span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        The definitive tool for quantifying your business's AI potential.
                        We're training our proprietary models to analyze your organizational DNA and map a path to technical dominance.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 text-left">
                        {[
                            { icon: BrainCircuit, label: "Neural Mapping", status: "Calibrating" },
                            { icon: Cpu, label: "Core Processing", status: "Optimizing" },
                            { icon: ShieldCheck, label: "Risk Mitigation", status: "Validating" },
                            { icon: Zap, label: "Velocity Benchmarks", status: "Calculating" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-neon-cyan/50 transition-all"
                            >
                                <item.icon className="text-neon-cyan mb-4 group-hover:scale-110 transition-transform" size={24} />
                                <h3 className="font-bold text-sm mb-1">{item.label}</h3>
                                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{item.status}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="relative p-1 bg-gradient-to-r from-electric-blue via-neon-purple to-neon-cyan rounded-2xl inline-block"
                    >
                        <div className="bg-[#050505] px-8 py-6 rounded-[14px]">
                            <h2 className="text-2xl font-bold mb-4">Want Early Access?</h2>
                            <p className="text-gray-400 mb-6 text-sm">Join the shortlist to be among the first to audit your business DNA.</p>
                            <Link href="/contact">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Notify Me on Launch
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scanning Line Effect */}
            <motion.div
                animate={{ y: ["0%", "100%", "0%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 right-0 h-[2px] bg-neon-cyan/20 blur-sm pointer-events-none z-20"
            />
        </div>
    );
}
