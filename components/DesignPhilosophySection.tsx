import { motion } from 'motion/react';
import { Heart, Users, Target, Lightbulb, Zap, Shield } from 'lucide-react';

const principles = [
  {
    icon: Heart,
    title: "Human-Centered",
    description: "Every design decision starts with understanding human needs and emotions"
  },
  {
    icon: Zap,
    title: "AI-Enhanced",
    description: "Leveraging artificial intelligence to augment human capabilities, not replace them"
  },
  {
    icon: Target,
    title: "Impact-Driven",
    description: "Measuring success through real business outcomes and user satisfaction"
  },
  {
    icon: Shield,
    title: "Ethically Designed",
    description: "Building products that respect privacy, accessibility, and human dignity"
  }
];

const stats = [
  { value: "5+", label: "Years Leading Teams", color: "from-purple-500 to-pink-500" },
  { value: "20+", label: "Projects Delivered", color: "from-blue-500 to-cyan-500" },
  { value: "3", label: "Design Awards", color: "from-teal-500 to-green-500" },
  { value: "95%", label: "Client Satisfaction", color: "from-orange-500 to-red-500" }
];

export default function DesignPhilosophySection() {
  return (
    <section id="philosophy" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-pink-700">Philosophy</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            My Design Philosophy
          </h2>
        </motion.div>

        {/* Main Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
            </motion.div>

            {/* Quote Text */}
            <div className="bg-white/40 backdrop-blur-sm border border-white/30 rounded-3xl p-12 shadow-xl">
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-relaxed mb-8">
                I believe in{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  human + AI collaboration
                </span>
                , ethical design, and creating experiences that drive{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  measurable impact
                </span>
                .
              </blockquote>
              
              <div className="text-lg text-gray-600 max-w-4xl mx-auto space-y-4">
                <p>
                  Design is not just about making things look beautiful—it's about solving real problems for real people. 
                  In the AI era, our role as designers is to ensure technology enhances human capabilities rather than replacing human judgment.
                </p>
                
                <p>
                  Every design decision should be backed by data, validated through research, and measured by its impact on both user satisfaction and business objectives.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Design Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Core Principles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <principle.icon className="w-8 h-8 text-gray-700 group-hover:text-purple-600 transition-colors" />
                </motion.div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {principle.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                </motion.div>
                
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}