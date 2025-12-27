"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Code2, BrainCircuit, Zap } from "lucide-react";

export const About = () => {
    return (
        <section id="approach" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3 flex-wrap"
                    >
                        The
                        <img src="/logo.png" alt="roxr" className="h-10 md:h-14 w-auto object-contain" />
                        <span className="text-gradient">Approach</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        A systematic framework designed to guide your business through the complexities of AI adoption,
                        from initial strategy to long-term digital transformation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Animated Connector Lines */}
                    <div className="hidden md:block absolute top-[40%] left-0 right-0 h-[2px] -z-10 overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-30"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Card hoverEffect className="h-full flex flex-col items-center text-center p-8 bg-white/80 border-neon-cyan/20 shadow-[0_0_30px_rgba(219,39,119,0.05)]">
                            <div className="w-16 h-16 rounded-full bg-neon-cyan/10 flex items-center justify-center mb-6 text-neon-cyan">
                                <BrainCircuit size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900">Consult</h3>
                            <p className="text-gray-600 mb-6">
                                Strategic AI Consultation to define your roadmap, identify opportunities, and mitigate risks.
                            </p>
                            <ul className="text-left space-y-2 w-full mt-auto pt-6 border-t border-neon-cyan/10">
                                <li className="flex items-start gap-2 text-sm text-gray-500">
                                    <span className="text-neon-cyan mt-1">✦</span>
                                    <span>Technical Feasibility & ROI Analysis</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-500">
                                    <span className="text-neon-cyan mt-1">✦</span>
                                    <span>AI Ethics & Governance Frameworks</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-500">
                                    <span className="text-neon-cyan mt-1">✦</span>
                                    <span>Custom Strategy & Implementation Roadmap</span>
                                </li>
                            </ul>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Card hoverEffect className="h-full flex flex-col items-center text-center p-8 bg-white/80 border border-gray-100">
                            <div className="w-16 h-16 rounded-full bg-neon-purple/10 flex items-center justify-center mb-6 text-neon-purple">
                                <Code2 size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Develop</h3>
                            <p className="text-gray-600 mb-6">
                                Engineering robust AI Applications. From custom agents to LLM-powered tools that solve real problems.
                            </p>
                            <ul className="text-left space-y-2 w-full mt-auto pt-6 border-t border-gray-50">
                                <li className="flex items-start gap-2 text-sm text-gray-500">
                                    <span className="text-neon-purple mt-1">✦</span>
                                    <span>Production-Ready Autonomous Agents</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-500">
                                    <span className="text-neon-purple mt-1">✦</span>
                                    <span>Custom LLM Fine-Tuning & Integration</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-500">
                                    <span className="text-neon-purple mt-1">✦</span>
                                    <span>Scalable Cloud-Native Architectures</span>
                                </li>
                            </ul>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <Card hoverEffect className="h-full flex flex-col items-center text-center p-8 bg-white/80 border border-gray-100">
                            <div className="w-16 h-16 rounded-full bg-electric-blue/10 flex items-center justify-center mb-6 text-electric-blue">
                                <Zap size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Transform</h3>
                            <p className="text-gray-600 mb-6">
                                Driving complete Business Transformation through AI integration and automated efficiency.
                            </p>
                            <ul className="text-left space-y-2 w-full mt-auto pt-6 border-t border-gray-50">
                                <li className="flex items-start gap-2 text-sm text-gray-500">
                                    <span className="text-electric-blue mt-1">✦</span>
                                    <span>End-to-End Workflow Automation</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-500">
                                    <span className="text-electric-blue mt-1">✦</span>
                                    <span>AI-Driven Growth & Revenue Models</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-500">
                                    <span className="text-electric-blue mt-1">✦</span>
                                    <span>Prophetic Media & Market Positioning</span>
                                </li>
                            </ul>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
