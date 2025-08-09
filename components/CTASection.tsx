import { ArrowRight, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-radial-purple"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-[#ffd700]/30 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-[#ffd700]/20 to-[#66023c]/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#66023c]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Transform Your
            </span>
            <br />
            <span className="text-gold">Legal Practice?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Join hundreds of law firms who have already modernized their operations. 
            Get started with a free consultation and discover how we can help you grow.
          </p>
        </div>
        
        {/* Main CTA */}
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a1a2a] p-12 rounded-3xl border border-[#66023c]/30 backdrop-blur-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Start Your Free Trial</h3>
              <p className="text-gray-400 mb-8">
                No setup fees. No long-term contracts. Full access to all features for 30 days.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="bg-[#0a0a0a]/50 border-[#66023c]/30 text-white placeholder:text-gray-500 focus:border-[#ffd700] transition-all duration-300"
                  />
                </div>
                <Button className="bg-gradient-to-r from-[#ffd700] to-[#b8860b] text-black hover:from-[#ffed4e] hover:to-[#ffd700] transition-all duration-300 px-8 group">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                ✓ No credit card required  ✓ Cancel anytime  ✓ Setup support included
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-[#66023c]/20 to-[#8b1655]/10 rounded-2xl border border-[#66023c]/20">
                <div className="text-3xl font-bold text-gold mb-2">30</div>
                <div className="text-sm text-gray-400">Days Free Trial</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#66023c]/20 to-[#8b1655]/10 rounded-2xl border border-[#66023c]/20">
                <div className="text-3xl font-bold text-gold mb-2">24/7</div>
                <div className="text-sm text-gray-400">Expert Support</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#66023c]/20 to-[#8b1655]/10 rounded-2xl border border-[#66023c]/20">
                <div className="text-3xl font-bold text-gold mb-2">5★</div>
                <div className="text-sm text-gray-400">Customer Rating</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#66023c]/20 to-[#8b1655]/10 rounded-2xl border border-[#66023c]/20">
                <div className="text-3xl font-bold text-gold mb-2">99%</div>
                <div className="text-sm text-gray-400">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-[#1a1a1a] to-[#2a1a2a] rounded-2xl border border-[#66023c]/20 hover:border-[#66023c]/40 transition-all duration-300 group hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ffd700] to-[#b8860b] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold text-gold mb-4">Schedule Demo</h3>
            <p className="text-gray-400 mb-6">Book a personalized demo with our legal tech experts</p>
            <Button variant="outline" className="border-[#66023c] text-white hover:bg-[#66023c]/20 transition-all duration-300">
              Book Now
            </Button>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-[#1a1a1a] to-[#2a1a2a] rounded-2xl border border-[#66023c]/20 hover:border-[#66023c]/40 transition-all duration-300 group hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ffd700] to-[#b8860b] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold text-gold mb-4">Call Sales</h3>
            <p className="text-gray-400 mb-6">Speak directly with our sales team for custom solutions</p>
            <Button variant="outline" className="border-[#66023c] text-white hover:bg-[#66023c]/20 transition-all duration-300">
              Call Now
            </Button>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-[#1a1a1a] to-[#2a1a2a] rounded-2xl border border-[#66023c]/20 hover:border-[#66023c]/40 transition-all duration-300 group hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ffd700] to-[#b8860b] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold text-gold mb-4">Contact Support</h3>
            <p className="text-gray-400 mb-6">Get technical support and implementation help</p>
            <Button variant="outline" className="border-[#66023c] text-white hover:bg-[#66023c]/20 transition-all duration-300">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}