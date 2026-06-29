"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Linkedin, Mail, X, Plus } from "lucide-react";

const ACTIONS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/84362325875",
    icon: MessageCircle,
    bg: "bg-[#25D366]",
  },
  {
    label: "Zalo",
    href: "https://zalo.me/0362325875",
    icon: MessageCircle,
    bg: "bg-[#0068FF]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nhatcuong1710/",
    icon: Linkedin,
    bg: "bg-[#0A66C2]",
  },
  {
    label: "Email",
    href: "mailto:business@humaconsulting.com.vn",
    icon: Mail,
    bg: "bg-brand-500",
  },
];

export default function FloatingButtons() {
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open &&
          ACTIONS.map((action, i) => (
            <motion.a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={action.label}
              initial={{ opacity: 0, y: 12, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.85 }}
              transition={{ duration: 0.2, delay: i * 0.04 }}
              className={`flex h-12 w-12 items-center justify-center rounded-full ${action.bg} text-white shadow-card transition-transform hover:scale-110`}
            >
              {action.label === "Zalo" ? <span className="font-bold text-sm">Zalo</span> : action.label === "WhatsApp" ? <span className="font-bold text-sm">WA</span> : <action.icon className="h-5 w-5" />}
            </motion.a>
          ))}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open contact options"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-glow transition-transform hover:scale-105"
      >
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
          {open ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        </motion.span>
      </button>
    </div>
  );
}
