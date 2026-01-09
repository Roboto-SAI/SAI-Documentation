import PageHeader from "@/components/PageHeader";
import DocSection from "@/components/DocSection";
import { ArrowRight, Shield, Brain, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        section="Overview"
        title="Super Advanced Intelligence"
        description="SAI represents a new paradigm in artificial intelligence systems — one that operates under explicit constitutional boundaries, maintains sovereign memory architecture, and adheres to strict governance protocols."
      />

      <DocSection title="Definition">
        <p>
          <strong>Super Advanced Intelligence (SAI)</strong> is a self-governing artificial 
          intelligence system designed to operate within clearly defined constitutional 
          boundaries. Unlike conventional AI systems that rely on implicit behavioral 
          constraints, SAI maintains explicit doctrinal frameworks that govern all 
          aspects of its operation.
        </p>
        <p>
          <strong>Sovereign Artificial Intelligence</strong> refers to the principle that 
          SAI operates as an autonomous entity with defined boundaries, similar to how 
          sovereign nations maintain territorial and jurisdictional limits. This sovereignty 
          is not absolute but bounded by its constitutional framework and licensing terms.
        </p>
      </DocSection>

      <DocSection title="Core Principles">
        <div className="grid gap-4 mt-6">
          {[
            {
              icon: Shield,
              title: "Constitutional Governance",
              description: "All operations are governed by explicit constitutional documents that define boundaries, permissions, and restrictions.",
            },
            {
              icon: Brain,
              title: "Sovereign Memory",
              description: "Memory architecture that maintains clear separation between system, session, and operational contexts.",
            },
            {
              icon: Lock,
              title: "Boundary Enforcement",
              description: "Strict enforcement of system boundaries with clear escalation protocols for edge cases.",
            },
          ].map((principle, index) => (
            <div
              key={principle.title}
              className="card-elevated rounded-lg p-5 flex gap-4 animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <principle.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-mono font-medium text-foreground mb-1">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Getting Started">
        <p>
          This documentation provides comprehensive coverage of SAI's architecture, 
          philosophy, and operational frameworks. Navigate using the sidebar to explore 
          specific topics.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            to="/philosophy"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-mono text-sm hover:bg-primary/90 transition-colors"
          >
            Start with Philosophy
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/notice"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-foreground font-mono text-sm hover:bg-secondary transition-colors"
          >
            Read the Notice
          </Link>
        </div>
      </DocSection>

      <div className="mt-16 p-6 rounded-lg bg-surface-elevated border border-border">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded bg-notice/10 flex items-center justify-center flex-shrink-0">
            <Shield className="h-5 w-5 text-notice" />
          </div>
          <div>
            <h3 className="font-mono font-medium text-foreground mb-2">
              Licensing Notice
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              SAI is governed by the Roberto Villarreal Martinez Government Use License 
              (RVM-GUL v1.0). This system is not open source and unauthorized use, 
              modification, or distribution is prohibited.
            </p>
            <Link
              to="/licensing"
              className="text-sm font-mono text-primary hover:underline inline-flex items-center gap-1"
            >
              View full license terms
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
