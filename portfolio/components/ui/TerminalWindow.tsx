"use client";

import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function TerminalWindow({ title, children, className }: TerminalWindowProps) {
  return (
    <div className={cn("terminal-card", className)}>
      <div className="terminal-titlebar">
        <div className="terminal-dot terminal-dot-close"></div>
        <div className="terminal-dot terminal-dot-minimize"></div>
        <div className="terminal-dot terminal-dot-maximize"></div>
        {title && (
          <span className="ml-2 text-terminal-muted text-sm font-mono">{title}</span>
        )}
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}
