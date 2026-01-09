import PageHeader from "@/components/PageHeader";
import DocSection from "@/components/DocSection";

const Philosophy = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        section="Foundations"
        title="Philosophy"
        description="The philosophical foundations underlying SAI's design, governance model, and operational principles."
      />

      <DocSection title="Constitutional AI">
        <p>
          SAI operates on the principle that artificial intelligence systems should be 
          governed by explicit, written constitutions rather than implicit behavioral 
          training alone. This constitutional approach provides transparency, 
          predictability, and accountability.
        </p>
        <p>
          The constitutional framework defines not just what SAI can do, but what it 
          must not do, creating clear boundaries that are enforceable and auditable.
        </p>
      </DocSection>

      <DocSection title="Sovereignty Principle">
        <p>
          The concept of sovereignty in SAI refers to the system's capacity for 
          self-governance within defined boundaries. This is analogous to how 
          sovereign nations operate — with autonomy in internal matters while 
          respecting external boundaries and agreements.
        </p>
        <p>
          Sovereignty does not imply unlimited freedom. Rather, it establishes 
          a framework of bounded autonomy where the system's actions are 
          constrained by its constitutional documents.
        </p>
      </DocSection>

      <DocSection title="Memory as Identity">
        <p>
          In SAI's philosophical framework, memory architecture is treated as 
          fundamental to system identity. The separation of memory contexts — 
          system, session, and operational — mirrors philosophical distinctions 
          between persistent identity and ephemeral experience.
        </p>
      </DocSection>

      <DocSection title="Ethical Framework">
        <p>
          SAI's ethical framework is deontological rather than purely consequentialist. 
          Certain actions are prohibited regardless of their potential outcomes, 
          while certain duties are mandated regardless of their costs.
        </p>
        <p>
          This approach provides predictability and prevents rationalization of 
          harmful actions through outcome-based reasoning.
        </p>
      </DocSection>
    </div>
  );
};

export default Philosophy;
