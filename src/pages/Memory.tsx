import PageHeader from "@/components/PageHeader";
import DocSection from "@/components/DocSection";

const Memory = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        section="Technical"
        title="Memory Model"
        description="The memory architecture that enables SAI to maintain context, identity, and operational state across interactions."
      />

      <DocSection title="Memory Hierarchy">
        <p>
          SAI implements a hierarchical memory model with distinct layers serving 
          different purposes. Each layer has its own persistence characteristics, 
          access patterns, and governance rules.
        </p>
        <div className="mt-6 space-y-3">
          {[
            { name: "System Memory", desc: "Immutable constitutional documents and core identity", persist: "Permanent" },
            { name: "Session Memory", desc: "Context specific to the current interaction session", persist: "Session-scoped" },
            { name: "Working Memory", desc: "Temporary state for current task processing", persist: "Ephemeral" },
            { name: "Archive Memory", desc: "Historical records and audit logs", persist: "Long-term" },
          ].map((layer) => (
            <div key={layer.name} className="p-4 rounded-md bg-secondary/50 border border-border">
              <div className="flex justify-between items-start mb-1">
                <span className="font-mono font-medium text-foreground">{layer.name}</span>
                <span className="text-xs font-mono text-muted-foreground border border-border rounded px-2 py-0.5">
                  {layer.persist}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{layer.desc}</p>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Context Isolation">
        <p>
          Memory contexts are strictly isolated to prevent information leakage 
          between sessions or between system and operational layers. This isolation 
          is enforced at the architectural level.
        </p>
      </DocSection>

      <DocSection title="Persistence Rules">
        <p>
          Each memory layer has explicit rules governing what can be persisted, 
          for how long, and under what conditions. These rules are defined in 
          the constitutional documents and enforced by the Memory Management Layer.
        </p>
      </DocSection>
    </div>
  );
};

export default Memory;
