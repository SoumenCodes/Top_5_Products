"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Headphones,
  User,
  ShoppingBag,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full bg-[#0a0a23] text-white rounded-lg">
      <div className="container mx-auto p-2 ">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">LOGO</div>
          </Link>

          {/* Category Dropdown */}
          <div className="hidden lg:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-gray-600 bg-transparent text-white hover:bg-gray-800 hover:text-white"
                >
                  All Collection
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-background">
                <DropdownMenuItem>Electronics</DropdownMenuItem>
                <DropdownMenuItem>Computers</DropdownMenuItem>
                <DropdownMenuItem>Smartphones</DropdownMenuItem>
                <DropdownMenuItem>Audio</DropdownMenuItem>
                <DropdownMenuItem>Accessories</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Search Bar */}
          <div className="flex flex-1 items-center max-w-xl">
            <div className="relative w-full flex items-center h-12 px-2 focus:border-none outline-none border-2 border-gray-600 rounded-md">
              <Input
                type="text"
                placeholder="Search for product..."
                className=" outline-none border-none text-white placeholder-white font-thin focus-visible:ring-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                className="bg-[#6366f1] hover:bg-[#4f46e5] rounded-md"
                size="sm"
              >
                <Search className="h-5 w-5" />
                <span className="ml-1">Search</span>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-2">
            <Headphones className="h-8 w-8 text-white" />
            <div>
              <div className="text-sm font-medium">(+91) 9113303849</div>
              <div className="text-xs text-gray-300 font-thin">
                soumen19j@gmail.com
              </div>
            </div>
          </div>

          {/* User Account */}
          <Link
            href="/account"
            className="hidden sm:flex items-center justify-center gap-2"
          >
            <User className="h-6 w-6 text-white" />
            <div>
              <div className="text-sm font-medium">My Account</div>
              <div className="text-xs text-gray-300 font-thin">User</div>
            </div>
          </Link>

          {/* Shopping Cart */}
          <Link
            href="/cart"
            className="relative flex items-center justify-center gap-4"
          >
            <div className="relative">
              <ShoppingBag className="h-6 w-6 text-white" />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#6366f1] text-xs font-bold">
                0
              </span>
            </div>
            <div>
              <div className="text-sm font-medium">My Account</div>
              <div className="text-xs text-gray-300 font-thin">Rs 00.0</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
