// My own photographs, used as the site's visual identity. Camera and lens come
// from each file's EXIF data. Captions skip any field left empty, so nothing
// unverified gets published. Fill-ins are tracked in task.md.
import lake960 from '../assets/photos/alpine-lake-driftwood-960.webp'
import lake1600 from '../assets/photos/alpine-lake-driftwood-1600.webp'
import lake2400 from '../assets/photos/alpine-lake-driftwood-2400.webp'
import rainier960 from '../assets/photos/mt-rainier-clouds-960.webp'
import rainier1600 from '../assets/photos/mt-rainier-clouds-1600.webp'
import rainier2400 from '../assets/photos/mt-rainier-clouds-2400.webp'
import dusk960 from '../assets/photos/valley-mist-dusk-960.webp'
import dusk1600 from '../assets/photos/valley-mist-dusk-1600.webp'
import dusk2400 from '../assets/photos/valley-mist-dusk-2400.webp'
import hiking400 from '../assets/photos/thanah-hiking-400.webp'
import hiking640 from '../assets/photos/thanah-hiking-640.webp'
import hiking800 from '../assets/photos/thanah-hiking-800.webp'

export type Photo = {
  src: string
  srcSet: string
  width: number
  height: number
  alt: string
  /** Where it was taken. Empty hides it from the caption. */
  place: string
  camera: string
  lens: string
  /** Who took it, when it wasn't me. */
  credit?: string
}

const set = (pairs: [string, number][]) => pairs.map(([url, w]) => `${url} ${w}w`).join(', ')

export const photos = {
  hero: {
    src: lake1600,
    srcSet: set([[lake960, 960], [lake1600, 1600], [lake2400, 2400]]),
    width: 2400,
    height: 1350,
    alt: 'Still alpine lake under low cloud, with driftwood in the foreground and snow on the ridgeline',
    place: '', // TODO(thanah): lake name, e.g. "Lake Serene, WA"
    camera: 'Canon EOS R5',
    lens: 'RF 24–70mm f/2.8',
  },
  plate: {
    src: rainier1600,
    srcSet: set([[rainier960, 960], [rainier1600, 1600], [rainier2400, 2400]]),
    width: 2400,
    height: 1350,
    alt: 'Mount Rainier wrapped in cloud above a dark line of evergreens',
    place: 'Mount Rainier, WA', // TODO(thanah): confirm
    camera: 'Canon EOS R5',
    lens: 'RF 24–70mm f/2.8',
  },
  contact: {
    src: dusk1600,
    srcSet: set([[dusk960, 960], [dusk1600, 1600], [dusk2400, 2400]]),
    width: 2400,
    height: 1350,
    alt: 'Forested ridge fading into mist under a soft dusk sky',
    place: '', // TODO(thanah): where this was taken
    camera: 'Canon EOS R5',
    lens: 'RF 24–70mm f/2.8',
  },
  me: {
    src: hiking800,
    srcSet: set([[hiking400, 400], [hiking640, 640], [hiking800, 800]]),
    width: 1728,
    height: 2160,
    alt: 'Thanah on a forest trail with a camera in hand',
    place: '', // TODO(thanah): trail or park
    camera: 'Canon EOS R50',
    lens: 'RF-S 18–45mm',
    credit: '', // TODO(thanah): who took this, or "Self-timer"
  },
} satisfies Record<string, Photo>

/** "Place · Camera · Lens", skipping empty parts. */
export function caption(photo: Photo) {
  return [photo.place, photo.camera, photo.lens].filter(Boolean).join(' · ')
}
