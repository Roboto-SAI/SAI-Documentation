import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const Header = ({ onMenuToggle, isMenuOpen }: HeaderProps) => {
  return (
    <header className="fixed top-10 left-0 right-0 h-16 bg-surface-overlay/95 backdrop-blur-sm border-b border-border z-50">
      <div className="h-full px-4 lg:px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded bg-primary/10 border border-primary/30 flex items-center justify-center glow-subtle">
              <span className="text-primary font-mono font-bold text-sm">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-semibold text-foreground tracking-tight">
                SAI
              </span>
              <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider hidden sm:block">
                Super Advanced Intelligence
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:block text-xs text-muted-foreground font-mono border border-border rounded px-2 py-1">
            Sovereign System
          </span>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub Repository"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
