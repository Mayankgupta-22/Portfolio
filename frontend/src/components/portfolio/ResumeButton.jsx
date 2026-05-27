"use client";

import { useEffect, useState } from "react";
import { FileText, Download, X } from "lucide-react";

import { Button } from "@/components/ui/button";

// Served from /public. Keep the filename in sync if you replace the PDF.
const RESUME_URL = "/Mayank_Gupta_Resume.pdf";
const RESUME_FILENAME = "Mayank_Gupta_Resume.pdf";

export default function ResumeButton() {
  const [open, setOpen] = useState(false);

  // While the preview is open: close on Escape, and lock background scroll.
  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <Button size="lg" className="cursor-pointer" onClick={() => setOpen(true)}>
        <FileText className="size-4" />
        View Resume
      </Button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
              <span className="font-mono text-sm font-medium">Resume</span>
              <div className="flex items-center gap-2">
                <Button asChild size="sm">
                  <a href={RESUME_URL} download={RESUME_FILENAME}>
                    <Download className="size-4" />
                    Download
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setOpen(false)}
                  aria-label="Close resume preview"
                >
                  <X className="size-4" />
                </Button>
              </div>
            </div>
            <iframe
              src={RESUME_URL}
              title="Mayank Gupta resume"
              className="h-full w-full flex-1 bg-white"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
