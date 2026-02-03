import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "B.Tech – Computer Science & Engineering",
      institution: "GLA University, Mathura",
      location: "Mathura, India",
      period: "2017 – 2021",
    },
    {
      degree: "Intermediate (PCM)",
      institution: "DPS Kalyanpur, Kanpur",
      location: "Kanpur, India",
      period: "2009 – 2017",
    },
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4 text-slate-900">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16"></div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg text-white">
                    <GraduationCap size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-3">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="space-y-2 ml-16">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
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
