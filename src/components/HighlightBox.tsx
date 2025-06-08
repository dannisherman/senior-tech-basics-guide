
interface HighlightBoxProps {
  children: React.ReactNode;
  type?: 'click' | 'important' | 'warning' | 'tip';
  className?: string;
}

const HighlightBox = ({ children, type = 'click', className = "" }: HighlightBoxProps) => {
  const typeStyles = {
    click: 'bg-primary/10 border-primary border-4 border-dashed',
    important: 'bg-accent/10 border-accent border-4',
    warning: 'bg-destructive/10 border-destructive border-4',
    tip: 'bg-secondary border-muted-foreground border-2'
  };

  const typeLabels = {
    click: '👆 Click Here',
    important: '⭐ Important',
    warning: '⚠️ Warning',
    tip: '💡 Tip'
  };

  return (
    <div className={`${typeStyles[type]} rounded-lg p-6 relative ${className}`}>
      <div className="absolute -top-3 left-4 bg-background px-3 py-1 rounded-full text-lg font-semibold">
        {typeLabels[type]}
      </div>
      <div className="mt-2">
        {children}
      </div>
    </div>
  );
};

export default HighlightBox;
