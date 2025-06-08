
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Safety = () => {
  const safetyTopics = [
    {
      title: 'Recognizing Scams and Phishing',
      warning: '🚨 Very Important',
      content: [
        'Legitimate companies will NEVER ask for passwords or personal info via email',
        'Be suspicious of urgent messages claiming your account will be closed',
        'Check the sender\'s email address carefully - scammers use fake addresses',
        'When in doubt, call the company directly using a number you trust',
        'Never click links in suspicious emails - type the website address yourself'
      ]
    },
    {
      title: 'Creating Strong Passwords',
      warning: '🔐 Essential Security',
      content: [
        'Use at least 12 characters with a mix of letters, numbers, and symbols',
        'Never use the same password for multiple important accounts',
        'Avoid obvious information like birthdays, names, or "password123"',
        'Consider using a password manager to create and store strong passwords',
        'Change passwords immediately if you suspect they\'ve been compromised'
      ]
    },
    {
      title: 'Safe Online Shopping',
      warning: '💳 Protect Your Money',
      content: [
        'Only shop on websites that start with "https://" (note the "s")',
        'Look for a small lock icon in your browser\'s address bar',
        'Use credit cards instead of debit cards for better fraud protection',
        'Shop only on well-known websites or those recommended by trusted friends',
        'Be wary of deals that seem too good to be true - they usually are'
      ]
    },
    {
      title: 'Dealing with Pop-ups and Malware',
      warning: '⚠️ Stay Protected',
      content: [
        'Never click on pop-ups claiming your computer is infected',
        'Real antivirus software doesn\'t advertise through pop-ups',
        'Close suspicious pop-ups by clicking the X in the corner',
        'If you can\'t close a pop-up, close your entire browser',
        'Keep your computer updated with the latest security patches'
      ]
    }
  ];

  const warningSigns = [
    'Urgent language like "Act now!" or "Limited time offer!"',
    'Requests for personal information via email or phone',
    'Poor spelling and grammar in official-looking messages',
    'Unexpected prizes or lottery winnings',
    'Requests to send money or gift cards',
    'Pressure to make quick decisions'
  ];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Online Safety Guide
          </h1>
          <p className="senior-text text-muted-foreground max-w-3xl mx-auto">
            Stay safe and secure while enjoying all the internet has to offer. 
            Knowledge is your best protection against online threats.
          </p>
        </div>

        {/* Warning Signs Alert */}
        <div className="bg-destructive/10 border-2 border-destructive/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-destructive mb-4 flex items-center">
            🚨 Warning Signs of Scams
          </h2>
          <p className="senior-text text-foreground mb-6">
            If you encounter any of these warning signs, STOP and be extra careful:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {warningSigns.map((sign, index) => (
              <div key={index} className="flex items-start">
                <span className="text-destructive text-xl mr-3">⚠️</span>
                <span className="senior-text">{sign}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Topics */}
        <div className="space-y-8">
          {safetyTopics.map((topic, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader className="bg-muted/50">
                <CardTitle className="text-2xl lg:text-3xl text-foreground">
                  {topic.title}
                  <span className="block text-lg text-accent font-semibold mt-2">
                    {topic.warning}
                  </span>
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

        {/* What to Do If You've Been Scammed */}
        <div className="mt-12">
          <Card className="border-2 border-destructive/50 bg-destructive/5">
            <CardHeader>
              <CardTitle className="text-2xl lg:text-3xl text-destructive">
                What to Do If You Think You've Been Scammed
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Immediate Actions:
                  </h4>
                  <ul className="space-y-2">
                    <li className="senior-text">• Contact your bank or credit card company immediately</li>
                    <li className="senior-text">• Change all passwords for important accounts</li>
                    <li className="senior-text">• Save all evidence (emails, texts, receipts)</li>
                    <li className="senior-text">• Don't be embarrassed - it happens to many people</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Report the Scam:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-semibold mb-2">FTC Fraud Report</h5>
                      <p className="text-sm text-muted-foreground mb-2">Report scams to help protect others</p>
                      <Button variant="outline" className="w-full">
                        <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer">
                          Visit FTC Report Site
                        </a>
                      </Button>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-semibold mb-2">Local Police</h5>
                      <p className="text-sm text-muted-foreground mb-2">File a report with local authorities</p>
                      <Button variant="outline" className="w-full">
                        Call Non-Emergency Line
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 text-center">
          <div className="bg-primary/10 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Need Help Right Now?
            </h3>
            <p className="senior-text text-muted-foreground mb-6">
              If you're dealing with a security issue or think you've been targeted by a scam, 
              don't hesitate to reach out for help.
            </p>
            <Button asChild className="senior-button bg-accent hover:bg-accent/90">
              <a href="/contact">Contact Our Support Team</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Safety;
