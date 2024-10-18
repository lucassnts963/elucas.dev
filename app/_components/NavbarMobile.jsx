"use client";

import { usePathname } from "next/navigation"; // Para pegar a rota atual no App Router
import { motion } from "framer-motion";
import Link from "next/link";

import { Roboto } from "next/font/google";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navItems } from "./Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

export function NavbarMobile() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(null);

  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="text-gray-200" size={32} />
      </SheetTrigger>
      <SheetContent className="bg-gray-900 border-0 text-gray-200 px-0">
        <nav className="flex flex-col gap-8 p-4 text-gray-200 text-4xl">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <motion.div
                key={item.path}
                className="relative"
                onMouseEnter={() => setHovered(item.path)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{ duration: 0.3 }}
              >
                <span className="mr-4">{item.id}</span>
                <Link
                  href={item.path}
                  className={`${roboto.className} text-3xl`}
                >
                  {item.name}
                </Link>
                {isActive && (
                  <motion.div
                    className="absolute left-0 right-0 h-[6px] bg-red-500"
                    layoutId="underline"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    transition={{ duration: 0.3 }}
                    style={{ bottom: "-8px" }}
                  />
                )}

                {hovered === item.path && !isActive && (
                  <motion.div
                    className="absolute left-0 right-0 h-[6px] bg-gray-500"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ bottom: "-8px" }} // A mesma distância para manter o alinhamento
                  />
                )}
              </motion.div>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
