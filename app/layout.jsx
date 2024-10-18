import { Roboto } from "next/font/google";
import "./globals.css";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

import { Navbar } from "./_components/Navbar";
import Link from "next/link";
import { NavbarMobile } from "./_components/NavbarMobile";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Lucas Santos",
  description: "Desenvolvedor, solucionando problemas com tecnologia!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.className} antialiased bg-gray-950 min-h-screen px-8`}
      >
        <div className="max-w-[1200px] mx-auto pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/profile.jpeg" alt="Foto de Perfil" />
                <AvatarFallback>LS</AvatarFallback>
              </Avatar>
              <Link href="/" className="text-gray-200 hover:text-red-500">
                Lucas Santos
              </Link>
              <Image src="/user-checked.svg" width={25} height={25} />
            </div>
            <div className="hidden md:flex">
              <Navbar />
            </div>
            <div className="md:hidden">
              <NavbarMobile />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1200px]">{children}</div>
      </body>
    </html>
  );
}
