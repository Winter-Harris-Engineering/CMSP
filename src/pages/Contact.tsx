import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { 
  ChevronRight, 
  Database, 
  CheckCircle2, 
  User,
  Mail,
  Building2,
  Briefcase
} from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid secure email address." }),
  agency: z.string().min(2, { message: "Agency/Department is required." }),
  role: z.string(),
  interest: z.string().optional(),
  message: z.string().min(10, { message: "Please provide more details about your mission requirements." }),
});

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      agency: "",
      role: "ISSO",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <div className="pb-24">
      {/* Hero Header */}
      <header className="px-8 max-w-7xl mx-auto pt-12 mb-16 space-y-6">
        <h1 className="font-headline font-light text-5xl md:text-7xl tracking-tight leading-tight">
          Contact <span className="text-primary font-bold italic">Technical Operations</span>
        </h1>
        <p className="text-foreground/70 text-xl max-w-3xl leading-relaxed">
          Secure your personalized deep dive into the RMF automation platform. Our engineering team will reach out within 24 hours to coordinate a technical demonstration tailored to your agency's compliance requirements.
        </p>
      </header>

      <div className="px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form Terminal Section */}
        <Card className="lg:col-span-7 bg-surface-container-low border-white/5 p-8 md:p-12 relative overflow-hidden rounded-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          {isSubmitted ? (
            <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 space-y-6">
              <div className="w-16 h-16 rounded-full bg-tertiary/10 border border-tertiary/30 flex items-center justify-center">
                <CheckCircle2 className="text-tertiary w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-headline text-2xl font-bold text-white uppercase tracking-wider">Inquiry Received</h3>
                <p className="text-foreground/70 max-w-md leading-relaxed text-sm">
                  A technical operations representative will contact you within 24 hours to schedule your deep dive platform briefing.
                </p>
              </div>
              <Button 
                onClick={() => {
                  setIsSubmitted(false);
                  form.reset();
                }}
                variant="outline" 
                className="border-primary/20 hover:border-primary/50 text-[10px] md:text-xs font-bold uppercase tracking-wider md:tracking-widest px-4 md:px-8 py-3 md:py-4 mt-4 h-auto w-full sm:w-auto text-center justify-center rounded-lg"
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                        <User className="w-3 h-3" /> Full Name
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Maj. Alex Chen" 
                          className="bg-surface-container-lowest border-none focus-visible:ring-0 focus-visible:bg-surface-container-high transition-all border-l-2 border-l-transparent focus-visible:border-l-primary py-6 rounded-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-[10px] uppercase font-bold text-error" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                        <Mail className="w-3 h-3" /> Org Email (Contractor/Gov)
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="alex.chen@agency.gov" 
                          className="bg-surface-container-lowest border-none focus-visible:ring-0 focus-visible:bg-surface-container-high transition-all border-l-2 border-l-transparent focus-visible:border-l-primary py-6 rounded-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-[10px] uppercase font-bold text-error" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="agency"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                        <Building2 className="w-3 h-3" /> Agency / Department
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="DOD / AFSEC" 
                          className="bg-surface-container-lowest border-none focus-visible:ring-0 focus-visible:bg-surface-container-high transition-all border-l-2 border-l-transparent focus-visible:border-l-primary py-6 rounded-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-[10px] uppercase font-bold text-error" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                        <Briefcase className="w-3 h-3" /> Mission Role
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-surface-container-lowest border-none focus:ring-0 focus:bg-surface-container-high transition-all border-l-2 border-l-transparent data-[state=open]:border-l-primary py-6 rounded-none">
                            <SelectValue placeholder="Select Role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-surface-container-high border-white/5 rounded-none text-foreground font-sans">
                          <SelectItem value="ISSO" className="focus:bg-primary focus:text-primary-foreground">ISSO</SelectItem>
                          <SelectItem value="AO" className="focus:bg-primary focus:text-primary-foreground">Authorizing Official</SelectItem>
                          <SelectItem value="Architect" className="focus:bg-primary focus:text-primary-foreground">Systems Architect</SelectItem>
                          <SelectItem value="SCA" className="focus:bg-primary focus:text-primary-foreground">Security Assessor</SelectItem>
                          <SelectItem value="Other" className="focus:bg-primary focus:text-primary-foreground">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-[10px] uppercase font-bold text-error" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Message / Mission Requirements</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Briefly describe your environment (Cloud, Hybrid, On-Prem) and compliance goals..." 
                        className="bg-surface-container-lowest border-none focus-visible:ring-0 focus-visible:bg-surface-container-high transition-all border-l-2 border-l-transparent focus-visible:border-l-primary min-h-[160px] rounded-none p-6" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] uppercase font-bold text-error" />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="tactical-gradient w-full px-4 py-4 md:py-8 text-primary-foreground font-headline font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs rounded-lg hover:shadow-[0_0_30px_rgba(0,218,243,0.3)] transition-all h-auto flex justify-center items-center"
              >
                Send Message
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Form>
          )}
        </Card>

        {/* Sidebar Intelligence */}
        <aside className="lg:col-span-5 space-y-8">
          {/* Sovereignty Card */}
          <Card className="bg-surface-container-low border-none border-l-4 border-primary p-10 rounded-none space-y-6">
            <div className="flex items-center gap-4">
              <Database className="text-primary w-10 h-10" />
              <h3 className="font-headline text-2xl font-bold">Self-Hosted Sovereignty</h3>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Deploy CMSP in air-gapped environments, secure clouds, or on-premises infrastructure. You maintain absolute control over your compliance data—zero external telemetry, zero risk.
            </p>
          </Card>

          {/* Operational Standards */}
          <Card className="bg-surface-container p-10 border-white/5 rounded-none space-y-8">
            <h3 className="font-headline text-xs font-bold uppercase tracking-[0.3em] text-primary">Operational Standards</h3>
            <div className="space-y-6">
              {[
                { title: 'NIST 800-53 Rev 5', desc: 'Complete control catalog mapping and automated evidence collection.' },
                { title: 'FedRAMP Ready', desc: 'Accelerate ATO timelines by up to 60% with standardized documentation.' }
              ].map((std) => (
                <div key={std.title} className="flex gap-5 group">
                  <CheckCircle2 className="text-tertiary w-6 h-6 shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="space-y-1">
                    <p className="font-bold text-sm text-white uppercase tracking-tight">{std.title}</p>
                    <p className="text-xs text-foreground/60 leading-relaxed">{std.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Security Visual */}
          <div className="relative h-64 rounded-none overflow-hidden group border border-white/5 flex items-center justify-center bg-surface-container-lowest">
            <svg className="absolute inset-0 w-full h-full opacity-35 group-hover:opacity-55 transition-opacity duration-1000" viewBox="0 0 350 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-contact" width="16" height="16" patternUnits="userSpaceOnUse">
                  <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(0, 218, 243, 0.04)" strokeWidth="0.8"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-contact)" />
              
              <rect x="60" y="30" width="230" height="150" rx="4" stroke="#00DAF3" strokeWidth="1.5" strokeDasharray="6 4" />
              
              <g transform="translate(175, 105)">
                <rect x="-50" y="-35" width="100" height="70" rx="3" fill="#1B1B1F" stroke="#00E639" strokeWidth="2" />
                <text textAnchor="middle" y="-15" fill="#00E639" fontSize="8" fontFamily="monospace" fontWeight="bold">SOVEREIGN CORE</text>
                <line x1="-35" y1="5" x2="35" y2="5" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2" />
                <line x1="-35" y1="15" x2="35" y2="15" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2" />
                <circle cx="-30" cy="-2" r="2" fill="#00E639" />
                <circle cx="-20" cy="-2" r="2" fill="#00E639" />
                <circle cx="-30" cy="11" r="2" fill="#00E639" />
                <circle cx="-20" cy="11" r="2" fill="#00E639" />
              </g>
              
              <circle cx="60" cy="30" r="5" fill="#131317" stroke="#00DAF3" strokeWidth="1.5" />
              <circle cx="290" cy="30" r="5" fill="#131317" stroke="#00DAF3" strokeWidth="1.5" />
              <circle cx="60" cy="180" r="5" fill="#131317" stroke="#00DAF3" strokeWidth="1.5" />
              <circle cx="290" cy="180" r="5" fill="#131317" stroke="#00DAF3" strokeWidth="1.5" />
              
              <path d="M 20,110 L 50,110" stroke="#FF453A" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M 50,105 L 55,110 L 50,115 Z" fill="#FF453A" />
              <circle cx="15" cy="110" r="3" fill="#FF453A" />
              
              <g transform="translate(165, 125) scale(0.6)">
                <rect x="2" y="5" width="12" height="9" rx="1" fill="#00E639" />
                <path d="M 4,5 L 4,3 C 4,1.5 5.5,1 8,1 C 10.5,1 12,1.5 12,3 L 12,5" stroke="#00E639" strokeWidth="1.5" fill="none" />
              </g>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 space-y-1">
              <p className="font-headline text-xs text-primary font-bold uppercase tracking-widest">Sovereign Boundary Architecture</p>
              <p className="text-[10px] text-slate-500 font-mono">Isolated Safe Storage & Local Ingestion Core</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
