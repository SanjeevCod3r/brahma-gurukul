import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Image as ImageIcon } from "lucide-react";

export default function Gallery() {
  const categories = [
    { title: "Campus & Infrastructure", color: "bg-orange-100", textColor: "text-orange-800" },
    { title: "Yoga & Morning Routine", color: "bg-blue-100", textColor: "text-blue-800" },
    { title: "Science Exhibition", color: "bg-green-100", textColor: "text-green-800" },
    { title: "Sports Meet", color: "bg-red-100", textColor: "text-red-800" },
    { title: "Cultural Festival", color: "bg-purple-100", textColor: "text-purple-800" },
    { title: "Classroom Activities", color: "bg-yellow-100", textColor: "text-yellow-800" },
    { title: "Annual Day", color: "bg-indigo-100", textColor: "text-indigo-800" },
    { title: "Vedic Chanting", color: "bg-teal-100", textColor: "text-teal-800" },
  ];

  return (
    <div className="w-full pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Glimpses of Gurukul" 
          subtitle="Explore the vibrant life, activities, and infrastructure at Brahma Gurukul."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow ${cat.color} flex flex-col items-center justify-center border-2 border-transparent hover:border-black/5`}
            >
              {/* Placeholder Content since we don't have real photos */}
              <ImageIcon className={`w-16 h-16 mb-4 opacity-50 ${cat.textColor}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                <h3 className="text-white font-serif font-bold text-xl">{cat.title}</h3>
              </div>
              <div className="text-center px-4">
                <h3 className={`font-bold text-lg ${cat.textColor} opacity-80`}>{cat.title}</h3>
                <p className={`text-sm mt-2 ${cat.textColor} opacity-60`}>View Album</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground italic text-sm">
            Note: Real campus photographs will be updated here soon.
          </p>
        </div>

      </div>
    </div>
  );
}
