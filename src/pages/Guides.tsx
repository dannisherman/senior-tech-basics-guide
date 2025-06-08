
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import ExpandableImage from '@/components/ExpandableImage';
import HighlightBox from '@/components/HighlightBox';
import StepInstruction from '@/components/StepInstruction';
import { ChevronDown, ChevronUp, Mail, Video, Users, Search, CreditCard, Download } from 'lucide-react';

const Guides = () => {
  const [openGuide, setOpenGuide] = useState<number | null>(null);

  const guides = [
    {
      title: 'How to Send an Email',
      difficulty: 'Beginner',
      time: '10 minutes',
      icon: Mail,
      steps: [
        {
          icon: Search,
          title: 'Open your email program',
          description: 'Look for Gmail, Outlook, or Yahoo Mail on your computer or phone. It might be in your browser or as an app.',
          highlight: true
        },
        {
          icon: Mail,
          title: 'Click "Compose" or "New Email"',
          description: 'This button is usually prominently displayed. It might say "Compose", "New", or have a plus (+) sign.',
          highlight: true
        },
        {
          icon: Users,
          title: 'Type the email address',
          description: 'In the "To" field, carefully type the email address of the person you want to send to. Double-check for typos!'
        },
        {
          icon: Mail,
          title: 'Add a subject line',
          description: 'Write a brief description of your message in the subject field. This helps the recipient know what your email is about.'
        }
      ]
    },
    {
      title: 'Using Zoom for Video Calls',
      difficulty: 'Beginner',
      time: '15 minutes',
      icon: Video,
      steps: [
        {
          icon: Download,
          title: 'Download the Zoom app',
          description: 'Go to zoom.us or your app store and download the free Zoom app. Install it on your device.',
          highlight: true
        },
        {
          icon: Users,
          title: 'Create a free account',
          description: 'Use your email address to create an account. Choose a password you can remember.'
        },
        {
          icon: Video,
          title: 'Join a meeting',
          description: 'Click the meeting link someone sent you, or enter the meeting ID in the Zoom app.',
          highlight: true
        }
      ]
    }
  ];

  const toggleGuide = (index: number) => {
    setOpenGuide(openGuide === index ? null : index);
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Step-by-Step Guides
          </h1>
          <p className="senior-text text-muted-foreground max-w-3xl mx-auto">
            Follow these detailed instructions with large pictures and clear highlights. 
            Click on any guide to see the visual steps.
          </p>
        </div>

        {/* Visual Guide Example */}
        <div className="mb-12">
          <HighlightBox type="tip" className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">🖼️ How to Use These Guides</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="senior-text mb-4">
                  • Large pictures you can click to zoom in
                </p>
                <p className="senior-text mb-4">
                  • Colored boxes show you exactly what to click
                </p>
                <p className="senior-text">
                  • Icons help you find the right buttons
                </p>
              </div>
              <ExpandableImage
                src="/placeholder.svg?height=200&width=300"
                alt="Example of clickable interface"
                caption="Example: Click here to see it bigger!"
                className="max-w-sm"
              />
            </div>
          </HighlightBox>
        </div>

        <div className="space-y-6">
          {guides.map((guide, index) => {
            const GuideIcon = guide.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleGuide(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                        <GuideIcon className="w-8 h-8" />
                      </div>
                      <div>
                        <CardTitle className="text-xl lg:text-2xl text-foreground mb-2">
                          {guide.title}
                        </CardTitle>
                        <div className="flex gap-4 text-sm lg:text-base text-muted-foreground">
                          <span className="bg-secondary px-3 py-1 rounded-full">
                            {guide.difficulty}
                          </span>
                          <span className="bg-secondary px-3 py-1 rounded-full">
                            ⏱️ {guide.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      {openGuide === index ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </Button>
                  </div>
                </CardHeader>

                {openGuide === index && (
                  <CardContent className="p-6 pt-0">
                    <div className="space-y-6">
                      <HighlightBox type="important">
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          📝 Before You Start
                        </h4>
                        <p className="senior-text">
                          Take your time with each step. You can always go back and try again. 
                          The pictures will help show you exactly what to look for!
                        </p>
                      </HighlightBox>

                      {guide.steps.map((step, stepIndex) => (
                        <StepInstruction
                          key={stepIndex}
                          stepNumber={stepIndex + 1}
                          icon={step.icon}
                          title={step.title}
                          description={step.description}
                          highlight={step.highlight}
                        />
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <HighlightBox type="tip">
                        <h5 className="text-lg font-semibold text-foreground mb-2">
                          💡 Helpful Tip
                        </h5>
                        <p className="senior-text text-muted-foreground">
                          Don't rush! Take your time with each step. If something doesn't work as expected, 
                          try again or ask someone for help. Practice makes perfect!
                        </p>
                      </HighlightBox>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-muted rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Want Printable Versions?
            </h3>
            <p className="senior-text text-muted-foreground mb-6">
              All of our guides are available as easy-to-print PDF files with large text and pictures. 
              Keep them handy next to your computer!
            </p>
            <Button className="senior-button">
              Download PDF Guides
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Guides;
