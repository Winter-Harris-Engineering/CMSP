import React from 'react';
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
  ShieldCheck, 
  Lock, 
  Server, 
  ChevronRight, 
  Verified, 
  Database, 
  CheckCircle2, 
  Cpu, 
  Terminal,
  Zap,
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
    alert("Protocol Initialized. Tactical specialists will reach out shortly.");
  }

  return (
    <div className="pb-24">
      {/* Hero Header */}
      <header className="px-8 max-w-7xl mx-auto pt-12 mb-16 space-y-6">
        <h1 className="font-headline font-light text-5xl md:text-7xl tracking-tight leading-tight">
          Contact <span className="text-primary font-bold italic">Tactical Support</span>
        </h1>
        <p className="text-foreground/70 text-xl max-w-3xl leading-relaxed">
          Secure your personalized deep dive into the RMF automation platform. Our tactical specialists will reach out within 24 hours to coordinate a technical demonstration tailored to your agency's compliance requirements.
        </p>
      </header>

      <div className="px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form Terminal Section */}
        <Card className="lg:col-span-7 bg-surface-container-low border-white/5 p-8 md:p-12 relative overflow-hidden rounded-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
          
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
                className="tactical-gradient w-full py-8 text-primary-foreground font-headline font-bold uppercase tracking-[0.3em] text-xs rounded-none hover:shadow-[0_0_30px_rgba(0,218,243,0.3)] transition-all h-auto"
              >
                Send Message
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Form>
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
          <div className="relative h-64 rounded-none overflow-hidden group border border-white/5">
            <img 
              alt="Cyber security command center visualization" 
              className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXwkiFpT4wXN9qA_8ldtruL63Cy3d5XRuCfskkX6o_WPMR9DPqObZI25xYwyF7nkqldSl1uOilffzViypFx6QiUy2jLjE0pwEO_QHR3xvY_lUbG_zyG83FRMpFZrHvHXNhkXCa8Ic2_NH3UzQSDMbkdWwVW5d7fC_V_NBFi-Z8ySuNMIkPfqY__2thdEv9giTDRa3qzKRkcX3IUl7j4oCQNEHpHFqQyQQ4R7GjeT4vNRNCaye4ci3UW-b1S-y9ExMVJgeo30wE5Osl" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 space-y-1">
              <p className="font-headline text-xs text-primary font-bold uppercase tracking-widest">Global Security Operations</p>
              <p className="text-[10px] text-slate-500 font-mono">Tactical Situational Awareness Engine</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
