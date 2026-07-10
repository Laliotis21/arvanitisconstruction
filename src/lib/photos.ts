// Real company photos (Arvanitis HQ / interiors), optimized to 1600px.
import p9259 from '../assets/photos/9259.webp' // office w/ logo wall (portrait) — hero
import p9802 from '../assets/photos/9802.webp' // storefront exterior (portrait) — about
import p9829 from '../assets/photos/9829.webp' // glass entrance lounge (wide)
import p9450 from '../assets/photos/9450.webp' // floating wood stairs (tall)
import p9519 from '../assets/photos/9519.webp' // dark wood desk + slats
import p9490 from '../assets/photos/9490.webp' // wood lounge / TV
import p9619 from '../assets/photos/9619.webp' // bathroom LED mirror (tall)
import p9822 from '../assets/photos/9822.webp' // office interior wide

export const photos = {
  heroPlate: p9259,
  aboutVisual: p9802,
  p9829,
  p9450,
  p9519,
  p9490,
  p9619,
  p9822,
}

// Real project photos (client works, 2025–2026), optimized WebP ≤1600px.
import pitchNight from '../assets/photos/portfolio/pitch-night.webp'
import pitchDay from '../assets/photos/portfolio/pitch-day.webp'
import renoHouse from '../assets/photos/portfolio/reno-house.webp'
import newHouse from '../assets/photos/portfolio/new-house.webp'
import design3d from '../assets/photos/portfolio/design-3d.webp'
import commercialHall from '../assets/photos/portfolio/commercial-hall.webp'
import wishRoom from '../assets/photos/portfolio/wish-room.webp'
import interiorMinimal from '../assets/photos/portfolio/interior-minimal.webp'

// Extra gallery shots per project (lightbox on /projects/).
import pitchNight2 from '../assets/photos/portfolio/pitch-night-2.webp'
import pitchNight3 from '../assets/photos/portfolio/pitch-night-3.webp'
import pitchNight4 from '../assets/photos/portfolio/pitch-night-4.webp'
import pitchDay2 from '../assets/photos/portfolio/pitch-day-2.webp'
import pitchDay3 from '../assets/photos/portfolio/pitch-day-3.webp'
import pitchDay4 from '../assets/photos/portfolio/pitch-day-4.webp'
import renoHouse2 from '../assets/photos/portfolio/reno-house-2.webp'
import renoHouse3 from '../assets/photos/portfolio/reno-house-3.webp'
import renoHouse4 from '../assets/photos/portfolio/reno-house-4.webp'
import design3d2 from '../assets/photos/portfolio/design-3d-2.webp'
import newHouse2 from '../assets/photos/portfolio/new-house-2.webp'
import newHouse3 from '../assets/photos/portfolio/new-house-3.webp'
import wishRoom2 from '../assets/photos/portfolio/wish-room-2.webp'
import wishRoom3 from '../assets/photos/portfolio/wish-room-3.webp'
import interiorMinimal2 from '../assets/photos/portfolio/interior-minimal-2.webp'

// Ordered list mapped onto the projects grid.
export const projectImages: Record<string, string> = {
  p1: pitchNight,
  p2: commercialHall,
  p3: renoHouse,
  p4: design3d,
  p5: pitchDay,
  p6: newHouse,
  p7: wishRoom,
  p8: interiorMinimal,
  p9: p9829,
  p10: p9619,
}

// Full gallery per project — first image is the grid cover.
export const projectGalleries: Record<string, string[]> = {
  p1: [pitchNight, pitchNight2, pitchNight3, pitchNight4],
  p2: [commercialHall],
  p3: [renoHouse, renoHouse2, renoHouse3, renoHouse4],
  p4: [design3d, design3d2],
  p5: [pitchDay, pitchDay2, pitchDay3, pitchDay4],
  p6: [newHouse, newHouse2, newHouse3],
  p7: [wishRoom, wishRoom2, wishRoom3],
  p8: [interiorMinimal, interiorMinimal2],
  p9: [p9829, p9822, p9490, p9519, p9450],
  p10: [p9619],
}
