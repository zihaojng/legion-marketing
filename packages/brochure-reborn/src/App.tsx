export default function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1a] to-[#0a0a0a] flex items-center justify-center p-0">
      {/* Brochure Container with A4 Aspect Ratio */}
      <div className="w-[70.7vh] h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2a1a2a] shadow-2xl border border-[#66023c]/30 overflow-hidden">
        
        {/* Header Banner */}
        <div className="relative h-32 bg-gradient-to-r from-[#66023c] via-[#8b1655] to-[#66023c] flex items-center justify-between px-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700]/10 via-transparent to-[#ffd700]/10"></div>
          <div className="relative z-10 flex flex-col items-start">
            <img src="/small white.png" alt="Legion Logo" className="h-12 mb-2" />
            <p className="text-white text-lg font-bold">Actually reliable litigation drafting — at AI speed.</p>
          </div>
          <div className="relative z-10 text-right">
            <p className="text-white text-lg font-bold">Contact Us</p>
            <p className="text-gold text-lg font-semibold">support@legion.law</p>
          </div>
        </div>

        {/* Main Brochure Content - Three Column Layout */}
        <div className="grid grid-cols-3 h-[800px]">
          
          {/* Left Panel - Hero & Key Benefits */}
          <div className="bg-gradient-to-b from-[#2a1a2a] to-[#1a1a1a] p-8 border-r border-[#66023c]/20">
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <h2 className="text-4xl font-bold text-gold max-w-sm">
                  Still drafting litigation docs{" "}
                  <span className="relative inline-block">
                    the hard way?
                    <svg
                      className="absolute bottom-[-10px] left-0 w-full h-4"
                      viewBox="0 0 100 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0 3 C 50 1, 50 1, 100 3 L 20 8 C 50 9, 50 9, 80 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </h2>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-x-4 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#ffd700] to-[#b8860b] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C12 0 12 12 24 12C12 12 12 24 12 24C12 24 12 12 0 12C12 12 12 0 12 0Z" />
                  </svg>
                </div>
                <h3 className="text-gold text-2xl font-bold">Our Promises</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <p className="text-xl text-gray-400">Days lost in drafting</p>
                  </div>
                  <div className="flex items-start mt-2">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <p className="text-xl text-white font-semibold">Less than 30 minutes of focused action</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <p className="text-xl text-gray-400">Constant rewrites</p>
                  </div>
                  <div className="flex items-start mt-2">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <p className="text-xl text-white font-semibold">A polished version in one go</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <p className="text-xl text-gray-400">Rising client expectations</p>
                  </div>
                  <div className="flex items-start mt-2">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <p className="text-xl text-white font-semibold">Better service without extra staff</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 space-y-6">
              <div>
                <h3 className="text-gold text-2xl font-semibold">50+ CA Law Firms</h3>
              </div>
              <div>
                <h3 className="text-gold text-2xl font-semibold">300+ Documents Delivered</h3>
              </div>
              <div>
                <h3 className="text-gold text-2xl font-semibold">Enterprise-Grade Security & Privacy</h3>
              </div>
            </div>
          </div>

          {/* Center Panel - AI Document Drafting */}
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#2a1a2a] p-8 border-r border-[#66023c]/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-3">AI Drafting</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#ffd700] to-[#b8860b] mx-auto"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#66023c]/10 to-[#8b1655]/5 p-5 border border-[#66023c]/20">
                <h3 className="text-gold font-semibold text-xl mb-3">Pleading</h3>
                <ul className="space-y-2 text-xl text-white">
                  <li>Complaint</li>
                  <li>Cross-Complaint</li>
                  <li>Petition</li>
                  <li>Answer</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#66023c]/10 to-[#8b1655]/5 p-5 border border-[#66023c]/20">
                <h3 className="text-gold font-semibold text-xl mb-3">Discovery</h3>
                <ul className="space-y-2 text-xl text-white">
                  <li>SROGs, RFPs, RFAs, (Propounding and Responding)</li>
                  <li>Counsel Declaration</li>
                  <li>Meet and Confer Letter</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <h2 className="text-2xl font-bold text-white mb-3">Coming Soon</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#ffd700] to-[#b8860b] mx-auto"></div>
            </div>
            <div className="bg-gradient-to-r from-[#66023c]/10 to-[#8b1655]/5 p-5 border border-[#66023c]/20 mt-6">
              <h3 className="text-gold font-semibold text-xl mb-3">Motion</h3>
              <ul className="space-y-2 text-xl text-white">
                <li>MPAs</li>
                <li>Notice of Motion</li>
                <li>Witness Declaration</li>
                <li>Attorney Declaration</li>
                <li>Request for Judicial Notice</li>
                <li>Proposed Order</li>
              </ul>
            </div>
          </div>

          {/* Right Panel - Pricing & Contact */}
          <div className="bg-gradient-to-b from-[#2a1a2a] to-[#1a1a1a] p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-3">No Subscription</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#ffd700] to-[#b8860b] mx-auto"></div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-br from-[#ffd700]/20 to-[#b8860b]/10 p-6 border-2 border-[#ffd700]/50 relative">
                <div className="text-center">
                  
                  <div className="text-3xl font-bold text-white mb-1">$10<span className="text-lg text-white">/page</span></div>
                  <p className="text-xl text-white mb-4">of work product</p>
                </div>
                <ul className="space-y-2 text-xl text-white">
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-[#ffd700] mr-2 flex-shrink-0"></div>
                    You see what you get
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-[#ffd700] mr-2 flex-shrink-0"></div>
                    Only pay to download
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-[#ffd700] mr-2 flex-shrink-0"></div>
                    First three docs on us
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-3">Easy to get started</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#ffd700] to-[#b8860b] mx-auto"></div>
            </div>
            <div className="bg-gradient-to-r from-[#66023c]/10 to-[#8b1655]/5 p-5 border border-[#66023c]/20 mb-8">
              <h3 className="text-gold font-semibold text-xl mb-3">To Sign Up</h3>
              <ul className="space-y-2 text-xl text-white">
                <li>Bring your own case, do a test drive</li>
              </ul>
              <h3 className="text-gold font-semibold text-xl mt-3">For Daily Use</h3>
              <ul className="space-y-2 text-xl text-white">
                <li>Draft documents with an expert, no trials and errors</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-[#66023c]/10 to-[#8b1655]/5 p-6 border border-[#66023c]/20">
              <h3 className="text-gold font-bold mb-4 text-center text-4xl">
                Book a test drive today at legion.law
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-[#66023c] to-[#8b1655] p-6">
          <div className="flex justify-between items-center text-white">
            
            <div className="text-right">
              <p className="text-[#ffd700] font-semibold">© 2025 Legion Legaltech, Corp.</p>
              <p className="text-base text-white/80 text-left">All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
