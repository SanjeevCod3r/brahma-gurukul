import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Target, Eye, Heart, Shield, BookOpen, Sun } from "lucide-react";

export default function About() {
  return (
    <div className="w-full pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Brahma Gurukul" 
          subtitle="A sanctuary of learning where ancient wisdom meets modern intellect."
        />

        {/* Philosophy */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <span className="text-9xl font-serif">ॐ</span>
          </div>
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Our Philosophy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Brahma Gurukul, we believe that education is not merely the accumulation of facts, but the preparation for life itself. Founded under the aegis of <strong>Shree Kamta Prashad Memorial Shikshan Sansthan</strong>, our institution revives the soul of the ancient Indian Gurukul system.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We stand at the crossroads of time—drawing deeply from the spiritual and moral wellsprings of our heritage, while reaching high towards the rigorous, analytical demands of modern CBSE academics. Our students are nurtured to be rooted in culture yet global in their outlook.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-3xl p-10 border border-primary/10"
          >
            <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mb-6">
              <Eye size={24} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be a leading institution that harmonizes the intellectual rigor of modern education with the spiritual depth of ancient Indian traditions, creating enlightened leaders who will contribute positively to humanity.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-secondary/5 rounded-3xl p-10 border border-secondary/20"
          >
            <div className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide a nurturing environment where students excel academically through the CBSE curriculum, while developing strong character, discipline, and moral values through daily spiritual practices and holistic living.
            </p>
          </motion.div>
        </div>

        {/* Director's Note */}
        <div className="bg-foreground text-background rounded-3xl p-8 md:p-16 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-48 h-48 md:w-full md:h-auto aspect-square rounded-full border-4 border-primary overflow-hidden bg-white/10 flex items-center justify-center text-white/20">
                {/* Placeholder for Director Photo */}
                <span className="text-6xl font-serif">M</span>
              </div>
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">Director's Message</h3>
              <h4 className="text-xl text-white mb-6">Manvendra Singh Rajput</h4>
              <blockquote className="text-lg text-white/80 italic leading-relaxed mb-6 border-l-4 border-secondary pl-6 text-left">
                "Education without character is like a ship without a compass. At Brahma Gurukul, we are not just building careers; we are building human beings. Our children rise early, meditate, study modern sciences, and learn to respect every living entity. This is true education."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif font-bold text-foreground mb-12">Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Discipline", desc: "Structured living to focus the mind and body." },
              { icon: Heart, title: "Compassion", desc: "Empathy towards all living beings." },
              { icon: BookOpen, title: "Excellence", desc: "Striving for the best in academic pursuits." },
              { icon: Sun, title: "Spirituality", desc: "Connecting with the inner self." },
            ].map((value, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <value.icon size={24} />
                </div>
                <h4 className="font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
