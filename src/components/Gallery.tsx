import { useRef, useState } from 'react'
import type { Screenshot } from '../data/profile'

// Thumbnails that open a full-size screenshot in a native <dialog>, which
// handles focus trapping and Escape for free.
export function Gallery({ name, shots }: { name: string; shots: Screenshot[] }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState<Screenshot | null>(null)

  function show(shot: Screenshot) {
    setOpen(shot)
    dialog.current?.showModal?.()
  }

  return (
    <>
      <ul className="grid grid-cols-3 gap-3" aria-label={`${name} screenshots`}>
        {shots.map((shot) => (
          <li key={shot.caption}>
            <button
              type="button"
              onClick={() => show(shot)}
              className="group/shot block w-full text-left focus-visible:outline-none"
              aria-label={`View ${shot.caption} screenshot full size`}
            >
              <span className="block overflow-hidden rounded-lg border border-line transition group-hover/shot:border-accent/60 group-focus-visible/shot:ring-2 group-focus-visible/shot:ring-accent">
                <img
                  src={shot.thumb}
                  alt={shot.alt}
                  width={480}
                  height={300}
                  loading="lazy"
                  className="aspect-[8/5] w-full object-cover object-top transition duration-500 group-hover/shot:scale-105"
                />
              </span>
              <span className="mt-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted">{shot.caption}</span>
            </button>
          </li>
        ))}
      </ul>
      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        aria-label={open ? `${name}: ${open.caption}` : name}
        className="m-auto max-h-[92vh] w-[min(1200px,94vw)] overflow-visible bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        {open && (
          <figure>
            <img src={open.src} alt={open.alt} className="max-h-[84vh] w-full rounded-xl object-contain shadow-2xl" />
            <figcaption className="mt-3 flex items-center justify-between text-sm text-white/80">
              <span>
                {name} · {open.caption}
              </span>
              <button
                type="button"
                onClick={() => dialog.current?.close()}
                className="rounded-full border border-white/25 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white hover:bg-white/10"
              >
                Close
              </button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  )
}
