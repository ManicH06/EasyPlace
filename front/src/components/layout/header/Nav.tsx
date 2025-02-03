"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Menu, UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/boutiques", label: "Boutiques" },
  { href: "/market", label: "Produits" },
  { href: "/concept", label: "Notre Concept" },
  { href: "/contact", label: "Contact" },
];

interface NavigationProps {
  onMenuToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navigation({ onMenuToggle }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const userLink = isAuthenticated ? "/profile-user" : "/auth";

  // State to control navbar visibility
  const [showNavbar, setShowNavbar] = useState(true);
  // Ref to store the last scroll position
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Vérification de l'authentification via le backend
    const checkAuth = async () => {
      try {
        const token = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/status`,
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(token.data.isAuthenticated);
      } catch (error) {
        console.error(
          "Erreur lors de la vérification de l'authentification :",
          error
        );
        setIsAuthenticated(false);
      }
    };
    checkAuth();
    onMenuToggle(isOpen);
  }, [isOpen, onMenuToggle, pathname]);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 bg-black bg-opacity-50 px-4 py-4 transition-transform duration-300",
        // Apply transform based on scroll direction
        showNavbar ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/">
          <Image
            width={250}
            height={100}
            src="logo.svg"
            alt="logo easyplace"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium text-white transition-all duration-300 hover:text-white",
                "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full",
                pathname === link.href && "after:w-full"
              )}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={userLink}
            className="text-white transition-colors hover:bg-white/20 hover:text-white"
          >
            <UserCircle className="h-6 w-6" />
            <span className="sr-only">Mon compte</span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            href={userLink}
            className="text-white transition-colors hover:bg-white/20 hover:text-white"
          >
            <UserCircle className="h-6 w-6" />
            <span className="sr-only">Mon compte</span>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white transition-colors hover:bg-white/20 hover:text-white"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-slate-700 p-0">
              <SheetHeader className="p-6">
                <SheetTitle className="text-left text-lg font-bold text-white">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-3 p-6">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-sm font-medium text-white/90 transition-colors hover:text-white",
                      pathname === link.href && "text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
