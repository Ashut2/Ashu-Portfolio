"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "./ui/TerminalWindow";
import { GithubIcon, LinkedinIcon, MailIcon, TwitterXIcon, InstagramIcon, YoutubeIcon } from "./ui/Icons";
import { MapPin, Briefcase } from "lucide-react";

const contactMethods = [
  {
    Icon: MailIcon,
    label: "Email",
    value: "ashutosh.shukla@gmail.com",
    href: "mailto:ashutosh.shukla@gmail.com",
    description: "Preferred for project inquiries",
    color: "#f9bd2b",
  },
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/ashutosh1shukla",
    href: "https://linkedin.com/in/ashutosh1shukla",
    description: "Connect for professional networking",
    color: "#0A66C2",
  },
  {
    Icon: GithubIcon,
    label: "GitHub",
    value: "github.com/Ashut2",
    href: "https://github.com/Ashut2",
    description: "Check out my code & projects",
    color: "#f9bd2b",
  },
];

const socialPlatforms = [
  {
    Icon: TwitterXIcon,
    label: "Twitter / X",
    href: "https://x.com/AshutoshSh1382",
    description: "DevOps & Tech content",
  },
  {
    Icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/ashu_fyi/",
    description: "Life skills & Marketing",
  },
  {
    Icon: YoutubeIcon,
    label: "YouTube",
    href: "https://www.youtube.com/@AshutoshShukla-ym7of",
    description: "Educational content",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-terminal-bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="text-terminal-accent font-mono">$</span> ./contact.sh
          </h2>
          <p className="text-terminal-muted font-mono text-sm md:text-base mb-8">
            Let&apos;s connect and build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <TerminalWindow title="contact-info.sh">
              <div className="space-y-6">
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-terminal-bg rounded-lg border-2 border-terminal-border hover:border-terminal-accent transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      data-testid={`contact-method-${method.label.toLowerCase()}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                          style={{
                            backgroundColor: `${method.color}20`,
                            borderColor: method.color,
                          }}
                        >
                          <method.Icon 
                            className="w-5 h-5"
                            style={{ color: method.color }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-terminal-text font-mono font-bold mb-1 group-hover:text-terminal-accent transition-colors">
                            {method.label}
                          </h3>
                          <p className="text-terminal-accent text-sm font-mono break-all mb-1">
                            {method.value}
                          </p>
                          <p className="text-terminal-muted text-xs">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Location */}
                <div className="pt-4 border-t border-terminal-border">
                  <div className="flex items-center gap-3 text-terminal-muted">
                    <MapPin size={18} className="text-terminal-accent" />
                    <span className="font-mono text-sm">Ghaziabad, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-terminal-muted mt-2">
                    <Briefcase size={18} className="text-terminal-accent" />
                    <span className="font-mono text-sm">
                      Open for Contractual &amp; Freelance Work
                    </span>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Contact Form Placeholder & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Future Contact Form */}
            {/* TODO: Future Resend integration for contact form */}
            <TerminalWindow title="send-message.sh">
              <div className="space-y-4">
                <p className="text-terminal-accent font-mono text-sm mb-4">
                  $ send-message
                </p>

                <div className="space-y-3 opacity-50 pointer-events-none">
                  <div>
                    <label className="block text-terminal-muted font-mono text-sm mb-2">
                      {"> "}Enter name:
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-terminal-bg border-2 border-terminal-border rounded font-mono text-sm text-terminal-text"
                      placeholder="Your name"
                      disabled
                    />
                  </div>

                  <div>
                    <label className="block text-terminal-muted font-mono text-sm mb-2">
                      {"> "}Enter email:
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-terminal-bg border-2 border-terminal-border rounded font-mono text-sm text-terminal-text"
                      placeholder="your.email@example.com"
                      disabled
                    />
                  </div>

                  <div>
                    <label className="block text-terminal-muted font-mono text-sm mb-2">
                      {"> "}Enter message:
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 bg-terminal-bg border-2 border-terminal-border rounded font-mono text-sm text-terminal-text resize-none"
                      placeholder="Your message..."
                      disabled
                    />
                  </div>

                  <button
                    className="w-full px-6 py-3 bg-terminal-accent/50 text-terminal-bg font-mono font-bold rounded cursor-not-allowed"
                    disabled
                  >
                    [ ./send.sh ]
                  </button>
                </div>

                <div className="pt-4 border-t border-terminal-border">
                  <p className="text-terminal-muted font-mono text-xs italic">
                    {/* TODO: Contact form with Resend integration coming soon... */}
                    // Contact form with Resend integration coming soon...
                  </p>
                  <p className="text-terminal-accent font-mono text-xs mt-2">
                    // For now, please use email or LinkedIn above
                  </p>
                </div>
              </div>
            </TerminalWindow>

            {/* Social Platforms */}
            <TerminalWindow title="social-links.sh">
              <div className="space-y-4">
                <h3 className="text-terminal-accent font-mono font-bold">
                  Follow me on social media:
                </h3>

                <div className="space-y-3">
                  {socialPlatforms.map((platform, index) => (
                    <motion.a
                      key={platform.label}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-terminal-bg rounded border border-terminal-border hover:border-terminal-accent transition-all duration-300 group"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      data-testid={`social-platform-${platform.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="flex items-center gap-3">
                        <platform.Icon 
                          className="w-5 h-5 text-terminal-accent group-hover:scale-110 transition-transform" 
                        />
                        <div>
                          <p className="text-terminal-text font-mono text-sm group-hover:text-terminal-accent transition-colors">
                            {platform.label}
                          </p>
                          <p className="text-terminal-muted text-xs">
                            {platform.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-terminal-muted text-xs font-mono">{"->"}</span>
                    </motion.a>
                  ))}
                </div>

                <p className="text-terminal-muted font-mono text-xs italic pt-4">
                  // Social links verified and up to date
                </p>
              </div>
            </TerminalWindow>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="p-8 bg-terminal-bg-light rounded-lg border-2 border-terminal-accent">
            <h3 className="text-2xl md:text-3xl font-bold font-sans text-terminal-text mb-4">
              Let&apos;s Build Something Together!
            </h3>
            <p className="text-terminal-muted max-w-2xl mx-auto mb-6">
              Whether it&apos;s a DevOps project, automation script, or cloud infrastructure setup — 
              I&apos;m always excited to collaborate and learn. Open to freelance and contractual work!
            </p>
            <a
              href="mailto:ashutosh.shukla@gmail.com"
              className="btn-primary inline-block"
              data-testid="contact-cta-btn"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
