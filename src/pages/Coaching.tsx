import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, Brain, Clock, Target, Users, Zap, Star, CheckCircle, TrendingUp } from "lucide-react";

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
