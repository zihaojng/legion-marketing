export default function App() {
  return (
    <div className="w-full h-full max-w-[70.7vh] aspect-[1/1.4142]">
        {/* Brochure Container */}
        <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#2a1a2a] shadow-2xl border border-[#66023c]/30 overflow-hidden flex flex-col">
          
          {/* Header Banner */}
          <div className="relative h-32 bg-gradient-to-r from-[#66023c] via-[#8b1655] to-[#66023c] flex items-center justify-between px-12 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700]/10 via-transparent to-[#ffd700]/10"></div>
          <div className="relative z-10 flex flex-col items-start">
            <img src="/small white.png" alt="Legion Logo" className="h-12 mb-2" />
            <p className="text-white text-base font-bold">Actually reliable litigation drafting — at AI speed.</p>
          </div>
          <div className="relative z-10 text-right mt-8">
            <p className="text-white text-base font-bold">Contact Us</p>
            <p className="text-gold text-base font-semibold">support@legion.law</p>
          </div>
        </div>

        {/* Main Brochure Content - Three Column Layout */}
        <div className="grid grid-cols-3 flex-grow">
          
          {/* Left Panel - Hero & Key Benefits */}
          <div className="bg-gradient-to-b from-[#2a1a2a] to-[#1a1a1a] p-4 border-r border-[#66023c]/20 text-center">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-bold text-gold max-w-sm mx-auto">
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

            <div className="text-left">
              <div className="flex items-center gap-x-4 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#ffd700] to-[#b8860b] flex items-center justify-center flex-shrink-0 rounded-md">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C12 0 12 12 24 12C12 12 12 24 12 24C12 24 12 12 0 12C12 12 12 0 12 0Z" />
                  </svg>
                </div>
                <h3 className="text-gold text-xl font-bold">Our Promises</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <p className="text-lg text-gray-400">Days lost in drafting</p>
                  </div>
                  <div className="flex items-start mt-1">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <p className="text-lg text-white font-semibold">Less than 30 minutes of focused action</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <p className="text-lg text-gray-400">Constant rewrites</p>
                  </div>
                  <div className="flex items-start mt-1">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <p className="text-lg text-white font-semibold">A polished version in one go</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <p className="text-lg text-gray-400">Hiring, training, retaining juniors</p>
                  </div>
                  <div className="flex items-start mt-1">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <p className="text-lg text-white font-semibold">Better service without extra staff</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <div>
                <h3 className="text-gold text-xl font-semibold">50+ CA Law Firms</h3>
              </div>
              <div>
                <h3 className="text-gold text-xl font-semibold">300+ Documents Delivered</h3>
              </div>
              <div>
                <h3 className="text-gold text-xl font-semibold">Enterprise-Grade Security & Privacy</h3>
              </div>
            </div>
          </div>

          {/* Center Panel - AI Document Drafting */}
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#2a1a2a] p-4 border-r border-[#66023c]/20">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white mb-1">AI Drafting</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#ffd700] to-[#b8860b] mx-auto"></div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-gold font-semibold text-lg mb-2">Pleading</h3>
                <ul className="space-y-1 text-lg text-white">
                  <li>Complaint</li>
                  <li>Cross-Complaint</li>
                  <li>Petition</li>
                  <li>Answer</li>
                </ul>
              </div>

              <div>
                <h3 className="text-gold font-semibold text-lg mb-2">Discovery</h3>
                <ul className="space-y-1 text-lg text-white">
                  <li>SROGs, RFPs, RFAs, (Propounding and Responding)</li>
                  <li>Counsel Declaration</li>
                  <li>Meet and Confer Letter</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <h2 className="text-xl font-bold text-white mb-2">Coming Soon</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#ffd700] to-[#b8860b] mx-auto"></div>
            </div>
            <div className="mt-3">
              <h3 className="text-gold font-semibold text-lg mb-2">Motion</h3>
              <ul className="space-y-1 text-lg text-white">
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
          <div className="bg-gradient-to-b from-[#2a1a2a] to-[#1a1a1a] p-4">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white mb-1">No Subscription</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#ffd700] to-[#b8860b] mx-auto"></div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gradient-to-br from-[#ffd700]/20 to-[#b8860b]/10 p-2 border-2 border-[#ffd700]/50 relative">
                <div className="text-center">
                  
                  <div className="text-2xl font-bold text-white mb-1">$10<span className="text-base text-white">/page</span></div>
                  <p className="text-lg text-white mb-3">of work product</p>
                </div>
                <ul className="space-y-1 text-lg text-white">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-[#ffd700] mr-2 flex-shrink-0"></div>
                    Draft first
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-[#ffd700] mr-2 flex-shrink-0"></div>
                    Pay last
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-[#ffd700] mr-2 flex-shrink-0"></div>
                    First 3 docs on us
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-white mb-2">Easy to get started</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#ffd700] to-[#b8860b] mx-auto"></div>
            </div>
            <div>
              <h3 className="text-gold font-semibold text-lg mb-2">To Sign Up</h3>
              <ul className="space-y-1 text-lg text-white">
                <li>Bring your own case, do a test drive</li>
              </ul>
              <h3 className="text-gold font-semibold text-lg mt-2">For Daily Use</h3>
              <ul className="space-y-1 text-lg text-white">
                <li>Draft documents with an expert, no trials and errors</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-[#66023c]/10 to-[#8b1655]/5 p-4 border border-[#66023c]/20 mt-4">
              <h3 className="text-gold font-bold mb-2 text-center text-2xl">
                Book a test drive today at legion.law
              </h3>
            </div>

            <div className="text-right mt-4">
              <p className="text-xs text-[#ffd700] font-semibold">© 2025 Legion Legaltech, Corp.</p>
              <p className="text-xs text-white/80">All rights reserved</p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-[#66023c] to-[#8b1655] p-6 flex-shrink-0">
          <div className="flex justify-between items-center text-white">
            
            <div className="text-right">
            </div>
          </div>
        </div>
        </div>
        </div>
  );
}
