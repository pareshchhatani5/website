import { motion } from 'motion/react';
import { Mail, Linkedin, Globe, Send, MapPin, Clock, Phone } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "paresh@example.com",
    href: "mailto:paresh@example.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/pareshchhatani",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "View my work",
    href: "https://behance.net/pareshchhatani",
    color: "from-purple-500 to-pink-500"
  }
];

const availability = [
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  { icon: Clock, label: "Timezone", value: "PST (UTC-8)" },
  { icon: Phone, label: "Response Time", value: "Within 24 hours" }
];

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-gray-300">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to create exceptional user experiences? Let's discuss your next project and explore how we can drive meaningful impact together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-gray-300">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-gray-300">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="john.doe@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Project collaboration"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Tell me about your project and how I can help..."
                  />
                </div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">{contact.label}</div>
                    <div className="text-sm text-gray-400">{contact.value}</div>
                  </div>
                  <div className="ml-auto">
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Info */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h4 className="text-lg font-bold mb-4">Availability</h4>
              
              <div className="space-y-3">
                {availability.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-gray-300" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 text-center"
            >
              <h4 className="text-lg font-bold mb-2">Let's Create Something Amazing</h4>
              <p className="text-gray-300 text-sm mb-4">
                Whether you're a startup looking to build your first product or an enterprise seeking to improve existing experiences, I'm here to help.
              </p>
              <div className="flex items-center justify-center gap-2 text-purple-400">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm">Available for new projects</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}