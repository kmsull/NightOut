"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Settings, LogOut } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
  const [locationSharing, setLocationSharing] = useState(true)

  return (
    <div className="container py-6 md:py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Sidebar */}
          <div className="w-full md:w-80">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">John Doe</h2>
                  <p className="text-sm text-gray-500 mb-2">@johndoe</p>

                  <div className="flex items-center justify-center text-sm mb-4">
                    <MapPin className="h-3 w-3 text-purple-600 mr-1" />
                    <span className="text-purple-600 font-medium">New York, NY</span>
                  </div>

                  <div className="flex gap-4 text-sm text-gray-500 mb-4">
                    <div>
                      <span className="font-medium text-black">125</span> Friends
                    </div>
                    <div>
                      <span className="font-medium text-black">48</span> Check-ins
                    </div>
                  </div>

                  <div className="w-full space-y-2">
                    <Button variant="outline" className="w-full">
                      <Settings className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                    <Button variant="outline" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50">
                      <LogOut className="h-4 w-4 mr-2" />
                      Log Out
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Always looking for the next adventure and great places to hang out with friends. Love trying new
                    restaurants and craft cocktails.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Favorite Spots</CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 text-purple-600 mr-1" />
                      <span className="text-sm">The Rooftop Bar</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      12 visits
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 text-purple-600 mr-1" />
                      <span className="text-sm">Urban Brewery</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      8 visits
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 text-purple-600 mr-1" />
                      <span className="text-sm">Moonlight Lounge</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      5 visits
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Tabs defaultValue="activity">
              <TabsList className="w-full md:w-auto">
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="friends">Friends</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="activity" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your recent check-ins and activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      <div className="space-y-4">
                        <ActivityItem
                          type="check-in"
                          location="The Rooftop Bar"
                          time="Yesterday at 9:30 PM"
                          friends={["Alex J.", "Samantha L."]}
                        />
                        <Separator />
                        <ActivityItem type="new-friend" friendName="Michael Chen" time="2 days ago" />
                        <Separator />
                        <ActivityItem
                          type="check-in"
                          location="Urban Brewery"
                          time="Last Friday at 7:15 PM"
                          friends={["David W."]}
                        />
                        <Separator />
                        <ActivityItem
                          type="check-in"
                          location="Moonlight Lounge"
                          time="Last Saturday at 10:00 PM"
                          friends={["Alex J.", "Samantha L.", "Jessica T."]}
                        />
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="friends" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Friends</CardTitle>
                    <CardDescription>People you're connected with on NightOut</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <FriendItem
                        name="Alex Johnson"
                        username="alexj"
                        avatar="/placeholder.svg?height=40&width=40"
                        isActive={true}
                        location="The Rooftop Bar"
                      />
                      <FriendItem
                        name="Samantha Lee"
                        username="samlee"
                        avatar="/placeholder.svg?height=40&width=40"
                        isActive={true}
                        location="Moonlight Lounge"
                      />
                      <FriendItem
                        name="Michael Chen"
                        username="mikechen"
                        avatar="/placeholder.svg?height=40&width=40"
                        isActive={true}
                        location="Urban Brewery"
                      />
                      <FriendItem
                        name="Jessica Taylor"
                        username="jesstay"
                        avatar="/placeholder.svg?height=40&width=40"
                        isActive={false}
                        location="Not sharing location"
                      />
                      <FriendItem
                        name="David Wilson"
                        username="davewil"
                        avatar="/placeholder.svg?height=40&width=40"
                        isActive={true}
                        location="Sunset Cafe"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Settings</CardTitle>
                    <CardDescription>Manage your account settings and preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Personal Information</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="display-name">Display Name</Label>
                          <Input id="display-name" defaultValue="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          <Input id="username" defaultValue="johndoe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="john@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">About Me</h3>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          defaultValue="Always looking for the next adventure and great places to hang out with friends. Love trying new restaurants and craft cocktails."
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Privacy Settings</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="location-sharing">Location Sharing</Label>
                            <p className="text-xs text-gray-500">Allow friends to see your current location</p>
                          </div>
                          <Switch
                            id="location-sharing"
                            checked={locationSharing}
                            onCheckedChange={setLocationSharing}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="activity-visibility">Activity Visibility</Label>
                            <p className="text-xs text-gray-500">Show your check-ins to friends</p>
                          </div>
                          <Switch id="activity-visibility" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="profile-visibility">Profile Visibility</Label>
                            <p className="text-xs text-gray-500">Allow others to find you by name or username</p>
                          </div>
                          <Switch id="profile-visibility" defaultChecked />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="friend-activity">Friend Activity</Label>
                            <p className="text-xs text-gray-500">Get notified when friends check in nearby</p>
                          </div>
                          <Switch id="friend-activity" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="friend-requests">Friend Requests</Label>
                            <p className="text-xs text-gray-500">Get notified about new friend requests</p>
                          </div>
                          <Switch id="friend-requests" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="popular-venues">Popular Venues</Label>
                            <p className="text-xs text-gray-500">Get notified about trending spots nearby</p>
                          </div>
                          <Switch id="popular-venues" defaultChecked />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600">
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

function ActivityItem({ type, location, time, friends, friendName }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center 
        ${type === "check-in" ? "bg-purple-100" : "bg-teal-100"}`}
      >
        {type === "check-in" ? (
          <MapPin className="h-5 w-5 text-purple-600" />
        ) : (
          <Users className="h-5 w-5 text-teal-600" />
        )}
      </div>
      <div>
        {type === "check-in" ? (
          <>
            <p className="font-medium">
              Checked in at <span className="text-purple-600">{location}</span>
            </p>
            {friends && friends.length > 0 && <p className="text-sm text-gray-500">With {friends.join(", ")}</p>}
          </>
        ) : (
          <p className="font-medium">
            Became friends with <span className="text-teal-600">{friendName}</span>
          </p>
        )}
        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>
    </div>
  )
}

function FriendItem({ name, username, avatar, isActive, location }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
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
            </>
          ) : (
            <span className="text-gray-400">{location}</span>
          )}
        </div>
      </div>
    </div>
  )
}
