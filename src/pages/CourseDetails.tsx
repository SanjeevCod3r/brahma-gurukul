import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Clock, Award, BookOpen, Star, MapPin } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

// Course data (in a real app, this would come from an API or context)
const courseData = {
  "classes-8-10": {
    title: "Classes 8th, 9th, 10th",
    description: "Strong foundation with NCERT curriculum",
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-blue-500 to-indigo-500",
    price: "₹8,999",
    duration: "1 year",
    image: "📚",
    longDescription: "Our foundation program for Classes 8-10 focuses on building strong conceptual understanding and preparing students for higher education and competitive exams.",
    features: [
      "Mathematics & Science",
      "English & Social Studies", 
      "Regular Tests & Assignments",
      "Concept Building",
      "Individual Attention",
      "Progress Tracking"
    ],
    highlights: [
      "Experienced Faculty",
      "Small Batch Size (1:20)",
      "Weekly Tests",
      "Parent-Teacher Meetings",
      "Study Materials",
      "Doubt Clearing Sessions"
    ],
    schedule: [
      "Monday - Friday: 4:00 PM - 7:00 PM",
      "Saturday: 9:00 AM - 1:00 PM",
      "Sunday: Extra Classes & Tests"
    ]
  },
  "classes-11-12": {
    title: "Classes 11th & 12th",
    description: "Board exam preparation with subject specialization",
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    price: "₹15,999",
    duration: "1 year",
    image: "🎓",
    longDescription: "Comprehensive program for Classes 11-12 focusing on board exams and foundation for competitive entrance tests.",
    features: [
      "Science/Commerce/Arts",
      "Board Exam Focus",
      "Practical Training",
      "Career Guidance"
    ],
    highlights: [
      "Subject Specialists",
      "Board Pattern Tests",
      "Practical Sessions",
      "Career Counseling",
      "Study Materials",
      "Mock Exams"
    ],
    schedule: [
      "Monday - Friday: 3:00 PM - 8:00 PM",
      "Saturday: 9:00 AM - 2:00 PM",
      "Sunday: Tests & Revision"
    ]
  },
  "iit-jee": {
    title: "IIT JEE (Mains + Advanced)",
    description: "Complete engineering entrance preparation",
    icon: <Award className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    price: "₹24,999",
    duration: "1 year",
    image: "🏆",
    longDescription: "Intensive IIT JEE preparation program covering Mains and Advanced exams with expert faculty and comprehensive study materials.",
    features: [
      "Physics, Chemistry, Maths",
      "Problem Solving Techniques",
      "Mock Tests & Analysis",
      "Previous Year Papers"
    ],
    highlights: [
      "IITian Faculty",
      "Small Batch Size",
      "All India Test Series",
      "Personal Mentoring",
      "Study Materials",
      "Doubt Sessions"
    ],
    schedule: [
      "Weekdays: 4:00 PM - 8:00 PM",
      "Saturday: Full Day Classes",
      "Sunday: Tests & Analysis"
    ]
  },
  "neet": {
    title: "NEET Preparation",
    description: "Medical entrance exam excellence program",
    icon: <Star className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    price: "₹22,999",
    duration: "1 year",
    image: "⚕️",
    longDescription: "Comprehensive NEET preparation program focusing on Biology, Physics, and Chemistry with medical entrance expertise.",
    features: [
      "Biology, Physics, Chemistry",
      "NCERT + Advanced",
      "Biological Diagrams",
      "Medical Counseling"
    ],
    highlights: [
      "Medical Faculty",
      "Biology Focus",
      "NCERT Coverage",
      "Test Series",
      "Counseling Support",
      "Lab Sessions"
    ],
    schedule: [
      "Weekdays: 4:00 PM - 8:00 PM",
      "Saturday: 9:00 AM - 3:00 PM",
      "Sunday: Tests & Revision"
    ]
  },
  "olympiad": {
    title: "Olympiad Training",
    description: "National & International Olympiad preparation",
    icon: <Star className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-500",
    price: "₹12,999",
    duration: "1 year",
    image: "🌟",
    longDescription: "Specialized training for National and International Olympiad exams in Mathematics and Science.",
    features: [
      "Mathematics Olympiad",
      "Science Olympiad",
      "Logical Reasoning",
      "International Standards"
    ],
    highlights: [
      "Olympiad Experts",
      "International Curriculum",
      "Practice Tests",
      "Competition Exposure",
      "Study Materials",
      "Performance Analysis"
    ],
    schedule: [
      "Saturday: 9:00 AM - 1:00 PM",
      "Sunday: 9:00 AM - 1:00 PM",
      "Weekdays: Online Support"
    ]
  },
  "ssc": {
    title: "SSC (CGL, CHSL)",
    description: "Staff Selection Commission exam preparation",
    icon: <Award className="w-8 h-8" />,
    color: "from-indigo-500 to-blue-500",
    price: "₹18,999",
    duration: "6 months",
    image: "📋",
    longDescription: "Complete SSC exam preparation for CGL, CHSL, and other SSC examinations with comprehensive coverage.",
    features: [
      "Quantitative Aptitude",
      "Reasoning Ability",
      "English Language",
      "General Awareness"
    ],
    highlights: [
      "SSC Specialists",
      "Previous Papers",
      "Mock Interviews",
      "Current Affairs",
      "Test Series",
      "Study Materials"
    ],
    schedule: [
      "Monday - Friday: 6:00 PM - 9:00 PM",
      "Saturday: 9:00 AM - 2:00 PM",
      "Sunday: Tests & Revision"
    ]
  },
  "state-exams": {
    title: "State Level Exams",
    description: "State government job preparation",
    icon: <MapPin className="w-8 h-8" />,
    color: "from-teal-500 to-cyan-500",
    price: "₹16,999",
    duration: "6 months",
    image: "🏛️",
    longDescription: "State-specific exam preparation for various government jobs with regional language support.",
    features: [
      "State-specific Syllabus",
      "Regional Language",
      "Local Current Affairs",
      "Previous Papers"
    ],
    highlights: [
      "State Experts",
      "Regional Focus",
      "Language Support",
      "Local Updates",
      "Test Series",
      "Interview Prep"
    ],
    schedule: [
      "Monday - Friday: 6:00 PM - 9:00 PM",
      "Saturday: 10:00 AM - 3:00 PM",
      "Sunday: Tests & Revision"
    ]
  },
  "pcs": {
    title: "PCS Preparation",
    description: "Provincial Civil Services exam coaching",
    icon: <Award className="w-8 h-8" />,
    color: "from-amber-500 to-yellow-500",
    price: "₹28,999",
    duration: "1 year",
    image: "🎖️",
    longDescription: "Comprehensive PCS exam preparation covering prelims, mains, and interview stages.",
    features: [
      "General Studies",
      "Optional Subjects",
      "Interview Preparation",
      "Current Affairs"
    ],
    highlights: [
      "Civil Service Experts",
      "Interview Training",
      "Current Affairs",
      "Test Series",
      "Study Materials",
      "Mentorship"
    ],
    schedule: [
      "Monday - Friday: 5:00 PM - 9:00 PM",
      "Saturday: 9:00 AM - 4:00 PM",
      "Sunday: Tests & Current Affairs"
    ]
  },
  "banking": {
    title: "Banking Exams",
    description: "Complete banking sector exam preparation",
    icon: <Award className="w-8 h-8" />,
    color: "from-green-500 to-teal-500",
    price: "₹14,999",
    duration: "4 months",
    image: "🏦",
    longDescription: "Complete preparation for banking exams including PO, Clerk, and specialist officer positions.",
    features: [
      "Banking Awareness",
      "Quantitative Aptitude",
      "Reasoning",
      "English & Computer"
    ],
    highlights: [
      "Banking Experts",
      "Latest Pattern",
      "Mock Interviews",
      "Speed Tests",
      "Study Materials",
      "GD Practice"
    ],
    schedule: [
      "Monday - Friday: 6:00 PM - 9:00 PM",
      "Saturday: 9:00 AM - 2:00 PM",
      "Sunday: Speed Tests & Revision"
    ]
  }
};

export default function CourseDetails() {
  const [location] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Extract course ID from URL
  const courseId = location.split("/").pop() || "";
  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-amber-900 mb-4">Course Not Found</h1>
          <Link href="/coaching">
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300">
              Back to Coaching
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert("Enrollment form submitted successfully! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", course: course.title, message: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-90`}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm-10 0c0-5.523-4.477-10-10-10S0 24.477 0 30s4.477 10 10 10 10-4.477 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link href="/coaching" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Courses
              </motion.button>
            </Link>
            
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl shadow-2xl">
                {course.image}
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              {course.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              {course.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-white font-bold text-2xl">{course.price}</span>
                <span className="text-white/80">/{course.duration}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('enrollment-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white text-orange-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Enroll Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6">About This Course</h2>
                <p className="text-lg text-amber-700 leading-relaxed">
                  {course.longDescription}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6">Course Highlights</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-orange-100">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${course.color} rounded-lg flex items-center justify-center`}>
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-gray-800">{highlight}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Schedule */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6">Class Schedule</h2>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                  <div className="space-y-4">
                    {course.schedule.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <Clock className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Enrollment Form */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                id="enrollment-form"
                className="bg-white rounded-2xl shadow-xl p-8 sticky top-8"
              >
                <h3 className="text-2xl font-serif font-bold text-amber-900 mb-6">Enroll Now</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Selected Course</label>
                    <input
                      type="text"
                      name="course"
                      value={course.title}
                      readOnly
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Any questions or special requirements..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                        : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
                  </motion.button>
                </form>
                
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Need Help?</strong><br />
                    Call us: <a href="tel:+919876543210" className="text-orange-600 hover:underline">+91 98765 43210</a><br />
                    Email: <a href="mailto:info@brahmagurukul.com" className="text-orange-600 hover:underline">info@brahmagurukul.com</a>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900 to-amber-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join thousands of students who have achieved their dreams with Brahma Gurukul
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('enrollment-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-orange-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Enroll Now
              </motion.button>
              <Link href="/coaching">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-orange-700 text-white font-bold rounded-full border-2 border-orange-500 hover:bg-orange-600 transition-all duration-300"
                >
                  View Other Courses
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
