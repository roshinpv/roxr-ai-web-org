"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Youtube, Play, X } from "lucide-react";
import { SubscribeButton } from "@/components/ui/SubscribeButton";

const videos = [
    {
        id: "zgGCMFijYrM",
        title: "AI & Banking Jobs: A CEO's Blunt Advice",
        thumbnail: "https://img.youtube.com/vi/zgGCMFijYrM/maxresdefault.jpg"
    },
    {
        id: "cssglkyU-zw",
        title: "Chatterbox Turbo: The Free, Local ElevenLabs Alternative?",
        thumbnail: "https://img.youtube.com/vi/cssglkyU-zw/maxresdefault.jpg"
    },
    {
        id: "6dhBi8mrzrk",
        title: "How to Fine-Tune FunctionGemma (270M) for Custom Tools",
        thumbnail: "https://img.youtube.com/vi/6dhBi8mrzrk/maxresdefault.jpg"
    },
    {
        id: "8FVlblTnDG0",
        title: "Gartner’s Top 10 Strategic Predictions for 2025 & Beyond",
        thumbnail: "https://img.youtube.com/vi/8FVlblTnDG0/maxresdefault.jpg"
    },
    {
        id: "gUY-JEotkfU",
        title: "Meet FunctionGemma: Google’s New On-Device AI",
        thumbnail: "https://img.youtube.com/vi/gUY-JEotkfU/maxresdefault.jpg"
    }
];

export const VideoGrid = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="p-2 bg-red-100 text-red-600 rounded-lg">
                                <Youtube size={20} />
                            </span>
                            <span className="text-sm font-bold text-red-600 uppercase tracking-widest">Global Knowledge Hub</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Channel <span className="text-gradient">Feed</span></h2>
                        <p className="text-gray-600 max-w-2xl text-lg">
                            Deep dives into the latest AI breakthroughs, tutorials, and strategic predictions.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card
                                onClick={() => setSelectedVideo(video.id)}
                                className="p-0 overflow-hidden group border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-50 cursor-pointer"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        onError={(e) => {
                                            // Fallback to hqdefault if maxres doesn't exist
                                            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                                            <Play size={32} fill="currentColor" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 bg-white">
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-tight">
                                        {video.title}
                                    </h3>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Learning Resource</span>
                                        <span className="text-red-600 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                            WATCH NOW <Play size={10} fill="currentColor" />
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 flex flex-col items-center gap-6"
                >
                    <SubscribeButton className="scale-125" />
                    <a
                        href="https://www.youtube.com/channel/UCyglSJZd8j_FiK9DWGH5sXA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-red-600 font-bold transition-colors"
                    >
                        Visit Official Channel
                    </a>
                </motion.div>
            </div>

            {/* Video Lightbox Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-white hover:text-black transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                                title="Video Player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
