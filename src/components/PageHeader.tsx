interface PageHeaderProps {
  section?: string;
  title: string;
  description?: string;
}

const PageHeader = ({ section, title, description }: PageHeaderProps) => {
  return (
    <header className="mb-10 animate-fade-in">
      {section && (
        <div className="section-header">{section}</div>
      )}
      <h1 className="text-3xl md:text-4xl font-mono font-semibold text-foreground mb-4 tracking-tight">
        {title}
      </h1>
      {description && (
        <p className="doc-prose text-lg max-w-2xl">
          {description}
        </p>
      )}
    </header>
  );
};

export default PageHeader;
