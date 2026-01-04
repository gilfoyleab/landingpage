"use client";

import { motion } from "framer-motion";

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
    return (
        <div className={`relative flex items-center justify-center ${className} group`}>
            <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
            >
                {/* Outer Hexagon - The Perimeter */}
                <motion.path
                    d="M20 2L35.5885 11V29L20 38L4.41154 29V11L20 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-white/20 group-hover:text-kast-teal/40 transition-colors duration-500"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Inner Triangles - The Validator Knot */}
                <motion.path
                    d="M20 12L28 26H12L20 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className="text-white group-hover:text-kast-teal transition-colors duration-300"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                />

                {/* The "Core" - Pulsing Security Heart */}
                <motion.circle
                    cx="20"
                    cy="21"
                    r="2.5"
                    className="fill-kast-teal shadow-[0_0_10px_#1EBA98]"
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Orbiting Particles */}
                <motion.circle
                    cx="20"
                    cy="6"
                    r="1"
                    className="fill-kast-teal"
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ originX: "20px", originY: "20px" }}
                />
            </svg>

            {/* Subtle Depth Glow */}
            <div className="absolute inset-0 bg-kast-teal/10 blur-xl rounded-full -z-10 group-hover:bg-kast-teal/20 transition-colors" />
        </div>
    );
}
