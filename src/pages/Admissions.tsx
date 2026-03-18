import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, AlertCircle } from "lucide-react";

// Form Schema
const admissionSchema = z.object({
  studentName: z.string().min(2, "Name must be at least 2 characters"),
  parentName: z.string().min(2, "Parent name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  applyingForClass: z.string().min(1, "Please select a class"),
  message: z.string().optional()
});

type AdmissionFormValues = z.infer<typeof admissionSchema>;

export default function Admissions() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      studentName: "",
      parentName: "",
      phone: "",
      email: "",
      applyingForClass: "",
      message: ""
    }
  });

  const onSubmit = async (data: AdmissionFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    toast({
      title: "Application Received!",
      description: "We will contact you shortly regarding the next steps.",
    });
    form.reset();
  };

  return (
    <div className="w-full pt-32 pb-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Admissions" 
          subtitle="Take the first step towards a holistic education. Admissions open for Nursery to Class 10."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Information Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-serif font-bold mb-4">Admissions Notice</h3>
              <p className="mb-4 text-white/90 text-sm leading-relaxed">
                We are currently accepting applications for the upcoming academic year. Seats are limited to maintain our strict student-teacher ratio.
              </p>
              <div className="space-y-3 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="shrink-0 text-secondary mt-1" size={18} />
                  <span className="text-sm">Classes: Nursery to 10th</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="shrink-0 text-secondary mt-1" size={18} />
                  <span className="text-sm">Medium: English (CBSE)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="shrink-0 text-secondary mt-1" size={18} />
                  <span className="text-sm">Hostel Facility Available</span>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-serif font-bold text-foreground mb-6">Admission Process</h3>
              <ul className="space-y-6">
                <li className="relative pl-8">
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">1</div>
                  <h4 className="font-bold text-foreground text-sm">Submit Form</h4>
                  <p className="text-xs text-muted-foreground mt-1">Fill out the inquiry form online or visit campus.</p>
                </li>
                <li className="relative pl-8">
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">2</div>
                  <h4 className="font-bold text-foreground text-sm">Campus Tour & Interaction</h4>
                  <p className="text-xs text-muted-foreground mt-1">Parents and child meet with our faculty.</p>
                </li>
                <li className="relative pl-8">
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">3</div>
                  <h4 className="font-bold text-primary text-sm">Enrollment</h4>
                  <p className="text-xs text-muted-foreground mt-1">Submit documents and complete fee payment.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-8">
            <div className="bg-card border border-border p-8 md:p-12 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Admission Inquiry Form</h2>
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">Your inquiry has been successfully submitted. Our admission counselor will reach out to you within 24 hours.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Student Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Student Name *</label>
                      <input 
                        {...form.register("studentName")}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Enter child's name"
                      />
                      {form.formState.errors.studentName && (
                        <p className="text-destructive text-xs flex items-center gap-1"><AlertCircle size={12}/> {form.formState.errors.studentName.message}</p>
                      )}
                    </div>

                    {/* Parent Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Parent/Guardian Name *</label>
                      <input 
                        {...form.register("parentName")}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Enter your name"
                      />
                      {form.formState.errors.parentName && (
                        <p className="text-destructive text-xs flex items-center gap-1"><AlertCircle size={12}/> {form.formState.errors.parentName.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number *</label>
                      <input 
                        {...form.register("phone")}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="10-digit mobile number"
                      />
                      {form.formState.errors.phone && (
                        <p className="text-destructive text-xs flex items-center gap-1"><AlertCircle size={12}/> {form.formState.errors.phone.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address</label>
                      <input 
                        {...form.register("email")}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Optional"
                      />
                      {form.formState.errors.email && (
                        <p className="text-destructive text-xs flex items-center gap-1"><AlertCircle size={12}/> {form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Class Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Applying for Class *</label>
                    <select 
                      {...form.register("applyingForClass")}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
                    >
                      <option value="">Select a class</option>
                      <option value="Nursery">Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      {[1,2,3,4,5,6,7,8,9,10].map(c => (
                        <option key={c} value={`Class ${c}`}>Class {c}</option>
                      ))}
                    </select>
                    {form.formState.errors.applyingForClass && (
                      <p className="text-destructive text-xs flex items-center gap-1"><AlertCircle size={12}/> {form.formState.errors.applyingForClass.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Any Special Requirements / Queries</label>
                    <textarea 
                      {...form.register("message")}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Tell us anything else we should know..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-primary to-[#ff8c33] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-70 flex justify-center"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
