"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "./ui/TerminalWindow";
import Image from "next/image";
import { Calendar, MapPin, GraduationCap, Heart } from "lucide-react";

const timeline = [
  {
    year: "2023",
    event: "Started B.Tech in Computer Science Engineering",
    icon: GraduationCap,
  },
  {
    year: "2026",
    event: "Started DevOps learning journey",
    icon: Calendar,
  },
  {
    year: "2026",
    event: "Began content creation & personal branding",
    icon: Heart,
  },
  {
    year: "2027",
    event: "Expected graduation",
    icon: GraduationCap,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-terminal-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="text-terminal-accent font-mono">$</span> cat about.md
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Profile Card */}
          <motion.div variants={itemVariants}>
            <TerminalWindow title="profile.md">
              <div className="space-y-6">
                {/* Profile Image */}
                <div className="flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-terminal-accent shadow-[0_0_30px_rgba(249,189,43,0.3)]">
                    <Image
                      src="/profile.jpeg"
                      alt="Ashutosh Shukla"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-4 text-terminal-text">
                  <h3 className="text-2xl font-bold font-sans text-terminal-accent">
                    Ashutosh Shukla
                  </h3>
                  
                  <p className="text-terminal-muted leading-relaxed">
                    I&apos;m a third-year CS student on a self-driven DevOps learning path. 
                    I believe in learning by doing — every command I run, I document. 
                    Currently building foundational skills in Linux, Docker, and Git while 
                    sharing knowledge through content creation.
                  </p>

                  <div className="space-y-2 pt-4">
                    <div className="flex items-center gap-3 text-terminal-muted">
                      <GraduationCap size={18} className="text-terminal-accent" />
                      <span className="font-mono text-sm">
                        B.Tech CSE, Abdul Kalam Technical University
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-terminal-muted">
                      <MapPin size={18} className="text-terminal-accent" />
                      <span className="font-mono text-sm">Ghaziabad, India</span>
                    </div>
                    <div className="flex items-center gap-3 text-terminal-muted">
                      <Calendar size={18} className="text-terminal-accent" />
                      <span className="font-mono text-sm">2023 - 2027</span>
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <p className="text-sm font-mono">
                      <span className="text-terminal-accent">GPA:</span>{" "}
                      <span className="text-terminal-text">7.78</span>
                    </p>
                    <p className="text-sm font-mono">
                      <span className="text-terminal-accent">Languages:</span>{" "}
                      <span className="text-terminal-text">Hindi, English</span>
                    </p>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants}>
            <TerminalWindow title="timeline.log">
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-mono text-terminal-accent mb-6">
                  Journey Timeline
                </h3>

                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-terminal-border"></div>

                  {/* Timeline Items */}
                  <div className="space-y-8">
                    {timeline.map((item, index) => (
                      <motion.div
                        key={index}
                        className="relative pl-12"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 w-8 h-8 rounded-full bg-terminal-bg border-2 border-terminal-accent flex items-center justify-center">
                          <item.icon size={16} className="text-terminal-accent" />
                        </div>

                        {/* Content */}
                        <div className="space-y-1">
                          <p className="text-terminal-accent font-mono font-bold">
                            {item.year}
                          </p>
                          <p className="text-terminal-text text-sm leading-relaxed">
                            {item.event}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div className="pt-8 border-t border-terminal-border">
                  <h4 className="text-sm font-mono text-terminal-accent mb-3">
                    Interests & Focus Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Content Creation", "Personal Branding", "DevOps", "Cloud Computing", "Automation"].map(
                      (interest) => (
                        <span
                          key={interest}
                          className="px-3 py-1 bg-terminal-bg-dark text-terminal-muted border border-terminal-border rounded text-xs font-mono"
                        >
                          {interest}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
