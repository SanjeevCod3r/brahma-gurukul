import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, Brain, Clock, Target, Users, Zap, Star, CheckCircle, TrendingUp, Download, Smartphone } from "lucide-react";

export default function Coaching() {
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

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Why Choose Our Coaching?</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Combining ancient Gurukul wisdom with modern competitive exam preparation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Expert Faculty",
                description: "IITians and Doctors with 10+ years experience",
                color: "from-orange-500 to-amber-500"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Small Batch Size",
                description: "Personalized attention with 1:20 ratio",
                color: "from-amber-500 to-yellow-500"
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Comprehensive Study Material",
                description: "Updated notes, practice papers, and test series",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Regular Tests & Analysis",
                description: "Weekly tests with detailed performance reports",
                color: "from-orange-600 to-amber-600"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Flexible Timing",
                description: "Weekend and weekday batches available",
                color: "from-amber-600 to-yellow-600"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Proven Results",
                description: "95% selection rate in IIT/NEET exams",
                color: "from-yellow-600 to-orange-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-amber-900 mb-3">{feature.title}</h3>
                  <p className="text-amber-700">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
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
              Specialized programs for IIT JEE and NEET preparation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* IIT JEE Course */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">IIT JEE Coaching</h3>
                    <p className="text-orange-100">Classes 11-12</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {[
                    "Physics, Chemistry, Mathematics",
                    "Regular problem-solving sessions",
                    "Previous year paper analysis",
                    "Mock tests with All India Ranking",
                    "Doubt clearing sessions",
                    "Motivational workshops"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-orange-100">
                  <div>
                    <p className="text-2xl font-bold text-amber-900">₹24,999</p>
                    <p className="text-sm text-gray-500">per year</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  >
                    Enroll Now <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* NEET Course */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-amber-600 to-yellow-600 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">NEET Coaching</h3>
                    <p className="text-amber-100">Classes 11-12</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {[
                    "Physics, Chemistry, Biology",
                    "NCERT + Advanced concepts",
                    "Biological diagram practice",
                    "Regular medical entrance tests",
                    "Personal mentorship",
                    "Career guidance sessions"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-amber-100">
                  <div>
                    <p className="text-2xl font-bold text-amber-900">₹22,999</p>
                    <p className="text-sm text-gray-500">per year</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  >
                    Enroll Now <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Our Achievements</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Proud moments of our students' success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "IIT Selections" },
              { number: "200+", label: "NEET Selections" },
              { number: "95%", label: "Success Rate" },
              { number: "1000+", label: "Students Taught" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">{stat.number}</span>
                </div>
                <p className="text-lg font-semibold text-amber-900">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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
