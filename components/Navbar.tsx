"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-blur bg-[#0A0A0F]/80 border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <Sparkles size={16} className="text-white" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">SuaMarca</span>
        </div>

        {/* Nav actions */}
        <nav className="flex items-center gap-3">
          <button
            onClick={onOpenModal}
            className="cursor-pointer text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25"
          >
            Agendar conversa
          </button>
        </nav>
      </div>
    </header>
  );
}
