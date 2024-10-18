"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation"; // Para pegar a rota atual e fazer a navegação
import { motion } from "framer-motion";
import Link from "next/link";

import { Roboto } from "next/font/google";
import { MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { navItems } from "./Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

export function NavbarMobile() {
  const pathname = usePathname();
  const router = useRouter(); // Hook para navegar para outras páginas
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false); // Estado para controlar a abertura da Sheet

  const handleNavigation = (path) => {
    setOpen(false); // Fecha a Sheet
    router.push(path); // Faz a navegação
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
                <button
                  onClick={() => handleNavigation(item.path)} // Fecha a Sheet e navega para a página
                  className={`${roboto.className} text-3xl text-left`}
                >
                  {item.name}
                </button>
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
