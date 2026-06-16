import React from 'react';
import { Instagram, Mail, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Sunnies by Mel</h3>
            <p className="text-sm leading-relaxed">
              Premium sunglasses and accessories for those who appreciate quality and style.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Visit us</h3>
            <p className="text-sm leading-relaxed">
              78 East Road<br />
              Belgravia, Harare
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.instagram.com/sunnies_by_mel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-primary transition-colors duration-200"
              >
                <Instagram className="h-4 w-4" />
                <span>@sunnies_by_mel</span>
              </a>
              <a
                href="mailto:brendlync@gmail.com"
                className="flex items-center space-x-2 text-sm hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>Email Us</span>
              </a>
              <a
                href="https://www.facebook.com/share/1BZkprESF4/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-primary transition-colors duration-200"
              >
                <Facebook className="h-4 w-4" />
                <span>Message us on Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">
            © {currentYear} Sunnies by Mel. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;