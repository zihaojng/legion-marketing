import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="w-full max-w-[8.5in] mx-auto bg-white" style={{ aspectRatio: '8.5/11' }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-red-900 to-red-800 text-white p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-yellow-400 mb-1">LegalTech Pro</h1>
            <p className="text-white/90 text-sm">Transform Your Legal Practice</p>
          </div>
          <div className="text-right text-sm">
            <p className="text-white/90">Enterprise Legal Solutions</p>
            <p className="text-yellow-400 font-semibold">contact@legaltechpro.com</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-900 text-white p-8">
        <div className="grid grid-cols-3 gap-8 h-full">
          
          {/* Left Column - Main Value Prop */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-900 rounded-full"></div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-3">
                Revolutionary Legal Technology
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Streamline your practice with our comprehensive platform designed specifically for modern law firms.
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-400 pl-4">
                <div className="text-xl font-bold text-yellow-400">500+ Law Firms</div>
                <div className="text-gray-300 text-sm">Trust our platform nationwide</div>
              </div>
              
              <div className="border-l-4 border-yellow-400 pl-4">
                <div className="text-xl font-bold text-yellow-400">99.9% Uptime</div>
                <div className="text-gray-300 text-sm">Guaranteed reliability & performance</div>
              </div>
              
              <div className="border-l-4 border-yellow-400 pl-4">
                <div className="text-xl font-bold text-yellow-400">SOC 2 Certified</div>
                <div className="text-gray-300 text-sm">Enterprise-grade security standards</div>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-1">Free 30-Day Trial</h3>
                <p className="text-gray-300 text-xs">No setup fees • Cancel anytime</p>
              </div>
              <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 text-base px-6 py-2 rounded-lg font-semibold">
                Start Free Trial
              </Button>
            </div>
          </div>

          {/* Middle Column - Features */}
          <div>
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white">Core Features</h2>
              <div className="w-12 h-0.5 bg-yellow-400 mx-auto mt-2"></div>
            </div>

            <div className="space-y-5">
              <FeatureItem 
                icon="📄"
                title="Document Management"
                description="AI-powered search and version control for seamless collaboration"
              />
              <FeatureItem 
                icon="📁"
                title="Case Management"
                description="Complete case lifecycle tracking with automated workflows"
              />
              <FeatureItem 
                icon="👥"
                title="Client Portal"
                description="Secure communication hub with real-time case updates"
              />
              <FeatureItem 
                icon="📊"
                title="Analytics Dashboard"
                description="Comprehensive insights into performance and revenue"
              />
              <FeatureItem 
                icon="⏱️"
                title="Time Tracking"
                description="Automated tracking with smart billing integration"
              />
            </div>
          </div>

          {/* Right Column - Pricing */}
          <div>
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white">Pricing Plans</h2>
              <div className="w-12 h-0.5 bg-yellow-400 mx-auto mt-2"></div>
            </div>

            <div className="space-y-4">
              <PricingCard 
                title="Professional"
                price="$99"
                period="/month"
                subtitle="Per attorney"
                features={[
                  "Document Management",
                  "Case Tracking", 
                  "Client Portal",
                  "24/7 Support"
                ]}
                isPopular={false}
              />
              
              <PricingCard 
                title="Enterprise"
                price="$199"
                period="/month"
                subtitle="Per attorney"
                features={[
                  "Everything in Professional",
                  "Advanced Analytics",
                  "API Access", 
                  "Custom Integrations"
                ]}
                isPopular={true}
              />
            </div>

            {/* Contact */}
            <div className="mt-8 space-y-3">
              <h3 className="text-lg font-semibold text-yellow-400">Contact Us</h3>
              <div className="space-y-1 text-xs text-gray-300">
                <div>📧 contact@legaltechpro.com</div>
                <div>📞 (555) 123-4567</div>
                <div>📍 San Francisco, CA</div>
              </div>
              <Button variant="outline" className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 text-sm py-1">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 px-8 pb-6">
        <div className="border-t border-gray-700 pt-4">
          <div className="flex justify-center space-x-4 text-xs mb-3">
            <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded">🔒 SOC 2 Certified</span>
            <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded">🌍 GDPR Compliant</span>
            <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded">🔐 ISO 27001</span>
          </div>
          <div className="text-center text-gray-400 text-xs">
            © 2024 LegalTech Pro - All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
        <p className="text-gray-300 text-xs leading-tight">{description}</p>
      </div>
    </div>
  );
};

const PricingCard = ({ 
  title, 
  price, 
  period, 
  subtitle, 
  features, 
  isPopular 
}: { 
  title: string; 
  price: string; 
  period: string; 
  subtitle: string; 
  features: string[]; 
  isPopular: boolean; 
}) => {
  return (
    <div className={`p-4 rounded-lg border-2 relative ${
      isPopular 
        ? 'border-yellow-400 bg-yellow-400/10' 
        : 'border-gray-600 bg-gray-800'
    }`}>
      {isPopular && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <span className="bg-yellow-400 text-gray-900 px-2 py-0.5 rounded text-xs font-bold">MOST POPULAR</span>
        </div>
      )}
      
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-yellow-400 mb-1">{title}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-2xl font-bold text-white">{price}</span>
          <span className="text-gray-300 text-sm">{period}</span>
        </div>
        <p className="text-gray-300 text-xs mt-0.5">{subtitle}</p>
      </div>

      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-gray-900 text-xs">●</span>
            </div>
            <span className="text-white text-xs">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;