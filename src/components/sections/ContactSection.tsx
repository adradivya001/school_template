import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTemplate } from "@/context/TemplateContext";
import { SectionHeading } from "../common/SectionHeading";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { AnimatedButton } from "@/components/animations/AnimatedButton";
import { HoverCard } from "@/components/animations/HoverCard";

export function ContactSection() {
  const { data: { school: schoolData } } = useTemplate();

  return (
    <AnimatedSection className="py-24 md:py-40 bg-white" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <StaggerContainer className="lg:col-span-5 flex flex-col justify-center">
            <StaggerItem>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-0.5 bg-secondary"></span>
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Get in Touch</span>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <h2 className="text-5xl md:text-7xl font-black text-foreground mb-12 leading-tight tracking-tight">
                Let&apos;s Start a <br/><span className="text-primary">Conversation</span>
              </h2>
            </StaggerItem>
            
            <div className="space-y-12 mb-12">
              <StaggerItem>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Call Us</span>
                  <a href={`tel:${schoolData.contact.phone.replace(/\D/g,'')}`} className="text-3xl md:text-4xl font-bold text-foreground hover:text-primary transition-colors">
                    {schoolData.contact.phone}
                  </a>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Email Us</span>
                  <a href={`mailto:${schoolData.contact.email}`} className="text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors">
                    {schoolData.contact.email}
                  </a>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Visit Us</span>
                  <p className="text-xl md:text-2xl font-medium text-foreground max-w-sm leading-relaxed">
                    {schoolData.contact.address}
                  </p>
                </div>
              </StaggerItem>
            </div>
            
            <StaggerItem>
              <div className="p-6 rounded-3xl bg-muted inline-block border border-border">
                <div className="flex items-center gap-3 text-foreground font-semibold">
                  <Clock size={20} className="text-secondary" />
                  Office Hours: {schoolData.contact.workingHours}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
          
          <AnimatedSection delay={0.2} className="lg:col-span-7 relative">
            <div className="bg-primary/5 p-8 md:p-16 rounded-[3rem] border border-primary/10 h-full flex flex-col justify-center relative overflow-hidden">
              {/* Decorative map abstract background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-foreground mb-8">Send an Enquiry</h3>
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <input type="text" id="studentName" className="w-full h-14 bg-transparent border-b-2 border-border focus:border-primary text-foreground text-lg px-0 focus:outline-none transition-colors peer placeholder-transparent" placeholder="Student Name" />
                      <label htmlFor="studentName" className="absolute left-0 -top-6 text-sm font-bold text-muted-foreground uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary">Student Name</label>
                    </div>
                    <div className="relative group">
                      <input type="text" id="parentName" className="w-full h-14 bg-transparent border-b-2 border-border focus:border-primary text-foreground text-lg px-0 focus:outline-none transition-colors peer placeholder-transparent" placeholder="Parent Name" />
                      <label htmlFor="parentName" className="absolute left-0 -top-6 text-sm font-bold text-muted-foreground uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary">Parent Name</label>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <input type="tel" id="phone" className="w-full h-14 bg-transparent border-b-2 border-border focus:border-primary text-foreground text-lg px-0 focus:outline-none transition-colors peer placeholder-transparent" placeholder="Phone Number" />
                      <label htmlFor="phone" className="absolute left-0 -top-6 text-sm font-bold text-muted-foreground uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary">Phone Number</label>
                    </div>
                    <div className="relative group">
                      <input type="email" id="email" className="w-full h-14 bg-transparent border-b-2 border-border focus:border-primary text-foreground text-lg px-0 focus:outline-none transition-colors peer placeholder-transparent" placeholder="Email Address" />
                      <label htmlFor="email" className="absolute left-0 -top-6 text-sm font-bold text-muted-foreground uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary">Email Address</label>
                    </div>
                  </div>
                  
                  <div className="relative group pt-4">
                    <label htmlFor="class" className="text-sm font-bold text-muted-foreground uppercase tracking-widest block mb-4">Class Applying For</label>
                    <select id="class" className="w-full h-14 bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground text-lg px-4 rounded-xl focus:outline-none transition-colors appearance-none">
                      <option value="">Select a class...</option>
                      <option value="nursery">Nursery</option>
                      <option value="lkg">LKG</option>
                      <option value="ukg">UKG</option>
                      <option value="1">Grade 1</option>
                      <option value="2">Grade 2</option>
                      <option value="6">Grade 6</option>
                      <option value="9">Grade 9</option>
                      <option value="11">Grade 11</option>
                    </select>
                  </div>
                  
                  <div className="relative group pt-4">
                    <textarea id="message" rows={1} className="w-full bg-transparent border-b-2 border-border focus:border-primary text-foreground text-lg px-0 focus:outline-none transition-colors peer placeholder-transparent resize-none py-2" placeholder="Message"></textarea>
                    <label htmlFor="message" className="absolute left-0 -top-2 text-sm font-bold text-muted-foreground uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary">How can we help?</label>
                  </div>
                  
                  <AnimatedButton type="submit" size="lg" className="w-full h-16 text-lg rounded-2xl shadow-xl mt-8 font-bold">
                    Submit Enquiry
                  </AnimatedButton>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
}
