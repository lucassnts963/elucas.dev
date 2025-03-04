"use client";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

export function ProjectCard({ title, description, image, link }) {
  return (
    <motion.div
      // Efeito de entrada do card
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      // Animação de hover ao passar o mouse
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
      }}
      className="max-w-sm p-4 bg-gray-700 h-full rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out transform"
    >
      {/* Imagem do projeto com hover */}
      <div className="relative h-48 overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      {/* Título e descrição */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-200">{title}</h2>
        <p className={`${roboto.className} mt-2 text-gray-400`}>
          {description}
        </p>
      </div>

      {/* Link opcional */}
      <div className="mt-4">
        <a
          href={link}
          className="text-red-500 hover:text-red-700 font-medium transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba mais →
        </a>
      </div>
    </motion.div>
  );
}
