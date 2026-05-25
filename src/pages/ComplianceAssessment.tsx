import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, 
  CheckCircle2, 
  FileText, 
  Cpu, 
  ShieldAlert, 
  ArrowRight, 
  Settings, 
  Download,
  Terminal,
  Lock,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AICopilotUI = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-primary/20 blur-2xl rounded-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
      <Card className="relative bg-surface-container-low border-white/5 overflow-hidden">
        {/* Header / Terminal Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-surface-container-high border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-error/50"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-tertiary/50"></div>
          </div>
          <div className="text-[10px] font-mono text-primary/70 uppercase tracking-widest">Semantic_Parsing_Engine_v4.2</div>
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-tertiary animate-pulse" />
            <span className="text-[10px] font-mono text-tertiary uppercase">Active</span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Scanning Animation Header */}
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Artifact Ingestion</span>
              <span className="text-primary font-headline text-xl tracking-tighter">94.2%</span>
            </div>
            <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full w-[94%] tactical-gradient animate-in slide-in-from-left duration-1000"></div>
            </div>
          </div>

          {/* Abstract Data Analysis Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-surface-container-lowest border border-white/5 rounded space-y-2 relative overflow-hidden group/item">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/30 animate-scan"></div>
              <div className="flex items-center gap-2">
                <FileText className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-bold text-slate-400 uppercase">SSP_DOC_REV_5</span>
              </div>
              <div className="space-y-1">
                <div className="h-1 w-3/4 bg-slate-700 rounded-full"></div>
                <div className="h-1 w-full bg-slate-800 rounded-full"></div>
                <div className="h-1 w-1/2 bg-slate-700 rounded-full"></div>
              </div>
              <Badge className="bg-primary/10 text-primary border-none text-[8px] h-4">PARSING</Badge>
            </div>

            <div className="p-3 bg-surface-container-lowest border border-white/5 rounded space-y-2">
              <div className="flex items-center gap-2">
                <Lock className="w-3 h-3 text-tertiary" />
                <span className="text-[10px] font-bold text-slate-400 uppercase">Control Mapping</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {['AC-2', 'AU-6', 'IA-5'].map((id) => (
                  <div key={id} className="text-[9px] font-mono px-1.5 py-0.5 bg-surface-container-high text-tertiary rounded border border-tertiary/20">
                    {id}
                  </div>
                ))}
              </div>
              <div className="text-[9px] text-slate-500 font-medium italic">Matched 142 attributes</div>
            </div>
          </div>

          {/* AI Output / Console Snippet */}
          <div className="bg-surface-container-lowest/50 p-4 rounded border border-white/5 font-mono text-[10px] space-y-2 relative">
             <div className="flex items-center gap-2 text-primary">
                <Terminal className="w-3 h-3" />
                <span>[LOG] Attribute: MFA_ENFORCEMENT found in SSP-24.</span>
             </div>
             <div className="flex items-center gap-2 text-tertiary">
                <CheckCircle2 className="w-3 h-3" />
                <span>[SUCCESS] Validated AC-2(1) technical implementation.</span>
             </div>
             <div className="flex items-center gap-2 text-error">
                <ShieldAlert className="w-3 h-3" />
                <span>[ALERT] Potential gap identified in AU-6 rotation.</span>
             </div>
             {/* Cursor blinking */}
             <div className="inline-block w-1.5 h-3 bg-primary animate-pulse ml-5"></div>
          </div>
        </div>

        {/* Tactical Accent */}
        <div className="absolute bottom-0 left-0 w-1 h-full bg-primary/50"></div>
      </Card>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(80px); opacity: 0; }
        }
        .animate-scan {
          animation: scan 3s infinite linear;
        }
      `}</style>
    </div>
  );
};

const ComplianceAssessment = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative px-8 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-headline font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
              Precision Compliance <br/><span className="text-primary font-bold">Orchestration</span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-xl leading-relaxed">
              Automate the complete RMF lifecycle. From automated document ingestion to structured remediation workflows, CMSP eliminates documentation bottlenecks and enforces mission-critical security standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="tactical-gradient px-4 md:px-8 py-4 md:py-6 rounded-lg text-primary-foreground font-headline font-bold text-xs md:text-sm uppercase tracking-wider md:tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-primary/20 h-auto w-full sm:w-auto">
                <Link to="/contact">
                  Initialize Assessment
                  <Rocket className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-surface-container-high border-white/10 px-4 md:px-8 py-4 md:py-6 rounded-lg text-foreground font-headline font-bold text-xs md:text-sm uppercase tracking-wider md:tracking-widest hover:bg-surface-container-highest transition-colors h-auto w-full sm:w-auto text-center justify-center">
                <Link to="/contact">Request Technical Manual</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
            <Card className="relative bg-surface-container-low p-8 border-white/5">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Compliance Health</span>
                <span className="text-primary font-headline text-xl">94.2%</span>
              </div>
              <div className="space-y-6">
                <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full w-[94%] tactical-gradient"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-surface-container-lowest rounded border border-white/5 space-y-1">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Controls</div>
                    <div className="font-headline text-lg">842/850</div>
                  </div>
                  <div className="p-4 bg-surface-container-lowest rounded border border-white/5 space-y-1">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Open POA&Ms</div>
                    <div className="font-headline text-lg text-error">08</div>
                  </div>
                  <div className="p-4 bg-surface-container-lowest rounded border border-white/5 space-y-1">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Avg MTTR</div>
                    <div className="font-headline text-lg text-tertiary">4.2d</div>
                  </div>
                </div>
              </div>
              <div className="absolute -left-[2px] top-0 w-[2px] h-full bg-primary/50"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* Semantic Classification - Featuring the Custom Automated Parser Engine */}
      <section className="bg-surface-container-low py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-16 items-center">
          <div className="md:col-span-2 space-y-6">
            <h2 className="font-headline font-light text-4xl">Semantic Document Classification</h2>
            <p className="text-foreground/70 leading-relaxed text-lg">
              Our semantic processing core analyzes SSPs, SARs, and technical evidence to systematically attribute unstructured compliance evidence to the correct NIST 800-53 Control Families.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                <span className="text-sm font-medium">Systematic mapping of technical evidence to NIST controls</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                <span className="text-sm font-medium">Automatic cross-referencing between SSP and SAR docs</span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <AICopilotUI />
          </div>
        </div>
      </section>

      {/* Assessment Control */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline font-light text-4xl">Assessment Scoping & Execution</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Configure your mission assessment parameters. Choose between full-spectrum verification or surgical spot checks on critical families.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Selector Sidebar */}
          <Card className="lg:col-span-1 bg-surface-container-low p-6 border-white/5 h-fit">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-xs uppercase tracking-widest text-primary">Control Selector</h3>
              <span className="text-[10px] text-slate-500 font-bold">22 FAMILIES LOADED</span>
            </div>
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {[
                { id: 'AC', name: 'Access Control', active: true },
                { id: 'AT', name: 'Awareness & Training', active: false },
                { id: 'AU', name: 'Audit & Accountability', active: true },
                { id: 'CA', name: 'Security Assessment', active: false },
                { id: 'CP', name: 'Contingency Planning', active: true },
                { id: 'IA', name: 'ID & Authentication', active: false }
              ].map((item) => (
                <div 
                  key={item.id} 
                  className={`flex items-center justify-between p-3 rounded transition-colors group cursor-pointer ${
                    item.active ? 'bg-surface-container-high border-l-2 border-primary' : 'hover:bg-surface-container-high'
                  }`}
                >
                  <span className={`text-sm font-medium ${item.active ? 'text-foreground' : 'text-slate-400'}`}>
                    {item.id} - {item.name}
                  </span>
                  {item.active ? (
                    <CheckCircle2 className="w-4 h-4 text-primary fill-primary/10" />
                  ) : (
                    <div className="w-4 h-4 rounded-sm border border-slate-600 group-hover:border-slate-400"></div>
                  )}
                </div>
              ))}
            </div>
            <Button disabled variant="ghost" className="w-full mt-6 px-4 py-4 md:py-6 border border-primary/20 rounded text-[10px] md:text-xs font-bold uppercase tracking-wider md:tracking-widest cursor-not-allowed opacity-50 h-auto whitespace-normal break-words">
              Apply Scoping Filter (Illustrative Only)
            </Button>
          </Card>

          {/* Main Assessment Display */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="glass-panel p-6 border-primary/10 space-y-4">
                <h4 className="text-primary font-headline text-lg font-bold">Full Mission Assessment</h4>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  Comprehensive sweep of all high-impact control families including technical, operational, and management overlays.
                </p>
                <button disabled className="text-xs font-bold uppercase text-primary/60 flex items-center gap-1 cursor-not-allowed opacity-70">
                  Execute Run <ArrowRight className="w-3 h-3" />
                </button>
              </Card>
              <Card className="bg-surface-container-low p-6 border-white/5 space-y-4">
                <h4 className="text-foreground font-headline text-lg font-bold">Targeted Spot Checks</h4>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  Run surgical scans on specific control identifiers or families based on recent system modifications.
                </p>
                <button disabled className="text-xs font-bold uppercase text-slate-500 flex items-center gap-1 cursor-not-allowed opacity-70">
                  Configure Check <Settings className="w-3 h-3" />
                </button>
              </Card>
            </div>

            <Card className="bg-surface-container-lowest p-8 border-white/5 relative overflow-hidden">
              <div className="flex justify-between items-end mb-8 relative z-10">
                <div className="space-y-2">
                  <h4 className="font-headline text-2xl font-bold">AC-2: Account Management</h4>
                  <Badge variant="outline" className="border-slate-700 text-slate-500 uppercase tracking-widest text-[8px] px-2 h-5 rounded-sm">
                    High Impact Control • Rev 5
                  </Badge>
                </div>
                <div className="text-right space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Status</div>
                  <Badge className="bg-error/10 text-error border-error/20 text-[10px] font-bold uppercase tracking-wider py-1">
                    Non-Compliant
                  </Badge>
                </div>
              </div>
              <div className="space-y-6 relative z-10">
                <div className="flex gap-12">
                  <div className="space-y-3">
                    <div className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Evidence Artifacts</div>
                    <div className="flex gap-2">
                      <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center border border-white/5 hover:border-primary/40 transition-colors cursor-pointer">
                        <FileText className="w-4 h-4 text-slate-400" />
                      </div>
                      <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center border border-white/5 hover:border-primary/40 transition-colors cursor-pointer">
                        <Cpu className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Last Evaluated</div>
                    <div className="text-sm font-medium pt-1 text-slate-300">24 Oct 2024 - 14:22 GMT</div>
                  </div>
                </div>
              </div>
              {/* Abstract decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 blur-3xl rounded-full"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* Automated POA&M Generation */}
      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="font-headline font-light text-4xl">Automated POA&M Generation</h2>
              <p className="text-foreground/70 max-w-xl text-lg">
                CMSP dynamically clusters non-compliant controls into prioritized Plans of Action and Milestones, optimizing your remediation workflow.
              </p>
            </div>
            <Button disabled className="tactical-gradient px-4 md:px-8 py-4 md:py-6 rounded text-primary-foreground font-bold text-xs uppercase tracking-wider md:tracking-widest opacity-50 cursor-not-allowed h-auto w-full md:w-auto justify-center">
              Export POAM.xlsx <Download className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="space-y-4">
            {[
              { id: 'POA-2024-001', type: 'error', severity: 'Critical Risk', title: 'Implement Multi-Factor Authentication', desc: 'Found non-compliance in AC-2(1), AC-3, and IA-2 across 14 administrative interfaces.', effort: 'Medium (40h)', date: '15 Nov 2024' },
              { id: 'POA-2024-004', type: 'tertiary', severity: 'Low Risk', title: 'Audit Log Retention Policy Update', desc: 'Alignment with AU-4 retention requirements across backup cold storage arrays.', effort: 'Low (4h)', date: '30 Dec 2024' }
            ].map((poam) => (
              <Card key={poam.id} className={`bg-surface-container-lowest p-6 border-white/5 flex flex-col md:flex-row gap-8 items-center border-l-4 ${poam.type === 'error' ? 'border-l-error' : 'border-l-tertiary'}`}>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-500 font-mono">ID: {poam.id}</span>
                    <Badge variant="outline" className={`${poam.type === 'error' ? 'bg-error/10 text-error border-error/20' : 'bg-tertiary/10 text-tertiary border-tertiary/20'} text-[9px] font-bold uppercase tracking-widest rounded-sm px-1.5`}>
                      {poam.severity}
                    </Badge>
                  </div>
                  <h5 className="text-lg font-headline font-bold">{poam.title}</h5>
                  <p className="text-xs text-foreground/60 leading-relaxed">{poam.desc}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/5 text-center md:text-left">
                  <div className="space-y-1">
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Effort</div>
                    <div className="text-sm font-medium text-slate-300">{poam.effort}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Target Date</div>
                    <div className={`text-sm font-medium ${poam.type === 'error' ? 'text-error' : 'text-tertiary'}`}>{poam.date}</div>
                  </div>
                  <div className="col-span-2 md:col-span-1 flex items-center">
                    <Button disabled variant="outline" className="text-[10px] font-black uppercase text-primary border-primary/20 px-4 py-2 opacity-50 cursor-not-allowed w-full h-auto">View Guidance</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-32 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-lg p-20 text-center border border-white/5">
          <div className="absolute inset-0 tactical-gradient opacity-10"></div>
          <div className="relative z-10 space-y-10">
            <h2 className="font-headline text-5xl font-light">Ready for Zero-Trust Compliance?</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-xl leading-relaxed">
              Transition from static checklists to continuous, automated mission assurance with the Cyber Mission Support Platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild className="tactical-gradient px-6 md:px-12 py-4 md:py-8 rounded-lg text-primary-foreground font-headline font-bold text-sm md:text-lg uppercase tracking-wider md:tracking-widest shadow-2xl shadow-primary/30 active:scale-95 transition-all h-auto w-full sm:w-auto text-center justify-center">
                <Link to="/contact">Start Your Assessment</Link>
              </Button>
              <Button asChild variant="outline" className="bg-surface-container-highest px-6 md:px-12 py-4 md:py-8 rounded-lg text-foreground font-headline font-bold text-sm md:text-lg uppercase tracking-wider md:tracking-widest hover:bg-surface-bright transition-all border-white/10 active:scale-95 h-auto w-full sm:w-auto text-center justify-center">
                <Link to="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-tertiary/5 blur-[120px] rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default ComplianceAssessment;
