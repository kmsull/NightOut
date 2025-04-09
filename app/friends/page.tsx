"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, UserPlus, Check, X, MapPin } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function FriendsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container py-6 md:py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Friends</h1>
            <p className="text-gray-500">Connect with friends and see where they're hanging out</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search friends..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="my-friends" className="w-full">
          <TabsList className="w-full md:w-auto">
            <TabsTrigger value="my-friends">My Friends</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
            <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
          </TabsList>

          <TabsContent value="my-friends" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <FriendCard
                name="Alex Johnson"
                username="alexj"
                location="The Rooftop Bar"
                time="20 min ago"
                avatar="/placeholder.svg?height=80&width=80"
                isActive={true}
              />
              <FriendCard
                name="Samantha Lee"
                username="samlee"
                location="Moonlight Lounge"
                time="45 min ago"
                avatar="/placeholder.svg?height=80&width=80"
                isActive={true}
              />
              <FriendCard
                name="Michael Chen"
                username="mikechen"
                location="Urban Brewery"
                time="1 hour ago"
                avatar="/placeholder.svg?height=80&width=80"
                isActive={true}
              />
              <FriendCard
                name="Jessica Taylor"
                username="jesstay"
                location="Not sharing location"
                time=""
                avatar="/placeholder.svg?height=80&width=80"
                isActive={false}
              />
              <FriendCard
                name="David Wilson"
                username="davewil"
                location="Sunset Cafe"
                time="2 hours ago"
                avatar="/placeholder.svg?height=80&width=80"
                isActive={true}
              />
            </div>
          </TabsContent>

          <TabsContent value="requests" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Friend Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  <div className="space-y-4">
                    <FriendRequest
                      name="Emma Rodriguez"
                      username="emmar"
                      mutualFriends={3}
                      avatar="/placeholder.svg?height=48&width=48"
                    />
                    <FriendRequest
                      name="Tyler Johnson"
                      username="tylerj"
                      mutualFriends={1}
                      avatar="/placeholder.svg?height=48&width=48"
                    />
                    <FriendRequest
                      name="Olivia Kim"
                      username="oliviak"
                      mutualFriends={5}
                      avatar="/placeholder.svg?height=48&width=48"
                    />
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="suggestions" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>People You May Know</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  <div className="space-y-4">
                    <FriendSuggestion
                      name="Ryan Park"
                      username="ryanp"
                      mutualFriends={4}
                      avatar="/placeholder.svg?height=48&width=48"
                    />
                    <FriendSuggestion
                      name="Sophia Martinez"
                      username="sophiam"
                      mutualFriends={2}
                      avatar="/placeholder.svg?height=48&width=48"
                    />
                    <FriendSuggestion
                      name="Ethan Brown"
                      username="ethanb"
                      mutualFriends={3}
                      avatar="/placeholder.svg?height=48&width=48"
                    />
                    <FriendSuggestion
                      name="Ava Wilson"
                      username="avaw"
                      mutualFriends={1}
                      avatar="/placeholder.svg?height=48&width=48"
                    />
                    <FriendSuggestion
                      name="Noah Garcia"
                      username="noahg"
                      mutualFriends={6}
                      avatar="/placeholder.svg?height=48&width=48"
                    />
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function FriendCard({ name, username, location, time, avatar, isActive }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-20 w-20 mb-4">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="font-medium text-lg">{name}</h3>
          <p className="text-sm text-gray-500 mb-2">@{username}</p>

          {isActive ? (
            <div className="mt-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 mb-2">
                Active Now
              </Badge>
              <div className="flex items-center justify-center text-sm">
                <MapPin className="h-3 w-3 text-purple-600 mr-1" />
                <span className="text-purple-600 font-medium">{location}</span>
                {time && <span className="text-gray-400 ml-1">· {time}</span>}
              </div>
            </div>
          ) : (
            <div className="mt-2 text-sm text-gray-400">{location}</div>
          )}

          <div className="flex gap-2 mt-4">
            <Button variant="outline" size="sm">
              Message
            </Button>
            <Button variant="outline" size="sm">
              View Profile
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function FriendRequest({ name, username, mutualFriends, avatar }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500">@{username}</p>
          {mutualFriends > 0 && <p className="text-xs text-purple-600">{mutualFriends} mutual friends</p>}
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          size="sm"
          className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600"
        >
          <Check className="h-4 w-4 mr-1" />
          Accept
        </Button>
        <Button size="sm" variant="outline">
          <X className="h-4 w-4 mr-1" />
          Decline
        </Button>
      </div>
    </div>
  )
}

function FriendSuggestion({ name, username, mutualFriends, avatar }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500">@{username}</p>
          {mutualFriends > 0 && <p className="text-xs text-purple-600">{mutualFriends} mutual friends</p>}
        </div>
      </div>
      <Button size="sm" variant="outline">
        <UserPlus className="h-4 w-4 mr-1" />
        Add
      </Button>
    </div>
  )
}
