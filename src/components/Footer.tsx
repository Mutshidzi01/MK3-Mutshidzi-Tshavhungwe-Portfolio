import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground">MT</span>
              </div>
              <span>Mutshidzi Tshavhungwe</span>
            </div>
            <p className="text-muted-foreground">
              UI/UX Designer creating meaningful digital experiences through human-centered design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="space-y-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <p className="text-muted-foreground flex items-center justify-center space-x-2 flex-wrap">
            <span>© 2025 Mutshidzi Tshavhungwe. Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>and design thinking</span>
          </p>
        </div>
      </div>
    </footer>
  );
}