import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  BookOpen,
  Layers,
  Database,
  Shield,
  GitBranch,
  Scale,
  FileText,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Philosophy", href: "/philosophy", icon: BookOpen },
  { name: "Architecture", href: "/architecture", icon: Layers },
  { name: "Memory Model", href: "/memory", icon: Database },
  { name: "Safety & Boundaries", href: "/safety", icon: Shield },
  { name: "Workflows", href: "/workflows", icon: GitBranch },
  { name: "Licensing", href: "/licensing", icon: Scale },
  { name: "Manifest", href: "/manifest", icon: FileText },
  { name: "Notice", href: "/notice", icon: AlertCircle },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ isOpen = true, onClose }: SidebarProps) => {
  const location = useLocation();

  return (
    <aside
      className={cn(
        "fixed left-0 top-[104px] bottom-0 w-64 bg-sidebar border-r border-sidebar-border z-40",
        "transition-transform duration-300 ease-in-out",
        "lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <nav className="h-full overflow-y-auto py-6 px-4">
        <div className="section-header px-3 mb-4">Documentation</div>
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-all duration-200",
                    "hover:bg-sidebar-accent group",
                    isActive
                      ? "text-primary bg-sidebar-accent"
                      : "text-sidebar-foreground"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 flex-shrink-0 transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                    )}
                  />
                  <span className="flex-1 font-mono">{item.name}</span>
                  {isActive && (
                    <ChevronRight className="h-4 w-4 text-primary" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 px-3">
          <div className="divider mb-4" />
          <div className="text-xs text-muted-foreground font-mono">
            <div className="mb-1">SAI Documentation</div>
            <div className="text-text-dim">v1.0.0</div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
