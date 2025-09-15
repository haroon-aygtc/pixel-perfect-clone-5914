const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">AxonStream</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Enterprise Intelligence Platform. Unifying platforms, IT infrastructure, 
              and AI-driven automation for smarter operations.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-sm">in</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors story-link">Platform Licensing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors story-link">Custom Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors story-link">AI Integration</a></li>
              <li><a href="#" className="hover:text-primary transition-colors story-link">Systems Integration</a></li>
              <li><a href="#" className="hover:text-primary transition-colors story-link">Hardware Procurement</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors story-link">Retail</a></li>
              <li><a href="#" className="hover:text-primary transition-colors story-link">Finance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors story-link">Healthcare</a></li>
              <li><a href="#" className="hover:text-primary transition-colors story-link">Real Estate</a></li>
              <li><a href="#" className="hover:text-primary transition-colors story-link">Manufacturing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors story-link">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors story-link">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors story-link">Whitepapers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors story-link">Documentation</a></li>
              <li className="pt-2">
                <a href="mailto:enterprise@axonstream.com" className="hover:text-primary transition-colors">
                  enterprise@axonstream.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 AxonStream. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;