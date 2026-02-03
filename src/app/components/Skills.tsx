import { motion } from "motion/react";
import { Badge } from "@/app/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      category: "Languages & Scripting",
      skills: ["Python", "JavaScript (ES6+)", "SQL", "Bash"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend & API Development",
      skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Socket.io"],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Databases & Caching",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Schema Design", "Query Optimization"],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Azure DevOps", "Git/GitHub"],
      color: "from-orange-500 to-red-500",
    },
    {
      category: "System Design & Distributed Systems",
      skills: ["Microservices", "Event-Driven Systems", "RabbitMQ", "Apache Kafka", "Multiprocessing"],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4 text-slate-900">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16"></div>

          <div className="max-w-6xl mx-auto grid gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`h-1 w-12 rounded bg-gradient-to-r ${category.color}`}></div>
                  <h3 className="text-2xl font-bold text-slate-900">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-4 py-2 text-base bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 max-w-4xl mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Certification</h3>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div>
                <p className="font-semibold text-lg">Cloud Computing & Virtualization</p>
                <p className="text-blue-100">IBM</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
