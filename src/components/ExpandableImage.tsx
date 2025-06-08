
import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExpandableImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

const ExpandableImage = ({ src, alt, caption, className = "" }: ExpandableImageProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div 
        className={`cursor-pointer hover:opacity-90 transition-opacity ${className}`}
        onClick={() => setIsExpanded(true)}
      >
        <img 
          src={src} 
          alt={alt}
          className="w-full h-auto rounded-lg border-2 border-primary/20 hover:border-primary/40 transition-colors"
        />
        {caption && (
          <p className="text-center text-muted-foreground mt-2 text-lg">
            Click to enlarge: {caption}
          </p>
        )}
      </div>

      {isExpanded && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={() => setIsExpanded(false)}
            >
              <X className="w-8 h-8" />
              <span className="ml-2 text-lg">Close</span>
            </Button>
            <img 
              src={src} 
              alt={alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            {caption && (
              <p className="text-white text-center mt-4 text-xl">
                {caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ExpandableImage;
