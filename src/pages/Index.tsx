
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { Book, BookOpen, Contact } from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: 'Getting Started',
      description: 'Learn the basics - what is a computer, internet, and browser. Perfect for beginners.',
      icon: Book,
      link: '/getting-started',
      color: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      title: 'Step-by-Step Guides',
      description: 'Easy-to-follow instructions for email, video calls, online banking, and more.',
      icon: BookOpen,
      link: '/guides',
      color: 'bg-green-50 hover:bg-green-100'
    },
    {
      title: 'Online Safety',
      description: 'Stay safe online. Learn about scams, secure passwords, and protecting yourself.',
      icon: Book,
      link: '/safety',
      color: 'bg-red-50 hover:bg-red-100'
    },
    {
      title: 'Video Tutorials',
      description: 'Watch simple, step-by-step video guides at your own pace.',
      icon: Book,
      link: '/videos',
      color: 'bg-purple-50 hover:bg-purple-100'
    },
    {
      title: 'FAQ & Glossary',
      description: 'Find answers to common questions and understand tech terms.',
      icon: Book,
      link: '/faq',
      color: 'bg-yellow-50 hover:bg-yellow-100'
    },
    {
      title: 'Get Help',
      description: 'Need personal assistance? Contact us for one-on-one support.',
      icon: Contact,
      link: '/contact',
      color: 'bg-indigo-50 hover:bg-indigo-100'
    }
  ];

  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Technology Made Simple
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                Welcome to Senior Tech Help - your friendly guide to using computers, smartphones, 
                and the internet safely and confidently. We're here to help you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="senior-button bg-primary hover:bg-primary/90">
                  <Link to="/getting-started">Start Learning</Link>
                </Button>
                <Button asChild variant="outline" className="senior-button">
                  <Link to="/contact">Get Personal Help</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              What Would You Like to Learn?
            </h2>
            <p className="senior-text text-muted-foreground max-w-3xl mx-auto">
              Choose from our easy-to-understand guides and tutorials. Everything is designed 
              with large text and simple instructions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className={`${feature.color} border-2 hover:border-primary transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1`}
                >
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="senior-text text-muted-foreground mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      <Button asChild className="senior-button w-full">
                        <Link to={feature.link}>Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                Need Personal Help?
              </h2>
              <p className="senior-text text-muted-foreground mb-8 max-w-3xl mx-auto">
                Don't worry if you feel overwhelmed. Our friendly support team is here to help you 
                one-on-one. No question is too simple.
              </p>
              <Button asChild className="senior-button bg-accent hover:bg-accent/90">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
