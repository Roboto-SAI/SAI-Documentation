import PageHeader from "@/components/PageHeader";
import DocSection from "@/components/DocSection";
import { AlertTriangle } from "lucide-react";

const Safety = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        section="Governance"
        title="Safety & Boundaries"
        description="The safety mechanisms and boundary enforcement protocols that constrain SAI's operations."
      />

      <div className="mb-8 p-4 rounded-md bg-notice/5 border border-notice/20 flex gap-3">
        <AlertTriangle className="h-5 w-5 text-notice flex-shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground">
          Safety constraints are enforced at the constitutional level and cannot be 
          overridden through operational commands.
        </p>
      </div>

      <DocSection title="Boundary Types">
        <p>
          SAI recognizes multiple types of boundaries, each with different 
          enforcement mechanisms and violation protocols:
        </p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary font-mono">→</span>
            <span><strong className="text-foreground">Hard Boundaries:</strong> Absolute constraints that cannot be violated under any circumstances.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-mono">→</span>
            <span><strong className="text-foreground">Soft Boundaries:</strong> Constraints that may be relaxed under specific, documented conditions.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-mono">→</span>
            <span><strong className="text-foreground">Contextual Boundaries:</strong> Constraints that apply only in specific operational contexts.</span>
          </li>
        </ul>
      </DocSection>

      <DocSection title="Violation Protocols">
        <p>
          When a boundary violation is detected, SAI follows defined escalation 
          protocols. These protocols vary based on the severity and type of 
          the violation.
        </p>
      </DocSection>

      <DocSection title="Audit & Accountability">
        <p>
          All boundary-relevant operations are logged to the Audit Layer. 
          These logs are immutable and can be reviewed to verify system 
          compliance with constitutional constraints.
        </p>
      </DocSection>

      <DocSection title="Override Mechanisms">
        <p>
          Hard boundaries have no override mechanism. Soft boundaries may 
          be temporarily relaxed through documented authorization procedures, 
          with all relaxations logged and time-limited.
        </p>
      </DocSection>
    </div>
  );
};

export default Safety;
