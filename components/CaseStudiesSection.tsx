import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudy {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  impact: string;
  gridClass: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Automating Legal Intake with AI",
    description: "Streamlined client onboarding process using AI-powered document analysis, reducing processing time by 75% while improving accuracy.",
    imageUrl: "https://images.unsplash.com/photo-1638845604906-6c87bd9ddd01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGxlZ2FsJTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTU2ODY2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Legal Tech",
    impact: "75% faster processing",
    gridClass: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Reducing Screen Addiction in Children",
    description: "Designed a family-friendly app that helps parents manage children's screen time through gamification.",
    imageUrl: "https://images.unsplash.com/photo-1625850344758-8c4ff87559ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNtYXJ0cGhvbmUlMjBzY3JlZW4lMjB0aW1lfGVufDF8fHx8MTc1NTY4NjY5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Digital Wellness",
    impact: "40% screen time reduction",
    gridClass: "md:col-span-1 md:row-span-1"
  },
  {
    title: "AI Investment Dashboards",
    description: "Created intelligent investment platform with ML-powered portfolio insights and personalized recommendations.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1NTY4NjY5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "FinTech",
    impact: "60% user engagement increase",
    gridClass: "md:col-span-1 md:row-span-1"
  }
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-teal-700">Featured Work</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Case Studies
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of projects that showcase strategic thinking, user-centered design, and measurable business impact.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer ${study.gridClass}`}
              whileHover={{ y: -8 }}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={study.imageUrl}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                {/* Category Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 w-fit"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm font-medium">{study.category}</span>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-300 transition-colors duration-300">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 leading-relaxed mb-4 opacity-90">
                  {study.description}
                </p>

                {/* Impact Metric */}
                <div className="flex items-center justify-between">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg px-3 py-1">
                    <span className="text-sm font-bold">{study.impact}</span>
                  </div>
                  
                  <motion.div
                    className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    View Case Study
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </motion.div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-teal-400 group-hover:to-blue-400 rounded-3xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* View All Work CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}