
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import ExpandableImage from '@/components/ExpandableImage';
import HighlightBox from '@/components/HighlightBox';
import { Monitor, Globe, Mouse, Power, Search } from 'lucide-react';

const GettingStarted = () => {
  const topics = [
    {
      title: 'What is a Computer?',
      icon: Monitor,
      content: [
        'A computer is an electronic device that can store information and follow instructions.',
        'Desktop computers sit on a desk and have a separate screen, keyboard, and mouse.',
        'Laptop computers are portable and have everything built-in.',
        'Tablets and smartphones are also types of computers that you can hold in your hands.'
      ],
      image: '/placeholder.svg?height=300&width=400',
      imageCaption: 'Different types of computers - click to see larger!'
    },
    {
      title: 'What is the Internet?',
      icon: Globe,
      content: [
        'The internet is like a giant library that connects computers around the world.',
        'It lets you send messages, look up information, and watch videos.',
        'You need an internet connection to use websites like Google or Facebook.',
        'Think of it as a telephone line, but for computers to talk to each other.'
      ],
      image: '/placeholder.svg?height=300&width=400',
      imageCaption: 'The internet connects computers worldwide'
    },
    {
      title: 'Understanding Your Mouse and Keyboard',
      icon: Mouse,
      content: [
        'The mouse is the small device you move around to point at things on the screen.',
        'Left-click means pressing the left button once to select something.',
        'Right-click means pressing the right button to see more options.',
        'The keyboard is used to type letters, numbers, and symbols.'
      ],
      image: '/placeholder.svg?height=300&width=400',
      imageCaption: 'Mouse and keyboard basics'
    },
    {
      title: 'Turning Your Device On and Off',
      icon: Power,
      content: [
        'Look for the power button - it usually has a circle with a line through the top.',
        'Press it once to turn your computer on. Wait for it to start up completely.',
        'To turn off safely, click the Start button and choose "Shut Down".',
        'Never just pull the power cord - always shut down properly to avoid problems.'
      ],
      image: '/placeholder.svg?height=300&width=400',
      imageCaption: 'Finding the power button'
    },
    {
      title: 'What is a Browser?',
      icon: Search,
      content: [
        'A browser is a program that lets you visit websites on the internet.',
        'Common browsers include Chrome, Firefox, Safari, and Edge.',
        'The address bar at the top is where you type website addresses.',
        'Bookmarks let you save your favorite websites for easy access later.'
      ],
      image: '/placeholder.svg?height=300&width=400',
      imageCaption: 'A web browser showing the address bar'
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Getting Started with Technology
          </h1>
          <p className="senior-text text-muted-foreground max-w-3xl mx-auto">
            New to computers? Don't worry! We'll start with the very basics. 
            Take your time reading through each section and click the pictures to see them bigger.
          </p>
        </div>

        <HighlightBox type="tip" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">🖼️ How to Use This Guide</h3>
          <p className="senior-text mb-4">
            • All pictures can be clicked to make them bigger and easier to see
          </p>
          <p className="senior-text mb-4">
            • Look for colored boxes that highlight important information
          </p>
          <p className="senior-text">
            • Icons next to each section help you know what you're learning about
          </p>
        </HighlightBox>

        <div className="space-y-8">
          {topics.map((topic, index) => {
            const TopicIcon = topic.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader className="bg-muted/50">
                  <CardTitle className="text-2xl lg:text-3xl text-foreground flex items-center">
                    <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                      {index + 1}
                    </span>
                    <TopicIcon className="w-8 h-8 mr-4 text-accent" />
                    {topic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      {topic.content.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start">
                          <div className="w-3 h-3 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                          <p className="senior-text leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                    
                    {topic.image && (
                      <div>
                        <ExpandableImage
                          src={topic.image}
                          alt={topic.title}
                          caption={topic.imageCaption}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <HighlightBox type="important">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Remember: Take Your Time!
            </h3>
            <p className="senior-text text-muted-foreground">
              Learning technology is like learning to drive - it takes practice. Don't be afraid to 
              ask questions or make mistakes. That's how we all learn! Click on pictures to see them bigger, 
              and don't hesitate to read each section multiple times.
            </p>
          </HighlightBox>
        </div>
      </div>
    </Layout>
  );
};

export default GettingStarted;
