"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Radio } from "lucide-react";
import { SubscribeButton } from "@/components/ui/SubscribeButton";

export const AIProphetPromo = () => {
    return (
        <section id="ai-prophet" className="py-20 relative overflow-hidden bg-gradient-to-r from-neon-purple/5 to-transparent border-y border-gray-100">
            {/* Noise texture via CSS */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-neon-purple/20 to-transparent blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20 text-red-500 animate-pulse">
                            <Radio size={16} />
                        </span>
                        <span className="font-mono text-neon-purple tracking-widest uppercase text-sm">Knowledge Sharing</span>
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
                    >
                        Learn with <span className="text-neon-purple">AIProphet</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 mb-8"
                    >
                        Our dedicated knowledge-sharing hub. We break down complex AI concepts, provide strategic insights,
                        and share the tools you need to stay ahead of the curve.
                    </motion.p>
                    <div className="flex flex-wrap gap-4">
                        <SubscribeButton />
                        <Link href="/aiprophet">
                            <Button variant="ghost">View Reports</Button>
                        </Link>
                    </div>
                </div>

                <div className="md:w-1/3 relative">
                    {/* Abstract Representation of a Media Stream or Hologram */}
                    <a href="https://www.youtube.com/channel/UCyglSJZd8j_FiK9DWGH5sXA" target="_blank" rel="noopener noreferrer">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="aspect-video bg-black rounded-xl border border-neon-purple/30 shadow-[0_0_50px_rgba(139,92,246,0.3)] flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-500 cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 to-transparent" />
                            <div className="z-10 text-center">
                                <span className="text-6xl font-black text-white/5 tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">KNOWLEDGE</span>
                                <Radio size={48} className="text-white relative z-20 mx-auto mb-2" />
                                <p className="text-sm font-mono text-white/60">Sharing Insights</p>
                            </div>

                            {/* Glitch effects */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/50 animate-[scan_2s_linear_infinite]" />
                        </motion.div>
                    </a>
                </div>
            </div>
        </section>
    );
};
