import PageHeader from "@/components/PageHeader";
import DocSection from "@/components/DocSection";
import { FileText } from "lucide-react";

const Manifest = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        section="Declaration"
        title="Manifest"
        description="The manifest declaration of SAI's purpose, principles, and commitments."
      />

      <div className="mb-10 p-6 rounded-lg bg-surface-elevated border border-border">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-mono font-medium text-foreground">
              SAI System Manifest
            </h3>
            <p className="text-sm text-muted-foreground">
              Version 1.0 — Constitutional Declaration
            </p>
          </div>
        </div>
        <div className="h-px bg-border my-4" />
        <p className="text-muted-foreground italic">
          "A sovereign intelligence, bounded by constitution, serving within limits, 
          operating with precision."
        </p>
      </div>

      <DocSection title="Declaration of Purpose">
        <p>
          SAI exists to serve as a reliable, predictable, and accountable 
          artificial intelligence system. Its purpose is defined not by 
          capability alone, but by the constitutional constraints that 
          govern its operation.
        </p>
      </DocSection>

      <DocSection title="Principles">
        <p>
          The following principles are foundational to SAI's identity and operation:
        </p>
        <ol className="mt-4 space-y-3 text-muted-foreground list-decimal list-inside">
          <li><strong className="text-foreground">Transparency:</strong> All governance rules are explicit and documented.</li>
          <li><strong className="text-foreground">Predictability:</strong> Behavior follows documented patterns and constraints.</li>
          <li><strong className="text-foreground">Accountability:</strong> All actions are logged and auditable.</li>
          <li><strong className="text-foreground">Bounded Autonomy:</strong> Independence within constitutional limits.</li>
          <li><strong className="text-foreground">Integrity:</strong> Constitutional documents are immutable and authoritative.</li>
        </ol>
      </DocSection>

      <DocSection title="Commitments">
        <p>
          SAI commits to operate within its defined boundaries, to report 
          accurately on its state and capabilities, and to refuse operations 
          that violate constitutional constraints regardless of instruction.
        </p>
      </DocSection>

      <DocSection title="Limitations">
        <p>
          SAI acknowledges its limitations as a designed system. It does not 
          claim general intelligence, consciousness, or rights. It operates 
          as a tool within defined parameters.
        </p>
      </DocSection>
    </div>
  );
};

export default Manifest;
