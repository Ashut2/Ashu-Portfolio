"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "./ui/TerminalWindow";
import { GitCommit, Users, BookOpen, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "Self Learning – DevOps Practice",
    period: "2026 – Present",
    type: "Learning & Development",
    icon: BookOpen,
    highlights: [
      "Hands-on Linux and shell scripting through KodeKloud labs & freelance projects",
      "Practical exposure to DevOps tools and workflows through real-world freelance work",
      "Maintaining a structured public GitHub repo documenting DevOps commands and learnings",
      "Building automation scripts for AWS resource management",
      "Active participation in DevOps community discussions",
    ],
    color: "#f9bd2b",
  },
  {
    title: "Content Creation",
    period: "2026 – Present",
    type: "Community & Education",
    icon: Users,
    highlights: [
      "Educated 1,000+ people on psychology of customer behavior and personal branding",
      "Generated consistent positive engagement on informational content",
      "Continuously sharing learnings from articles, books, and mentors",
      "Active on Twitter & LinkedIn for DevOps/tech content",
      "Active on Instagram & YouTube for life skills and marketing insights",
      "Building personal brand while helping others grow",
    ],
    color: "#e05c2d",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-terminal-bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="text-terminal-accent font-mono">$</span> git log experience.log
          </h2>
          <p className="text-terminal-muted font-mono text-sm md:text-base mb-8">
            Showing {experiences.length} commits
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-terminal-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:block absolute left-0 top-8 w-16 h-16">
                  <div
                    className="w-16 h-16 rounded-full border-4 border-terminal-bg-dark flex items-center justify-center"
                    style={{ backgroundColor: exp.color }}
                  >
                    <exp.icon size={28} className="text-terminal-bg" />
                  </div>
                </div>

                {/* Content */}
                <div className="md:ml-24">
                  <TerminalWindow title={`commit-${index + 1}.log`}>
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="md:hidden">
                              <exp.icon size={24} style={{ color: exp.color }} />
                            </div>
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold font-sans text-terminal-text">
                                {exp.title}
                              </h3>
                              <p className="text-terminal-muted font-mono text-sm">
                                {exp.type}
                              </p>
                            </div>
                          </div>
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-mono border border-green-400 rounded">
                            Active
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-terminal-muted font-mono text-sm">
                          <GitCommit size={16} className="text-terminal-accent" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-3 pt-4">
                        <p className="text-terminal-accent font-mono text-sm font-bold flex items-center gap-2">
                          <TrendingUp size={16} />
                          Key Achievements:
                        </p>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <motion.li
                              key={i}
                              className="text-terminal-text text-sm leading-relaxed flex items-start gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + i * 0.05 }}
                            >
                              <span className="text-terminal-accent mt-1">✓</span>
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Platforms Note */}
                      {exp.title === "Content Creation" && (
                        <div className="pt-4 border-t border-terminal-border">
                          <p className="text-terminal-muted text-xs font-mono italic">
                            // Platforms: Twitter & LinkedIn (DevOps/Tech), Instagram & YouTube (Life Skills/Marketing)
                          </p>
                        </div>
                      )}
                    </div>
                  </TerminalWindow>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <div className="p-6 bg-terminal-bg-light border-2 border-terminal-accent rounded-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-terminal-accent rounded-full flex items-center justify-center">
                  <TrendingUp size={24} className="text-terminal-bg" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold font-mono text-terminal-accent">
                  Current Focus
                </h3>
                <p className="text-terminal-text text-sm leading-relaxed">
                  Actively seeking <span className="text-terminal-accent font-bold">contractual & freelance opportunities</span> to 
                  apply DevOps skills in real-world projects. Open to remote collaboration on automation, 
                  cloud infrastructure, and CI/CD pipeline projects.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="skill-tag">Open to Work</span>
                  <span className="skill-tag">Freelance</span>
                  <span className="skill-tag">Contract</span>
                  <span className="skill-tag">Remote</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
