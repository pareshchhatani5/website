import { motion } from 'motion/react';
import { ExternalLink, FileText, Mic, Video, Calendar, Eye } from 'lucide-react';

const contentBlocks = [
  {
    type: "Article",
    icon: FileText,
    title: "The Future of AI in UX Design",
    description: "Exploring how artificial intelligence is reshaping the design process and what designers need to know to stay relevant.",
    link: "#",
    platform: "Medium",
    date: "Dec 2024",
    views: "12.5K",
    readTime: "8 min read",
    featured: true
  },
  {
    type: "Talk",
    icon: Mic,
    title: "Building Human-Centered AI Products",
    description: "Keynote presentation on maintaining human focus in AI-driven product development.",
    link: "#",
    platform: "UX Week 2024",
    date: "Nov 2024",
    views: "3.2K",
    readTime: "45 min watch",
    featured: false
  },
  {
    type: "Podcast",
    icon: Video,
    title: "Design Leadership in Remote Teams",
    description: "Best practices for managing distributed design teams and maintaining creative collaboration.",
    link: "#",
    platform: "Design Pod",
    date: "Oct 2024",
    views: "8.7K",
    readTime: "32 min listen",
    featured: false
  }
];

export default function ThoughtLeadershipSection() {
  return (
    <section id="thought-leadership" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-purple-700">Thought Leadership</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Speaking & Writing
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing insights on design leadership, AI integration, and the future of user experience across various platforms.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Article - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:row-span-2"
          >
            <div className="group relative h-full bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 rounded-3xl p-8 text-white overflow-hidden cursor-pointer">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)`
                }} />
              </div>
              
              <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm opacity-80">Featured Article</div>
                      <div className="text-sm font-medium">Medium</div>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 leading-tight">
                    The Future of AI in UX Design
                  </h3>
                  
                  <p className="text-lg opacity-90 leading-relaxed mb-6">
                    Exploring how artificial intelligence is reshaping the design process and what designers need to know to stay relevant in an AI-driven world.
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-white/20">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Dec 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>12.5K views</span>
                    </div>
                  </div>
                  <div className="text-sm font-medium">8 min read</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Content - Smaller Cards */}
          <div className="space-y-6">
            {contentBlocks.slice(1).map((content, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="group bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:shadow-xl hover:bg-white/80 transition-all duration-500 cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      content.type === 'Talk' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                    }`}>
                      <content.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                        {content.type}
                      </div>
                      <div className="text-sm font-medium text-gray-700">
                        {content.platform}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 group-hover:text-purple-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {content.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-3">
                    <span>{content.date}</span>
                    <span>•</span>
                    <span>{content.views} views</span>
                  </div>
                  <span className="font-medium">{content.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 text-white text-center relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-500 rounded-full blur-2xl" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on UX design, AI integration, and design leadership delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}