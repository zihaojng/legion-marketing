import { ArrowRight, Scale, Shield, Zap } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 gradient-dark-purple"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#66023c]/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#ffd700]/5 via-transparent to-[#66023c]/30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#ffd700]/20 to-[#66023c]/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[#66023c]/20 to-[#ffd700]/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-[#ffd700]/10 to-transparent rounded-full blur-lg"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#66023c]/20 to-[#8b1655]/20 rounded-full border border-[#66023c]/30 backdrop-blur-sm mb-6">
            <Shield className="w-4 h-4 text-gold" />
            <span className="text-sm text-gray-300">Legal Technology Innovation</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Transform Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#ffd700] via-[#ffed4e] to-[#ffd700] bg-clip-text text-transparent">
            Legal Practice
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Streamline operations, enhance efficiency, and deliver exceptional client experiences with our cutting-edge legal technology platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#ffd700] to-[#b8860b] text-black hover:from-[#ffed4e] hover:to-[#ffd700] transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg group"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-[#66023c] text-white hover:bg-[#66023c]/20 hover:border-[#8b1655] transition-all duration-300 px-8 py-4 text-lg backdrop-blur-sm"
          >
            Watch Demo
          </Button>
        </div>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-[#66023c]/10 to-[#8b1655]/5 rounded-2xl border border-[#66023c]/20 backdrop-blur-sm">
            <div className="w-12 h-12 bg-gradient-to-br from-[#ffd700] to-[#b8860b] rounded-full flex items-center justify-center mb-4">
              <Scale className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-gold mb-2">Smart Automation</h3>
            <p className="text-gray-400 text-center text-sm">Automate routine tasks and focus on what matters most</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-[#66023c]/10 to-[#8b1655]/5 rounded-2xl border border-[#66023c]/20 backdrop-blur-sm">
            <div className="w-12 h-12 bg-gradient-to-br from-[#ffd700] to-[#b8860b] rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-gold mb-2">Secure & Compliant</h3>
            <p className="text-gray-400 text-center text-sm">Enterprise-grade security with full regulatory compliance</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-[#66023c]/10 to-[#8b1655]/5 rounded-2xl border border-[#66023c]/20 backdrop-blur-sm">
            <div className="w-12 h-12 bg-gradient-to-br from-[#ffd700] to-[#b8860b] rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-gold mb-2">Lightning Fast</h3>
            <p className="text-gray-400 text-center text-sm">Instant access to case data and real-time collaboration</p>
          </div>
        </div>
      </div>
    </section>
  );
}