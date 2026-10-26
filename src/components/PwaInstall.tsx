"use client";

import { useEffect, useState } from "react";
import { CloseIcon } from "@/components/Icons";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export default function PwaInstall() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  // Register the service worker.
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    const onLoad = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  // Capture the install prompt.
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setVisible(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (!visible || !deferred) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-40 w-[min(92vw,420px)] -translate-x-1/2 rounded-2xl border border-white/10 bg-ink-900/95 p-4 shadow-2xl backdrop-blur-xl">
      <div className="flex items-start gap-3">
        <img src="/images/app-icon-192.png" alt="" className="h-12 w-12 rounded-xl" />
        <div className="flex-1">
          <p className="font-semibold text-white">Install VeRaFIED Studios</p>
          <p className="mt-0.5 text-sm text-slate-400">Add to your home screen for the full experience.</p>
        </div>
        <button onClick={() => setVisible(false)} aria-label="Close" className="text-slate-500 hover:text-white">
          <CloseIcon className="h-5 w-5" />
        </button>
      </div>
      <button
        onClick={async () => {
          await deferred.prompt();
          setVisible(false);
        }}
        className="mt-3 w-full rounded-full bg-gradient-to-r from-ember-500 to-ember-600 py-2.5 text-sm font-semibold text-white"
      >
        Install App
      </button>
    </div>
  );
}
