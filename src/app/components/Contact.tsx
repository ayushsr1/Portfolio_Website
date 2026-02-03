import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ayushsr0@gmail.com",
      href: "mailto:ayushsr0@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9889766428",
      href: "tel:+919889766428",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gurugram, Haryana",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayush-srivastava",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ayushsr0",
      color: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-16"></div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12"
            >
              <p className="text-xl text-center text-blue-100 mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex flex-col items-center gap-3 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all hover:scale-105"
                      >
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                          <info.icon size={24} />
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-blue-300 mb-1">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex flex-col items-center gap-3 p-6 bg-white/5 rounded-xl">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                          <info.icon size={24} />
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-blue-300 mb-1">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-6 justify-center">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`p-6 bg-gradient-to-br ${social.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all`}
                  >
                    <social.icon size={32} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16 pt-8 border-t border-white/10 relative z-10"
      >
        <p className="text-blue-200">© 2026 Ayush Srivastava. All rights reserved.</p>
      </motion.div>
    </section>
  );
}
