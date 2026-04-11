"use client";

import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "./ui/Icons";
import { siNextdotjs, siTailwindcss, siVercel } from "simple-icons";

const socialLinks = [
  { Icon: GithubIcon, href: "https://github.com/Ashut2", label: "GitHub" },
  { Icon: LinkedinIcon, href: "https://linkedin.com/in/ashutosh1shukla", label: "LinkedIn" },
  { Icon: MailIcon, href: "mailto:ashutosh.shukla@gmail.com", label: "Email" },
];

const techStack = [
  { icon: siNextdotjs, name: "Next.js" },
  { icon: siTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: siVercel, name: "Vercel" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-terminal-bg-dark border-t-2 border-terminal-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-terminal-accent font-mono font-bold text-xl">
              $ ashutosh.dev
            </h3>
            <p className="text-terminal-muted text-sm leading-relaxed">
              DevOps Learner building the future, one command at a time.
            </p>
            <p className="text-terminal-accent font-mono text-xs">
              &quot;Be less Impressed &amp; More Involved!&quot;
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-terminal-text font-mono font-bold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-terminal-muted hover:text-terminal-accent transition-colors text-sm font-mono"
                >
                  {"-> "}{link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-terminal-text font-mono font-bold">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-terminal-bg-light border-2 border-terminal-border flex items-center justify-center text-terminal-muted hover:border-terminal-accent hover:text-terminal-accent transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                  data-testid={`footer-social-${link.label.toLowerCase()}`}
                >
                  <link.Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
            <p className="text-terminal-muted text-sm">
              Open for freelance &amp; contractual work
            </p>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="border-t border-terminal-border pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-terminal-muted text-sm font-mono">Built &amp; deployed with:</span>
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-3 py-1 bg-terminal-bg-light border border-terminal-border rounded"
                title={tech.name}
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill={tech.color || "#f9bd2b"}
                >
                  <path d={tech.icon.path} />
                </svg>
                <span className="text-terminal-muted text-xs font-mono">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-terminal-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-terminal-muted font-mono">
            <p className="flex items-center gap-2">
              &copy; {currentYear} Ashutosh Shukla. Made with{" "}
              <Heart size={14} className="text-red-500 inline animate-pulse" /> and{" "}
              <span className="text-terminal-accent">code</span>
            </p>
            <p className="text-xs">
              <span className="text-terminal-accent">$</span> git push origin main --force
            </p>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="mt-8 text-center">
          <p className="text-terminal-muted text-xs font-mono opacity-50">
            // DevOps portfolio built with DevOps practices
          </p>
        </div>
      </div>
    </footer>
  );
}
