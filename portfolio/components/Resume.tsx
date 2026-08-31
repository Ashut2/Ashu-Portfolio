"use client";

import { motion } from "framer-motion";
import { Download, FileText, FolderGit2, Terminal } from "lucide-react";
import { TerminalWindow } from "./ui/TerminalWindow";

const coreSkills = [
  "Terraform",
  "AWS (EC2, S3, IAM, CloudFront, VPC)",
  "Linux (Ubuntu)",
  "Ansible",
  "Docker fundamentals",
  "Bash",
];

export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-terminal-bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="text-terminal-accent font-mono">$</span> cat resume.md
          </h2>
          <p className="text-terminal-muted font-mono text-sm md:text-base mb-8">
            {"// A concise view of my DevOps and cloud journey"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <TerminalWindow title="ashutosh-shukla-resume.docx">
            <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
              <div className="space-y-6">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-3 text-terminal-accent">
                      <FileText size={24} />
                      <span className="font-mono text-sm">RESUME</span>
                    </div>
                    <h3 className="mt-3 text-2xl md:text-3xl font-bold font-sans text-terminal-text">
                      DevOps &amp; Cloud Engineer — Entry Level
                    </h3>
                  </div>
                  <a
                    href="/Ashutosh_Shukla_DevOps_Cloud_Resume.docx"
                    download
                    className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <Download size={18} />
                    download resume
                  </a>
                </div>

                <p className="text-terminal-text leading-relaxed">
                  Final-year Computer Science student with hands-on experience in Linux
                  system administration, Terraform-based infrastructure as code, and
                  Ansible configuration management. I am building production-style AWS
                  infrastructure projects while seeking a DevOps or Cloud internship /
                  entry-level role.
                </p>

                <div className="border-t border-terminal-border pt-6">
                  <p className="mb-3 flex items-center gap-2 font-mono text-sm font-bold text-terminal-accent">
                    <Terminal size={16} /> core stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {coreSkills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-terminal-border bg-terminal-bg p-6">
                <div className="flex items-center gap-3 text-terminal-accent">
                  <FolderGit2 size={22} />
                  <span className="font-mono text-sm">featured project</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-terminal-text">
                  FinCommerce DevOps Platform
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-terminal-muted">
                  A modular, multi-phase AWS platform progressing from Terraform and
                  Docker to Kubernetes, CI/CD, and observability.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-terminal-text">
                  <li className="flex gap-3"><span className="text-terminal-accent">▹</span>Reusable EC2 Terraform module with remote S3 state.</li>
                  <li className="flex gap-3"><span className="text-terminal-accent">▹</span>Multi-AZ VPC architecture and security planning in progress.</li>
                  <li className="flex gap-3"><span className="text-terminal-accent">▹</span>Architecture decisions documented as ADRs.</li>
                </ul>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
