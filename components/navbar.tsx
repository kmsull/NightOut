"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Menu, X, MapPin, User, Users, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Mock authentication state - in a real app, this would come from an auth context
  const isAuthenticated = false

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-purple-600" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-500">
            NightOut
          </span>
        </Link>
        <nav className="hidden ml-auto gap-6 md:flex">
          <Link
            href="/explore"
            className={`text-sm font-medium ${pathname === "/explore" ? "text-purple-600" : "text-gray-500 hover:text-gray-900"}`}
          >
            Explore
          </Link>
          <Link
            href="/friends"
            className={`text-sm font-medium ${pathname === "/friends" ? "text-purple-600" : "text-gray-500 hover:text-gray-900"}`}
          >
            Friends
          </Link>
          <Link
            href="/venues"
            className={`text-sm font-medium ${pathname === "/venues" ? "text-purple-600" : "text-gray-500 hover:text-gray-900"}`}
          >
            Venues
          </Link>
        </nav>
        <div className="flex items-center gap-4 ml-auto md:ml-0">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full" size="icon">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/friends" className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Friends</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex gap-2">
              <Link href="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600">
                  Sign up
                </Button>
              </Link>
            </div>
          )}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              href="/explore"
              className={`text-sm font-medium ${pathname === "/explore" ? "text-purple-600" : "text-gray-500"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              href="/friends"
              className={`text-sm font-medium ${pathname === "/friends" ? "text-purple-600" : "text-gray-500"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Friends
            </Link>
            <Link
              href="/venues"
              className={`text-sm font-medium ${pathname === "/venues" ? "text-purple-600" : "text-gray-500"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Venues
            </Link>
            {!isAuthenticated && (
              <div className="flex flex-col gap-2 mt-2">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600">
                    Sign up
                  </Button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
