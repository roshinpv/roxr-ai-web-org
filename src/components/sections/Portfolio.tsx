"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "FinTech AI Bot",
        category: "Development",
        description: "An autonomous trading assistant processing real-time market data with 99% uptime.",
        gradient: "from-blue-600 to-cyan-500",
        size: "large"
    },
    {
        title: "AIProphet Viral",
        category: "Media",
        description: "Multi-platform campaign reaching 2M+ impressions in 48 hours for a GenAI startup.",
        gradient: "from-purple-600 to-pink-500",
        size: "small"
    },
    {
        title: "E-com Rec 2.0",
        category: "Intelligence",
        description: "Personalization engine increasing conversion rates by 35% for enterprise commerce.",
        gradient: "from-amber-500 to-orange-600",
        size: "small"
    },
    {
        title: "Neural Vision",
        category: "R&D",
        description: "Computer vision system for automated quality control in manufacturing.",
        gradient: "from-emerald-500 to-teal-500",
        size: "large"
    }
];

export const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Work</span></h2>
                        <p className="text-gray-600">Case studies from across the roxr ecosystem.</p>
                    </div>
                    <button className="text-neon-cyan hover:text-gray-900 transition-colors underline-offset-4 hover:underline">
                        View All Projects
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group ${project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}`}
                        >
                            <Card className="h-full w-full p-0 overflow-hidden border-none relative">
                                {/* Background Gradient / Image Placeholder */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 transition-transform duration-700 group-hover:scale-110`} />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-white/95 via-white/40 to-transparent">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-xs font-bold text-neon-cyan uppercase tracking-wider mb-2 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                        <p className="text-gray-600 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-900 transition-colors text-sm opacity-0 group-hover:opacity-100 duration-300">
                                            View Case Study <ExternalLink size={14} />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
