
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Guides = () => {
  const [openGuide, setOpenGuide] = useState<number | null>(null);

  const guides = [
    {
      title: 'How to Send an Email',
      difficulty: 'Beginner',
      time: '10 minutes',
      steps: [
        'Open your email program (Gmail, Outlook, Yahoo Mail)',
        'Click the "Compose" or "New Email" button',
        'Type the email address of the person you want to send to',
        'Add a subject line that describes your message',
        'Type your message in the large text box',
        'Check your spelling and make sure everything looks right',
        'Click "Send" to deliver your email'
      ]
    },
    {
      title: 'Using Zoom for Video Calls',
      difficulty: 'Beginner',
      time: '15 minutes',
      steps: [
        'Download the Zoom app from zoom.us or your app store',
        'Create a free account with your email address',
        'To join a meeting, click the meeting link someone sent you',
        'Allow Zoom to use your camera and microphone when asked',
        'You can mute yourself by clicking the microphone button',
        'Turn your video on/off with the camera button',
        'Click "Leave Meeting" when you\'re done'
      ]
    },
    {
      title: 'Creating a Facebook Account',
      difficulty: 'Beginner',
      time: '20 minutes',
      steps: [
        'Go to facebook.com in your web browser',
        'Click "Create New Account"',
        'Enter your first and last name',
        'Use an email address you check regularly',
        'Choose a strong password (at least 8 characters)',
        'Enter your birthday and gender',
        'Click "Sign Up" and follow the instructions',
        'Verify your email address when Facebook sends you a message'
      ]
    },
    {
      title: 'Searching on Google',
      difficulty: 'Beginner',
      time: '5 minutes',
      steps: [
        'Open your web browser',
        'Go to google.com',
        'Click in the search box',
        'Type what you want to find (like "weather today")',
        'Press Enter or click the "Google Search" button',
        'Look through the results - the most relevant are at the top',
        'Click on a blue link to visit that website'
      ]
    },
    {
      title: 'Safe Online Banking',
      difficulty: 'Intermediate',
      time: '25 minutes',
      steps: [
        'Always type your bank\'s website address directly in the browser',
        'Look for "https://" and a lock icon before entering any information',
        'Never click on links in emails claiming to be from your bank',
        'Use a strong, unique password for your banking account',
        'Log out completely when you\'re finished',
        'Never do banking on public Wi-Fi (like at coffee shops)',
        'Check your statements regularly for any unusual activity'
      ]
    },
    {
      title: 'Downloading an App',
      difficulty: 'Beginner',
      time: '10 minutes',
      steps: [
        'On iPhone: Open the "App Store" app',
        'On Android: Open the "Google Play Store" app',
        'Use the search bar to find the app you want',
        'Tap on the correct app from the search results',
        'Read the description and reviews to make sure it\'s what you want',
        'Tap "Get" (iPhone) or "Install" (Android)',
        'Wait for the app to download and install automatically'
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
            Follow these detailed instructions to learn new skills. Click on any guide to see the steps.
          </p>
        </div>

        <div className="space-y-6">
          {guides.map((guide, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader 
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => toggleGuide(index)}
              >
                <div className="flex items-center justify-between">
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
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Follow these steps:
                    </h4>
                    {guide.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-4 text-lg font-bold flex-shrink-0">
                          {stepIndex + 1}
                        </div>
                        <p className="senior-text leading-relaxed pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                    <h5 className="text-lg font-semibold text-foreground mb-2">
                      💡 Helpful Tip
                    </h5>
                    <p className="senior-text text-muted-foreground">
                      Don't rush! Take your time with each step. If something doesn't work as expected, 
                      try again or ask someone for help. Practice makes perfect!
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-muted rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Want Printable Versions?
            </h3>
            <p className="senior-text text-muted-foreground mb-6">
              All of our guides are available as easy-to-print PDF files. 
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
