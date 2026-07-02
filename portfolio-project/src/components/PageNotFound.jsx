import { useEffect, useState } from 'react'
import fullbg from '../assets/fullbg.png'

const PageNotFound = () => {
    const [blink, setBlink] = useState(true)

    useEffect(() => {
        const id = setInterval(() => setBlink((b) => !b), 900)
        return () => clearInterval(id)
    }, [])

    return (
        <div
            className="relative w-full min-h-screen bg-center bg-cover text-[#F3EEE1] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 py-16"
            style={{ backgroundImage: `url(${fullbg})` }}
        >
            <style>{`
                @keyframes scan { 0% { background-position: 0 0; } 100% { background-position: 0 8px; } }
                @keyframes flicker {
                    0%, 96%, 100% { opacity: 1; }
                    97% { opacity: 0.85; }
                    98% { opacity: 1; }
                    99% { opacity: 0.92; }
                }
                @keyframes glitchShift {
                    0%, 92%, 100% { transform: translate(0, 0); opacity: 0; }
                    93% { transform: translate(-3px, 1px); opacity: 0.7; }
                    94% { transform: translate(3px, -1px); opacity: 0.6; }
                    95% { transform: translate(-1px, 0); opacity: 0; }
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes trace {
                    0% { stroke-dashoffset: 240; }
                    100% { stroke-dashoffset: 0; }
                }
                .signal-scanlines {
                    background-image: repeating-linear-gradient(
                        to bottom,
                        rgba(255,255,255,0.04) 0px,
                        rgba(255,255,255,0.04) 1px,
                        transparent 1px,
                        transparent 3px
                    );
                    animation: scan 0.5s linear infinite;
                }
                .signal-flicker { animation: flicker 7s infinite; }
                .fade-up { animation: fadeUp 0.9s ease-out both; }
                .glitch-num { position: relative; display: inline-block; }
                .glitch-num::before,
                .glitch-num::after {
                    content: '404';
                    position: absolute;
                    inset: 0;
                    animation: glitchShift 6s infinite;
                }
                .glitch-num::before { color: #6FE0C4; clip-path: inset(0 0 55% 0); mix-blend-mode: screen; }
                .glitch-num::after { color: #E7A94C; clip-path: inset(45% 0 0 0); mix-blend-mode: screen; }
                .trace-path { stroke-dasharray: 240; animation: trace 3.5s ease-in-out infinite alternate; }
                @media (prefers-reduced-motion: reduce) {
                    .signal-scanlines, .signal-flicker, .glitch-num::before,
                    .glitch-num::after, .trace-path, .fade-up { animation: none !important; }
                }
            `}</style>

            {/* CRT scanline overlay */}
            <div className="signal-scanlines pointer-events-none absolute inset-0 z-10" />

            <div className="signal-flicker relative z-20 flex flex-col items-center text-center w-full max-w-md sm:max-w-lg">
                {/* status line */}
                <div
                    className="fade-up flex items-center gap-2 mb-4 sm:mb-6 font-mono text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-[#9C8F6E]"
                    style={{ animationDelay: '0.05s' }}
                >
                    <span
                        className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: '#E7A94C', opacity: blink ? 1 : 0.25 }}
                    />
                    NO SIGNAL — CH. 404
                </div>

                {/* glitching numeral */}
                <h1
                    className="glitch-num fade-up font-mono font-bold leading-none text-[4rem] xs:text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[10rem] tracking-tight"
                    style={{ animationDelay: '0.15s' }}
                >
                    404
                </h1>

                {/* oscilloscope trace */}
                <svg
                    className="fade-up w-48 sm:w-64 md:w-80 h-8 sm:h-10 mt-1 sm:mt-2 mb-6 sm:mb-8"
                    viewBox="0 0 240 40"
                    fill="none"
                    preserveAspectRatio="none"
                    style={{ animationDelay: '0.3s' }}
                >
                    <path
                        className="trace-path"
                        d="M0 20 H70 L78 6 L86 34 L94 20 H120 L126 12 L132 28 L138 20 H240"
                        stroke="#E7A94C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                {/* copy */}
                <p className="fade-up text-sm sm:text-base md:text-lg mb-1 px-2" style={{ animationDelay: '0.4s' }}>
                    This channel isn&apos;t broadcasting.
                </p>
                <p
                    className="fade-up text-xs sm:text-sm text-[#9C8F6E] mb-8 sm:mb-10 max-w-[15rem] sm:max-w-xs px-2"
                    style={{ animationDelay: '0.5s' }}
                >
                    The page you&apos;re looking for drifted out of range, or never existed.
                </p>

                {/* CTA */}
                <a
                    href="/"
                    className="fade-up font-mono text-xs sm:text-sm tracking-widest text-[#F3EEE1] border border-[#F3EEE1]/25 rounded-md px-5 py-2.5 sm:px-6 sm:py-3 transition-colors duration-300 hover:border-[#E7A94C] hover:text-[#E7A94C] active:scale-[0.98]"
                    style={{ animationDelay: '0.6s' }}
                >
                    [ RETURN TO BASE ]
                </a>

                {/* footer telemetry */}
                <p
                    className="fade-up font-mono text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] text-[#9C8F6E]/70 mt-10 sm:mt-12"
                    style={{ animationDelay: '0.7s' }}
                >
                    ERR_NO_CARRIER · RETRYING FOREVER
                </p>
            </div>
        </div>
    )
}

export default PageNotFound