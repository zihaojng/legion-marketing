export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1a] to-[#0a0a0a] p-8">
      {/* Brochure Container */}
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1a1a1a] to-[#2a1a2a] rounded-3xl shadow-2xl border border-[#66023c]/30 overflow-hidden">
        
        {/* Header Banner */}
        <div className="relative h-32 bg-gradient-to-r from-[#66023c] via-[#8b1655] to-[#66023c] flex items-center justify-between px-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700]/10 via-transparent to-[#ffd700]/10"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-gold">LegalTech Pro</h1>
            <p className="text-white/80 text-sm">Transform Your Legal Practice</p>
          </div>
          <div className="relative z-10 text-right">
            <p className="text-white/90 text-sm">Enterprise Legal Solutions</p>
            <p className="text-gold text-lg font-semibold">contact@legaltechpro.com</p>
          </div>
        </div>

        {/* Main Brochure Content - Three Column Layout */}
        <div className="grid grid-cols-3 h-[800px]">
          
          {/* Left Panel - Hero & Key Benefits */}
          <div className="bg-gradient-to-b from-[#2a1a2a] to-[#1a1a1a] p-8 border-r border-[#66023c]/20">
            <div className="mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ffd700] to-[#b8860b] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2Z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gold mb-4">Revolutionary Legal Technology</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Streamline your practice with our comprehensive platform designed specifically for modern law firms.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-[#ffd700] pl-4">
                <h3 className="text-gold text-lg font-semibold mb-2">500+ Law Firms</h3>
                <p className="text-gray-400 text-sm">Trust our platform nationwide</p>
              </div>
              
              <div className="border-l-4 border-[#ffd700] pl-4">
                <h3 className="text-gold text-lg font-semibold mb-2">99.9% Uptime</h3>
                <p className="text-gray-400 text-sm">Guaranteed reliability & performance</p>
              </div>
              
              <div className="border-l-4 border-[#ffd700] pl-4">
                <h3 className="text-gold text-lg font-semibold mb-2">SOC 2 Certified</h3>
                <p className="text-gray-400 text-sm">Enterprise-grade security standards</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-br from-[#66023c]/20 to-[#8b1655]/10 rounded-xl border border-[#66023c]/30">
              <h3 className="text-gold font-semibold mb-3">Free 30-Day Trial</h3>
              <p className="text-gray-300 text-sm mb-4">No setup fees • Cancel anytime</p>
              <button className="w-full bg-gradient-to-r from-[#ffd700] to-[#b8860b] text-black font-semibold py-3 rounded-lg hover:scale-105 transition-transform duration-200">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Center Panel - Core Features */}
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#2a1a2a] p-8 border-r border-[#66023c]/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-3">Core Features</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#ffd700] to-[#b8860b] mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#66023c]/10 to-[#8b1655]/5 p-5 rounded-xl border border-[#66023c]/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#ffd700] to-[#b8860b] rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"/>
                    </svg>
                  </div>
                  <h3 className="text-gold font-semibold">Document Management</h3>
                </div>
                <p className="text-gray-400 text-sm">AI-powered search and version control for seamless collaboration</p>
              </div>

              <div className="bg-gradient-to-r from-[#66023c]/10 to-[#8b1655]/5 p-5 rounded-xl border border-[#66023c]/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#ffd700] to-[#b8860b] rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4H16M16 4V6H8V4M16 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H8"/>
                    </svg>
                  </div>
                  <h3 className="text-gold font-semibold">Case Management</h3>
                </div>
                <p className="text-gray-400 text-sm">Complete case lifecycle tracking with automated workflows</p>
              </div>

              <div className="bg-gradient-to-r from-[#66023c]/10 to-[#8b1655]/5 p-5 rounded-xl border border-[#66023c]/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#ffd700] to-[#b8860b] rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
                    </svg>
                  </div>
                  <h3 className="text-gold font-semibold">Client Portal</h3>
                </div>
                <p className="text-gray-400 text-sm">Secure communication hub with real-time case updates</p>
              </div>

              <div className="bg-gradient-to-r from-[#66023c]/10 to-[#8b1655]/5 p-5 rounded-xl border border-[#66023c]/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#ffd700] to-[#b8860b] rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/>
                    </svg>
                  </div>
                  <h3 className="text-gold font-semibold">Analytics Dashboard</h3>
                </div>
                <p className="text-gray-400 text-sm">Comprehensive insights into performance and revenue</p>
              </div>

              <div className="bg-gradient-to-r from-[#66023c]/10 to-[#8b1655]/5 p-5 rounded-xl border border-[#66023c]/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#ffd700] to-[#b8860b] rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 8H6C5.45 8 5 7.55 5 7S5.45 6 6 6H18C18.55 6 19 6.45 19 7S18.55 8 18 8ZM18 13H6C5.45 13 5 12.55 5 12S5.45 11 6 11H18C18.55 11 19 11.45 19 12S18.55 13 18 13ZM18 18H6C5.45 18 5 17.55 5 17S5.45 16 6 16H18C18.55 16 19 16.45 19 17S18.55 18 18 18Z"/>
                    </svg>
                  </div>
                  <h3 className="text-gold font-semibold">Time Tracking</h3>
                </div>
                <p className="text-gray-400 text-sm">Automated tracking with smart billing integration</p>
              </div>
            </div>
          </div>

          {/* Right Panel - Pricing & Contact */}
          <div className="bg-gradient-to-b from-[#2a1a2a] to-[#1a1a1a] p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-3">Pricing Plans</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#ffd700] to-[#b8860b] mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-br from-[#66023c]/20 to-[#8b1655]/10 p-6 rounded-xl border border-[#66023c]/30">
                <div className="text-center">
                  <h3 className="text-gold text-xl font-bold mb-2">Professional</h3>
                  <div className="text-3xl font-bold text-white mb-1">$99<span className="text-lg text-gray-400">/month</span></div>
                  <p className="text-gray-400 text-sm mb-4">Per attorney</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-[#ffd700] rounded-full mr-2 flex-shrink-0"></div>
                    Document Management
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-[#ffd700] rounded-full mr-2 flex-shrink-0"></div>
                    Case Tracking
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-[#ffd700] rounded-full mr-2 flex-shrink-0"></div>
                    Client Portal
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-[#ffd700] rounded-full mr-2 flex-shrink-0"></div>
                    24/7 Support
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#ffd700]/20 to-[#b8860b]/10 p-6 rounded-xl border-2 border-[#ffd700]/50 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#ffd700] to-[#b8860b] text-black px-4 py-1 rounded-full text-xs font-semibold">
                  MOST POPULAR
                </div>
                <div className="text-center">
                  <h3 className="text-gold text-xl font-bold mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold text-white mb-1">$199<span className="text-lg text-gray-400">/month</span></div>
                  <p className="text-gray-400 text-sm mb-4">Per attorney</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-[#ffd700] rounded-full mr-2 flex-shrink-0"></div>
                    Everything in Professional
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-[#ffd700] rounded-full mr-2 flex-shrink-0"></div>
                    Advanced Analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-[#ffd700] rounded-full mr-2 flex-shrink-0"></div>
                    API Access
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-[#ffd700] rounded-full mr-2 flex-shrink-0"></div>
                    Custom Integrations
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-[#66023c]/10 to-[#8b1655]/5 p-6 rounded-xl border border-[#66023c]/20">
              <h3 className="text-gold font-semibold mb-4 text-center">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#ffd700] mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                  </svg>
                  contact@legaltechpro.com
                </div>
                <div className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#ffd700] mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                  </svg>
                  (555) 123-4567
                </div>
                <div className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#ffd700] mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
                  </svg>
                  San Francisco, CA
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-[#66023c]/20">
                <button className="w-full bg-gradient-to-r from-[#66023c] to-[#8b1655] text-white font-semibold py-2 rounded-lg hover:scale-105 transition-transform duration-200 text-sm">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-[#66023c] to-[#8b1655] p-6">
          <div className="flex justify-between items-center text-white">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#ffd700] mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2Z"/>
                </svg>
                <span className="text-sm">SOC 2 Certified</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#ffd700] mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2Z"/>
                </svg>
                <span className="text-sm">GDPR Compliant</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#ffd700] mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2Z"/>
                </svg>
                <span className="text-sm">ISO 27001</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[#ffd700] font-semibold">© 2024 LegalTech Pro</p>
              <p className="text-sm text-white/80">All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}