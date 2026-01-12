"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Globe } from "@/components/Globe";
import { HolographicShield } from "@/components/HolographicShield";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-start pt-24 md:pt-32 px-6 lg:px-12 overflow-hidden bg-black selection:bg-kast-teal/30">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-kast-teal/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl grid lg:grid-cols-2 gap-12 items-start w-full">
                {/* Left Content */}
                <div className="flex flex-col gap-6 z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-2 h-2 rounded-full bg-kast-teal animate-pulse shadow-[0_0_10px_#1EBA98]" />
                        <span className="text-kast-teal text-[10px] font-bold uppercase tracking-[0.4em]">Unbreakable by design</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl sm:text-4xl md:text-7xl font-black uppercase tracking-[-0.02em] leading-[1.1] text-white"
                    >
                        <span className="block"> AI Agents For</span>
                        <span className="text-zinc-500 block">Solidity Security</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col gap-4"
                    >
                        {[
                            "Audit in seconds.",
                            "Deploy for years.",
                            "Continuous Verification",
                            "140+ Attack Vectors"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-kast-teal" strokeWidth={3} />
                                <span className="text-base md:text-lg text-gray-300 font-medium">{item}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-wrap items-center gap-4 mt-4"
                    >
                        <button className="w-full sm:w-auto px-8 py-4 bg-kast-teal text-black text-lg font-bold rounded-full hover:scale-105 transition-transform">
                            Start Your First Audit
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white text-lg font-medium rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                            Explore Agents <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-8">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-9 h-9 rounded-full border border-black overflow-hidden bg-zinc-800 ring-2 ring-black">
                                    <img
                                        src={`/avatar-${i}.png`}
                                        alt={`Developer ${i}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-[0.15em] sm:tracking-[0.25em] leading-tight max-w-[200px] sm:max-w-none">
                            Trusted by 500+ developers worldwide
                        </p>
                    </div>
                </div>

                {/* Right Visual - Holographic Shield + Globe */}
                <div className="relative h-[600px] flex items-center justify-center perspective-[2000px]">
                    {/* 3D Globe - Constant & Consistent */}
                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                        <Globe />
                    </div>

                    <div className="relative z-10 scale-110">
                        <HolographicShield />
                    </div>
                </div>
            </div>


            {/* Removed unused keyframes */}
        </section>
    );
}

// Removed unused CodeLine component
