"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, X } from "lucide-react"

export function MapComponent() {
  const [selectedMarker, setSelectedMarker] = useState(null)
  const mapRef = useRef(null)

  // This is a placeholder for the actual map implementation
  // In a real app, you would use a library like Mapbox, Google Maps, or Leaflet

  useEffect(() => {
    // Initialize map here
    // This is just a placeholder for demonstration
    const mapElement = mapRef.current
    if (mapElement) {
      // Simulate map markers with a timeout
      const timeout = setTimeout(() => {
        setSelectedMarker({
          type: "venue",
          name: "The Rooftop Bar",
          address: "123 Main St, Downtown",
          crowdLevel: "Very Busy",
          friendsHere: [
            { name: "Alex Johnson", avatar: "/placeholder.svg?height=32&width=32" },
            { name: "Samantha Lee", avatar: "/placeholder.svg?height=32&width=32" },
            { name: "Samantha Lee", avatar: "/placeholder.svg?height=32&width=32" },
            { name: "Michael Chen", avatar: "/placeholder.svg?height=32&width=32" },
          ],
          rating: 4.7,
        })
      }, 1000)

      return () => clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="relative w-full h-full bg-gray-100" ref={mapRef}>
      {/* Placeholder for map - in a real app this would be the actual map */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-gray-400 text-center">
          <MapPin className="h-12 w-12 mx-auto mb-2 text-gray-300" />
          <p>Interactive map would display here</p>
          <p className="text-sm">Showing friends and popular venues</p>
        </div>
      </div>

      {/* Sample markers - these would be positioned on the actual map */}
      <div className="absolute top-1/4 left-1/3">
        <div
          className="w-10 h-10 rounded-full bg-purple-100 border-2 border-purple-600 flex items-center justify-center cursor-pointer hover:bg-purple-200"
          onClick={() =>
            setSelectedMarker({
              type: "friend",
              name: "Alex Johnson",
              location: "The Rooftop Bar",
              time: "20 min ago",
              avatar: "/placeholder.svg?height=64&width=64",
            })
          }
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Alex" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="absolute top-1/3 right-1/3">
        <div
          className="w-12 h-12 rounded-full bg-red-100 border-2 border-red-500 flex items-center justify-center cursor-pointer hover:bg-red-200"
          onClick={() =>
            setSelectedMarker({
              type: "venue",
              name: "The Rooftop Bar",
              address: "123 Main St, Downtown",
              crowdLevel: "Very Busy",
              friendsHere: [
                { name: "Alex Johnson", avatar: "/placeholder.svg?height=32&width=32" },
                { name: "Samantha Lee", avatar: "/placeholder.svg?height=32&width=32" },
                { name: "Michael Chen", avatar: "/placeholder.svg?height=32&width=32" },
              ],
              rating: 4.7,
            })
          }
        >
          <Badge className="absolute -top-1 -right-1 bg-purple-600">3</Badge>
          <MapPin className="h-6 w-6 text-red-500" />
        </div>
      </div>

      <div className="absolute bottom-1/3 left-1/2">
        <div
          className="w-10 h-10 rounded-full bg-orange-100 border-2 border-orange-500 flex items-center justify-center cursor-pointer hover:bg-orange-200"
          onClick={() =>
            setSelectedMarker({
              type: "venue",
              name: "Moonlight Lounge",
              address: "456 Park Ave",
              crowdLevel: "Busy",
              friendsHere: [
                { name: "Samantha Lee", avatar: "/placeholder.svg?height=32&width=32" },
                { name: "David Wilson", avatar: "/placeholder.svg?height=32&width=32" },
              ],
              rating: 4.5,
            })
          }
        >
          <Badge className="absolute -top-1 -right-1 bg-purple-600">2</Badge>
          <MapPin className="h-6 w-6 text-orange-500" />
        </div>
      </div>

      {/* Info card for selected marker */}
      {selectedMarker && (
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  {selectedMarker.type === "friend" ? (
                    <Avatar className="h-12 w-12 border">
                      <AvatarImage src={selectedMarker.avatar} alt={selectedMarker.name} />
                      <AvatarFallback>{selectedMarker.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center 
                      ${
                        selectedMarker.crowdLevel === "Very Busy"
                          ? "bg-red-100"
                          : selectedMarker.crowdLevel === "Busy"
                            ? "bg-orange-100"
                            : selectedMarker.crowdLevel === "Moderate"
                              ? "bg-yellow-100"
                              : "bg-green-100"
                      }`}
                    >
                      <MapPin
                        className={`h-6 w-6 
                        ${
                          selectedMarker.crowdLevel === "Very Busy"
                            ? "text-red-500"
                            : selectedMarker.crowdLevel === "Busy"
                              ? "text-orange-500"
                              : selectedMarker.crowdLevel === "Moderate"
                                ? "text-yellow-500"
                                : "text-green-500"
                        }`}
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="font-medium">{selectedMarker.name}</h4>
                    {selectedMarker.type === "friend" ? (
                      <div className="flex items-center text-sm text-purple-600">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{selectedMarker.location}</span>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">{selectedMarker.address}</p>
                    )}
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-500" onClick={() => setSelectedMarker(null)}>
                  <X className="h-4 w-4" />
                </button>
              </div>

              {selectedMarker.type === "friend" ? (
                <div className="mt-3 text-sm text-gray-500">
                  <p>Active {selectedMarker.time}</p>
                </div>
              ) : (
                <div className="mt-3">
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`text-xs font-medium
                      ${
                        selectedMarker.crowdLevel === "Very Busy"
                          ? "text-red-600"
                          : selectedMarker.crowdLevel === "Busy"
                            ? "text-orange-500"
                            : selectedMarker.crowdLevel === "Moderate"
                              ? "text-yellow-500"
                              : "text-green-500"
                      }`}
                    >
                      {selectedMarker.crowdLevel}
                    </span>
                    <span className="text-sm">Rating: {selectedMarker.rating}/5</span>
                  </div>

                  {selectedMarker.friendsHere && selectedMarker.friendsHere.length > 0 && (
                    <div>
                      <div className="flex items-center mb-2">
                        <Users className="h-4 w-4 text-purple-600 mr-1" />
                        <span className="text-sm text-purple-600 font-medium">
                          {selectedMarker.friendsHere.length} friends here
                        </span>
                      </div>
                      <div className="flex -space-x-2">
                        {selectedMarker.friendsHere.map((friend, index) => (
                          <Avatar key={index} className="h-8 w-8 border-2 border-white">
                            <AvatarImage src={friend.avatar} alt={friend.name} />
                            <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
