import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "wouter";
import { BookOpen, Sun, Users, ArrowRight, CheckCircle2, GraduationCap, Star, ChevronDown, Quote, Calendar, Trophy, Flame, Leaf, Globe, Music, Award, FlaskConical, Library, Dumbbell } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "Is Brahma Gurukul a CBSE school or a Gurukul?",
    a: "It is both — in one school. Brahma Gurukul is a CBSE-affiliated school (Nursery to Class 10th) that also incorporates ancient Gurukul practices like yoga, meditation, Sanskrit, and moral education into the daily routine. Every student experiences both, simultaneously.",
  },
  {
    q: "What is the age group and classes offered?",
    a: "We admit students from Nursery (3+ years) through Class 10th. Our coaching division also covers up to Class 12th with IIT-JEE, NEET, and Olympiad preparation.",
  },
  {
    q: "What does a typical school day look like?",
    a: "The day begins at 5:00 AM with Yoga and meditation, followed by prayer and Sanskrit shlokas. Academic classes (CBSE curriculum) run through the morning and afternoon. Evenings include sports, personality development, and cultural activities.",
  },
  {
    q: "What are the admission requirements?",
    a: "Admission is open to all children. There is a simple interaction and basic assessment (for Classes 1 and above). We prioritise small batch sizes to ensure every child gets personal attention. Fill the Admission Inquiry Form to get started.",
  },
  {
    q: "What facilities does the school provide?",
    a: "We have smart classrooms, a Science lab, Computer lab, a Library, a Yoga hall, and a playground. Hostel facility is also available for students who require residential accommodation.",
  },
  {
    q: "How are fees structured? Are there scholarships?",
    a: "Fees are kept affordable to ensure quality education is accessible. Scholarship opportunities are available for meritorious and economically deserving students. Contact us directly for the latest fee structure.",
  },
  {
    q: "Can I schedule a campus visit?",
    a: "Absolutely! We encourage all parents to visit the campus, meet our director Manvendra Singh Rajput, and experience the Gurukul atmosphere firsthand. Call us or send a WhatsApp message to book a visit.",
  },
];

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything parents want to know before joining Brahma Gurukul."
        />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-background overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
              >
                <span className="font-semibold text-foreground text-sm md:text-base leading-snug group-hover:text-primary transition-colors">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 text-primary"
                >
                  <ChevronDown size={20} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCounter({ value, label, suffix = "+", prefix = "" }: { value: number; label: string; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);
  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <p className="text-4xl md:text-5xl font-serif font-bold" style={{color:"#FFD700", textShadow:"0 0 20px rgba(255,165,0,0.4)"}}>
        {prefix}{count}{suffix}
      </p>
      <p className="text-xs uppercase tracking-widest font-semibold" style={{color:"rgba(255,255,255,0.6)"}}>{label}</p>
    </div>
  );
}

const upcomingEvents = [
  { month: "MAR", day: "25", title: "Annual Day Celebration", desc: "Cultural performances, awards & felicitation of students and teachers.", tag: "Cultural", color: "#FF6600", icon: Music },
  { month: "APR", day: "05", title: "Sports Day", desc: "Inter-class athletic events, races, team sports & prize distribution.", tag: "Sports", color: "#3b5bdb", icon: Dumbbell },
  { month: "APR", day: "20", title: "Science & Vedic Maths Fair", desc: "Students showcase innovative projects blending modern science with ancient mathematics.", tag: "Academic", color: "#c94800", icon: FlaskConical },
  { month: "MAY", day: "01", title: "Admission Open House", desc: "Visit our campus, meet teachers and the Director, and learn about our unique programme.", tag: "Admission", color: "#2e7d32", icon: Users },
];

const campusFeatures = [
  { icon: FlaskConical, title: "Science Lab", desc: "Fully equipped modern laboratory for hands-on experiments from Class 6 onwards.", color: "#3b5bdb" },
  { icon: Globe, title: "Computer Lab", desc: "Latest systems with internet access, coding & digital literacy programmes.", color: "#c94800" },
  { icon: Library, title: "Library", desc: "Over 2,000 books spanning academics, vedic texts, fiction & self-development.", color: "#2e7d32" },
  { icon: Leaf, title: "Yoga Hall", desc: "Dedicated space for morning yoga, pranayama, and Gurukul meditation sessions.", color: "#FF6600" },
  { icon: Dumbbell, title: "Sports Ground", desc: "Open playground for cricket, kabaddi, athletics and outdoor team activities.", color: "#9c27b0" },
  { icon: Music, title: "Cultural Centre", desc: "Regular events for music, dance, drama, debate and personality development.", color: "#D4AF37" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[640px] w-full flex items-center justify-center overflow-hidden">

        {/* ── Layer 1: Deep multi-stop gradient ── */}
        <div className="absolute inset-0 z-0"
          style={{background: "radial-gradient(ellipse 120% 80% at 50% 0%, #7c1a00 0%, #a83200 18%, #c94800 35%, #e06010 52%, #8b3a00 70%, #1a0800 100%)"}}
        />

        {/* ── Layer 2: Golden shimmer vignette ── */}
        <div className="absolute inset-0 z-0"
          style={{background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,175,55,0.18) 0%, transparent 70%)"}}
        />

        {/* ── Layer 3: SVG Mandala / Vedic pattern ── */}
        <svg className="absolute inset-0 w-full h-full z-0 opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1.5" fill="#D4AF37"/>
              <circle cx="0" cy="0" r="1" fill="#D4AF37"/>
              <circle cx="80" cy="0" r="1" fill="#D4AF37"/>
              <circle cx="0" cy="80" r="1" fill="#D4AF37"/>
              <circle cx="80" cy="80" r="1" fill="#D4AF37"/>
              <line x1="40" y1="0" x2="40" y2="80" stroke="#D4AF37" strokeWidth="0.3"/>
              <line x1="0" y1="40" x2="80" y2="40" stroke="#D4AF37" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="800" height="800" fill="url(#grid)"/>
          {/* Central large mandala */}
          {[320,280,240,200,160,120,80,50,30].map((r, i) => (
            <circle key={i} cx="400" cy="400" r={r} fill="none" stroke="#D4AF37" strokeWidth={i % 2 === 0 ? "0.8" : "0.4"} opacity={0.6 - i*0.05}/>
          ))}
          {/* 8-pointed star petals */}
          {Array.from({length: 24}).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const x1 = 400 + Math.cos(angle) * 60;
            const y1 = 400 + Math.sin(angle) * 60;
            const x2 = 400 + Math.cos(angle) * 310;
            const y2 = 400 + Math.sin(angle) * 310;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D4AF37" strokeWidth="0.4" opacity="0.5"/>
          })}
          {/* Corner mandalas */}
          {[[0,0],[800,0],[0,800],[800,800]].map(([cx,cy], i) => (
            <g key={i}>
              {[80,60,40,20].map((r,j) => <circle key={j} cx={cx} cy={cy} r={r} fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4"/>)}
            </g>
          ))}
          {/* Decorative lotus petals */}
          {Array.from({length: 16}).map((_, i) => {
            const angle = (i * 22.5 * Math.PI) / 180;
            const px = 400 + Math.cos(angle) * 130;
            const py = 400 + Math.sin(angle) * 130;
            return <ellipse key={i} cx={px} cy={py} rx="18" ry="8" fill="none" stroke="#D4AF37" strokeWidth="0.6" opacity="0.55"
              transform={`rotate(${i*22.5 + 90}, ${px}, ${py})`}/>
          })}
        </svg>

        {/* ── Layer 4: Animated glowing orbs ── */}
        <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full z-0 pointer-events-none"
          style={{background: "radial-gradient(circle, rgba(255,120,0,0.25) 0%, transparent 70%)"}}
          animate={{scale:[1,1.2,1], opacity:[0.5,0.8,0.5]}}
          transition={{repeat:Infinity, duration:5, ease:"easeInOut"}}
        />
        <motion.div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full z-0 pointer-events-none"
          style={{background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)"}}
          animate={{scale:[1.2,1,1.2], opacity:[0.4,0.7,0.4]}}
          transition={{repeat:Infinity, duration:6, ease:"easeInOut"}}
        />

        {/* ── Layer 5: Top & bottom decorative borders ── */}
        <div className="absolute top-0 left-0 right-0 h-1 z-10"
          style={{background:"linear-gradient(90deg, transparent, #D4AF37, #FF6600, #D4AF37, transparent)"}}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 z-10"
          style={{background:"linear-gradient(90deg, transparent, #D4AF37, #FF6600, #D4AF37, transparent)"}}
        />

        {/* ── Hero Content ── */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center justify-center w-full h-full" style={{paddingTop:"72px"}}>

          {/* Om badge + Sanskrit tagline in one row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-center mb-4"
          >
            <div className="relative mb-2">
              <div className="absolute inset-0 rounded-full blur-lg opacity-70"
                style={{background:"radial-gradient(circle, rgba(255,140,0,0.9), transparent)"}}
              />
              <div className="relative w-16 h-16 rounded-full flex items-center justify-center border border-yellow-400/50"
                style={{background:"rgba(0,0,0,0.4)", backdropFilter:"blur(12px)"}}
              >
                <span className="text-4xl font-serif leading-none" style={{color:"#FFD700", textShadow:"0 0 16px rgba(255,165,0,1)"}}>ॐ</span>
              </div>
            </div>
            <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-medium"
              style={{color:"#FFD700", textShadow:"0 0 10px rgba(255,165,0,0.6)"}}>
              ॐ सा विद्या या विमुक्तये &nbsp;✦&nbsp; Shree Kamta Prashad Memorial Shikshan Sansthan
            </p>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-3 leading-tight"
            style={{color:"#FFFBF0", textShadow:"0 2px 24px rgba(0,0,0,0.6)"}}
          >
            जहां परंपरा और{" "}
            <span style={{
              background: "linear-gradient(135deg, #FFD700 0%, #FF8C00 45%, #FFD700 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 10px rgba(255,165,0,0.6))"
            }}>आधुनिक शिक्षा</span>{" "}मिलती है
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <div className="h-px w-20" style={{background:"linear-gradient(90deg, transparent, #D4AF37)"}}/>
            <span style={{color:"#D4AF37"}}>✦</span>
            <div className="h-px w-20" style={{background:"linear-gradient(90deg, #D4AF37, transparent)"}}/>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-base md:text-lg text-white/85 mb-7 max-w-2xl mx-auto leading-relaxed"
          >
            CBSE Education with Gurukul Values — nurturing minds, souls & futures from Nursery to Class 10th.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-7"
          >
            <Link
              href="/admissions"
              className="w-full sm:w-auto px-8 py-3 rounded-full font-bold text-base transition-all hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #FF6600, #FF3300)",
                color: "#fff",
                boxShadow: "0 8px 28px rgba(255,80,0,0.45), inset 0 1px 0 rgba(255,255,255,0.2)"
              }}
            >
              Apply for Admission
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-8 py-3 rounded-full font-bold text-base transition-all hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                color: "#FFD700",
                border: "1.5px solid rgba(212,175,55,0.55)",
                boxShadow: "0 4px 18px rgba(212,175,55,0.15)"
              }}
            >
              Explore More
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex items-center justify-center gap-6 md:gap-12 flex-wrap"
          >
            {[
              { number: "500+", label: "Students" },
              { number: "15+", label: "Years of Excellence" },
              { number: "100%", label: "Holistic Education" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-xl md:text-2xl font-serif font-bold" style={{color:"#FFD700"}}>{stat.number}</p>
                <p className="text-[10px] text-white/55 tracking-widest uppercase mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full flex justify-center p-1.5"
            style={{border:"1.5px solid rgba(212,175,55,0.5)"}}
          >
            <motion.div className="w-1.5 rounded-full" style={{background:"#FFD700"}}
              animate={{height:["30%","70%","30%"], opacity:[0.6,1,0.6]}}
              transition={{repeat:Infinity, duration:2}}
            />
          </div>
        </motion.div>
      </section>

      {/* ANIMATED STATS BAND */}
      <section className="py-14 md:py-16 relative overflow-hidden" style={{background:"linear-gradient(135deg,#1a0800 0%,#2d1200 50%,#1a0800 100%)"}}>
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:"radial-gradient(circle at 20% 50%, rgba(255,102,0,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(212,175,55,0.07) 0%, transparent 60%)"}} />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {[
              { value: 500, suffix: "+", label: "Happy Students" },
              { value: 15, suffix: "+", label: "Years of Excellence" },
              { value: 98, suffix: "%", label: "Board Pass Rate" },
              { value: 50, suffix: "+", label: "Awards Won" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex flex-col items-center gap-1 relative"
              >
                {i < 3 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px" style={{background:"linear-gradient(180deg, transparent, rgba(212,175,55,0.3), transparent)"}} />}
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-8 text-xs tracking-widest uppercase font-semibold"
            style={{color:"rgba(212,175,55,0.5)"}}
          >
            ✦ Shree Kamta Prashad Memorial Shikshan Sansthan ✦
          </motion.p>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 md:py-32 bg-vedic-pattern bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Welcome to Brahma Gurukul</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                A Journey Towards <br/><span className="text-secondary">Holistic Excellence</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Under the guidance of Director <strong className="text-foreground">Manvendra Singh Rajput</strong> and the Shree Kamta Prashad Memorial Shikshan Sansthan, we provide an environment where children grow intellectually, spiritually, and physically.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our unique dual-education system ensures that students excel in the standard CBSE curriculum from Nursery to Class 10, while simultaneously grounding them in the profound moral and spiritual values of the ancient Indian Gurukul system.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors group">
                Discover our philosophy <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
                {/* using a placeholder image logic via absolute divs to create an abstract visual since no image is provided */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/40 flex items-center justify-center relative">
                   {/* We requested an AI image for this in requirements.yaml! */}
                   <img src={`${import.meta.env.BASE_URL}images/gurukul-meditation.png`} alt="Meditation at Gurukul" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
              
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Nursery to 10th</h4>
                    <p className="text-sm text-muted-foreground">CBSE Curriculum</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ONE SCHOOL — CBSE + GURUKUL COMBINED */}
      <section className="py-20 md:py-28 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="One School. Two Pillars of Greatness."
            subtitle="Brahma Gurukul is a single institution where CBSE academics and Gurukul values are woven together seamlessly — every student experiences both, every day."
          />

          {/* Unified school banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden mb-12 border border-border shadow-xl"
            style={{background:"linear-gradient(135deg, #fff8f0 0%, #fffdf7 50%, #fff8f0 100%)"}}
          >
            {/* Decorative OM watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="text-[16rem] font-serif opacity-[0.04] text-primary leading-none">ॐ</span>
            </div>

            {/* Center badge */}
            <div className="relative z-10 flex flex-col items-center py-10 px-6 text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-4 font-bold text-sm tracking-wide"
                style={{background:"linear-gradient(135deg,#FF6600,#c94800)", color:"#fff", boxShadow:"0 4px 20px rgba(255,100,0,0.3)"}}>
                ✦ Shree Kamta Prashad Memorial Shikshan Sansthan ✦
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">Brahma Gurukul — Nursery to Class 10th</h3>
              <p className="text-muted-foreground max-w-xl">A CBSE-affiliated school where every child learns academics <em>and</em> lives by Gurukul values under one roof.</p>
            </div>

            {/* Two pillars side by side */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
              {/* CBSE Pillar */}
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{background:"#e8f0fe"}}>
                    <GraduationCap size={26} style={{color:"#3b5bdb"}} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{color:"#3b5bdb"}}>Pillar 1</p>
                    <h4 className="text-xl font-serif font-bold text-foreground">CBSE Curriculum</h4>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "NCERT-based structured academics",
                    "Smart classrooms & projector learning",
                    "Science, Math & Computer labs",
                    "Regular assessments & report cards",
                    "Olympiad & competitive exam prep",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{color:"#3b5bdb"}} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/cbse" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold group" style={{color:"#3b5bdb"}}>
                  View full curriculum <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Gurukul Pillar */}
              <div className="p-8 md:p-10" style={{background:"rgba(255,102,0,0.03)"}}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{background:"rgba(255,102,0,0.12)"}}>
                    <Sun size={26} style={{color:"#c94800"}} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{color:"#c94800"}}>Pillar 2</p>
                    <h4 className="text-xl font-serif font-bold text-foreground">Gurukul Values</h4>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "5:00 AM Yoga & morning meditation",
                    "Sanskrit shlokas & Vedic teachings",
                    "Discipline, respect & character building",
                    "Nature connection & mindful living",
                    "Personality & confidence development",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{color:"#c94800"}} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/gurukul" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold group" style={{color:"#c94800"}}>
                  Explore Gurukul lifestyle <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Bottom unified message */}
            <div className="relative z-10 border-t border-border px-8 py-5 text-center"
              style={{background:"linear-gradient(90deg, rgba(255,102,0,0.06), rgba(59,91,219,0.06))"}}>
              <p className="text-sm font-medium text-foreground">
                🏫 &nbsp;Both pillars are taught <strong>in the same school, to every student, every single day</strong> — not separate programmes.
              </p>
            </div>
          </motion.div>

          {/* Feature chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {["Small Batch Size","Personal Attention","Regular Tests","Personality Development","Vedic + Modern","Holistic Growth"].map((chip, i) => (
              <span key={i} className="px-4 py-2 rounded-full text-sm font-medium border border-primary/20 text-primary bg-primary/5">
                ✦ {chip}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DIRECTOR'S MESSAGE */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{background:"linear-gradient(135deg,#1a0800 0%,#2d1200 60%,#3a1800 100%)"}}>
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-end pr-16">
          <span className="text-[22rem] font-serif opacity-[0.03] leading-none" style={{color:"#FFD700"}}>ॐ</span>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs uppercase tracking-widest font-semibold mb-10"
            style={{color:"rgba(212,175,55,0.6)"}}
          >
            ✦ From The Desk of the Director ✦
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-5">
                <div className="w-36 h-36 rounded-full flex items-center justify-center text-4xl font-serif font-bold border-4"
                  style={{background:"rgba(255,102,0,0.12)", borderColor:"#D4AF37", color:"#FFD700", boxShadow:"0 0 0 8px rgba(212,175,55,0.08)"}}>
                  MR
                </div>
                <div className="absolute -bottom-2 -right-2 w-11 h-11 rounded-full flex items-center justify-center border-2"
                  style={{background:"#D4AF37", borderColor:"#1a0800", color:"#1a0800"}}>
                  <span className="text-lg font-serif font-bold">ॐ</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold mb-1" style={{color:"#FFD700"}}>Manvendra Singh Rajput</h3>
              <p className="text-sm font-semibold" style={{color:"rgba(255,102,0,0.9)"}}>Director & Founder</p>
              <p className="text-xs mt-1" style={{color:"rgba(255,255,255,0.4)"}}>Brahma Gurukul</p>
              <div className="mt-5 flex gap-1">
                {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#D4AF37" style={{color:"#D4AF37"}} />)}
              </div>
              <p className="text-xs mt-1" style={{color:"rgba(255,255,255,0.35)"}}>15+ Years in Education</p>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2"
            >
              <span className="text-7xl font-serif leading-none block mb-2" style={{color:"rgba(212,175,55,0.25)"}}>&#8220;</span>
              <p className="text-lg md:text-xl leading-relaxed font-serif italic mb-4" style={{color:"rgba(255,255,255,0.88)"}}>
                At Brahma Gurukul, we believe education is not just about marks — it is about awakening the inner potential of every child. When the wisdom of our ancient Gurus meets the knowledge of modern science, something extraordinary happens. Our students don&apos;t just pass exams — they grow into complete, confident, and compassionate human beings.
              </p>
              <span className="text-7xl font-serif leading-none block text-right mb-5" style={{color:"rgba(212,175,55,0.25)"}}>&#8221;</span>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px" style={{background:"rgba(212,175,55,0.2)"}} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{color:"rgba(212,175,55,0.6)"}}>Director&apos;s Message</span>
                <div className="flex-1 h-px" style={{background:"rgba(212,175,55,0.2)"}} />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { label: "Vision", value: "Holistic Learners" },
                  { label: "Mission", value: "Vedic + CBSE" },
                  { label: "Motto", value: "सा विद्या..." },
                ].map((item, i) => (
                  <div key={i} className="text-center p-3 rounded-xl" style={{background:"rgba(255,255,255,0.04)", border:"1px solid rgba(212,175,55,0.12)"}}>
                    <p className="text-xs uppercase tracking-wider mb-1" style={{color:"rgba(212,175,55,0.5)"}}>{item.label}</p>
                    <p className="text-sm font-semibold" style={{color:"rgba(255,255,255,0.8)"}}>{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAMPUS LIFE / FACILITIES */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="World-Class Campus Facilities"
            subtitle="Every corner of Brahma Gurukul is designed to inspire learning, growth, and a deep connection with one's roots."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-all cursor-default relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{background:`linear-gradient(90deg, transparent, ${f.color}, transparent)`}} />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{background:`${f.color}14`}}>
                  <f.icon size={26} style={{color: f.color}} />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-20 md:py-28 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1" style={{background:"linear-gradient(90deg, transparent, #FF6600, #D4AF37, #FF6600, transparent)"}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Upcoming Events & Activities"
            subtitle="Stay connected with the vibrant life at Brahma Gurukul — there's always something exciting happening on campus."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
              >
                {/* Color header strip with date */}
                <div className="flex items-center gap-4 px-5 py-4 relative overflow-hidden"
                  style={{background:`linear-gradient(135deg, ${ev.color}22, ${ev.color}10)`}}>
                  <div className="absolute top-0 left-0 bottom-0 w-1 rounded-l-full" style={{background:ev.color}} />
                  <div className="w-14 h-14 rounded-xl flex flex-col items-center justify-center shrink-0 font-bold border"
                    style={{background:`${ev.color}18`, borderColor:`${ev.color}30`}}>
                    <span className="text-[10px] uppercase tracking-wider" style={{color:ev.color}}>{ev.month}</span>
                    <span className="text-2xl leading-none font-serif" style={{color:ev.color}}>{ev.day}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{background:`${ev.color}20`, color:ev.color}}>
                      {ev.tag}
                    </span>
                  </div>
                </div>
                {/* Event details */}
                <div className="px-5 py-4">
                  <div className="flex items-start gap-2.5 mb-3">
                    <ev.icon size={17} className="shrink-0 mt-0.5" style={{color:ev.color}} />
                    <h3 className="font-serif font-bold text-foreground leading-snug">{ev.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{ev.desc}</p>
                </div>
                <div className="px-5 pb-4">
                  <div className="pt-3 border-t border-border">
                    <span className="flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all" style={{color:ev.color}}>
                      <Calendar size={13} /> Mark Calendar <ArrowRight size={13} className="ml-auto group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS / TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Parents & Students Say"
            subtitle="Real voices from the Brahma Gurukul family — the parents and students who live our values every day."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sunita Sharma",
                role: "Parent — Class 6 Student",
                rating: 5,
                review: "My son has transformed completely after joining Brahma Gurukul. He wakes up at 5 AM willingly for yoga, scores well in school, and has become so respectful. The balance of CBSE studies and Gurukul values is exactly what modern children need.",
                initial: "S",
                color: "#FF6600",
              },
              {
                name: "Ramesh Verma",
                role: "Parent — Class 4 Student",
                rating: 5,
                review: "We were searching for a school that teaches both academics and sanskaar. Brahma Gurukul is a blessing. The teachers genuinely care about each child, the batch sizes are small, and Manvendra Sir's vision is extraordinary.",
                initial: "R",
                color: "#3b5bdb",
              },
              {
                name: "Priya Mishra",
                role: "Parent — Nursery Student",
                rating: 5,
                review: "Even at nursery level, my daughter comes home chanting Sanskrit shlokas and singing bhajans. At the same time her English and Math foundation is excellent. This school truly gives the best of both worlds under one roof!",
                initial: "P",
                color: "#c94800",
              },
              {
                name: "Ankit Rajput",
                role: "Class 9 Student",
                rating: 5,
                review: "I have studied here since Class 1 and I can say it has shaped who I am. The morning yoga keeps me focused, the teachers explain concepts really well, and I have won two district-level science Olympiad medals. Very proud of my school!",
                initial: "A",
                color: "#2e7d32",
              },
              {
                name: "Deepa Tiwari",
                role: "Parent — Class 8 Student",
                rating: 5,
                review: "What I love most is the discipline without harshness. My daughter is confident, articulate, and spiritually grounded. The school follows a strict routine but the children love it. The Director personally knows each student by name.",
                initial: "D",
                color: "#7c3aed",
              },
              {
                name: "Mohan Gupta",
                role: "Parent — Class 3 Student",
                rating: 5,
                review: "Fees are very reasonable compared to big city schools, yet the quality is outstanding. My son gets individual attention from teachers and has become a very disciplined and happy child. Highly recommend to every parent!",
                initial: "M",
                color: "#b45309",
              },
            ].map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-all"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <Star key={s} size={15} fill="#FF9500" style={{color:"#FF9500"}} />
                  ))}
                </div>
                {/* Quote icon */}
                <Quote size={20} className="mb-3 opacity-20 text-primary" />
                {/* Review text */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5 italic">"{r.review}"</p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0"
                    style={{background: r.color}}>
                    {r.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Overall rating bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-2xl border border-border bg-card"
          >
            <div className="text-center">
              <p className="text-5xl font-serif font-bold text-primary">4.9</p>
              <div className="flex gap-0.5 justify-center my-1">
                {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#FF9500" style={{color:"#FF9500"}} />)}
              </div>
              <p className="text-xs text-muted-foreground">Overall Rating</p>
            </div>
            <div className="w-px h-14 bg-border hidden sm:block" />
            <div className="text-center sm:text-left">
              <p className="font-semibold text-foreground">Trusted by 500+ families</p>
              <p className="text-sm text-muted-foreground mt-1">Based on parent feedback, annual surveys & community reviews</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FaqSection />

      {/* WHATSAPP CTA STRIP */}
      <section className="py-6 relative overflow-hidden" style={{background:"linear-gradient(90deg,#1a0800,#2d1200,#1a0800)"}}>
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
              <Users size={22} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-white text-base">Talk to us on WhatsApp — Instantly!</p>
              <p className="text-xs" style={{color:"rgba(255,255,255,0.5)"}}>Admission queries, campus visit bookings, fee structure & more</p>
            </div>
          </div>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-white shadow-lg hover:-translate-y-0.5 transition-all"
            style={{background:"#25D366", boxShadow:"0 4px 20px rgba(37,211,102,0.35)"}}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.103 1.523 5.824L0 24l6.344-1.494C8.065 23.446 10.003 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.847 0-3.576-.496-5.065-1.363l-.363-.215-3.767.888.933-3.668-.236-.376C2.498 15.502 2 13.797 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            WhatsApp Us Now
          </a>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"linear-gradient(135deg,#1a0800 0%,#3d1500 50%,#1a0800 100%)"}}>
          <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)", backgroundSize:"32px 32px"}} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[28rem] font-serif opacity-[0.025] leading-none" style={{color:"#FFD700"}}>ॐ</span>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{background:"rgba(212,175,55,0.12)", color:"#D4AF37", border:"1px solid rgba(212,175,55,0.25)"}}>
              🎓 Admissions Open 2026–27
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Begin Your Child's<br />
              <span style={{color:"#FFD700"}}>Journey With Us</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Admissions are now open for the upcoming academic session. Secure a foundation of excellence, values, and holistic growth for your child.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/admissions"
                className="px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all"
                style={{background:"linear-gradient(135deg,#FF6600,#c94800)", color:"#fff", boxShadow:"0 8px 30px rgba(255,102,0,0.4)"}}>
                Apply for Admission
              </Link>
              <Link href="/contact"
                className="px-8 py-4 bg-transparent border text-white hover:bg-white/8 rounded-full font-bold text-lg transition-all"
                style={{borderColor:"rgba(212,175,55,0.35)", color:"#FFD700"}}>
                Schedule a Visit
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center gap-8 flex-wrap">
              {["CBSE Affiliated", "Nursery – Class 10", "Small Batch Size", "Holistic Education"].map((b, i) => (
                <div key={i} className="flex items-center gap-1.5 text-sm" style={{color:"rgba(255,255,255,0.5)"}}>
                  <CheckCircle2 size={14} style={{color:"#D4AF37"}} /> {b}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
