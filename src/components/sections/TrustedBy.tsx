"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
    "TechDaily", "AI Weekly", "FutureScale", "DevCorps", "MediaMind", "NextVentures"
];

export const TrustedBy = () => {
    return (
        <section className="py-10 border-y border-gray-200 bg-gray-50/50 overflow-hidden">
            <div className="container mx-auto px-4 mb-6 text-center">
                <p className="text-sm text-gray-400 uppercase tracking-widest font-medium">Trusted by Industry Leaders</p>
            </div>

            <div className="flex relative items-center">
                <div className="absolute left-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />

                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {[...partners, ...partners, ...partners].map((partner, i) => (
                        <span key={i} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-gray-500 transition-colors uppercase cursor-default">
                            {partner}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
