import PageHeader from "@/components/PageHeader";
import DocSection from "@/components/DocSection";

const Architecture = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        section="Technical"
        title="Architecture"
        description="The system architecture of SAI, including component design, interfaces, and integration patterns."
      />

      <DocSection title="System Overview">
        <p>
          SAI's architecture is designed around the principle of separation of concerns. 
          Core system components are isolated from operational components, with well-defined 
          interfaces governing all interactions.
        </p>
        <div className="mt-6 p-4 rounded-md bg-secondary/50 border border-border font-mono text-sm">
          <div className="text-muted-foreground mb-2">// System Layers</div>
          <div className="space-y-1">
            <div><span className="text-primary">├──</span> Constitutional Layer</div>
            <div><span className="text-primary">├──</span> Memory Management Layer</div>
            <div><span className="text-primary">├──</span> Processing Layer</div>
            <div><span className="text-primary">├──</span> Interface Layer</div>
            <div><span className="text-primary">└──</span> Audit Layer</div>
          </div>
        </div>
      </DocSection>

      <DocSection title="Constitutional Layer">
        <p>
          The Constitutional Layer is the foundational component that governs all 
          other system operations. It contains the immutable rules and constraints 
          that define system behavior.
        </p>
      </DocSection>

      <DocSection title="Interface Contracts">
        <p>
          All component interactions are governed by explicit interface contracts. 
          These contracts define the expected inputs, outputs, and side effects 
          of each interface, enabling verification and auditing.
        </p>
      </DocSection>

      <DocSection title="Extensibility">
        <p>
          The architecture supports controlled extensibility through defined 
          extension points. New capabilities can be added without modifying 
          core system components, provided they comply with constitutional 
          constraints.
        </p>
      </DocSection>
    </div>
  );
};

export default Architecture;
