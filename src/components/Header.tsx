
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Book, BookOpen, Contact } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Getting Started', href: '/getting-started', icon: Book },
    { name: 'Step-by-Step Guides', href: '/guides', icon: BookOpen },
    { name: 'Video Tutorials', href: '/videos', icon: Book },
    { name: 'Online Safety', href: '/safety', icon: Book },
    { name: 'FAQ & Glossary', href: '/faq', icon: Book },
    { name: 'Contact', href: '/contact', icon: Contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-card border-b-2 border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Home className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Senior Tech Help
                </h1>
                <p className="text-muted-foreground text-sm lg:text-base">
                  Technology made simple
                </p>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 hover:bg-secondary ${
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <Button
            className="lg:hidden senior-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variant="outline"
          >
            Menu
          </Button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-6">
            <nav className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-4 py-4 rounded-lg text-xl font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-6 h-6 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
