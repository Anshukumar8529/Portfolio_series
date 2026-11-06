import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { useMedia } from '../hooks/useMedia';
import { EASE } from './fx';
import { ResumeSheet } from './ResumeViewer';

type ResumeTab = 'sheet' | 'general' | 'specialized';

/** Full-screen interactive resume viewer supporting dual CV PDF preview and styled screenplay sheet. */
export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const small = useMedia('(max-width: 767px)');
  const [tab, setTab] = useState<ResumeTab>('sheet');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const activePdf = tab === 'specialized' ? profile.specializedResumePdf : profile.generalResumePdf;
  const activeFilename = tab === 'specialized' ? 'Anshu_Kumar_Specialized_CV.pdf' : 'Anshu_Kumar_General_CV.pdf';

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/92 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume Modal"
    >
      <div className="gutter flex min-h-16 shrink-0 flex-wrap items-center justify-between gap-3 border-b border-white/10 py-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <div className="flex items-center gap-3">
          <p className="truncate font-display text-2xl tracking-wide text-bone">The Full Story</p>
          <div className="hidden rounded-lg bg-white/10 p-0.5 sm:flex">
            <button
              type="button"
              onClick={() => setTab('sheet')}
              className={`rounded-md px-3 py-1 text-xs font-semibold transition ${tab === 'sheet' ? 'bg-bone text-ink' : 'text-mist hover:text-bone'}`}
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => setTab('general')}
              className={`rounded-md px-3 py-1 text-xs font-semibold transition ${tab === 'general' ? 'bg-bone text-ink' : 'text-mist hover:text-bone'}`}
            >
              General CV (PDF)
            </button>
            <button
              type="button"
              onClick={() => setTab('specialized')}
              className={`rounded-md px-3 py-1 text-xs font-semibold transition ${tab === 'specialized' ? 'bg-bone text-ink' : 'text-mist hover:text-bone'}`}
            >
              Specialized CV (PDF)
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={profile.generalResumePdf}
            download="Anshu_Kumar_General_CV.pdf"
            className="rounded-md border border-white/20 bg-black/40 px-3 py-2 text-xs font-bold text-bone transition hover:border-white hover:bg-white/10"
          >
            ⤓ General CV
          </a>
          <a
            href={profile.specializedResumePdf}
            download="Anshu_Kumar_Specialized_CV.pdf"
            className="rounded-md bg-crimson px-3 py-2 text-xs font-bold text-white shadow-[0_0_20px_rgba(229,19,43,0.4)] transition hover:bg-crimson-2"
          >
            ⤓ Specialized CV
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume"
            data-cursor="close"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Mobile tab bar */}
      <div className="flex border-b border-white/10 bg-ink-2/60 px-4 py-2 sm:hidden">
        <button
          type="button"
          onClick={() => setTab('sheet')}
          className={`flex-1 py-1.5 text-center text-xs font-semibold ${tab === 'sheet' ? 'border-b-2 border-crimson text-bone' : 'text-smoke'}`}
        >
          Overview
        </button>
        <button
          type="button"
          onClick={() => setTab('general')}
          className={`flex-1 py-1.5 text-center text-xs font-semibold ${tab === 'general' ? 'border-b-2 border-crimson text-bone' : 'text-smoke'}`}
        >
          General PDF
        </button>
        <button
          type="button"
          onClick={() => setTab('specialized')}
          className={`flex-1 py-1.5 text-center text-xs font-semibold ${tab === 'specialized' ? 'border-b-2 border-crimson text-bone' : 'text-smoke'}`}
        >
          Specialized PDF
        </button>
      </div>

      <motion.div
        className="gutter flex-1 pb-6 pt-4"
        initial={{ opacity: 0, y: 30, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        {tab === 'sheet' ? (
          <div data-lenis-prevent className="h-full overflow-y-auto pr-1">
            <ResumeSheet />
          </div>
        ) : small ? (
          <div data-lenis-prevent className="flex h-full flex-col items-center justify-center rounded-xl bg-ink-2 p-6 text-center">
            <p className="font-display text-2xl text-bone">{tab === 'specialized' ? 'Specialized CV' : 'General CV'}</p>
            <p className="mt-2 max-w-xs text-xs text-mist">
              Mobile browsers display PDFs best when opened in a dedicated tab or downloaded directly.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={activePdf}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-bone px-6 text-sm font-bold text-ink"
              >
                Open Original PDF ↗
              </a>
              <a
                href={activePdf}
                download={activeFilename}
                className="glass flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-semibold text-bone"
              >
                Download PDF ({activeFilename})
              </a>
            </div>
          </div>
        ) : (
          <iframe
            key={activePdf}
            title={`${profile.displayName} Resume (${tab})`}
            src={`${activePdf}#view=FitH`}
            className="h-full w-full rounded-xl bg-white shadow-2xl"
          />
        )}
      </motion.div>
    </motion.div>
  );
}
