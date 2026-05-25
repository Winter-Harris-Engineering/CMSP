import { Card } from '@/components/ui/card';
import { Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pb-24">
      <header className="px-8 max-w-7xl mx-auto pt-12 mb-16 space-y-6 text-center">
        <h1 className="font-headline font-light text-5xl md:text-7xl tracking-tight leading-tight">
          Privacy Policy
        </h1>
        <p className="text-foreground/70 text-xl max-w-3xl mx-auto leading-relaxed">
          At CMSP, your mission data and privacy are paramount. This policy outlines our commitment to data security and sovereignty.
        </p>
      </header>

      <div className="px-8 max-w-4xl mx-auto space-y-12">
        <section className="space-y-6">
          <h2 className="text-2xl font-headline font-bold flex items-center gap-3">
            <Lock className="text-primary w-6 h-6" /> 1. Data Sovereignty
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            CMSP is designed for self-hosting. This means all mission data, compliance evidence, and user information remain within your controlled environment. We do not transmit your sensitive data to external servers.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-headline font-bold flex items-center gap-3">
            <Eye className="text-primary w-6 h-6" /> 2. Information We Collect
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            When you use our website or contact us, we may collect:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/70">
            <li>Contact information (name, email, agency) provided via our contact forms.</li>
            <li>Technical usage data to improve website performance.</li>
            <li>No mission-sensitive data is ever collected by CMSP through this public site.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-headline font-bold flex items-center gap-3">
            <FileText className="text-primary w-6 h-6" /> 3. Use of Information
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            We use the information provided through this site solely to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/70">
            <li>Respond to your inquiries and briefing requests.</li>
            <li>Provide technical support and platform updates.</li>
            <li>Comply with legal obligations and security protocols.</li>
          </ul>
        </section>

        <Card className="p-8 bg-surface-container-low border-white/5 rounded-none">
          <h3 className="text-lg font-headline font-bold mb-4">Security Notice</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">
            CMSP employs industry-standard encryption and security measures to protect information submitted via our forms. For high-side communications, please coordinate via secure channels as directed during your initial briefing.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
