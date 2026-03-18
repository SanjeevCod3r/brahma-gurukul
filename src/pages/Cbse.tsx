import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Book, MonitorPlay, FlaskConical, Languages, Calculator, Trophy } from "lucide-react";

export default function Cbse() {
  const subjects = [
    { icon: Calculator, name: "Mathematics", desc: "Building analytical & problem-solving skills." },
    { icon: FlaskConical, name: "Science", desc: "Physics, Chemistry & Biology with practical labs." },
    { icon: Languages, name: "Languages", desc: "English, Hindi, and Sanskrit proficiency." },
    { icon: Book, name: "Social Studies", desc: "History, Geography, and Civics." },
  ];

  return (
    <div className="w-full pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="CBSE Curriculum" 
          subtitle="Rigorous academic framework designed to prepare students for national and global competitive landscapes."
        />

        {/* Overview */}
        <div className="mb-20">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-md">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Academic Excellence (Nursery to Class 10)</h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Brahma Gurukul follows the Central Board of Secondary Education (CBSE) guidelines. Our pedagogy shifts away from rote memorization towards experiential and inquiry-based learning. We aim to make education engaging, relevant, and comprehensive.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <MonitorPlay size={20} />
                    </div>
                    <span className="font-medium">Smart Classrooms</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <FlaskConical size={20} />
                    </div>
                    <span className="font-medium">Well-equipped Labs</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border">
                    <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                      <Book size={20} />
                    </div>
                    <span className="font-medium">Rich Library</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border">
                    <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                      <Trophy size={20} />
                    </div>
                    <span className="font-medium">Continuous Evaluation</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 w-full bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
                <h4 className="font-serif font-bold text-2xl text-blue-900 mb-2">Coaching Support</h4>
                <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
                <p className="text-blue-800 mb-4">
                  Beyond standard school hours, we provide specialized coaching support for students up to <strong>Class 12th</strong>.
                </p>
                <p className="text-sm text-blue-700">
                  Preparing students for board exams and competitive entrances under expert guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Core Subjects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((sub, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-md text-center"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <sub.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{sub.name}</h4>
                <p className="text-muted-foreground">{sub.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
