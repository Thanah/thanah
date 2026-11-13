import type { ReactNode } from 'react'
import { caption, type Photo } from '../data/photos'

type ImgProps = { photo: Photo; sizes: string; className?: string; priority?: boolean }

export function PhotoImg({ photo, sizes, className = '', priority = false }: ImgProps) {
  return (
    <img
      src={photo.src}
      srcSet={photo.srcSet}
      sizes={sizes}
      width={photo.width}
      height={photo.height}
      alt={photo.alt}
      loading={priority ? undefined : 'lazy'}
      decoding="async"
      className={className}
    />
  )
}

/** "Place · Camera · Lens" in the mono label style, like a print's caption. */
export function PhotoCaption({ photo, label, className = '' }: { photo: Photo; label?: string; className?: string }) {
  const credit = photo.credit ? `Photo: ${photo.credit}` : ''
  return (
    <p className={`font-mono text-[11px] uppercase tracking-widest ${className}`}>
      {label && <span className="text-accent">{label} · </span>}
      {[caption(photo), credit].filter(Boolean).join(' · ')}
    </p>
  )
}

/** A photo behind a section, washed toward the page color (see .photo-backdrop). Decorative.
 *  `strong` washes it further, for bright photos under body text. */
export function PhotoBackdrop({ photo, priority = false, strong = false }: { photo: Photo; priority?: boolean; strong?: boolean }) {
  return (
    <div className={`photo-backdrop ${strong ? 'photo-backdrop-strong' : ''}`} aria-hidden="true">
      <img
        src={photo.src}
        srcSet={photo.srcSet}
        sizes="100vw"
        alt=""
        loading={priority ? undefined : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : undefined}
      />
    </div>
  )
}

/** A full-bleed photo between sections, at its own colors, with a caption. */
export function Plate({ photo, children }: { photo: Photo; children?: ReactNode }) {
  return (
    <figure className="plate relative isolate h-[52vh] min-h-72 max-h-[560px] overflow-hidden">
      <PhotoImg photo={photo} sizes="100vw" className="absolute inset-0 -z-10 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/70 via-black/10 to-transparent" aria-hidden="true" />
      <figcaption className="mx-auto flex h-full max-w-5xl flex-col justify-end gap-3 px-4 pb-8 text-white sm:px-6">
        {children}
        <PhotoCaption photo={photo} className="text-white/75" />
      </figcaption>
    </figure>
  )
}
