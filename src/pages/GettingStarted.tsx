
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';

const GettingStarted = () => {
  const topics = [
    {
      title: 'What is a Computer?',
      content: [
        'A computer is an electronic device that can store information and follow instructions.',
        'Desktop computers sit on a desk and have a separate screen, keyboard, and mouse.',
        'Laptop computers are portable and have everything built-in.',
        'Tablets and smartphones are also types of computers that you can hold in your hands.'
      ]
    },
    {
      title: 'What is the Internet?',
      content: [
        'The internet is like a giant library that connects computers around the world.',
        'It lets you send messages, look up information, and watch videos.',
        'You need an internet connection to use websites like Google or Facebook.',
        'Think of it as a telephone line, but for computers to talk to each other.'
      ]
    },
    {
      title: 'Understanding Your Mouse and Keyboard',
      content: [
        'The mouse is the small device you move around to point at things on the screen.',
        'Left-click means pressing the left button once to select something.',
        'Right-click means pressing the right button to see more options.',
        'The keyboard is used to type letters, numbers, and symbols.'
      ]
    },
    {
      title: 'Turning Your Device On and Off',
      content: [
        'Look for the power button - it usually has a circle with a line through the top.',
        'Press it once to turn your computer on. Wait for it to start up completely.',
        'To turn off safely, click the Start button and choose "Shut Down".',
        'Never just pull the power cord - always shut down properly to avoid problems.'
      ]
    },
    {
      title: 'What is a Browser?',
      content: [
        'A browser is a program that lets you visit websites on the internet.',
        'Common browsers include Chrome, Firefox, Safari, and Edge.',
        'The address bar at the top is where you type website addresses.',
        'Bookmarks let you save your favorite websites for easy access later.'
      ]
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
            Take your time reading through each section.
          </p>
        </div>

        <div className="space-y-8">
          {topics.map((topic, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader className="bg-muted/50">
                <CardTitle className="text-2xl lg:text-3xl text-foreground flex items-center">
                  <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    {index + 1}
                  </span>
                  {topic.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {topic.content.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start">
                      <div className="w-3 h-3 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <p className="senior-text leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary/10 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Remember: Take Your Time!
            </h3>
            <p className="senior-text text-muted-foreground">
              Learning technology is like learning to drive - it takes practice. Don't be afraid to 
              ask questions or make mistakes. That's how we all learn!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GettingStarted;
