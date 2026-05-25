import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowRight, 
  CheckCircle2, 
  Database, 
  CloudCheck,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MissionReadyRmf = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative px-8 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 space-y-8">
            <h1 className="font-headline font-light text-4xl sm:text-5xl lg:text-7xl leading-tight">
              Automating the <br/>
              <span className="text-primary font-bold">Risk Management Framework</span>
            </h1>
            <p className="text-foreground/70 text-lg lg:text-xl max-w-xl leading-relaxed">
              Security engineers shouldn't be buried in paperwork. We automate the RMF lifecycle so your security engineers can focus on high-impact technical security engineering instead of manual documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="tactical-gradient px-4 md:px-12 py-4 md:py-6 rounded-lg font-headline font-bold uppercase tracking-wider md:tracking-widest text-primary-foreground shadow-lg hover:brightness-110 transition-all h-auto w-full sm:w-auto text-center justify-center"
              >
                <Link to="/contact">Reach Out</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="bg-surface-container-high border-l-2 border-primary px-4 md:px-8 py-4 md:py-6 rounded-lg font-headline font-bold text-xs md:text-sm uppercase tracking-wider md:tracking-widest hover:bg-surface-container-highest transition-colors h-auto border-y-0 border-r-0 w-full sm:w-auto text-center justify-center"
              >
                <Link to="/contact">Deploy Local Instance</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-primary/20 blur-2xl rounded-lg opacity-50"></div>
            <div className="relative bg-surface-container-low rounded-lg aspect-video flex items-center justify-center border border-white/5 overflow-hidden">
              <svg className="absolute inset-0 w-full h-full opacity-75 group-hover:opacity-95 group-hover:scale-102 transition-all duration-700" viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-rmf" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(0, 218, 243, 0.05)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-rmf)" />
                
                <circle cx="300" cy="170" r="140" stroke="rgba(0, 218, 243, 0.08)" strokeWidth="1" strokeDasharray="4 8" />
                <circle cx="300" cy="170" r="90" stroke="rgba(0, 218, 243, 0.12)" strokeWidth="1.5" />
                <circle cx="300" cy="170" r="40" stroke="rgba(0, 218, 243, 0.18)" strokeWidth="2" strokeDasharray="20 10" />

                <line x1="300" y1="170" x2="430" y2="95" stroke="#00DAF3" strokeWidth="1.5" opacity="0.3" strokeDasharray="3 3"/>
                <line x1="300" y1="170" x2="210" y2="220" stroke="#00E639" strokeWidth="1.5" opacity="0.3" />

                <g transform="translate(300, 170)">
                  <circle r="20" fill="#1B1B1F" stroke="#00DAF3" strokeWidth="2" />
                  <path d="M -8 -8 L 8 8 M -8 8 L 8 -8" stroke="#00DAF3" strokeWidth="1.5" />
                  <text y="36" textAnchor="middle" fill="#00DAF3" fontSize="12" fontFamily="monospace" fontWeight="bold" letterSpacing="1.5">CMSP CORE</text>
                </g>

                <g transform="translate(180, 100)">
                  <circle r="16" fill="#131317" stroke="#00E639" strokeWidth="1.5" />
                  <text textAnchor="middle" dominantBaseline="central" y="0" fill="#00E639" fontSize="12" fontFamily="monospace" fontWeight="bold">AC</text>
                  <text textAnchor="middle" y="32" fill="#E4E1E7" fontSize="11" fontFamily="sans-serif" fontWeight="600" opacity="0.9">Access Control</text>
                  <circle cx="10" cy="-10" r="4" fill="#00E639" />
                </g>

                <g transform="translate(420, 100)">
                  <circle r="16" fill="#131317" stroke="#00E639" strokeWidth="1.5" />
                  <text textAnchor="middle" dominantBaseline="central" y="0" fill="#00E639" fontSize="12" fontFamily="monospace" fontWeight="bold">AU</text>
                  <text textAnchor="middle" y="32" fill="#E4E1E7" fontSize="11" fontFamily="sans-serif" fontWeight="600" opacity="0.9">Audit & Accountability</text>
                  <circle cx="10" cy="-10" r="4" fill="#00E639" />
                </g>

                <g transform="translate(180, 240)">
                  <circle r="16" fill="#131317" stroke="#FFD60A" strokeWidth="1.5" />
                  <text textAnchor="middle" dominantBaseline="central" y="0" fill="#FFD60A" fontSize="12" fontFamily="monospace" fontWeight="bold">SC</text>
                  <text textAnchor="middle" y="32" fill="#E4E1E7" fontSize="11" fontFamily="sans-serif" fontWeight="600" opacity="0.9">Boundary Protection</text>
                  <circle cx="10" cy="-10" r="4" fill="#FFD60A" />
                </g>

                <g transform="translate(420, 240)">
                  <circle r="16" fill="#131317" stroke="#FF453A" strokeWidth="1.5" />
                  <text textAnchor="middle" dominantBaseline="central" y="0" fill="#FF453A" fontSize="12" fontFamily="monospace" fontWeight="bold">IA</text>
                  <text textAnchor="middle" y="32" fill="#E4E1E7" fontSize="11" fontFamily="sans-serif" fontWeight="600" opacity="0.9">MFA Enforcement</text>
                  <circle cx="10" cy="-10" r="4" fill="#FF453A" />
                </g>

                <path d="M 196 100 L 280 170" stroke="rgba(0, 230, 57, 0.4)" strokeWidth="1" strokeDasharray="3 3"/>
                <path d="M 404 100 L 320 170" stroke="rgba(0, 230, 57, 0.4)" strokeWidth="1" strokeDasharray="3 3"/>
                <path d="M 196 240 L 280 170" stroke="rgba(255, 214, 10, 0.4)" strokeWidth="1" />
                <path d="M 404 240 L 320 170" stroke="rgba(255, 69, 58, 0.4)" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-surface-container-lowest py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <span className="font-headline text-primary text-sm tracking-widest uppercase mb-2 block">ATO Validation Velocity</span>
            <h2 className="font-headline text-4xl font-bold">Optimized Compliance Timelines</h2>
          </div>
          <div className="flex items-center gap-8 lg:gap-16">
            <div className="flex flex-col items-center">
              <span className="text-slate-500 font-headline text-xl line-through">10 WEEKS</span>
              <span className="text-foreground/50 text-xs uppercase tracking-widest">Legacy Assessment</span>
            </div>
            <ArrowRight className="text-primary w-10 h-10" />
            <div className="flex flex-col items-center">
              <span className="text-primary font-headline text-5xl font-bold tracking-tighter">2-4 DAYS</span>
              <span className="text-primary text-xs uppercase tracking-widest font-bold">CMSP Optimized</span>
            </div>
          </div>
        </div>
      </section>

      {/* Command the Lifecycle */}
      <section className="px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-3xl font-bold mb-4">Streamlined RMF Orchestration</h2>
          <div className="h-1 w-24 bg-primary"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-1">
          <Card className="bg-surface-container-low p-10 hover:bg-surface-container transition-colors group border-none rounded-none">
            <h3 className="font-headline text-xl font-bold mb-4 uppercase tracking-tight">Control Narrative Generation</h3>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Dynamically generate technical control descriptions based on your specific architecture. No more copy-pasting from generic templates.
            </p>
            <div className="h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-300"></div>
          </Card>
          
          <Card className="bg-surface-container-low p-10 hover:bg-surface-container transition-colors group border-none rounded-none">
            <h3 className="font-headline text-xl font-bold mb-4 uppercase tracking-tight">Compliance Artifact Processing</h3>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Ingest outputs from systems like SCAP scans and STIG results. CMSP maps artifacts to specific RMF controls without direct interference.
            </p>
            <div className="h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-300"></div>
          </Card>

          <Card className="bg-surface-container-low p-10 hover:bg-surface-container transition-colors group border-none rounded-none">
            <h3 className="font-headline text-xl font-bold mb-4 uppercase tracking-tight">Adaptive POAM Generation</h3>
            <p className="text-foreground/70 leading-relaxed mb-6">
              As vulnerabilities shift, your Plan of Action and Milestones adapts in real-time. Automated tracking of remediation lifecycles.
            </p>
            <div className="h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-300"></div>
          </Card>
        </div>
      </section>

      {/* Mission Intelligence Dashboard */}
      <section className="px-8 py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-headline text-4xl font-bold">Mission Intelligence</h2>
              <p className="text-foreground/70 leading-relaxed mb-10 text-lg">
                A single pane of glass for real-time compliance posture. Monitor control drift and POAM aging through automated artifact analysis without manual data entry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-lg border border-white/5">
                  <CheckCircle2 className="text-tertiary w-6 h-6" />
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Control Compliance</div>
                    <div className="font-headline text-xl font-bold">94.2% Verified</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-lg border border-white/5">
                  <ShieldCheck className="text-primary w-6 h-6" />
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">POAM Status</div>
                    <div className="font-headline text-xl font-bold">12 Active Milestones</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 glass-panel p-8 rounded-lg border border-white/10 shadow-2xl">
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <span className="font-headline text-xs uppercase tracking-widest font-bold text-primary">Compliance Outlook</span>
                <span className="font-headline text-xs uppercase tracking-widest font-bold text-slate-500">Real-time Stream</span>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                    <span>Milestone Resolution</span>
                    <span>82%</span>
                  </div>
                  <div className="h-2 bg-surface rounded-full overflow-hidden">
                    <div className="h-full tactical-gradient" style={{ width: '82%' }}></div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="text-slate-500 font-bold border-b border-white/5">
                        <th className="py-3 px-2">Control ID</th>
                        <th className="py-3 px-2">Description</th>
                        <th className="py-3 px-2 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-4 px-2 font-mono text-primary font-bold">AC-2</td>
                        <td className="py-4 px-2">Account Management</td>
                        <td className="py-4 px-2 text-right"><span className="bg-tertiary/10 text-tertiary text-[10px] px-2 py-1 rounded font-bold border border-tertiary/20">PASSED</span></td>
                      </tr>
                      <tr>
                        <td className="py-4 px-2 font-mono text-primary font-bold">AU-6</td>
                        <td className="py-4 px-2">Audit Review & Analysis</td>
                        <td className="py-4 px-2 text-right"><span className="bg-tertiary/10 text-tertiary text-[10px] px-2 py-1 rounded font-bold border border-tertiary/20">PASSED</span></td>
                      </tr>
                      <tr>
                        <td className="py-4 px-2 font-mono text-primary font-bold">SC-7</td>
                        <td className="py-4 px-2">Boundary Protection</td>
                        <td className="py-4 px-2 text-right"><span className="bg-primary/10 text-primary text-[10px] px-2 py-1 rounded font-bold border border-primary/20">POAM</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing Models */}
      <section className="px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4">Flexible Licensing Models</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Scalable solutions tailored to mission scope. Licensing is provisioned on a <span className="text-white font-bold">Per Line of Effort</span> basis to ensure cost-efficiency across diverse operational requirements.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-surface-container-low p-12 rounded-lg border border-white/5 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Database className="text-primary w-8 h-8" />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Self-Hosted Sovereignty</h3>
            <p className="text-foreground/70 mb-8 flex-grow leading-relaxed">
              Complete environment control. Deploy on-premises or in air-gapped secure facilities. Your compliance data never leaves your perimeter.
            </p>
            <Button asChild variant="outline" className="w-full border-2 border-primary/20 px-4 py-4 md:py-6 rounded-lg font-headline font-bold uppercase tracking-wider md:tracking-widest hover:border-primary transition-all h-auto justify-center">
                <Link to="/contact">Request a Quote</Link>
            </Button>
          </Card>

          <Card className="bg-surface-container-low p-12 rounded-lg border border-white/5 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <CloudCheck className="text-primary w-8 h-8" />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Managed Subscription</h3>
            <p className="text-foreground/70 mb-8 flex-grow leading-relaxed">
              Turnkey compliance management. Leverage our secure cloud infrastructure for rapid deployment and continuous updates with minimal overhead.
            </p>
            <Button asChild className="w-full tactical-gradient px-4 py-4 md:py-6 rounded-lg font-headline font-bold uppercase tracking-wider md:tracking-widest text-primary-foreground hover:shadow-lg transition-all h-auto justify-center">
                <Link to="/contact">Contact for Pricing</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* NIST Support */}
      <section className="px-8 py-24 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold">NIST 800-53 Rev 5 Support</h2>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Purpose-built for the latest federal standards. CMSP provides native, out-of-the-box support for <span className="text-white font-bold">NIST 800-53 Rev 5</span>, ensuring your systems meet the highest levels of scrutiny.
          </p>
          <div className="bg-surface-container-high p-8 rounded-lg border-l-4 border-primary text-left">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-2">
                <h3 className="font-headline text-xl font-bold">Absolute Portability</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  CMSP supports mission-critical operations with full air-gap compatibility. Process compliance artifacts in disconnected environments while maintaining a unified security posture.
                </p>
              </div>
              <div className="flex gap-4 shrink-0">
                <div className="bg-surface-container-lowest p-4 rounded border border-white/5 text-center w-24 space-y-2">
                  <Database className="text-primary mx-auto w-6 h-6" />
                  <div className="text-[10px] font-bold uppercase tracking-widest">Self-Host</div>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded border border-white/5 text-center w-24 space-y-2">
                  <ShieldCheck className="text-primary mx-auto w-6 h-6" />
                  <div className="text-[10px] font-bold uppercase tracking-widest">Air-Gap</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-right"></div>
        <div className="max-w-4xl mx-auto relative text-center space-y-8">
          <h2 className="font-headline text-4xl font-bold">Ready to Streamline Your ATO?</h2>
          <p className="text-foreground/70 text-lg">
            Join the cybersecurity engineering teams using CMSP to maintain continuous compliance without the documentation fatigue.
          </p>
          <div className="flex justify-center">
            <Button asChild className="tactical-gradient px-6 md:px-12 py-4 md:py-8 rounded-lg font-headline font-bold text-sm md:text-lg uppercase tracking-wider md:tracking-widest text-primary-foreground hover:shadow-lg transition-all h-auto w-full sm:w-auto text-center justify-center">
              <Link to="/contact">Request a Mission Briefing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionReadyRmf;
