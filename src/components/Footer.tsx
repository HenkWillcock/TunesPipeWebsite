import { Logo } from "./Logo";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-900 mt-16 bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8" />
            <span className="text-xl text-white">tunes pipe</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-900 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>Built with NewPipeExtractor • Free and Open Source</p>
        </div>
      </div>
    </footer>
  );
}
