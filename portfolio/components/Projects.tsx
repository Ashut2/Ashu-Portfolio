"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "./ui/TerminalWindow";
import { GithubIcon, AwsIcon } from "./ui/Icons";
import { ExternalLink, FolderGit2 } from "lucide-react";

const projects = [
   {
      title: "DevOps Portfolio — AWS S3 + CloudFront Deployment",
      description:
        "Deployed a personal portfolio website on AWS cloud infrastructure from scratch as a hands-on DevOps practice project. Configured S3 static hosting, CloudFront CDN, IAM security, and automated CI/CD pipeline.",
      repo: "https://github.com/Ashut2/Ashu-Portfolio",
      tags: ["aws", "s3", "cloudfront", "iam", "ci-cd", "github-actions", "nextjs", "linux"],
      status: "Live",
      period: "April 2026",
      highlights: [
        "S3 static website hosting in Mumbai region",
        "CloudFront CDN with free HTTPS across 400+ edge locations",
        "IAM user with least-privilege security permissions",
        "GitHub Actions CI/CD — auto deploy on every git push",
      ],
  },

  {
    title: "AWS Resource Tracker",
    description:
      "Automated AWS resource usage report generation using Bash scripts integrated with cron jobs. Tracks EC2 instances, S3 buckets, Lambda functions, and IAM users.",
    repo: "https://github.com/Ashut2/AWS-Resource-tracker",
    tags: ["aws", "bash", "scripting", "automation", "ec2", "s3", "lambda", "iam"],
    status: "Active",
    period: "2026 - Present",
    highlights: [
      "Automated resource monitoring",
      "Cron job scheduling",
      "AWS CLI integration", 
      "Cost optimization insights",
    ],
  },

  {
    title: "DevOps Roadmap Documentation",
    description:
      "A structured, public DevOps learning roadmap. Documents Linux, Git, Docker, and CI/CD concepts with organized notes and commands for revision and public reference.",
    repo: "https://github.com/Ashut2/Devops-roadmap-2026",
    tags: ["documentation", "linux", "docker", "git", "ci-cd", "open-source"],
    status: "Active",
    period: "2026 - Present",
    highlights: [
      "Comprehensive Linux command reference",
      "Docker containerization guides",
      "Git workflow best practices",
      "CI/CD pipeline concepts",
    ],
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-terminal-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="text-terminal-accent font-mono">$</span> ls -la projects/
          </h2>
          <p className="text-terminal-muted font-mono text-sm md:text-base mb-8">
            total {projects.length} projects
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <TerminalWindow title={`${project.title.toLowerCase().replace(/\s+/g, '-')}/`}>
                <div className="space-y-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <FolderGit2 size={24} className="text-terminal-accent" />
                        <h3 className="text-xl md:text-2xl font-bold font-sans text-terminal-text">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-terminal-muted text-sm font-mono mb-2">
                        {project.period}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded text-xs font-mono border ${
                        project.status === "Active"
                          ? "bg-green-500/20 text-green-400 border-green-400"
                          : "bg-terminal-muted/20 text-terminal-muted border-terminal-muted"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-terminal-text leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <p className="text-terminal-accent font-mono text-sm font-bold">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-terminal-muted text-sm font-mono flex items-start gap-2"
                        >
                          <span className="text-terminal-accent">{"=>"}</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-terminal-border">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-terminal-bg-dark border-2 border-terminal-accent text-terminal-accent font-mono text-sm rounded hover:bg-terminal-accent hover:text-terminal-bg transition-all duration-300"
                      data-testid={`project-github-${index}`}
                    >
                      <GithubIcon className="w-[18px] h-[18px]" />
                      <span>git clone {"=>"}</span>
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border-2 border-terminal-border text-terminal-muted font-mono text-sm rounded hover:border-terminal-accent hover:text-terminal-accent transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>

        {/* Future Projects Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <div className="p-6 bg-terminal-bg-light border-2 border-dashed border-terminal-border rounded-lg text-center">
            <p className="text-terminal-muted font-mono text-sm">
              <span className="text-terminal-accent">$</span> echo &quot;More projects coming soon...&quot;
            </p>
            <p className="text-terminal-muted font-mono text-xs mt-2">
              // Currently working on Kubernetes deployment &amp; Terraform IaC projects
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
