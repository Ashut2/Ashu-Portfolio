"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "./ui/TerminalWindow";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export default function Education() {
  const educationData = {
    degree: "Bachelor of Technology",
    branch: "Computer Science Engineering",
    university: "Abdul Kalam Technical University",
    location: "Ghaziabad, India",
    duration: "2023 – 2027",
    gpa: "7.08",
    status: "In Progress",
  };

  return (
    <section id="education" className="section-padding bg-terminal-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="text-terminal-accent font-mono">$</span> cat education.json
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <TerminalWindow title="education.json">
            {/* JSON Display with Syntax Highlighting */}
            <div className="font-mono text-sm md:text-base">
              <div className="space-y-1">
                <div>
                  <span className="text-terminal-muted">{'{'}</span>
                </div>

                <div className="pl-4">
                  <span className="text-blue-400">"degree"</span>
                  <span className="text-terminal-muted">: </span>
                  <span className="text-green-400">"{educationData.degree}"</span>
                  <span className="text-terminal-muted">,</span>
                </div>

                <div className="pl-4">
                  <span className="text-blue-400">"branch"</span>
                  <span className="text-terminal-muted">: </span>
                  <span className="text-green-400">"{educationData.branch}"</span>
                  <span className="text-terminal-muted">,</span>
                </div>

                <div className="pl-4">
                  <span className="text-blue-400">"university"</span>
                  <span className="text-terminal-muted">: </span>
                  <span className="text-green-400">"{educationData.university}"</span>
                  <span className="text-terminal-muted">,</span>
                </div>

                <div className="pl-4">
                  <span className="text-blue-400">"location"</span>
                  <span className="text-terminal-muted">: </span>
                  <span className="text-green-400">"{educationData.location}"</span>
                  <span className="text-terminal-muted">,</span>
                </div>

                <div className="pl-4">
                  <span className="text-blue-400">"duration"</span>
                  <span className="text-terminal-muted">: </span>
                  <span className="text-green-400">"{educationData.duration}"</span>
                  <span className="text-terminal-muted">,</span>
                </div>

                <div className="pl-4">
                  <span className="text-blue-400">"gpa"</span>
                  <span className="text-terminal-muted">: </span>
                  <span className="text-terminal-accent">{educationData.gpa}</span>
                  <span className="text-terminal-muted">,</span>
                </div>

                <div className="pl-4">
                  <span className="text-blue-400">"status"</span>
                  <span className="text-terminal-muted">: </span>
                  <span className="text-green-400">"{educationData.status}"</span>
                </div>

                <div>
                  <span className="text-terminal-muted">{'}'}</span>
                </div>
              </div>
            </div>

            {/* Visual Education Card */}
            <div className="mt-8 p-6 bg-terminal-bg rounded-lg border-2 border-terminal-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-terminal-accent rounded-full flex items-center justify-center">
                    <GraduationCap size={32} className="text-terminal-bg" />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-sans text-terminal-text">
                      {educationData.degree}
                    </h3>
                    <p className="text-terminal-accent font-semibold">
                      {educationData.branch}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-terminal-muted">
                      <GraduationCap size={16} className="text-terminal-accent" />
                      <span className="text-sm">{educationData.university}</span>
                    </div>
                    <div className="flex items-center gap-3 text-terminal-muted">
                      <MapPin size={16} className="text-terminal-accent" />
                      <span className="text-sm">{educationData.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-terminal-muted">
                      <Calendar size={16} className="text-terminal-accent" />
                      <span className="text-sm">{educationData.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-terminal-muted">
                      <Award size={16} className="text-terminal-accent" />
                      <span className="text-sm">
                        Current GPA: <span className="text-terminal-accent font-bold">{educationData.gpa}</span>
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-mono border border-green-400 rounded">
                      {educationData.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Note */}
            <div className="mt-6 p-4 bg-terminal-bg-dark rounded border-l-4 border-terminal-accent">
              <p className="text-terminal-muted text-sm font-mono">
                <span className="text-terminal-accent">// Note:</span> Combining academic excellence with hands-on DevOps practice. 
                Expected graduation in 2027 with strong foundational knowledge in both theory and practical application.
              </p>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
