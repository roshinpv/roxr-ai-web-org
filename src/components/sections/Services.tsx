"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Code2, BrainCircuit, Zap, CheckCircle2 } from "lucide-react";

const services = [
    {
        icon: BrainCircuit,
        title: "AI Consultation",
        subtitle: "The Strategic Blueprint",
        description: "We don't just advise; we architect your future. Navigating the AI landscape requires more than just knowledge—it requires a prophetic vision.",
        usps: [
            "Prophetic Projection: Predictive AI market shift analysis",
            "ROI-Centric Roadmaps: Zero-fluff implementation plans",
            "AI Readiness Audits: Full-stack infrastructure evaluation"
        ],
        color: "text-electric-blue",
        bgColor: "bg-electric-blue/10",
        href: "/contact"
    },
    {
        icon: Code2,
        title: "AI App Development",
        subtitle: "The Intelligence Engine",
        description: "Building production-grade AI applications that act as autonomous extensions of your team, handling complexity at scale.",
        usps: [
            "Autonomous Agent Swarms: Multi-agent orchestration",
            "Bespoke LLM Micro-services: Domain-specific intelligence",
            "Seamless API Integration: Plug-and-play AI capabilities"
        ],
        color: "text-neon-cyan",
        bgColor: "bg-neon-cyan/10",
        href: "/contact"
    },
    {
        icon: Zap,
        title: "Business Transformation",
        subtitle: "The Operational Evolution",
        description: "Drive exponential growth by rewiring your organization's DNA with intelligence-first workflows and culture.",
        usps: [
            "Intelligence-First Culture: Upskilling and AI adoption",
            "Self-Optimizing Workflows: Learning-based automation",
            "Dominance Models: AI-driven competitive advantages"
        ],
        color: "text-neon-purple",
        bgColor: "bg-neon-purple/10",
        featured: true,
        href: "/contact"
    }
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-4"
                        >
                            <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Core Expertise</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                            Architecting <span className="text-gradient">Intelligence</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We bridge the gap between abstract AI potential and concrete business dominance through a
                            specialized three-tier delivery model.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card
                                hoverEffect
                                className={`h-full flex flex-col p-0 border-none shadow-none group ${service.featured ? "ring-2 ring-neon-purple/20 bg-gray-50/50" : "bg-white"
                                    }`}
                            >
                                <div className="p-8 flex-grow">
                                    <div className={`w-14 h-14 rounded-2xl ${service.bgColor} ${service.color} flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300`}>
                                        <service.icon size={32} />
                                    </div>

                                    <div className="mb-6">
                                        <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${service.color}`}>
                                            {service.subtitle}
                                        </p>
                                        <h3 className="text-2xl font-black text-gray-900 mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-8">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest border-l-2 border-gray-200 pl-3">
                                            Unique Selling Points
                                        </p>
                                        <ul className="space-y-3">
                                            {service.usps.map((usp, idx) => (
                                                <li key={idx} className="flex items-start gap-3 group/item">
                                                    <span className={`mt-1 transition-transform group-hover/item:scale-110 ${service.color}`}>
                                                        <CheckCircle2 size={16} />
                                                    </span>
                                                    <span className="text-sm font-medium text-gray-700 leading-tight">
                                                        {usp}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-8 pt-0 mt-auto">
                                    <Link
                                        href={service.href}
                                        className="inline-flex items-center gap-2 text-sm font-bold group/link"
                                    >
                                        <span className="relative overflow-hidden">
                                            <span className="block group-hover/link:-translate-y-full transition-transform duration-300">
                                                Initialize Transformation
                                            </span>
                                            <span className="absolute top-0 left-0 block translate-y-full group-hover/link:translate-y-0 transition-transform duration-300 text-neon-purple">
                                                Initialize Transformation
                                            </span>
                                        </span>
                                        <span className="w-8 h-px bg-gray-300 group-hover/link:w-12 group-hover/link:bg-neon-purple transition-all duration-300" />
                                    </Link>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
