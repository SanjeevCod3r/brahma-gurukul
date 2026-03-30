import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(2, "Subject required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "", email: "", subject: "", message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      if (!scriptUrl) throw new Error("Script URL not configured");

      const formData = new FormData();
      formData.append("formType", "Contact");
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value || "");
      });

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
      });
    }
  };

  return (
    <div className="w-full pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Have questions about admissions, fees, or our philosophy? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Details & Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold text-foreground mb-2">Call Us</h4>
                <p className="text-muted-foreground">+91 98765 43210</p>
                <p className="text-muted-foreground text-sm mt-1">Mon-Sat, 9am to 4pm</p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold text-foreground mb-2">Email Us</h4>
                <p className="text-muted-foreground">info@brahmagurukul.edu.in</p>
                <p className="text-muted-foreground text-sm mt-1">We reply within 24 hrs</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <MapPin size={24} />
              </div>
              <h4 className="font-bold text-foreground mb-2">Visit Campus</h4>
              <p className="text-muted-foreground mb-6">
                Brahma Gurukul Campus, <br/>
                Vedic Heritage Road, <br/>
                India 110001
              </p>
              
              {/* Static Google Map Embed */}
              <div className="w-full h-64 rounded-xl overflow-hidden bg-muted">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688969!3d28.527582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Campus Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-xl h-fit">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Your Name</label>
                <input 
                  {...form.register("name")}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="John Doe"
                />
                {form.formState.errors.name && <p className="text-destructive text-xs mt-1">{form.formState.errors.name.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email Address</label>
                <input 
                  {...form.register("email")}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
                {form.formState.errors.email && <p className="text-destructive text-xs mt-1">{form.formState.errors.email.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Subject</label>
                <input 
                  {...form.register("subject")}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="How can we help?"
                />
                {form.formState.errors.subject && <p className="text-destructive text-xs mt-1">{form.formState.errors.subject.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                <textarea 
                  {...form.register("message")}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Write your message here..."
                />
                {form.formState.errors.message && <p className="text-destructive text-xs mt-1">{form.formState.errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl shadow-md hover:shadow-lg hover:bg-primary/90 transition-all disabled:opacity-70 flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
