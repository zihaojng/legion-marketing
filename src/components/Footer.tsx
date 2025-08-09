import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Product: [
      "Features",
      "Pricing",
      "Security",
      "Integrations",
      "Mobile App"
    ],
    Resources: [
      "Documentation",
      "API Reference",
      "Case Studies",
      "Webinars",
      "Legal Templates"
    ],
    Company: [
      "About Us",
      "Careers",
      "Press Kit",
      "Partners",
      "Contact"
    ],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "GDPR Compliance",
      "Security",
      "Cookie Policy"
    ]
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#0a0a0a] to-[#1a1a1a]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#66023c]/5 via-transparent to-[#66023c]/5"></div>
      
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#66023c] to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ffd700] to-[#b8860b] bg-clip-text text-transparent mb-4">
                LegalTech Pro
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering legal professionals with cutting-edge technology solutions. 
                Transform your practice with our comprehensive platform designed specifically for modern law firms.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-5 h-5 text-[#66023c]">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>123 Legal District, Suite 400, San Francisco, CA 94105</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-5 h-5 text-[#66023c]">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-5 h-5 text-[#66023c]">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contact@legaltechpro.com</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#66023c] to-[#8b1655] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-[#66023c] to-[#8b1655] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Twitter className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-[#66023c] to-[#8b1655] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Facebook className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          
          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-gold font-medium mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-[#66023c]/20 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 LegalTech Pro. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                All systems operational
              </span>
              <span>SOC 2 Certified</span>
              <span>ISO 27001 Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}