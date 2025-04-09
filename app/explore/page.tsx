"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Users, Star, Coffee, Beer, Music, Utensils } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MapComponent } from "@/components/map-component"

export default function ExplorePage() {
  const [filterDistance, setFilterDistance] = useState([5])
  const [showFriendsOnly, setShowFriendsOnly] = useState(false)

  return (
    <div className="container py-6 md:py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-80 flex flex-col gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Search locations or friends..." className="pl-8" />
          </div>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Filters</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="distance">Distance</Label>
                    <span className="text-sm text-gray-500">{filterDistance[0]} miles</span>
                  </div>
                  <Slider
                    id="distance"
                    min={1}
                    max={20}
                    step={1}
                    value={filterDistance}
                    onValueChange={setFilterDistance}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="friends-only" checked={showFriendsOnly} onCheckedChange={setShowFriendsOnly} />
                  <Label htmlFor="friends-only">Friends only</Label>
                </div>

                <div className="space-y-2">
                  <Label>Venue Type</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-purple-100">
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
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="friends">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="friends">Friends</TabsTrigger>
              <TabsTrigger value="venues">Venues</TabsTrigger>
            </TabsList>
            <TabsContent value="friends" className="mt-2">
              <Card>
                <ScrollArea className="h-[400px]">
                  <CardContent className="p-4 space-y-4">
                    <FriendItem
                      name="Alex Johnson"
                      username="alexj"
                      location="The Rooftop Bar"
                      time="20 min ago"
                      avatar="/placeholder.svg?height=40&width=40"
                      isActive={true}
                    />
                    <FriendItem
                      name="Samantha Lee"
                      username="samlee"
                      location="Moonlight Lounge"
                      time="45 min ago"
                      avatar="/placeholder.svg?height=40&width=40"
                      isActive={true}
                    />
                    <FriendItem
                      name="Michael Chen"
                      username="mikechen"
                      location="Urban Brewery"
                      time="1 hour ago"
                      avatar="/placeholder.svg?height=40&width=40"
                      isActive={true}
                    />
                    <FriendItem
                      name="Jessica Taylor"
                      username="jesstay"
                      location="Not sharing location"
                      time=""
                      avatar="/placeholder.svg?height=40&width=40"
                      isActive={false}
                    />
                    <FriendItem
                      name="David Wilson"
                      username="davewil"
                      location="Sunset Cafe"
                      time="2 hours ago"
                      avatar="/placeholder.svg?height=40&width=40"
                      isActive={true}
                    />
                  </CardContent>
                </ScrollArea>
              </Card>
            </TabsContent>
            <TabsContent value="venues" className="mt-2">
              <Card>
                <ScrollArea className="h-[400px]">
                  <CardContent className="p-4 space-y-4">
                    <VenueItem
                      name="The Rooftop Bar"
                      type="Bar & Lounge"
                      crowdLevel="Very Busy"
                      friendsHere={3}
                      rating={4.7}
                    />
                    <VenueItem
                      name="Moonlight Lounge"
                      type="Cocktail Bar"
                      crowdLevel="Busy"
                      friendsHere={2}
                      rating={4.5}
                    />
                    <VenueItem
                      name="Urban Brewery"
                      type="Craft Beer"
                      crowdLevel="Moderate"
                      friendsHere={1}
                      rating={4.2}
                    />
                    <VenueItem
                      name="Sunset Cafe"
                      type="Coffee & Wine"
                      crowdLevel="Not Busy"
                      friendsHere={1}
                      rating={4.0}
                    />
                    <VenueItem
                      name="Downtown Bistro"
                      type="Restaurant"
                      crowdLevel="Busy"
                      friendsHere={0}
                      rating={4.4}
                    />
                  </CardContent>
                </ScrollArea>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Map */}
        <div className="flex-1 h-[calc(100vh-10rem)] min-h-[500px] rounded-lg overflow-hidden border">
          <MapComponent />
        </div>
      </div>
    </div>
  )
}

function FriendItem({ name, username, location, time, avatar, isActive }) {
  return (
    <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50">
      <Avatar className="h-10 w-10 border">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className="font-medium truncate">{name}</p>
          {isActive && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
              Active
            </Badge>
          )}
        </div>
        <p className="text-sm text-gray-500">@{username}</p>
        <div className="flex items-center mt-1 text-sm">
          {isActive ? (
            <>
              <MapPin className="h-3 w-3 text-purple-600 mr-1" />
              <span className="text-purple-600 font-medium truncate">{location}</span>
              {time && <span className="text-gray-400 ml-1">· {time}</span>}
            </>
          ) : (
            <span className="text-gray-400">{location}</span>
          )}
        </div>
      </div>
    </div>
  )
}

function VenueItem({ name, type, crowdLevel, friendsHere, rating }) {
  // Determine crowd level color
  const crowdColor =
    crowdLevel === "Very Busy"
      ? "text-red-600"
      : crowdLevel === "Busy"
        ? "text-orange-500"
        : crowdLevel === "Moderate"
          ? "text-yellow-500"
          : "text-green-500"

  return (
    <div className="p-3 border rounded-lg hover:bg-gray-50">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-500">{type}</p>
        </div>
        <div className="flex items-center">
          <Star className="h-3 w-3 text-yellow-500 mr-1" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className={`text-xs ${crowdColor} font-medium`}>{crowdLevel}</span>
        {friendsHere > 0 && (
          <div className="flex items-center text-xs text-purple-600">
            <Users className="h-3 w-3 mr-1" />
            <span>
              {friendsHere} friend{friendsHere > 1 ? "s" : ""} here
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
