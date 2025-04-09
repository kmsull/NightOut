"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, Users, Star, Coffee, Beer, Music, Utensils, Clock, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function VenuesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container py-6 md:py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Venues</h1>
            <p className="text-gray-500">Discover popular places where people are hanging out</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search venues..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-2">
          <Badge variant="outline" className="cursor-pointer bg-purple-100 hover:bg-purple-200 border-purple-200">
            <Beer className="h-3 w-3 mr-1" /> Bars
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-purple-100">
            <Utensils className="h-3 w-3 mr-1" /> Restaurants
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-purple-100">
            <Music className="h-3 w-3 mr-1" /> Clubs
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-purple-100">
            <Coffee className="h-3 w-3 mr-1" /> Cafes
          </Badge>
        </div>

        <Tabs defaultValue="trending" className="w-full">
          <TabsList className="w-full md:w-auto">
            <TabsTrigger value="trending">Trending Now</TabsTrigger>
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
            <TabsTrigger value="friends">Friends' Favorites</TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="mt-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <VenueCard
                name="The Rooftop Bar"
                type="Bar & Lounge"
                address="123 Main St, Downtown"
                image="/placeholder.svg?height=200&width=400"
                crowdLevel="Very Busy"
                friendsHere={3}
                rating={4.7}
                openHours="5 PM - 2 AM"
              />
              <VenueCard
                name="Moonlight Lounge"
                type="Cocktail Bar"
                address="456 Park Ave"
                image="/placeholder.svg?height=200&width=400"
                crowdLevel="Busy"
                friendsHere={2}
                rating={4.5}
                openHours="6 PM - 1 AM"
              />
              <VenueCard
                name="Urban Brewery"
                type="Craft Beer"
                address="789 Brewery Lane"
                image="/placeholder.svg?height=200&width=400"
                crowdLevel="Moderate"
                friendsHere={1}
                rating={4.2}
                openHours="4 PM - 12 AM"
              />
              <VenueCard
                name="Sunset Cafe"
                type="Coffee & Wine"
                address="101 Sunset Blvd"
                image="/placeholder.svg?height=200&width=400"
                crowdLevel="Not Busy"
                friendsHere={1}
                rating={4.0}
                openHours="8 AM - 10 PM"
              />
              <VenueCard
                name="Downtown Bistro"
                type="Restaurant"
                address="202 Center St"
                image="/placeholder.svg?height=200&width=400"
                crowdLevel="Busy"
                friendsHere={0}
                rating={4.4}
                openHours="11 AM - 11 PM"
              />
              <VenueCard
                name="Rhythm Club"
                type="Nightclub"
                address="303 Beat Street"
                image="/placeholder.svg?height=200&width=400"
                crowdLevel="Very Busy"
                friendsHere={4}
                rating={4.6}
                openHours="10 PM - 4 AM"
              />
            </div>
          </TabsContent>

          <TabsContent value="popular" className="mt-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <VenueCard
                name="Skyline Lounge"
                type="Rooftop Bar"
                address="500 High Rise Ave"
                image="/placeholder.svg?height=200&width=400"
                crowdLevel="Busy"
                friendsHere={2}
                rating={4.8}
                openHours="4 PM - 2 AM"
              />
              <VenueCard
                name="The Speakeasy"
                type="Cocktail Bar"
                address="123 Hidden Lane"
                image="/placeholder.svg?height=200&width=400"
                crowdLevel="Moderate"
                friendsHere={0}
                rating={4.9}
                openHours="7 PM - 3 AM"
              />
              <VenueCard
                name="Harbor View"
                type="Seafood Restaurant"
                address="789 Waterfront Dr"
                image="/placeholder.svg?height=200&width=400"
                crowdLevel="Busy"
                friendsHere={1}
                rating={4.7}
                openHours="5 PM - 11 PM"
              />
            </div>
          </TabsContent>

          <TabsContent value="friends" className="mt-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <VenueCard
                name="The Rooftop Bar"
                type="Bar & Lounge"
                address="123 Main St, Downtown"
                image="/placeholder.svg?height=200&width=400"
                crowdLevel="Very Busy"
                friendsHere={3}
                rating={4.7}
                openHours="5 PM - 2 AM"
              />
              <VenueCard
                name="Rhythm Club"
                type="Nightclub"
                address="303 Beat Street"
                image="/placeholder.svg?height=200&width=400"
                crowdLevel="Very Busy"
                friendsHere={4}
                rating={4.6}
                openHours="10 PM - 4 AM"
              />
              <VenueCard
                name="Moonlight Lounge"
                type="Cocktail Bar"
                address="456 Park Ave"
                image="/placeholder.svg?height=200&width=400"
                crowdLevel="Busy"
                friendsHere={2}
                rating={4.5}
                openHours="6 PM - 1 AM"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function VenueCard({ name, type, address, image, crowdLevel, friendsHere, rating, openHours }) {
  // Determine crowd level color
  const crowdColor =
    crowdLevel === "Very Busy"
      ? "text-red-600 bg-red-50 border-red-200"
      : crowdLevel === "Busy"
        ? "text-orange-500 bg-orange-50 border-orange-200"
        : crowdLevel === "Moderate"
          ? "text-yellow-500 bg-yellow-50 border-yellow-200"
          : "text-green-500 bg-green-50 border-green-200"

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        <div className="absolute top-2 right-2">
          <Badge variant="outline" className={crowdColor}>
            {crowdLevel}
          </Badge>
        </div>
        {friendsHere > 0 && (
          <div className="absolute bottom-2 left-2">
            <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-200">
              <Users className="h-3 w-3 mr-1" />
              {friendsHere} friend{friendsHere > 1 ? "s" : ""} here
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-medium text-lg">{name}</h3>
            <p className="text-sm text-gray-500">{type}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
          <span>{address}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
          <span>{openHours}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm">
          <MapPin className="h-4 w-4 mr-1" />
          Directions
        </Button>
        <Link href={`/venues/${name.toLowerCase().replace(/\s+/g, "-")}`}>
          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
