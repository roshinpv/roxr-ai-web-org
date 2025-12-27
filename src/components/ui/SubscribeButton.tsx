"use client";

import React from "react";
import { motion } from "framer-motion";
import { Youtube } from "lucide-react";

interface SubscribeButtonProps {
    className?: string;
    showCount?: boolean;
}

export const SubscribeButton = ({ className = "" }: SubscribeButtonProps) => {
    return (
        <motion.a
            href="https://www.youtube.com/channel/UCyglSJZd8j_FiK9DWGH5sXA?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-6 py-3 bg-[#FF0000] text-white rounded-full font-bold shadow-lg hover:shadow-[#FF0000]/40 transition-all duration-300 ${className}`}
        >
            <Youtube size={20} fill="currentColor" />
            <span>Subscribe to AIProphet</span>
        </motion.a>
    );
};
