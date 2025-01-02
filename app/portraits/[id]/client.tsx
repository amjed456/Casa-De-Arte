"use client"


import { Card, CardContent } from "@/components/ui/card"

type Portrait = {
  src: string
  alt: string
  price: string
  size: string
}

export default function ClientPortraitDetails({ 
  portrait, 
  id, 
  galleryItems 
}: { 
  portrait: Portrait
  id: number
  galleryItems: Portrait[]
}) {


  return (
    <div className="min-h-screen bg-gradient-radial relative">
      {/* Background elements from gallery page */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#ffffff,_#f3f4f6_25%,_#e5e7eb_50%,_#d1d5db_75%,_#9ca3af_100%)] animate-gradient-shift" />
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url("data:image/png;base64,..."))`}} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_39px,#e5e7eb_39px,#e5e7eb_41px,transparent_41px),linear-gradient(180deg,transparent_39px,#e5e7eb_39px,#e5e7eb_41px,transparent_41px)] bg-[size:40px_40px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Navigation Buttons */}
        <div className="max-w-7xl mx-auto mb-12 flex flex-wrap gap-4 justify-between items-center">
          <button
            onClick={() => window.location.href = '/'}
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

          <button
            onClick={() => window.location.href = '/portraits-gallery'}
            className="group flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-md transform transition-all duration-300 hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            View All Portraits
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Rest of your component code... */}
        {/* Featured Portrait */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-6">
              <div className="relative aspect-[3/4] rounded overflow-hidden mb-6">
                <img
                  src={portrait.src}
                  alt={portrait.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-gray-800 mb-2">{portrait.price}</p>
                <p className="text-lg text-gray-600">{portrait.size}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Divider */}
        <div className="w-full max-w-4xl mx-auto h-px bg-gray-300 mb-16" />

        {/* Other Portraits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            index !== id && (
              <Card 
                key={index}
                className="cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white relative"
                onClick={() => window.location.href = `/portraits/${index}`}
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
                    <p className="text-sm font-semibold text-gray-800">{item.price}</p>
                    <p className="text-xs text-gray-600">{item.size}</p>
                  </div>
                </CardContent>
              </Card>
            )
          ))}
        </div>
      </div>
    </div>
  )
} 