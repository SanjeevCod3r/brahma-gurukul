import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered = true, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className={`flex items-center gap-2 mb-3 ${centered ? "justify-center" : ""}`}>
          <span className="text-primary text-xl">ॐ</span>
          <span className="uppercase tracking-widest text-sm font-semibold text-secondary">Brahma Gurukul</span>
          <span className="text-primary text-xl">ॐ</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground max-w-2xl text-lg mt-4 mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
