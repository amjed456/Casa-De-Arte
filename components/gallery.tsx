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

export default function Gallery() {
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

  return (
    <div className="min-h-screen bg-gradient-radial relative">
      <style jsx global>{swingingAnimation}</style>
      
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#ffffff,_#f3f4f6_25%,_#e5e7eb_50%,_#d1d5db_75%,_#9ca3af_100%)] animate-gradient-shift" />
        
        {/* Paper texture overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/png;base64,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")`
          }}
        />
        
        {/* Decorative wall pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_39px,#e5e7eb_39px,#e5e7eb_41px,transparent_41px),linear-gradient(180deg,transparent_39px,#e5e7eb_39px,#e5e7eb_41px,transparent_41px)] bg-[size:40px_40px] opacity-30" />
      </div>

      {/* Gallery content */}
      <div className="container mx-auto px-4 py-12 relative">
        <h1 className="text-5xl font-serif text-center mb-16 text-gray-800">
          Casa De Art&apos;e
        </h1>
        
        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden md:block">
          {/* First 4 items */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {galleryItems.slice(0, 4).map((item, index) => (
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

          {/* Large portraits (5-8) at bottom */}
          <div className="grid grid-cols-2 gap-8 mb-16">
            {galleryItems.slice(4, 8).map((item, index) => (
              <Card 
                key={index + 4} 
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
                  <div className="relative aspect-square rounded overflow-hidden">
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
                      onClick={() => window.location.href = `/casa-de-arte/portraits/${index + 4}`}
                      className="mt-3 px-6 py-2 bg-gray-800 text-white rounded-md transform transition-all duration-300 hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                    >
                      View Details
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Portraits button */}
          <div className="text-center">
            <button
              onClick={() => window.location.href = '/casa-de-arte/portraits-gallery'}
              className="group px-8 py-4 bg-gray-800 text-white rounded-md transform transition-all duration-300 hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-lg"
            >
              View All Portraits
            </button>
          </div>
        </div>

        {/* Mobile Layout - Hidden on desktop */}
        <div className="md:hidden">
          {/* First 4 items in 2-column grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {galleryItems.slice(0, 4).map((item, index) => (
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

          {/* Large items (5-8) in 2-column grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {galleryItems.slice(4, 8).map((item, index) => (
              <Card 
                key={index + 4} 
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
                  <div className="relative aspect-square rounded overflow-hidden">
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
                      onClick={() => window.location.href = `/casa-de-arte/portraits/${index + 4}`}
                      className="mt-2 px-4 py-1.5 bg-gray-800 text-white rounded-md transform transition-all duration-300 hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-sm w-full"
                    >
                      View Details
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Portraits button */}
          <div className="text-center">
            <button
              onClick={() => window.location.href = '/casa-de-arte/portraits-gallery'}
              className="group px-6 py-3 bg-gray-800 text-white rounded-md transform transition-all duration-300 hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-base"
            >
              View All Portraits
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

