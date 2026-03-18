import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sunrise, Droplets, Leaf, Flame } from "lucide-react";

export default function Gurukul() {
  const routine = [
    { time: "5:00 AM", title: "Brahma Muhurta Wake Up", desc: "Rising before the sun to harness the purest energy of the day." },
    { time: "5:30 AM", title: "Yoga & Pranayama", desc: "Physical and breath exercises for vitality." },
    { time: "6:15 AM", title: "Meditation & Chanting", desc: "Vedic mantras and silent meditation for mental clarity." },
    { time: "7:00 AM", title: "Sattvic Breakfast", desc: "Pure, vegetarian, and nutritious meal." },
    { time: "8:00 AM", title: "Academic Classes", desc: "Transitioning to CBSE curriculum studies." },
    { time: "3:00 PM", title: "Sports & Seva", desc: "Physical activities and selfless service to the campus." },
    { time: "6:00 PM", title: "Sandhya Aarti", desc: "Evening prayers and reflection." },
    { time: "9:00 PM", title: "Rest", desc: "Early sleep to maintain the circadian rhythm." },
  ];

  return (
    <div className="w-full pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="The Gurukul System" 
          subtitle="Reviving the timeless traditions of ancient India to cultivate focus, discipline, and inner peace."
        />

        {/* Intro */}
        <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 w-96 h-96">
            <img src={`${import.meta.env.BASE_URL}images/mandala-bg.png`} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl font-serif font-bold mb-6">A Way of Life, Not Just Schooling</h3>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-6">
              The true essence of a Gurukul lies in the symbiotic relationship between the Guru and the Shishya (disciple), and the harmony between the student and nature. At Brahma Gurukul, we don't just teach values; we live them daily.
            </p>
            <div className="flex gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Leaf className="text-secondary" /> <span className="font-semibold">Nature Connected</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="text-secondary" /> <span className="font-semibold">Inner Purity</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="text-secondary" /> <span className="font-semibold">Simple Living</span>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Routine Timeline */}
        <div className="mb-20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-center text-foreground mb-16 flex items-center justify-center gap-4">
            <Sunrise className="text-primary" size={32} /> 
            The Daily Routine
          </h3>
          
          <div className="relative border-l-4 border-primary/20 ml-4 md:ml-1/2">
            {routine.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-10 ml-8 relative"
              >
                <div className="absolute -left-[42px] top-1 w-6 h-6 bg-primary rounded-full border-4 border-background" />
                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-sm font-bold text-secondary tracking-wider uppercase mb-1 block">{item.time}</span>
                  <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
