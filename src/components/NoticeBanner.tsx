import { AlertTriangle } from "lucide-react";

const NoticeBanner = () => {
  return (
    <div className="notice-banner py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm font-mono">
        <AlertTriangle className="h-4 w-4 flex-shrink-0" />
        <span className="font-medium">NOTICE:</span>
        <span className="hidden sm:inline">
          This system is not open source. Governed by the Roberto Villarreal Martinez Government Use License (RVM-GUL v1.0).
        </span>
        <span className="sm:hidden">
          Governed by RVM-GUL v1.0
        </span>
      </div>
    </div>
  );
};

export default NoticeBanner;
