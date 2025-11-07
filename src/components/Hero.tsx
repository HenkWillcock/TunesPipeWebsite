import { Button } from "./ui/button";
import { Download, Github } from "lucide-react";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-black">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <span className="text-2xl text-white">tunes pipe</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-blue-950">
            <Github className="w-5 h-5" />
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            Music streaming that respects your privacy
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Inspired by NewPipe, powered by the NewPipeExtractor. Enjoy a premium music experience without sacrificing your personal data.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/tunespipe.apk" download>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
                asChild
              >
                <a href="/TunesPipeWebsite/tunespipe.apk" download="tunespipe.apk">
                  <Download className="w-5 h-5" />
                  Download Now
                </a>
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-500 hover:bg-blue-950">
              <a href="https://buy.stripe.com/8x25kveNg1C0bWo6ZbcIE00">Donate</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
