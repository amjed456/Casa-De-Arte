import ClientPortraitDetails from "./client"

const galleryItems = [
  { src: "/images/kitten.jpeg", alt: "Cat artwork in bedroom setting", price: "$299", size: "16\" x 20\"" },
  { src: "/images/cafe.jpeg", alt: "Modern bar with wooden slat wall", price: "$349", size: "20\" x 24\"" },
  { src: "/images/hotel.jpeg", alt: "Classic interior with striped wallpaper", price: "$399", size: "24\" x 36\"" },
  { src: "/images/bar.jpeg", alt: "Corner with bar stools", price: "$299", size: "16\" x 20\"" },
  { src: "/images/pew.jpeg", alt: "Minimalist gallery wall", price: "$449", size: "30\" x 40\"" },
  { src: "/images/shapes.jpeg", alt: "Living space with abstract art", price: "$379", size: "24\" x 30\"" },
  { src: "/images/plants.jpeg", alt: "Living room with leaf prints", price: "$329", size: "20\" x 24\"" },
  { src: "/images/nature.jpeg", alt: "Modern living room with landscape triptych", price: "$499", size: "36\" x 48\"" },
  { src: "/images/cartier.jpeg", alt: "Cat artwork variation 2", price: "$319", size: "16\" x 20\"" },
  { src: "/images/coffee.jpeg", alt: "Modern bar variation 2", price: "$369", size: "20\" x 24\"" },
  { src: "/images/horse1.jpeg", alt: "Classic interior variation 2", price: "$419", size: "24\" x 36\"" },
  { src: "/images/horse2.jpeg", alt: "Corner view variation 2", price: "$289", size: "16\" x 20\"" },
  { src: "/images/horse3.jpeg", alt: "Gallery wall variation 2", price: "$469", size: "30\" x 40\"" },
  { src: "/images/kitchen.jpeg", alt: "Abstract art variation 2", price: "$359", size: "24\" x 30\"" },
  { src: "/images/religeon.jpeg", alt: "Leaf prints variation 2", price: "$339", size: "20\" x 24\"" },
  { src: "/images/croissant.jpeg", alt: "Landscape variation 2", price: "$519", size: "36\" x 48\"" },
  { src: "/images/chai.jpeg", alt: "Final masterpiece", price: "$599", size: "40\" x 60\"" },
]

export async function generateStaticParams() {
  return galleryItems.map((_, index) => ({
    id: index.toString(),
  }))
}

export default function PortraitDetails({ params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const portrait = galleryItems[id]

  if (!portrait) return <div>Portrait not found</div>

  return <ClientPortraitDetails portrait={portrait} id={id} galleryItems={galleryItems} />
} 