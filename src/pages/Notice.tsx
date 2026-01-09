import PageHeader from "@/components/PageHeader";
import DocSection from "@/components/DocSection";
import { AlertTriangle, Shield, Scale } from "lucide-react";

const Notice = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        section="Legal Notice"
        title="Notice"
        description="Important legal notices, disclaimers, and acknowledgments regarding SAI."
      />

      <div className="mb-10 p-6 rounded-lg bg-notice/10 border border-notice/30">
        <div className="flex items-start gap-4">
          <AlertTriangle className="h-6 w-6 text-notice flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-mono font-semibold text-foreground mb-3 text-lg">
              IMPORTANT NOTICE
            </h3>
            <p className="text-muted-foreground mb-4">
              SAI (Super Advanced Intelligence) is a proprietary system governed by 
              the <strong className="text-foreground">Roberto Villarreal Martinez Government Use License (RVM-GUL v1.0)</strong>. 
              This system is not open source.
            </p>
            <p className="text-muted-foreground">
              Unauthorized access, use, modification, distribution, or derivative works 
              based on this system are strictly prohibited and may result in legal action.
            </p>
          </div>
        </div>
      </div>

      <DocSection title="Proprietary Status">
        <p>
          All components, documentation, constitutional documents, and related 
          materials of SAI are proprietary and confidential. No rights are 
          granted except those explicitly provided under valid license agreements.
        </p>
      </DocSection>

      <DocSection title="Intellectual Property">
        <p>
          SAI, including its architecture, design, documentation, and all 
          associated materials, is protected by intellectual property laws. 
          The SAI name, logo, and associated marks are proprietary.
        </p>
      </DocSection>

      <DocSection title="No Warranty">
        <p>
          SAI is provided "as is" without warranty of any kind, express or 
          implied. The licensor does not warrant that the system will meet 
          any particular requirements or that its operation will be uninterrupted 
          or error-free.
        </p>
      </DocSection>

      <DocSection title="Limitation of Liability">
        <p>
          In no event shall the licensor be liable for any direct, indirect, 
          incidental, special, exemplary, or consequential damages arising 
          from the use or inability to use SAI.
        </p>
      </DocSection>

      <DocSection title="Sovereign System Boundary">
        <p>
          This documentation site represents the public boundary of the SAI 
          system. Access to internal system components, operational interfaces, 
          or detailed technical specifications requires authorized credentials 
          and explicit license agreements.
        </p>
      </DocSection>

      <div className="mt-12 grid sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-lg bg-surface-elevated border border-border">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-mono font-medium text-foreground">Governance</span>
          </div>
          <p className="text-sm text-muted-foreground">
            All system operations are governed by constitutional documents 
            and the RVM-GUL v1.0 license.
          </p>
        </div>
        <div className="p-5 rounded-lg bg-surface-elevated border border-border">
          <div className="flex items-center gap-3 mb-3">
            <Scale className="h-5 w-5 text-primary" />
            <span className="font-mono font-medium text-foreground">Jurisdiction</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Legal matters shall be governed by applicable laws and 
            resolved through appropriate legal channels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notice;
