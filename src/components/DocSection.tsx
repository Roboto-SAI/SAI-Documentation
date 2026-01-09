import { cn } from "@/lib/utils";

interface DocSectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const DocSection = ({ id, title, children, className }: DocSectionProps) => {
  return (
    <section id={id} className={cn("mb-12", className)}>
      {title && (
        <h2 className="text-xl font-mono font-medium text-foreground mb-4 flex items-center gap-2">
          <span className="text-primary">#</span>
          {title}
        </h2>
      )}
      <div className="doc-prose space-y-4">
        {children}
      </div>
    </section>
  );
};

export default DocSection;
