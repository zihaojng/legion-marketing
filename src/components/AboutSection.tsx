import { Award, CheckCircle, TrendingUp, Briefcase } from "lucide-react";

export function AboutSection() {
  const stats = [
    { number: "500+", label: "Law Firms", description: "Trust our platform" },
    { number: "99.9%", label: "Uptime", description: "Guaranteed reliability" },
    { number: "2M+", label: "Documents", description: "Processed securely" },
    { number: "24/7", label: "Support", description: "Expert assistance" }
  ];

  const achievements = [
    "SOC 2 Type II Certified",
    "ISO 27001 Compliant",
    "GDPR & CCPA Ready",
    "ABA Technology Approved"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-purple-dark"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700]/5 via-transparent to-[#ffd700]/5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-[#66023c]/20 to-[#ffd700]/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-[#ffd700]/20 to-[#66023c]/20 rounded-full blur-xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <div className="mb-8">
              <span className="px-4 py-2 bg-gradient-to-r from-[#66023c]/20 to-[#8b1655]/20 text-gold rounded-full text-sm border border-[#66023c]/30">
                About LegalTech Pro
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Pioneering the Future of
              </span>
              <br />
              <span className="text-gold">Legal Operations</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Founded by legal professionals who understand the challenges of modern practice, 
              we've built a platform that combines cutting-edge technology with deep industry expertise.
            </p>
            
            <div className="space-y-4 mb-10">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#ffd700] to-[#b8860b] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#66023c] to-[#8b1655] rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-white">Recognized Industry Leader</p>
                <p className="text-sm text-gray-400">Legal Technology Innovation Awards 2024</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#2a1a2a] p-8 rounded-2xl border border-[#66023c]/20 hover:border-[#66023c]/40 transition-all duration-300 text-center group hover:transform hover:scale-105"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ffd700]/20 to-[#66023c]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {index === 0 && <Briefcase className="w-6 h-6 text-gold" />}
                    {index === 1 && <CheckCircle className="w-6 h-6 text-gold" />}
                    {index === 2 && <TrendingUp className="w-6 h-6 text-gold" />}
                    {index === 3 && <Award className="w-6 h-6 text-gold" />}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="font-medium text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom testimonial */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#66023c]/10 via-[#8b1655]/10 to-[#66023c]/10 p-12 rounded-3xl border border-[#66023c]/20 backdrop-blur-sm">
              <blockquote className="text-2xl text-gray-300 mb-6 italic">
                "LegalTech Pro transformed our practice. We've reduced administrative overhead by 60% 
                while improving client satisfaction significantly. It's simply the best investment we've made."
              </blockquote>
              <div>
                <div className="text-gold font-medium">Sarah Mitchell</div>
                <div className="text-gray-400 text-sm">Managing Partner, Mitchell & Associates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}