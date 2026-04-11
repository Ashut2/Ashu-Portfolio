"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "./ui/Icons";
import { TerminalWindow } from "./ui/TerminalWindow";
import { Typewriter } from "./ui/Typewriter";
import { siDocker, siGit, siLinux } from "simple-icons";

const socialLinks = [
  { 
    Icon: GithubIcon, 
    href: "https://github.com/Ashut2", 
    label: "GitHub",
    username: "@Ashut2"
  },
  { 
    Icon: LinkedinIcon, 
    href: "https://linkedin.com/in/ashutosh1shukla", 
    label: "LinkedIn",
    username: "ashutosh1shukla"
  },
  { 
    Icon: MailIcon, 
    href: "mailto:ashutosh.shukla@gmail.com", 
    label: "Email",
    username: "ashutosh.shukla@gmail.com"
  },
];

const floatingIcons = [
  { icon: siDocker, color: "#2496ED", delay: 0 },
  { icon: siGit, color: "#F05032", delay: 1 },
  { icon: siLinux, color: "#FCC624", delay: 2 },
];

export default function Hero() {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center dot-bg overflow-hidden"
    >
      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute opacity-5"
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 md:w-32 md:h-32"
              fill={item.color}
            >
              <path d={item.icon.path} />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div>
                <p className="text-terminal-muted font-mono text-sm md:text-base mb-2">
                  $ cat introduction.txt
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-terminal-text mb-4">
                  Hi, I&apos;m{" "}
                  <span className="text-terminal-accent">Ashutosh Shukla</span>
                </h1>
                <p className="text-xl md:text-2xl text-terminal-muted font-body">
                  DevOps Learner | CS Engineering Student | Content Creator
                </p>
              </div>

              <div className="pt-4">
                <p className="text-terminal-accent font-mono text-lg md:text-xl font-semibold mb-2">
                  &quot;Be less Impressed &amp; More Involved!&quot;
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="btn-primary" data-testid="view-projects-btn">
                  [ view projects/ ]
                </a>
                <a href="#contact" className="btn-secondary" data-testid="contact-btn">
                  [ contact.sh ]
                </a>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 pt-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-terminal-muted hover:text-terminal-accent transition-colors"
                    data-testid={`social-link-${link.label.toLowerCase()}`}
                  >
                    <link.Icon className="w-5 h-5" />
                    <span className="font-mono text-sm group-hover:underline">
                      {link.username}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TerminalWindow title="~/ashutosh">
              <div className="space-y-4 font-mono text-sm md:text-base">
                <div>
                  <span className="text-terminal-accent">$</span>{" "}
                  <Typewriter 
                    text="whoami" 
                    speed={100}
                    onComplete={() => setShowSecondLine(true)}
                  />
                </div>
                
                {showSecondLine && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-terminal-text pl-4"
                  >
                    <Typewriter 
                      text="> ashutosh-shukla" 
                      speed={80}
                      onComplete={() => setShowThirdLine(true)}
                    />
                  </motion.div>
                )}

                {showThirdLine && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <span className="text-terminal-accent">$</span>{" "}
                      <Typewriter 
                        text="cat about.txt" 
                        speed={80}
                        onComplete={() => setShowButtons(true)}
                      />
                    </motion.div>

                    {showButtons && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-terminal-text pl-4 space-y-2"
                      >
                        <p>{"> "}CS Engineering student learning DevOps from scratch.</p>
                        <p>{"> "}Currently exploring: Linux, Docker, Git, CI/CD, AWS.</p>
                        <p>{"> "}Location: Ghaziabad, India</p>
                        <p>{"> "}Status: Open for contractual &amp; freelance work</p>
                      </motion.div>
                    )}
                  </>
                )}
              </div>
            </TerminalWindow>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-terminal-muted hover:text-terminal-accent transition-colors"
          >
            <span className="text-sm font-mono mb-2">scroll</span>
            <ChevronDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
