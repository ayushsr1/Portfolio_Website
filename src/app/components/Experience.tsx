import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "QueueBuster",
      project: "WonderLa Amusement Park",
      location: "Noida, Uttar Pradesh",
      period: "April 2025 - June 2025",
      achievements: [
        "Engineered a low-latency GraphQL API ecosystem for QueueBuster's POS platform using Node.js, Apollo Server, and MongoDB, reducing query response times by 45% and supporting 50,000+ daily transactions for retail clients",
        "Implemented real-time analytics with Prometheus and Grafana integrated into a Node.js microservices architecture, enabling real-time monitoring of transaction volumes and reducing system downtime by 60%",
      ],
    },
    {
      title: "Solutions Engineer",
      company: "Gammastack",
      project: "Money Factory, Nio Play",
      location: "Remote",
      period: "August 2024 - February 2025",
      achievements: [
        "Developed and optimized high-performance backend systems for iGaming applications, integrating 10+ RESTful APIs using Node.js, Express.js, Sequelize, and PostgreSQL, resulting in a 30% improvement in response times",
        "Enhanced frontend architecture by refactoring a React.js codebase, implementing HOCs, Context API, and custom hooks, leading to a 15% increase in application efficiency",
        "Optimized database queries and API performance, reducing latency by 40% and enabling seamless scalability for 10,000+ concurrent users without performance degradation",
      ],
    },
    {
      title: "Sr. Software Engineer",
      company: "SaxonAi",
      project: "Kloud Onn, Baymark",
      location: "Hyderabad, Telangana",
      period: "October 2022 - July 2024",
      achievements: [
        "Led the migration of legacy systems to a Python-based microservices architecture, reducing technical debt by 50% and improving system maintainability",
        "Designed and optimized data migration pipelines using Python multiprocessing and Apache Kafka, achieving a 35% improvement in data transfer speed and reliability",
        "Enhanced backend performance by implementing an event-driven architecture using Celery and RabbitMQ, significantly boosting system throughput",
        "Architected a microservices-based backend with FastAPI and Docker, reducing deployment times by 40% through automated CI/CD pipelines and Kubernetes orchestration",
      ],
    },
    {
      title: "Cloud Engineer",
      company: "Hanu Software Solutions",
      project: "Ensemble Health Partners",
      location: "Noida, Uttar Pradesh",
      period: "September 2021 - October 2022",
      achievements: [
        "Developed high-performance RESTful APIs with Express.js and enhanced caching strategies using Redis, resulting in significantly faster data retrieval and utilized Jest for testing",
        "Optimized database performance by designing and refining schemas for MongoDB and PostgreSQL, improving query efficiency",
        "Boosted application speed by 40% by identifying and resolving performance bottlenecks in a high-traffic full stack application, enhancing user experience and system responsiveness",
        "Engineered a real-time notification system using Socket.io and Redis, reducing notification delivery time by 50% and increasing user engagement through instant updates",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4 text-slate-900">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16"></div>

          <div className="max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 border-blue-200 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full"></div>

                <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-blue-600 mb-2">
                        <Briefcase size={18} />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <p className="text-slate-600 italic">Project: {exp.project}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-slate-600 mb-2">
                        <Calendar size={18} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin size={18} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-slate-700">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
