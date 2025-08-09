import { FileText, Users, Clock, BarChart3, Lock, Smartphone } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: FileText,
      title: "Document Management",
      description: "Centralized document storage with AI-powered search and version control for seamless collaboration.",
      gradient: "from-[#ffd700]/20 to-[#66023c]/20"
    },
    {
      icon: Users,
      title: "Client Portal",
      description: "Secure client communication hub with real-time updates, file sharing, and case progress tracking.",
      gradient: "from-[#66023c]/20 to-[#8b1655]/20"
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Automated time tracking with smart billing integration and detailed reporting for accurate invoicing.",
      gradient: "from-[#8b1655]/20 to-[#ffd700]/20"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into case performance, revenue metrics, and operational efficiency.",
      gradient: "from-[#ffd700]/20 to-[#66023c]/30"
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "Bank-level encryption with GDPR, CCPA compliance and audit trails for complete data protection.",
      gradient: "from-[#66023c]/30 to-[#8b1655]/20"
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Full-featured mobile app for on-the-go case management and client communication.",
      gradient: "from-[#8b1655]/20 to-[#ffd700]/30"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#66023c]/5 via-transparent to-[#66023c]/5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-radial-purple opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-[#ffd700]/10 to-[#66023c]/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-[#66023c]/20 to-[#8b1655]/20 text-gold rounded-full text-sm border border-[#66023c]/30">
              Core Features
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Everything You Need to
            </span>
            <br />
            <span className="text-gold">Scale Your Practice</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our comprehensive suite of tools is designed specifically for modern legal practices, 
            combining efficiency with the highest security standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#2a1a2a] border-[#66023c]/20 hover:border-[#66023c]/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ffd700] to-[#b8860b] rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <h3 className="text-xl mb-4 text-gold">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#66023c] to-transparent w-24"></div>
            <span className="text-gold">Ready to get started?</span>
            <div className="h-px bg-gradient-to-r from-transparent via-[#66023c] to-transparent w-24"></div>
          </div>
        </div>
      </div>
    </section>
  );
}