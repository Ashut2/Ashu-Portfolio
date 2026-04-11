"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "./ui/TerminalWindow";
import { siDocker, siGit, siLinux, siPython, siGithub } from "simple-icons";
import { Award, Code, Network, Cloud, Terminal } from "lucide-react";

interface SimpleIcon {
  path: string;
}

const skillCategories = [
  {
    title: "DevOps Tools",
    icon: Terminal,
    skills: [
      { name: "Linux", level: "Intermediate", siIcon: siLinux as SimpleIcon, color: "#FCC624" },
      { name: "Docker", level: "Learning", siIcon: siDocker as SimpleIcon, color: "#2496ED" },
      { name: "Git", level: "Intermediate", siIcon: siGit as SimpleIcon, color: "#F05032" },
      { name: "GitHub", level: "Intermediate", siIcon: siGithub as SimpleIcon, color: "#f9bd2b" },
      { name: "AWS Cloud", level: "Learning", siIcon: null, color: "#FF9900" },
      { name: "Shell Scripting", level: "Intermediate", siIcon: null, color: "#4EAA25" },
    ],
  },
  {
    title: "Networking",
    icon: Network,
    skills: [
      { name: "Networking Fundamentals", level: "Basic", siIcon: null, color: "#0078D4" },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: "Intermediate", siIcon: siPython as SimpleIcon, color: "#3776AB" },
      { name: "Java", level: "Basic", siIcon: null, color: "#007396" },
    ],
  },
  {
    title: "Concepts & Practices",
    icon: Cloud,
    skills: [
      { name: "Version Control", level: "Intermediate", siIcon: null, color: "#F05032" },
      { name: "OS Basics", level: "Intermediate", siIcon: null, color: "#FCC624" },
      { name: "CI/CD", level: "Learning", siIcon: null, color: "#2088FF" },
      { name: "Infrastructure as Code", level: "Learning", siIcon: null, color: "#5C4EE5" },
    ],
  },
];

const certifications = [
  {
    name: "Network Fundamentals",
    issuer: "Infosys (via Springboard)",
    date: "April 2026",
    verified: true,
  },
];

const platforms = [
  "KodeKloud",
  "GitHub",
  "AWS",
  "Docker Hub",
  "Stack Overflow",
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "text-green-400 border-green-400";
    case "Intermediate":
      return "text-terminal-accent border-terminal-accent";
    case "Learning":
    case "Basic":
      return "text-blue-400 border-blue-400";
    default:
      return "text-terminal-muted border-terminal-muted";
  }
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-terminal-bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="text-terminal-accent font-mono">$</span> cat skills.txt
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <TerminalWindow title={`${category.title.toLowerCase().replace(/\s+/g, '_')}.sh`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <category.icon size={20} className="text-terminal-accent" />
                    <h3 className="text-lg font-bold font-mono text-terminal-accent">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="flex items-center justify-between gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          {skill.siIcon && (
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill={skill.color}
                            >
                              <path d={skill.siIcon.path} />
                            </svg>
                          )}
                          <span className="text-terminal-text font-mono text-sm">
                            --{skill.name.toLowerCase().replace(/\s+/g, '-')}
                          </span>
                        </div>
                        <span
                          className={`text-xs font-mono px-2 py-1 border rounded ${getLevelColor(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <TerminalWindow title="certifications.json">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Award size={20} className="text-terminal-accent" />
                <h3 className="text-lg font-bold font-mono text-terminal-accent">
                  Certifications
                </h3>
              </div>

              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-terminal-bg rounded border border-terminal-border"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="text-terminal-text font-mono font-bold">
                        {cert.name}
                      </h4>
                      <p className="text-terminal-muted text-sm font-mono">
                        {cert.issuer}
                      </p>
                      <p className="text-terminal-muted text-xs font-mono">
                        Issued: {cert.date}
                      </p>
                    </div>
                    {cert.verified && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-mono border border-green-400 rounded">
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              ))}

              <p className="text-terminal-muted text-xs font-mono italic pt-2">
                // More certifications coming soon...
              </p>
            </div>
          </TerminalWindow>
        </motion.div>

        {/* Learning Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <TerminalWindow title="platforms.txt">
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-mono text-terminal-accent">
                Learning Platforms &amp; Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {platforms.map((platform) => (
                  <span key={platform} className="skill-tag">
                    {platform}
                  </span>
                ))}
              </div>
              <p className="text-terminal-muted text-sm font-mono pt-4">
                <span className="text-terminal-accent">$</span> echo &quot;Continuous learning in progress...&quot;
              </p>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
