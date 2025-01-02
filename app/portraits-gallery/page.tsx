"use client"

import { Card, CardContent } from "@/components/ui/card"


const swingingAnimation = `
  @keyframes swing {
    0% { transform: rotate(-1deg); }
    50% { transform: rotate(1deg); }
    100% { transform: rotate(-1deg); }
  }
`
const CLOUDINARY_URL = "https://res.cloudinary.com/dpriignbf/image/upload";

const galleryItems = [
  { src: `${CLOUDINARY_URL}/v1735835307/kitten.jpg`, alt: "Cat artwork in bedroom setting", price: "$299", size: "16\" x 20\"" },
  { src: `${CLOUDINARY_URL}/v1735835306/cafe.jpg`, alt: "Modern bar with wooden slat wall", price: "$349", size: "20\" x 24\"" },
  { src: `${CLOUDINARY_URL}/v1735835306/hotel.jpg`, alt: "Classic interior with striped wallpaper", price: "$399", size: "24\" x 36\"" },
  { src: `${CLOUDINARY_URL}/v1735835306/bar.jpg`, alt: "Corner with bar stools", price: "$299", size: "16\" x 20\"" },
  { src: `${CLOUDINARY_URL}/v1735835307/pew.jpg`, alt: "Minimalist gallery wall", price: "$449", size: "30\" x 40\"" },
  { src: `${CLOUDINARY_URL}/v1735835307/shapes.jpg`, alt: "Living space with abstract art", price: "$379", size: "24\" x 30\"" },
  { src: `${CLOUDINARY_URL}/v1735835307/plants.jpg`, alt: "Living room with leaf prints", price: "$329", size: "20\" x 24\"" },
  { src: `${CLOUDINARY_URL}/v1735835307/nature.jpg`, alt: "Modern living room with landscape triptych", price: "$499", size: "36\" x 48\"" },
  { src: `${CLOUDINARY_URL}/v1735835306/cartier.jpg`, alt: "Cat artwork variation 2", price: "$319", size: "16\" x 20\"" },
  { src: `${CLOUDINARY_URL}/v1735835307/coffee.jpg`, alt: "Modern bar variation 2", price: "$369", size: "20\" x 24\"" },
  { src: `${CLOUDINARY_URL}/v1735835306/horse1.jpg`, alt: "Classic interior variation 2", price: "$419", size: "24\" x 36\"" },
  { src: `${CLOUDINARY_URL}/v1735835306/horse2.jpg`, alt: "Corner view variation 2", price: "$289", size: "16\" x 20\"" },
  { src: `${CLOUDINARY_URL}/v1735835307/horse3.jpg`, alt: "Gallery wall variation 2", price: "$469", size: "30\" x 40\"" },
  { src: `${CLOUDINARY_URL}/v1735835307/kitchen.jpg`, alt: "Abstract art variation 2", price: "$359", size: "24\" x 30\"" },
  { src: `${CLOUDINARY_URL}/v1735835307/religeon.jpg`, alt: "Leaf prints variation 2", price: "$339", size: "20\" x 24\"" },
  { src: `${CLOUDINARY_URL}/v1735835306/croissant.jpg`, alt: "Landscape variation 2", price: "$519", size: "36\" x 48\"" },
  { src: `${CLOUDINARY_URL}/v1735835307/chai.jpg`, alt: "Final masterpiece", price: "$599", size: "40\" x 60\"" },
]
export default function PortraitsGalleryPage() {
  

  return (
    <div className="min-h-screen bg-gradient-radial relative">
      <style jsx global>{swingingAnimation}</style>
      
      {/* Background elements remain the same */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#ffffff,_#f3f4f6_25%,_#e5e7eb_50%,_#d1d5db_75%,_#9ca3af_100%)] animate-gradient-shift" />
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url("data:image/png;base64,...")}`}} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_39px,#e5e7eb_39px,#e5e7eb_41px,transparent_41px),linear-gradient(180deg,transparent_39px,#e5e7eb_39px,#e5e7eb_41px,transparent_41px)] bg-[size:40px_40px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        {/* Return to Home Button */}
        <div className="max-w-7xl mx-auto mb-12">
          <button
            onClick={() => window.location.href = '/casa-de-arte'}
            className="group flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-md transform transition-all duration-300 hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 transform transition-transform group-hover:-translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Return to Gallery
          </button>
        </div>

        <h1 className="text-5xl font-serif text-center mb-16 text-gray-800">
          All Portraits
        </h1>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <Card 
              key={index}
              className="group transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl bg-white relative"
              style={{
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                animation: `swing ${3 + Math.random() * 2}s ease-in-out infinite`,
                transformOrigin: "50% -20px"
              }}
            >
              <div className="absolute -top-2 left-1/2 w-4 h-4 bg-gray-300 rounded-full transform -translate-x-1/2 shadow-md z-10" />
              <div className="absolute -top-6 left-1/2 w-0.5 h-4 bg-gray-300 transform -translate-x-1/2 shadow-sm z-10" />
              
              <CardContent className="p-3">
                <div className="relative aspect-[3/4] rounded overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-lg font-semibold text-gray-800">{item.price}</p>
                  <p className="text-sm text-gray-600">{item.size}</p>
                  <button
                    onClick={() => window.location.href = `/casa-de-arte/portraits/${index}`}
                    className="mt-3 px-6 py-2 bg-gray-800 text-white rounded-md transform transition-all duration-300 hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                  >
                    View Details
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="grid md:hidden grid-cols-2 gap-4">
          {galleryItems.map((item, index) => (
            <Card 
              key={index}
              className="group transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl bg-white relative"
              style={{
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                animation: `swing ${3 + Math.random() * 2}s ease-in-out infinite`,
                transformOrigin: "50% -20px"
              }}
            >
              <div className="absolute -top-2 left-1/2 w-4 h-4 bg-gray-300 rounded-full transform -translate-x-1/2 shadow-md z-10" />
              <div className="absolute -top-6 left-1/2 w-0.5 h-4 bg-gray-300 transform -translate-x-1/2 shadow-sm z-10" />
              
              <CardContent className="p-2">
                <div className="relative aspect-[3/4] rounded overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="text-base font-semibold text-gray-800">{item.price}</p>
                  <p className="text-xs text-gray-600">{item.size}</p>
                  <button
                    onClick={() => window.location.href = `/casa-de-arte/portraits/${index}`}
                    className="mt-2 px-4 py-1.5 bg-gray-800 text-white rounded-md transform transition-all duration-300 hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-sm w-full"
                  >
                    View Details
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 