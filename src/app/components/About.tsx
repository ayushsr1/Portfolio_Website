import { motion } from "motion/react";
import { Code2, Zap, Database, Cloud } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Backend Excellence",
      description: "Expert in Node.js, Express.js, FastAPI with a focus on high-performance systems",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "30%+ improvement in API response times and system efficiency",
    },
    {
      icon: Database,
      title: "Database Mastery",
      description: "PostgreSQL, MongoDB, Redis with advanced query optimization",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS, Docker, Kubernetes, CI/CD pipelines with Azure DevOps",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold text-center mb-4 text-slate-900">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              MERN Stack Developer with 3.8+ years of experience designing high-performance APIs, 
              microservices, and scalable architectures using Node.js, Express.js, PostgreSQL, and MongoDB. 
              Expertise in optimizing API response times (30%+ faster), real-time systems (Socket.io), 
              and distributed computing. Strong experience with CI/CD pipelines (Azure, Docker), 
              caching (Redis), security (OAuth 2.0, JWT), and automation (Cron jobs). 
              Passionate about performance tuning, scalability, and system reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
