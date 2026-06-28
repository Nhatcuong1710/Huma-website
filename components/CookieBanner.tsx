"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "huma-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = window.localStorage.getItem(STORAGE_KEY);
      if (!consent) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}
    setVisible(false);
  }

  function decline() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "declined");
    } catch {}
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-xl2 border border-line bg-white p-5 shadow-card sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2"
        >
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <Cookie className="h-5 w-5" />
            </div>
            <p className="flex-1 text-sm leading-relaxed text-ink-muted">
              We use cookies to improve your browsing experience and analyze
              site traffic. By clicking &ldquo;Accept&rdquo;, you consent to our use of cookies.
            </p>
            <div className="flex flex-shrink-0 gap-2">
              <button
                onClick={decline}
                className="rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink-muted transition-colors hover:bg-canvas"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="rounded-full bg-brand-500 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
