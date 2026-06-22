import { Sparkles, Lock, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050508] py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <Sparkles size={14} className="text-white" />
          </div>
          <span className="text-white font-bold">SuaMarca</span>
        </div>

        {/* LGPD */}
        <div className="flex items-center gap-1.5 text-sm text-[#475569]">
          <Lock size={13} />
          <span>Dados tratados conforme a LGPD</span>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-5 text-sm text-[#475569]">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="mailto:contato@suamarca.com.br" className="hover:text-white transition-colors flex items-center gap-1">
            <Mail size={13} /> Contato
          </a>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-6 pt-6 border-t border-white/5 text-center text-xs text-[#334155]">
        © {new Date().getFullYear()} SuaMarca. Todos os direitos reservados.
      </div>
    </footer>
  );
}
