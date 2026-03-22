import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Languages, Calculator, Brain, Heart, Users, Clock, Target, Sparkles, Leaf, Award, Star, ArrowRight, CheckCircle, TreePine } from "lucide-react";

export default function Academic() {
  const academicSubjects = [
    { icon: Calculator, name: "Mathematics", desc: "Building analytical & problem-solving skills with Vedic mathematics techniques." },
    { icon: FlaskConical, name: "Science", desc: "Physics, Chemistry & Biology with practical labs and ancient scientific wisdom." },
    { icon: Languages, name: "Languages", desc: "English, Hindi, and Sanskrit with classical literature appreciation." },
    { icon: BookOpen, name: "Social Studies", desc: "History, Geography, and Civics with Indian heritage integration." },
  ];

  const vedicSubjects = [
    { icon: Brain, name: "Vedic Mathematics", desc: "Ancient calculation techniques for mental agility." },
    { icon: Heart, name: "Yoga & Meditation", desc: "Physical and mental wellness through ancient practices." },
    { icon: Languages, name: "Sanskrit & Scriptures", desc: "Learning classical language and ancient texts." },
    { icon: Leaf, name: "Environmental Studies", desc: "Understanding nature through traditional ecological wisdom." },
  ];

  const dailyRoutine = [
    { time: "5:00 AM", title: "Brahma Muhurta Wake Up", desc: "Rising before the sun to harness the purest energy of the day." },
    { time: "5:30 AM", title: "Yoga & Pranayama", desc: "Physical and breath exercises for vitality and focus." },
    { time: "6:15 AM", title: "Meditation & Chanting", desc: "Vedic mantras and silent meditation for mental clarity." },
    { time: "7:00 AM", title: "Sattvic Breakfast", desc: "Pure, vegetarian, and nutritious meal." },
    { time: "8:00 AM - 1:00 PM", title: "Academic Classes", desc: "CBSE curriculum with integrated Vedic wisdom." },
    { time: "1:00 PM", title: "Sattvic Lunch", desc: "Nutritious meal prepared with traditional wisdom." },
    { time: "2:00 PM - 4:00 PM", title: "Vedic Learning", desc: "Ancient sciences, arts, and spiritual education." },
    { time: "4:00 PM - 5:30 PM", title: "Sports & Seva", desc: "Physical activities and selfless service to the campus." },
    { time: "6:00 PM", title: "Sandhya Aarti", desc: "Evening prayers and reflection." },
    { time: "7:00 PM - 8:30 PM", title: "Study & Homework", desc: "Reinforcing learning with peaceful environment." },
    { time: "9:00 PM", title: "Rest", desc: "Early sleep to maintain the circadian rhythm." },
  ];

  const integratedFeatures = [
    {
      icon: Brain,
      title: "Dual Curriculum Excellence",
      description: "Perfect blend of CBSE academics and ancient Vedic knowledge",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Target,
      title: "Holistic Development",
      description: "Nurturing mind, body, and spirit through balanced education",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Users,
      title: "Guru-Shishya Parampara",
      description: "Sacred teacher-student relationship for personalized guidance",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Clock,
      title: "Timeless Wisdom + Modern Skills",
      description: "Ancient values combined with contemporary competencies",
      color: "from-orange-600 to-amber-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-x-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden overflow-x-hidden min-h-screen flex items-center">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/95 via-amber-900/90 to-yellow-900/85"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.15'%3E%3Cpath d='M20 20c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6zm-6 0c0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6-2.686 6-6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* School Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="flex justify-center mb-6 sm:mb-8"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl sm:rounded-3xl flex items-center justify-center text-3xl sm:text-4xl md:text-5xl shadow-2xl border-4 border-white/20">
                🏫
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-4 sm:mb-6 px-4 leading-tight"
            >
              Shree Kamta Prasad
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-orange-200 mt-1 sm:mt-2">
                Memorial Shikshad Sansthan
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4 mb-6 sm:mb-8"
            >
              🌟 Where Ancient Wisdom Meets Modern Excellence 🌟
            </motion.p>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                <span className="text-white font-semibold text-sm sm:text-base">CBSE Curriculum</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <TreePine className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                <span className="text-white font-semibold text-sm sm:text-base">Vedic Values</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
                <span className="text-white font-semibold text-sm sm:text-base">95% Success Rate</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Explore Programs
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/30 transition-all duration-300 text-sm sm:text-base"
              >
                Schedule Visit
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Integrated Approach Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-orange-50 to-amber-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-orange-600" />
              <span className="text-amber-900 font-semibold">Our Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-900 mb-4 px-4">Integrated Learning Approach</h2>
            <p className="text-base sm:text-lg text-amber-700 max-w-2xl mx-auto px-4">
              Combining the best of both worlds for comprehensive education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4">
            {integratedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-amber-900 mb-2 text-center">{feature.title}</h3>
                  <p className="text-amber-700 text-sm text-center">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Academic Curriculum Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-100 to-amber-100 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full mb-6">
              <BookOpen className="w-5 h-5 text-orange-700" />
              <span className="text-orange-900 font-semibold">CBSE Curriculum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-900 mb-4 px-4">Modern Academic Excellence</h2>
            <p className="text-base sm:text-lg text-amber-700 max-w-2xl mx-auto px-4">
              Comprehensive CBSE education enhanced with traditional wisdom
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4">
            {academicSubjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <subject.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-amber-900 mb-2">{subject.name}</h3>
                <p className="text-amber-700 text-sm">{subject.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-orange-600">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-semibold">Expert Faculty</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Vedic Wisdom Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full mb-6">
              <TreePine className="w-5 h-5 text-amber-700" />
              <span className="text-amber-900 font-semibold">Ancient Wisdom</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-900 mb-4 px-4">Vedic Knowledge & Values</h2>
            <p className="text-base sm:text-lg text-amber-700 max-w-2xl mx-auto px-4">
              Timeless traditions for modern success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4">
            {vedicSubjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                  <subject.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-amber-900 mb-2">{subject.name}</h3>
                <p className="text-amber-700 text-sm">{subject.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-amber-600">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-semibold">Traditional Masters</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Routine Section - Mobile Optimized */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden overflow-x-hidden">
        {/* Simplified Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-orange-200 rounded-full blur-3xl opacity-5 sm:opacity-10"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-amber-200 rounded-full blur-3xl opacity-5 sm:opacity-10"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-4 sm:mb-6">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
              <span className="text-amber-900 font-semibold text-sm sm:text-base">Daily Schedule</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-4 sm:mb-6 px-4">
              A Day at Brahma Gurukul
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-amber-700 max-w-2xl mx-auto leading-relaxed px-4">
              Experience the perfect balance of discipline, learning, and spiritual growth
            </p>
          </motion.div>

          {/* Mobile-Optimized Timeline */}
          <div className="max-w-5xl mx-auto px-2 sm:px-4">
            <div className="relative">
              {/* Responsive Timeline Line */}
              <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-orange-400 via-amber-400 to-yellow-400 rounded-full"></div>
              
              {/* Timeline Items - Mobile First */}
              <div className="space-y-4 sm:space-y-6">
                {dailyRoutine.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ 
                      delay: Math.min(index * 0.05, 0.3), // Faster delays for mobile
                      duration: 0.3
                    }}
                    className="relative"
                  >
                    {/* Responsive Timeline Dot */}
                    <div className="absolute left-4 sm:left-6 md:left-8 transform -translate-x-1/2 z-20">
                      <div className="w-8 h-8 sm:w-10 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                        <Clock className="w-3 h-3 sm:w-4 sm:w-6 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>

                    {/* Mobile-Optimized Content Card */}
                    <div className="ml-12 sm:ml-16 md:ml-24 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-md sm:shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
                      {/* Responsive Time Badge */}
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full mb-2 sm:mb-4">
                        <span className="text-xs sm:text-sm">⏰</span>
                        <span className="text-xs sm:text-sm md:text-base">{activity.time}</span>
                      </div>

                      {/* Responsive Title and Description */}
                      <div className="space-y-1 sm:space-y-3">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-amber-900 pr-8 sm:pr-10">
                          {activity.title}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-amber-700 leading-relaxed">
                          {activity.desc}
                        </p>
                      </div>

                      {/* Responsive Activity Icon */}
                      <div className="absolute top-2 sm:top-4 md:top-6 right-2 sm:right-4 md:right-6">
                        <div className="w-6 h-6 sm:w-8 sm:h-10 md:w-10 md:h-10 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center">
                          <span className="text-xs sm:text-sm md:text-lg">
                            {index === 0 && '🌅'}
                            {index === 1 && '🧘'}
                            {index === 2 && '🕉️'}
                            {index === 3 && '🥗'}
                            {index === 4 && '📚'}
                            {index === 5 && '🍛'}
                            {index === 6 && '📖'}
                            {index === 7 && '⚽'}
                            {index === 8 && '🙏'}
                            {index === 9 && '💡'}
                            {index === 10 && '😴'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile-Optimized Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 sm:gap-4 px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-full shadow-lg">
              <span className="text-sm sm:text-base">⏰</span>
              <span className="text-sm sm:text-base">24 Hours of Holistic Learning</span>
              <span className="text-sm sm:text-base">🌟</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm-10 0c0-5.523-4.477-10-10-10S0 24.477 0 30s4.477 10 10 10 10-4.477 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-6">
              <Users className="w-5 h-5 text-orange-600" />
              <span className="text-amber-900 font-semibold">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-6">
              Meet Our Visionaries
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              The dedicated educators and leaders shaping the future of our students
            </p>
          </motion.div>

          {/* Founder Section - Modern Split Style */}
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Side - Image */}
                <div className="relative h-80 md:h-auto min-h-[400px] bg-gradient-to-br from-orange-700 to-amber-800 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20"></div>
                  {/* Geometric Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm-10 0c0-5.523-4.477-10-10-10S0 24.477 0 30s4.477 10 10 10 10-4.477 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4"
                    >
                      <img 
                        src="/images/Academic Founder.png" 
                        alt="Harisharan Rajput - Founder & Director"
                        className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
                      />
                    </motion.div>
                    <div className="text-white/90 text-sm sm:text-base font-medium text-center">20+ Years of Excellence</div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                      <Award className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-semibold">Founder</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-2">Harisharan Rajput</h3>
                    <p className="text-orange-100 font-semibold mb-4">Founder & Director</p>
                    
                    <div className="space-y-4 mb-6">
                      <p className="text-white/90 leading-relaxed">
                        IIT Delhi alumnus revolutionizing education through the perfect blend of ancient Vedic wisdom and modern scientific approach.
                      </p>
                      <p className="text-white/80 text-sm">
                        Passionate about creating leaders who are academically brilliant and culturally rooted.
                      </p>
                    </div>

                    {/* Expertise Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        🎓 IIT Delhi
                      </div>
                      <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        📚 Ph.D. Education
                      </div>
                      <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        🕉️ Vedic Studies
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="border-l-3 border-white/40 pl-4">
                      <p className="text-white/90 italic text-sm">
                        "Education is not just about filling minds with facts, but about lighting the fire of curiosity and wisdom."
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6zm-6 0c0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6 6-2.686 6-6z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">
                  🕉️
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-6">Our Vision</h3>
                <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed mb-8">
                  To create a new generation of leaders who are not only academically brilliant but also rooted in cultural values, 
                  equipped with ancient wisdom and modern knowledge to face global challenges with confidence and integrity.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-2 text-white">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-semibold">Excellence</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <BookOpen className="w-5 h-5" />
                    <span className="font-semibold">Wisdom</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Heart className="w-5 h-5" />
                    <span className="font-semibold">Service</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-900 mb-4 px-4">Benefits of Integrated Learning</h2>
            <p className="text-base sm:text-lg text-amber-700 max-w-2xl mx-auto px-4">
              Why our approach creates exceptional individuals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-orange-100"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-900">Academic Excellence</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Strong foundation in CBSE curriculum with competitive exam preparation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Enhanced cognitive abilities through Vedic mathematics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Improved concentration and memory through meditation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Multilingual proficiency including Sanskrit</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-orange-100"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-900">Character Development</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Strong moral values rooted in ancient Indian wisdom</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Discipline and self-control through daily routine</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Respect for nature and environment through eco-friendly practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Leadership qualities through seva (selfless service)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-900 to-amber-900 overflow-x-hidden">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
              Give Your Child the Best of Both Worlds
            </h2>
            <p className="text-lg sm:text-xl text-orange-100 mb-8 leading-relaxed">
              Join us in creating a new generation of leaders who are academically brilliant, 
              spiritually grounded, and culturally rooted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                Enroll Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-orange-700 text-white font-bold rounded-full border-2 border-orange-500 hover:bg-orange-600 transition-all duration-300 text-sm sm:text-base"
              >
                Schedule a Visit
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
