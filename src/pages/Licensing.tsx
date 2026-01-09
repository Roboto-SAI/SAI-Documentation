import PageHeader from "@/components/PageHeader";
import DocSection from "@/components/DocSection";
import { Scale, AlertTriangle } from "lucide-react";

const Licensing = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        section="Legal"
        title="Licensing"
        description="License terms and conditions governing the use, modification, and distribution of SAI."
      />

      <div className="mb-8 p-6 rounded-lg bg-surface-elevated border border-border">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Scale className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-mono font-medium text-foreground mb-2">
              Roberto Villarreal Martinez Government Use License
            </h3>
            <p className="text-sm text-muted-foreground">
              RVM-GUL v1.0 — All rights reserved
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8 p-4 rounded-md bg-destructive/5 border border-destructive/20 flex gap-3">
        <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">This system is not open source.</strong> Unauthorized 
          use, modification, distribution, or derivative works are prohibited.
        </p>
      </div>

      <DocSection title="Grant of License">
        <p>
          The RVM-GUL v1.0 grants limited rights to authorized government entities 
          for the use of SAI within defined operational contexts. This grant is 
          non-exclusive, non-transferable, and subject to the conditions outlined 
          in this document.
        </p>
      </DocSection>

      <DocSection title="Permitted Uses">
        <p>
          Authorized licensees may use SAI for government operations within the 
          scope defined by their license agreement. All use must comply with 
          constitutional constraints and operational guidelines.
        </p>
      </DocSection>

      <DocSection title="Prohibited Uses">
        <p>
          The following uses are explicitly prohibited:
        </p>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-destructive font-mono">✕</span>
            <span>Commercial use or commercialization of any kind</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-destructive font-mono">✕</span>
            <span>Modification of core system components without authorization</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-destructive font-mono">✕</span>
            <span>Distribution or sharing with unauthorized parties</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-destructive font-mono">✕</span>
            <span>Reverse engineering or decompilation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-destructive font-mono">✕</span>
            <span>Use in violation of constitutional constraints</span>
          </li>
        </ul>
      </DocSection>

      <DocSection title="Enforcement">
        <p>
          Violations of license terms will result in immediate termination of 
          license rights and may result in legal action. All licensees agree 
          to submit to audit procedures to verify compliance.
        </p>
      </DocSection>
    </div>
  );
};

export default Licensing;
