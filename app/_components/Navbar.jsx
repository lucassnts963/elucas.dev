"use client";

import { usePathname } from "next/navigation"; // Para pegar a rota atual no App Router
import { motion } from "framer-motion";
import Link from "next/link";

import { Roboto } from "next/font/google";
import { useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

export function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { id: "01", name: "Inicío", path: "/" },
    { id: "02", name: "Projetos", path: "/projects" },
    { id: "03", name: "Social", path: "/social" },
    { id: "04", name: "Sobre", path: "/about" },
  ];

  return (
    <nav className="flex space-x-8 p-4 text-gray-200">
      {navItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <div
            key={item.path}
            className="relative"
            onMouseEnter={() => setHovered(item.path)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="mr-1">{item.id}</span>
            <Link href={item.path} className={`${roboto.className} text-lg`}>
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
          </div>
        );
      })}
    </nav>
  );
}

export default Navbar;
