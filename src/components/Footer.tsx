
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Senior Tech Help</h3>
            <p className="senior-text text-muted-foreground">
              Making technology accessible and safe for everyone.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/getting-started" className="senior-text text-muted-foreground hover:text-primary transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link to="/safety" className="senior-text text-muted-foreground hover:text-primary transition-colors">
                  Online Safety
                </Link>
              </li>
              <li>
                <Link to="/contact" className="senior-text text-muted-foreground hover:text-primary transition-colors">
                  Get Help
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Trusted Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.aarp.org/money/scams-fraud/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="senior-text text-muted-foreground hover:text-primary transition-colors"
                >
                  AARP Scam Protection
                </a>
              </li>
              <li>
                <a 
                  href="https://www.consumer.ftc.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="senior-text text-muted-foreground hover:text-primary transition-colors"
                >
                  FTC Consumer Info
                </a>
              </li>
              <li>
                <a 
                  href="https://www.usa.gov/stop-scams-frauds" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="senior-text text-muted-foreground hover:text-primary transition-colors"
                >
                  USA.gov Scam Prevention
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="senior-text text-muted-foreground">
            © 2024 Senior Tech Help. Made with care for our senior community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
