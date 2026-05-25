import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle2, 
  Activity, 
  Cpu, 
  Zap, 
  History,
  Gauge
} from 'lucide-react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Link } from 'react-router-dom';
const AICopilotMetricsUI = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-primary/20 blur-2xl rounded-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
      <Card className="relative bg-surface-container-low border-white/5 overflow-hidden backdrop-blur-sm">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-surface-container-high border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-error/40"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
            <div className="w-2 h-2 rounded-full bg-tertiary/40"></div>
          </div>
          <div className="text-[9px] font-mono text-primary/60 uppercase tracking-[0.2em]">Compliance_Metrics_Probe_v1.0</div>
          <Activity className="w-3 h-3 text-tertiary animate-pulse" />
        </div>

        <div className="p-8 space-y-8">
          {/* Central AI Core Visualization */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border border-primary/20 flex items-center justify-center animate-spin-slow">
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-primary/60 flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-primary animate-pulse" />
                  </div>
                </div>
              </div>
              {/* Floating Data Points */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-tertiary/20 rounded-full blur-sm animate-ping"></div>
              <div className="absolute -bottom-1 -left-4 w-3 h-3 bg-primary/30 rounded-full blur-sm animate-bounce"></div>
            </div>
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Active Document Ingestion</div>
            </div>
          </div>

          {/* Analysis Feed */}
          <div className="space-y-4">
             <div className="flex items-center gap-4 p-3 bg-surface-container rounded border border-white/5 group/item transition-colors hover:bg-surface-container-high">
                <CheckCircle2 className="w-5 h-5 text-tertiary shrink-0" />
                <div className="space-y-1">
                   <div className="text-[10px] font-bold text-white uppercase tracking-wider">Automated semantic parsing</div>
                   <div className="h-1 w-32 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full w-full tactical-gradient animate-in slide-in-from-left duration-1000"></div>
                   </div>
                </div>
                <Badge variant="outline" className="ml-auto border-tertiary/20 text-tertiary text-[8px] uppercase tracking-tighter">12.4k Docs</Badge>
             </div>

             <div className="flex items-center gap-4 p-3 bg-surface-container rounded border border-white/5 group/item transition-colors hover:bg-surface-container-high">
                <Zap className="w-5 h-5 text-primary shrink-0" />
                <div className="space-y-1">
                   <div className="text-[10px] font-bold text-white uppercase tracking-wider">Gap analysis probe</div>
                   <div className="h-1 w-24 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full w-3/4 tactical-gradient animate-pulse"></div>
                   </div>
                </div>
                <Badge variant="outline" className="ml-auto border-primary/20 text-primary text-[8px] uppercase tracking-tighter">99.8% Parse Precision</Badge>
             </div>
          </div>

          {/* Terminal Output */}
          <div className="bg-surface-container-lowest p-4 rounded border border-white/5 font-mono text-[9px] text-slate-400 space-y-1">
            <div className="flex gap-2">
              <span className="text-primary font-bold">{'>'}</span>
              <span>Scanning BOE artifacts...</span>
            </div>
            <div className="flex gap-2">
              <span className="text-primary font-bold">{'>'}</span>
              <span>Validating policy vs implementation...</span>
            </div>
            <div className="flex gap-2">
              <span className="text-tertiary font-bold">{'>'}</span>
              <span className="text-tertiary">Mission Review Ready at 0800 HRS</span>
            </div>
          </div>
        </div>
        
        {/* Left Accent */}
        <div className="absolute top-0 left-0 w-1 h-full bg-primary/30"></div>
      </Card>
      
      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

const chartConfig = {
  secure: {
    label: "Secure",
    color: "var(--primary)",
  },
  nonCompliant: {
    label: "Non-Compliant",
    color: "var(--error)",
  },
} as const;

const MissionMetrics = () => {
  const initialPostureData = [
    { name: 'Non-Compliant', value: 73, fill: '#93000a' },
    { name: 'Secure', value: 27, fill: '#00e639' },
  ];

  const remediationData = [
    { name: 'Non-Compliant', value: 10, fill: '#93000a' },
    { name: 'Secure', value: 90, fill: '#00e639' },
  ];

  const velocityData = [
    { day: 'Day 1', secure: 27 },
    { day: 'Day 2', secure: 35 },
    { day: 'Day 3', secure: 48 },
    { day: 'Day 4', secure: 62 },
    { day: 'Day 5', secure: 75 },
    { day: 'Day 6', secure: 84 },
    { day: 'Day 7', secure: 90 },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10"></div>
          <svg className="absolute inset-0 w-full h-full opacity-20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="geometric-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 218, 243, 0.08)" strokeWidth="0.8"/>
                <circle cx="40" cy="0" r="1.5" fill="rgba(0, 218, 243, 0.25)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric-grid)" />
            <path d="M-100,200 Q200,400 500,100 T1100,300" stroke="rgba(0, 218, 243, 0.1)" strokeWidth="2" strokeDasharray="5 10"/>
            <path d="M-100,250 Q200,450 500,150 T1100,350" stroke="rgba(0, 230, 57, 0.06)" strokeWidth="1.5" />
            <circle cx="300" cy="150" r="250" stroke="rgba(0, 218, 243, 0.05)" strokeWidth="1"/>
            <circle cx="300" cy="150" r="150" stroke="rgba(0, 218, 243, 0.03)" strokeWidth="1" strokeDasharray="3 6"/>
          </svg>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto space-y-6">
          <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none">
            Compliance Velocity: <br/>
            <span className="font-bold text-primary">From Red to Mission-Ready</span>
          </h1>
          <p className="text-foreground/70 text-xl max-w-2xl leading-relaxed">
            Accelerate decision-making with rapid-response compliance metrics. Our automated system compiles complex security telemetry into actionable compliance reports in real-time.
          </p>
        </div>
      </section>

      {/* Bento Impact Metrics */}
      <section className="px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Speed Card */}
          <Card className="md:col-span-2 bg-surface-container-low border-none border-l-4 border-primary p-12 rounded-lg space-y-8">
            <div className="flex justify-between items-start">
              <Gauge className="text-primary w-12 h-12" />
              <Badge variant="outline" className="border-primary/30 text-primary font-headline font-bold uppercase tracking-widest px-3 py-1">Velocity Alpha</Badge>
            </div>
            <div className="space-y-2">
              <div className="text-7xl font-headline font-bold text-white tracking-tighter">08:00:00</div>
              <div className="text-xs uppercase tracking-[0.4em] text-slate-500 font-bold">Overnight Analysis Window</div>
            </div>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-xl">
              Automated processing reduces human oversight requirements by 94%, ensuring "Ready-for-Review" status at mission start.
            </p>
          </Card>

          {/* Shift Card */}
          <Card className="bg-surface-container-low border-none p-12 rounded-lg flex flex-col justify-between">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-widest text-error">Pre-Analysis</div>
              <div className="text-5xl font-headline font-bold text-white tracking-tighter">73%</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Non-Compliant Surface</div>
            </div>
            <div className="h-px w-full bg-white/5 my-8"></div>
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-widest text-tertiary">Target State</div>
              <div className="text-5xl font-headline font-bold text-white tracking-tighter">90%</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Secured Threshold</div>
            </div>
          </Card>
        </div>
      </section>

      {/* Feature Section: BOE Analysis */}
      <section className="px-8 py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="font-headline text-5xl font-bold leading-tight">
              Continuous Compilation of the <br/>
              <span className="text-primary italic">Body of Evidence</span>
            </h2>
            <div className="space-y-8">
              <p className="text-foreground/70 text-lg leading-relaxed">
                Uploading the complete Body of Evidence (BOE) initiates the CMSP automated core. Our system executes thousands of parallel control verification rules across your entire compliance documentation stack.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-6 p-6 bg-surface-container rounded-lg border border-white/5 transition-all hover:border-primary/20">
                  <CheckCircle2 className="text-tertiary w-8 h-8 shrink-0" />
                  <div className="space-y-1">
                    <div className="text-sm font-bold uppercase tracking-widest text-white">Automated Cross-Referencing</div>
                    <p className="text-sm text-foreground/60 leading-relaxed">Validates policy vs. actual implementation evidence using automated semantic parsing.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 p-6 bg-surface-container rounded-lg border border-white/5 transition-all hover:border-primary/20">
                  <Activity className="text-primary w-8 h-8 shrink-0" />
                  <div className="space-y-1">
                    <div className="text-sm font-bold uppercase tracking-widest text-white">Control Analysis</div>
                    <p className="text-sm text-foreground/60 leading-relaxed">Executes comprehensive control gap analysis with 99.8% verification precision.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <AICopilotMetricsUI />
        </div>
      </section>

      {/* Visual Comparison Section */}
      <section className="px-8 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="font-headline text-4xl lg:text-5xl font-bold">Postural Transformation Sequence</h2>
            <div className="h-1 w-32 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
            {/* Day 1 Dashboard */}
            <Card className="bg-surface-container-low border-none p-10 space-y-10 rounded-lg relative overflow-hidden">
              <h3 className="font-headline text-3xl font-bold flex items-center gap-4">
                <span className="w-4 h-4 bg-error rounded-full animate-pulse"></span>
                Initial Posture (Day 1)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="h-[250px] relative w-full min-w-0">
                  <ChartContainer config={chartConfig} className="h-full w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <ChartTooltip 
                          content={<ChartTooltipContent hideLabel />} 
                          cursor={false}
                        />
                        <Pie
                          data={initialPostureData}
                          innerRadius={80}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                          stroke="none"
                        >
                          {initialPostureData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-4xl font-headline font-bold text-error">27%</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Secure</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {initialPostureData.map((item) => (
                    <div key={item.name} className="flex justify-between items-center px-6 py-4 bg-surface rounded border border-white/5 transition-all hover:bg-surface-container-highest">
                      <span className="text-xs uppercase tracking-widest font-bold text-slate-400">{item.name}</span>
                      <span className={`font-headline font-bold text-lg ${item.name === 'Secure' ? 'text-tertiary' : 'text-error'}`}>{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 blur-3xl rounded-full"></div>
            </Card>

            {/* Day 7 Dashboard */}
            <Card className="bg-surface-container-low border-none p-10 space-y-10 rounded-lg relative overflow-hidden">
              <h3 className="font-headline text-3xl font-bold flex items-center gap-4">
                <span className="w-4 h-4 bg-tertiary rounded-full shadow-[0_0_15px_rgba(0,230,57,0.3)]"></span>
                Post-Remediation (Day 7)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="h-[250px] relative w-full min-w-0">
                  <ChartContainer config={chartConfig} className="h-full w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <ChartTooltip 
                          content={<ChartTooltipContent hideLabel />} 
                          cursor={false}
                        />
                        <Pie
                          data={remediationData}
                          innerRadius={80}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                          stroke="none"
                        >
                          {remediationData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-4xl font-headline font-bold text-tertiary">90%</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Secure</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {remediationData.map((item) => (
                    <div key={item.name} className="flex justify-between items-center px-6 py-4 bg-surface rounded border border-white/5 transition-all hover:bg-surface-container-highest">
                      <span className="text-xs uppercase tracking-widest font-bold text-slate-400">{item.name}</span>
                      <span className={`font-headline font-bold text-lg ${item.name === 'Secure' ? 'text-tertiary' : 'text-error'}`}>{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 blur-3xl rounded-full"></div>
            </Card>
          </div>

          {/* Velocity Area Chart */}
          <Card className="bg-surface-container-lowest border-white/5 p-10 rounded-lg">
            <div className="flex justify-between items-center mb-10">
               <div className="space-y-1">
                  <h4 className="font-headline text-2xl font-bold">Mission Velocity Stream</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Postural shift across remediation cycle</p>
               </div>
               <History className="text-primary w-6 h-6" />
            </div>
            
            <div className="h-[350px] w-full min-w-0">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={velocityData}>
                    <defs>
                      <linearGradient id="colorSecure" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00DAF3" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#00DAF3" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                    <XAxis 
                      dataKey="day" 
                      stroke="#8e9196" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false} 
                      dy={10}
                    />
                    <YAxis 
                      stroke="#8e9196" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false} 
                      tickFormatter={(value) => `${value}%`}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area 
                      type="monotone" 
                      dataKey="secure" 
                      stroke="#00DAF3" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorSecure)" 
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </Card>
        </div>
      </section>

      {/* Final Impact Section */}
      <section className="px-8 py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="space-y-4">
              <div className="text-6xl font-headline font-bold text-primary tracking-tighter">7 Days</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400">Rapid System Improvement</div>
              <p className="text-sm text-foreground/60 leading-relaxed px-4">
                Accelerated Compliance Velocity achieving target postural shifts in a single 168-hour mission cycle.
              </p>
            </div>
            
            <div className="relative space-y-4">
              <div className="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 h-20 border-l border-white/10"></div>
              <div className="text-6xl font-headline font-bold text-primary tracking-tighter">12k+</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400">Documents Parsed</div>
              <p className="text-sm text-foreground/60 leading-relaxed px-4">
                The full Body of Evidence processed with zero manual entry required.
              </p>
              <div className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 h-20 border-l border-white/10"></div>
            </div>
            
            <div className="space-y-4">
              <div className="text-6xl font-headline font-bold text-primary tracking-tighter">99.8%</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400">Standardized Logic Precision</div>
              <p className="text-sm text-foreground/60 leading-relaxed px-4">
                Automated logic checks eliminate reviewer fatigue and subjective compliance drift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Shared with previous pages for consistency */}
      <section className="px-8 py-32 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-lg p-20 text-center border border-white/5">
          <div className="absolute inset-0 tactical-gradient opacity-10"></div>
          <div className="relative z-10 space-y-10">
            <h2 className="font-headline text-5xl font-light">Deploy Mission-Ready Metrics</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-xl leading-relaxed">
              Transition from static checklists to continuous, automated mission assurance with high-fidelity visual telemetry.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild className="tactical-gradient px-6 md:px-12 py-4 md:py-8 rounded-lg text-primary-foreground font-headline font-bold text-sm md:text-lg uppercase tracking-wider md:tracking-widest shadow-2xl shadow-primary/30 active:scale-95 transition-all h-auto w-full sm:w-auto text-center justify-center">
                <Link to="/contact">Request a Mission Briefing</Link>
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

export default MissionMetrics;
