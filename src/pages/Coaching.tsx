import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, Brain, Clock, Target, Users, Zap, Star, CheckCircle, TrendingUp, Download, Smartphone, GraduationCap, Trophy, Briefcase, Landmark, User, Quote, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

export default function Coaching() {
  const [activeSection, setActiveSection] = useState(1);

  // Counting animation component
  const CountUpNumber = ({ target, suffix = "", duration = 2000 }: { target: string; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [isVisible]);

    useEffect(() => {
      if (!isVisible) return;

      const numericTarget = parseInt(target.replace(/[^0-9]/g, ""));
      const increment = numericTarget / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericTarget) {
          current = numericTarget;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, target, duration]);

    return (
      <span ref={ref}>
        {count}{suffix}
      </span>
    );
  };

  const academicCourses = [
    {
      id: "classes-8-10",
      icon: <BookOpen className="w-8 h-8" />,
      title: "Classes 8th, 9th, 10th",
      description: "Strong foundation with NCERT curriculum",
      features: ["Mathematics & Science", "English & Social Studies", "Regular Tests & Assignments", "Concept Building"],
      price: "₹8,999",
      duration: "per year",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: "classes-11-12",
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Classes 11th & 12th",
      description: "Board exam preparation with subject specialization",
      features: ["Science/Commerce/Arts", "Board Exam Focus", "Practical Training", "Career Guidance"],
      price: "₹15,999",
      duration: "per year",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "iit-jee",
      icon: <Trophy className="w-8 h-8" />,
      title: "IIT JEE (Mains + Advanced)",
      description: "Complete engineering entrance preparation",
      features: ["Physics, Chemistry, Maths", "Problem Solving Techniques", "Mock Tests & Analysis", "Previous Year Papers"],
      price: "₹24,999",
      duration: "per year",
      color: "from-orange-500 to-red-500"
    },
    {
      id: "neet",
      icon: <Brain className="w-8 h-8" />,
      title: "NEET Preparation",
      description: "Medical entrance exam excellence program",
      features: ["Biology, Physics, Chemistry", "NCERT + Advanced", "Biological Diagrams", "Medical Counseling"],
      price: "₹22,999",
      duration: "per year",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "olympiad",
      icon: <Star className="w-8 h-8" />,
      title: "Olympiad Training",
      description: "National & International Olympiad preparation",
      features: ["Mathematics Olympiad", "Science Olympiad", "Logical Reasoning", "International Standards"],
      price: "₹12,999",
      duration: "per year",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const competitiveCourses = [
    {
      id: "ssc",
      icon: <Briefcase className="w-8 h-8" />,
      title: "SSC (CGL, CHSL)",
      description: "Staff Selection Commission exam preparation",
      features: ["Quantitative Aptitude", "Reasoning Ability", "English Language", "General Awareness"],
      price: "₹18,999",
      duration: "6 months",
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: "state-exams",
      icon: <Landmark className="w-8 h-8" />,
      title: "State Level Exams",
      description: "State government job preparation",
      features: ["State-specific Syllabus", "Regional Language", "Local Current Affairs", "Previous Papers"],
      price: "₹16,999",
      duration: "6 months",
      color: "from-teal-500 to-cyan-500"
    },
    {
      id: "pcs",
      icon: <Award className="w-8 h-8" />,
      title: "PCS Preparation",
      description: "Provincial Civil Services exam coaching",
      features: ["General Studies", "Optional Subjects", "Interview Preparation", "Current Affairs"],
      price: "₹28,999",
      duration: "1 year",
      color: "from-amber-500 to-yellow-500"
    },
    {
      id: "banking",
      icon: <Target className="w-8 h-8" />,
      title: "Banking Exams",
      description: "Complete banking sector exam preparation",
      features: ["Banking Awareness", "Quantitative Aptitude", "Reasoning", "English & Computer"],
      price: "₹14,999",
      duration: "4 months",
      color: "from-green-500 to-teal-500"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/90 via-amber-900/80 to-yellow-900/70"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm-10 0c0-5.523-4.477-10-10-10S0 24.477 0 30s4.477 10 10 10 10-4.477 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl">
                <Target className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              IIT & NEET Coaching
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Classes 11-12 • Ancient Wisdom + Modern Science • Excellence in Competitive Exams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Enroll Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/40 hover:bg-white/30 transition-all duration-300"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid - Enhanced Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm-10 0c0-5.523-4.477-10-10-10S0 14.477 0 20s4.477 10 10 10 10-4.477 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-6">
              <Star className="w-5 h-5 text-orange-600" />
              <span className="text-amber-900 font-semibold">Our Excellence</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-amber-900 mb-6">
              Why Choose Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                Gurukul Coaching?
              </span>
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of ancient Vedic wisdom and modern competitive exam preparation, 
              creating a unique learning environment that nurtures excellence
            </p>
          </motion.div>

          {/* Enhanced Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-10 h-10" />,
                title: "Expert Faculty",
                description: "IITians and Doctors with 10+ years of teaching excellence",
                features: ["Subject Specialists", "Research Experience", "Mentors"],
                color: "from-orange-500 to-amber-500",
                bgColor: "from-orange-50 to-amber-50",
                borderColor: "border-orange-200"
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Small Batch Size",
                description: "Personalized attention with optimal 1:20 student-teacher ratio",
                features: ["Individual Focus", "Doubt Clearing", "Progress Tracking"],
                color: "from-amber-500 to-yellow-500",
                bgColor: "from-amber-50 to-yellow-50",
                borderColor: "border-amber-200"
              },
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Comprehensive Study Material",
                description: "Updated notes, practice papers, and comprehensive test series",
                features: ["NCERT Coverage", "Previous Papers", "Mock Tests"],
                color: "from-yellow-500 to-orange-500",
                bgColor: "from-yellow-50 to-orange-50",
                borderColor: "border-yellow-200"
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Regular Tests & Analysis",
                description: "Weekly assessments with detailed performance analytics",
                features: ["Weekly Tests", "Performance Reports", "AI Analysis"],
                color: "from-orange-600 to-amber-600",
                bgColor: "from-orange-50 to-amber-50",
                borderColor: "border-orange-200"
              },
              {
                icon: <Clock className="w-10 h-10" />,
                title: "Flexible Timing",
                description: "Weekend and weekday batches designed for your convenience",
                features: ["Weekend Batches", "Online Options", "Recorded Classes"],
                color: "from-amber-600 to-yellow-600",
                bgColor: "from-amber-50 to-yellow-50",
                borderColor: "border-amber-200"
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Proven Results",
                description: "Outstanding 95% selection rate in competitive exams",
                features: ["95% Success Rate", "Top Rankers", "Alumni Network"],
                color: "from-yellow-600 to-orange-600",
                bgColor: "from-yellow-50 to-orange-50",
                borderColor: "border-yellow-200"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                {/* Card with enhanced design */}
                <div className={`relative bg-gradient-to-br ${feature.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${feature.borderColor} group-hover:scale-105 group-hover:-translate-y-2`}>
                  
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color} rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Icon with enhanced styling */}
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {feature.icon}
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-amber-600 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-amber-700 mb-6 leading-relaxed">{feature.description}</p>
                  
                  {/* Feature list */}
                  <div className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                        <span className="text-sm text-amber-800 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover indicator */}
                  <div className={`absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0 scale-75 translate-x-2 translate-y-2`}>
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Floating decoration */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: index * 0.5 
                  }}
                  className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br ${feature.color} rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                ></motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Star className="w-5 h-5" />
              <span>Join 5000+ Successful Students</span>
              <Star className="w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section with Toggle */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Our Courses</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Choose your path to success with our specialized programs
            </p>
          </motion.div>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-lg flex">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveSection(1)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === 1
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md"
                    : "text-amber-700 hover:text-amber-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Academic Classes
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveSection(2)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === 2
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md"
                    : "text-amber-700 hover:text-amber-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Competitive Exams
                </div>
              </motion.button>
            </div>
          </div>

          {/* Course Cards */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(activeSection === 1 ? academicCourses : competitiveCourses).map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-orange-100">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${course.color} p-6`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        {course.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-bold text-white">{course.title}</h3>
                        <p className="text-white/80 text-sm">{course.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      {course.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-2xl font-bold text-amber-900">{course.price}</p>
                        <p className="text-xs text-gray-500">{course.duration}</p>
                      </div>
                      <Link href={`/course/${course.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-sm"
                      >
                        View Details <ArrowRight className="w-3 h-3" />
                      </motion.button>
                    </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Section - Enhanced Mobile Design */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-base sm:text-lg text-amber-700 max-w-2xl mx-auto">
              Proud moments of our students' success
            </p>
          </motion.div>

          {/* Responsive Grid - Mobile First */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { number: "150+", label: "IIT Selections", suffix: "+", color: "from-orange-400 to-amber-500" },
              { number: "200+", label: "NEET Selections", suffix: "+", color: "from-amber-400 to-yellow-500" },
              { number: "95%", label: "Success Rate", suffix: "%", color: "from-yellow-400 to-orange-500" },
              { number: "1000+", label: "Students Taught", suffix: "+", color: "from-orange-500 to-amber-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                {/* Enhanced Mobile Card */}
                <div className="relative">
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Main circle */}
                  <div className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                    <span className="text-lg sm:text-2xl font-bold text-white tabular-nums">
                      <CountUpNumber target={stat.number} suffix={stat.suffix} duration={2500} />
                    </span>
                  </div>
                  
                  {/* Label */}
                  <p className="text-sm sm:text-base font-semibold text-amber-900 leading-tight">
                    {stat.label}
                  </p>
                  
                  {/* Mobile decoration */}
                  <div className={`absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br ${stat.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile CTA Enhancement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 sm:mt-12 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="text-sm sm:text-base">Join Our Success Story</span>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">5000+ Students</span>
                <Star className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
      {/* Reviews Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-6">
              <Star className="w-5 h-5 text-orange-600" />
              <span className="text-amber-900 font-semibold">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-6">
              What Our Students Say
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Real stories of success from our brilliant students who achieved their dreams
            </p>
          </motion.div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Arjun Verma",
                role: "IIT Delhi - CSE",
                year: "Batch 2025",
                rating: 5,
                image: "👨‍🎓",
                review: "Brahma Gurukul transformed my life! The personalized attention and expert guidance helped me crack JEE Advanced with AIR 342. The Vedic approach to learning made complex concepts seem simple.",
                achievement: "AIR 342 in JEE Advanced"
              },
              {
                name: "Priya Sharma",
                role: "AIIMS Delhi - MBBS",
                year: "Batch 2025",
                rating: 5,
                image: "👩‍⚕️",
                review: "The medical coaching here is exceptional. Dr. Priya Nair's guidance and the comprehensive study material prepared me perfectly for NEET. I scored 695/720 and couldn't be happier!",
                achievement: "695/720 in NEET"
              },
              {
                name: "Rahul Kumar",
                role: "IIT Bombay - Mechanical",
                year: "Batch 2024",
                rating: 5,
                image: "👨‍🔧",
                review: "From an average student to IITian - this journey was possible only because of Brahma Gurukul. The small batch sizes and regular tests kept me on track throughout.",
                achievement: "AIR 892 in JEE Advanced"
              },
              {
                name: "Anjali Patel",
                role: "NEET - MBBS",
                year: "Batch 2024",
                rating: 5,
                image: "👩‍🎓",
                review: "The biology classes here are outstanding! The detailed diagrams and regular practice sessions helped me score 680 in NEET. Thank you to the entire faculty!",
                achievement: "680/720 in NEET"
              },
              {
                name: "Karan Singh",
                role: "IIT Madras - ECE",
                year: "Batch 2023",
                rating: 5,
                image: "👨‍💻",
                review: "The problem-solving techniques taught here are invaluable. I secured AIR 567 in JEE Advanced and credit goes to the amazing faculty and test series.",
                achievement: "AIR 567 in JEE Advanced"
              },
              {
                name: "Sneha Reddy",
                role: "SSC CGL - Officer",
                year: "Batch 2024",
                rating: 5,
                image: "👩‍💼",
                review: "After graduating, I joined the SSC coaching program. The comprehensive coverage and interview preparation helped me clear CGL in my first attempt!",
                achievement: "SSC CGL Qualified"
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-orange-100 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-2xl">
                        {review.image}
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-900">{review.name}</h4>
                        <p className="text-sm text-orange-600">{review.role}</p>
                        <p className="text-xs text-gray-500">{review.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="flex-1 mb-4">
                    <p className="text-gray-700 leading-relaxed">{review.review}</p>
                  </div>

                  {/* Achievement Badge */}
                  <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg px-4 py-2 text-center">
                    <p className="text-sm font-semibold text-orange-800">
                      🏆 {review.achievement}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-6">
              <Quote className="w-5 h-5 text-orange-600" />
              <span className="text-amber-900 font-semibold">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our coaching programs
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {[
              {
                question: "What is the admission process for Brahma Gurukul?",
                answer: "Our admission process is simple: 1) Fill the enrollment form on our website, 2) Attend a counseling session, 3) Complete the documentation and fee payment. We offer direct admissions for most courses, with a simple assessment test for advanced programs."
              },
              {
                question: "Do you provide online classes?",
                answer: "Yes! We offer both offline and online classes. Our online platform includes live interactive sessions, recorded lectures for revision, online test series, and doubt-clearing chat support. You can choose the mode that suits your schedule."
              },
              {
                question: "What is the batch size for each course?",
                answer: "We maintain small batch sizes of 20-25 students to ensure personalized attention. This allows our faculty to focus on individual student needs and provide better doubt-clearing support."
              },
              {
                question: "Do you provide study materials?",
                answer: "Absolutely! We provide comprehensive study materials including detailed notes, practice papers, previous year question papers, mock test series, and reference books. All materials are regularly updated based on the latest exam patterns."
              },
              {
                question: "What is the fee structure and are there any installment options?",
                answer: "Our fee structure varies by course duration and complexity. Fees range from ₹8,999 to ₹28,999. We offer flexible payment options including monthly, quarterly, and annual payment plans. Scholarships are available for meritorious students."
              },
              {
                question: "Do you provide hostel facilities?",
                answer: "Yes, we have partnered with nearby hostels to provide safe and comfortable accommodation for outstation students. Hostels include meals, study areas, and are located within 2km of our campus."
              },
              {
                question: "What is your success rate?",
                answer: "We're proud of our 95% success rate across all competitive exams. In 2025, 150+ students cleared IIT JEE, 200+ cleared NEET, and many others succeeded in various competitive exams."
              },
              {
                question: "How can I track my child's progress?",
                answer: "We provide regular progress reports through our parent portal, conduct monthly parent-teacher meetings, and share test performance analytics. You can also schedule appointments with faculty to discuss your child's progress."
              }
            ].map((faq, index) => {
              const [isOpen, setIsOpen] = useState(false);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-orange-50 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Quote className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="font-semibold text-amber-900 pr-4">{faq.question}</h3>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-orange-600" />
                      </motion.div>
                    </button>
                    
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: isOpen ? "auto" : 0, 
                        opacity: isOpen ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-700 leading-relaxed pl-11">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-orange-100 mb-6">
                Our team is here to help you make the right decision for your future
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-orange-900 font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Call Us: +91 98765 43210
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-orange-700 text-white font-semibold rounded-full hover:bg-orange-800 transition-all duration-300"
                >
                  Schedule a Visit
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Learn Anytime, Anywhere</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Download our mobile app and access study materials, tests, and live classes on the go
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-amber-900">Brahma Gurukul App</h3>
                    <p className="text-amber-700">Your pocket learning companion</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "📚 Access study materials 24/7",
                    "📝 Practice tests and quizzes",
                    "🎥 Live class recordings",
                    "💬 Doubt clearing chat",
                    "📊 Performance analytics",
                    "🔔 Exam reminders and updates"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs opacity-80">Download on the</p>
                      <p className="text-sm font-semibold">App Store</p>
                    </div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs opacity-80">Get it on</p>
                      <p className="text-sm font-semibold">Google Play</p>
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                {/* Phone mockup */}
                <div className="mx-auto w-64 h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone screen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50">
                      {/* Status bar */}
                      <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-6 py-2 flex justify-between items-center">
                        <span className="text-white text-xs font-medium">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-3 bg-white rounded-sm"></div>
                          <div className="w-4 h-3 bg-white rounded-sm"></div>
                          <div className="w-4 h-3 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* App content */}
                      <div className="p-4 space-y-4">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl mx-auto mb-2"></div>
                          <h4 className="font-bold text-amber-900">Brahma Gurukul</h4>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="w-full h-2 bg-orange-200 rounded mb-2"></div>
                            <div className="w-3/4 h-2 bg-orange-200 rounded"></div>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="w-full h-2 bg-amber-200 rounded mb-2"></div>
                            <div className="w-2/3 h-2 bg-amber-200 rounded"></div>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="w-full h-2 bg-yellow-200 rounded mb-2"></div>
                            <div className="w-4/5 h-2 bg-yellow-200 rounded"></div>
                          </div>
                        </div>
                        
                        <div className="flex justify-center gap-4">
                          <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
                          <div className="w-12 h-12 bg-amber-500 rounded-full"></div>
                          <div className="w-12 h-12 bg-yellow-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <Download className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <Star className="w-7 h-7 text-white" />
                </motion.div>
              </div>
            </motion.div>
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
              Start Your Journey to Success
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join Brahma Gurukul's Coaching Program and achieve your dreams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-orange-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Free Demo Class
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-orange-700 text-white font-bold rounded-full border-2 border-orange-500 hover:bg-orange-600 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
