"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { SubscribeButton } from "@/components/ui/SubscribeButton";

const navLinks = [
    { name: "The Approach", href: "/#approach" },
    { name: "Services", href: "/#services" },
    { name: "AI Evaluation", href: "/evaluation" },
    { name: "AIProphet", href: "/aiprophet" },
    { name: "Founder", href: "/founder" },
    { name: "Contact", href: "/contact" },
];

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "py-4 bg-white/70 backdrop-blur-md border-b border-gray-200" : "py-6 bg-transparent"
            )}
        >
            <motion.div
                className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-electric-blue via-neon-purple to-neon-cyan origin-left z-50"
                style={{ scaleX }}
            />
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="roxr.ai"
                        style={{ height: '38px', width: 'auto' }}
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-neon-cyan transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-cyan transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <SubscribeButton className="px-4 py-2 text-xs" />
                    <Link href="/contact">
                        <Button size="sm">
                            Launch Project
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-900"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 p-4 flex flex-col gap-4 shadow-lg"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-gray-700 hover:text-neon-purple py-2 text-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-3 pt-2">
                            <SubscribeButton className="w-full justify-center" />
                            <Link href="/contact" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button className="w-full">
                                    Launch Project
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header >
    );
};
