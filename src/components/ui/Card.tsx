"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, hoverEffect = false, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                initial={hoverEffect ? { y: 0 } : undefined}
                whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : undefined}
                className={cn(
                    "glass-card rounded-2xl p-6 relative overflow-hidden group",
                    hoverEffect && "hover:border-neon-purple/50 transition-colors duration-300",
                    className
                )}
                {...props}
            >
                <div className="relative z-10 h-full w-full">{children}</div>

                {/* Ambient Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple/20 to-electric-blue/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
            </motion.div>
        );
    }
);

Card.displayName = "Card";
