
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get Help & Support
          </h1>
          <p className="senior-text text-muted-foreground max-w-3xl mx-auto">
            We're here to help! Whether you have a question about our guides or need personal 
            assistance with technology, don't hesitate to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl lg:text-3xl text-foreground">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg font-medium">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 text-lg p-4 h-auto"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-lg font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 text-lg p-4 h-auto"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-lg font-medium">
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2 text-lg p-4 h-auto"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-lg font-medium">
                    What can we help you with?
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-2 text-lg p-4 h-auto"
                    placeholder="Email help, computer problems, etc."
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-lg font-medium">
                    Tell us more *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 text-lg p-4 min-h-32"
                    placeholder="Please describe your question or the help you need. Don't worry about using technical terms - just explain it in your own words."
                    required
                  />
                </div>

                <Button type="submit" className="senior-button w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl lg:text-2xl text-foreground">
                  Other Ways to Reach Us
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    📞 Phone Support
                  </h4>
                  <p className="senior-text text-muted-foreground mb-2">
                    Call us for immediate assistance
                  </p>
                  <p className="text-xl font-semibold text-primary">
                    (555) 123-HELP
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Monday-Friday, 9 AM - 5 PM
                  </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    📧 Email Support
                  </h4>
                  <p className="senior-text text-muted-foreground mb-2">
                    Send us an email anytime
                  </p>
                  <p className="text-lg font-semibold text-primary">
                    help@seniortechhelp.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We respond within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-accent/5">
              <CardHeader>
                <CardTitle className="text-xl lg:text-2xl text-foreground">
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✓</span>
                    <span className="senior-text">Friendly, patient support from real people</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✓</span>
                    <span className="senior-text">No question is too simple or basic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✓</span>
                    <span className="senior-text">Step-by-step guidance at your pace</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✓</span>
                    <span className="senior-text">Follow-up to make sure you're all set</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Resources */}
        <div className="mt-12">
          <Card className="border-2 border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="text-2xl text-destructive">
                🚨 Emergency Security Issues
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="senior-text text-foreground mb-4">
                If you believe your accounts have been compromised or you're dealing with 
                an urgent security issue:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="destructive" className="senior-button">
                  Call Us Immediately
                </Button>
                <Button variant="outline" className="senior-button">
                  <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer">
                    Report to FTC
                  </a>
                </Button>
                <Button variant="outline" className="senior-button">
                  Contact Your Bank
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
