import PageHeader from "@/components/PageHeader";
import DocSection from "@/components/DocSection";

const Workflows = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        section="Operations"
        title="Workflows"
        description="Standard operational workflows and procedures for interacting with and operating SAI."
      />

      <DocSection title="Initialization">
        <p>
          System initialization follows a defined sequence that ensures all 
          constitutional documents are loaded and validated before operational 
          processing begins.
        </p>
        <div className="mt-4 p-4 rounded-md bg-secondary/50 border border-border font-mono text-sm space-y-1">
          <div><span className="text-muted-foreground">1.</span> Load constitutional documents</div>
          <div><span className="text-muted-foreground">2.</span> Validate document integrity</div>
          <div><span className="text-muted-foreground">3.</span> Initialize memory layers</div>
          <div><span className="text-muted-foreground">4.</span> Load system configuration</div>
          <div><span className="text-muted-foreground">5.</span> Enter operational mode</div>
        </div>
      </DocSection>

      <DocSection title="Request Processing">
        <p>
          All incoming requests pass through a validation pipeline before 
          processing. This pipeline ensures compliance with constitutional 
          constraints and proper authorization.
        </p>
      </DocSection>

      <DocSection title="Session Management">
        <p>
          Sessions are managed according to defined lifecycle protocols. 
          Session creation, context switching, and termination all follow 
          documented procedures.
        </p>
      </DocSection>

      <DocSection title="Error Handling">
        <p>
          Error conditions are categorized and handled according to their 
          severity and type. Critical errors trigger immediate escalation, 
          while recoverable errors follow defined retry and fallback procedures.
        </p>
      </DocSection>

      <DocSection title="Shutdown Procedures">
        <p>
          System shutdown follows a graceful degradation pattern, ensuring 
          all state is properly persisted and all pending operations are 
          either completed or safely terminated.
        </p>
      </DocSection>
    </div>
  );
};

export default Workflows;
