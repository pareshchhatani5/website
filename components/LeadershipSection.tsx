import { motion } from 'motion/react';
import { Users, Brain, Layers, TrendingUp, Award, Target } from 'lucide-react';

const capabilities = [
  {
    icon: Users,
    title: "Team Leadership",
    description: "Mentored 15+ designers across multiple projects, building high-performing cross-functional teams.",
    metric: "15+ designers mentored",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Pioneered AI tools integration for user research, testing automation, and insight generation.",
    metric: "40% research efficiency gain",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Layers,
    title: "Design Systems",
    description: "Built comprehensive design systems that scale across products and teams, ensuring consistency.",
    metric: "3 major design systems",
    color: "from-teal-500 to-green-500"
  }
];

const achievements = [
  { icon: TrendingUp, value: "150%", label: "Team productivity increase" },
  { icon: Award, value: "12", label: "Design awards won" },
  { icon: Target, value: "95%", label: "Project success rate" }
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-purple-700">Leadership</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Leading Teams & Designing for the Future
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining leadership experience with cutting-edge AI integration to drive innovation in user experience design.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Capabilities Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="h-full bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Icon with Gradient Background */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${capability.color} rounded-2xl mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <capability.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {capability.description}
                  </p>
                  
                  {/* Metric Badge */}
                  <div className={`inline-block bg-gradient-to-r ${capability.color} bg-clip-text text-transparent font-bold text-sm`}>
                    {capability.metric}
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Achievements Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 text-white relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)`
              }} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">Key Achievements</h3>
              
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl">
                      <achievement.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    
                    <div>
                      <div className="text-3xl font-bold text-cyan-400 mb-1">
                        {achievement.value}
                      </div>
                      <div className="text-gray-300 text-sm">
                        {achievement.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 right-8 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full"
                animate={{ scale: [1, 0.8, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/40 backdrop-blur-sm border border-white/20 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Leadership Journey</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: "2019-2021", role: "Senior UX Designer", company: "TechCorp", highlight: "Led mobile redesign" },
              { year: "2021-2023", role: "UX Lead", company: "InnovateLab", highlight: "Built design team from 3 to 12" },
              { year: "2023-Present", role: "Principal UX Lead", company: "AI Solutions", highlight: "Pioneering AI-UX integration" }
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-4 h-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mx-auto mb-4 group-hover:scale-125 transition-transform duration-300" />
                <div className="text-sm text-gray-500 mb-2">{experience.year}</div>
                <div className="font-bold text-gray-900 mb-1">{experience.role}</div>
                <div className="text-gray-600 mb-2">{experience.company}</div>
                <div className="text-sm text-teal-600 font-medium">{experience.highlight}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}