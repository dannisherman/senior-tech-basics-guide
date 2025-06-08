
import { LucideIcon } from 'lucide-react';

interface StepInstructionProps {
  stepNumber: number;
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  imageCaption?: string;
  highlight?: boolean;
}

const StepInstruction = ({ 
  stepNumber, 
  icon: Icon, 
  title, 
  description, 
  image, 
  imageCaption,
  highlight = false 
}: StepInstructionProps) => {
  const content = (
    <div className="flex items-start space-x-6 p-6">
      {/* Step Number and Icon */}
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-2">
          {stepNumber}
        </div>
        <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        <p className="senior-text leading-relaxed text-muted-foreground mb-4">
          {description}
        </p>
        
        {image && (
          <div className="mt-4">
            <img 
              src={image} 
              alt={imageCaption || title}
              className="w-full max-w-md h-auto rounded-lg border-2 border-border"
            />
            {imageCaption && (
              <p className="text-center text-muted-foreground mt-2 text-lg">
                {imageCaption}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );

  if (highlight) {
    return (
      <div className="bg-primary/10 border-primary border-4 border-dashed rounded-lg relative mb-6">
        <div className="absolute -top-3 left-4 bg-background px-3 py-1 rounded-full text-lg font-semibold text-primary">
          👆 Click This Area
        </div>
        {content}
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border-2 hover:border-primary transition-colors mb-6">
      {content}
    </div>
  );
};

export default StepInstruction;
