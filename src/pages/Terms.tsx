import React from 'react';
import { Card } from '@/components/ui/card';
import { Gavel, CheckCircle, AlertTriangle, Scale } from 'lucide-react';

const Terms = () => {
  return (
    <div className="pb-24">
      <header className="px-8 max-w-7xl mx-auto pt-12 mb-16 space-y-6 text-center">
        <h1 className="font-headline font-light text-5xl md:text-7xl tracking-tight leading-tight">
          Terms of Service
        </h1>
        <p className="text-foreground/70 text-xl max-w-3xl mx-auto leading-relaxed">
          The following terms govern your use of the Cyber Mission Support Platform (CMSP) website and services.
        </p>
      </header>

      <div className="px-8 max-w-4xl mx-auto space-y-12">
        <section className="space-y-6">
          <h2 className="text-2xl font-headline font-bold flex items-center gap-3">
            <CheckCircle className="text-primary w-6 h-6" /> 1. Acceptance of Terms
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            By accessing this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-headline font-bold flex items-center gap-3">
            <Scale className="text-primary w-6 h-6" /> 2. Use License
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Permission is granted to temporarily download one copy of the materials on CMSP's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-headline font-bold flex items-center gap-3">
            <AlertTriangle className="text-primary w-6 h-6" /> 3. Disclaimer
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            The materials on CMSP's website are provided on an 'as is' basis. CMSP makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <Card className="p-8 bg-surface-container-low border-white/5 rounded-none border-l-4 border-primary">
          <h3 className="text-lg font-headline font-bold mb-4">Mission Specific Agreements</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">
            Software licenses and Service Level Agreements (SLAs) for the CMSP platform are handled separately via official procurement channels and agency-specific contracts.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
