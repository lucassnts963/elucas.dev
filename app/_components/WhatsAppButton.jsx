"use client";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const phoneNumber = "5591992417473";
  const message = "Olá, gostaria de saber mais sobre seus serviços!";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
      // Animação ao aparecer na tela
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // Animação ao passar o mouse
      whileHover={{ scale: 1.1 }}
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.52 3.484a11.986 11.986 0 00-16.97 0 11.989 11.989 0 00-3.487 8.5c.003 2.37.654 4.682 1.885 6.712l-1.233 4.496a1.23 1.23 0 001.23 1.534l4.595-1.213a11.946 11.946 0 005.99 1.616h.002c3.217 0 6.237-1.252 8.503-3.516a11.987 11.987 0 000-16.973zm-8.51 18.455h-.002a9.963 9.963 0 01-5.218-1.456 1.002 1.002 0 00-.666-.104l-3.384.894.903-3.299a1.001 1.001 0 00-.133-.758 9.948 9.948 0 01-1.628-5.432 9.978 9.978 0 012.911-7.086 9.985 9.985 0 0114.11 0 9.986 9.986 0 010 14.108 9.966 9.966 0 01-7.392 3.063zm5.7-7.437c-.309-.154-1.835-.907-2.12-1.01-.287-.104-.496-.155-.704.156-.209.309-.806 1.01-.987 1.219-.181.206-.363.234-.672.078-.31-.155-1.307-.481-2.49-1.536-.922-.821-1.544-1.835-1.725-2.145-.181-.309-.02-.477.135-.631.139-.137.309-.363.463-.544.154-.182.206-.31.31-.516.104-.207.052-.386-.026-.544-.078-.154-.704-1.71-.963-2.333-.25-.603-.5-.519-.704-.53-.182-.007-.387-.01-.596-.01a1.148 1.148 0 00-.82.387c-.287.31-1.082 1.062-1.082 2.59s1.108 3.004 1.261 3.211c.154.207 2.175 3.322 5.263 4.663.735.318 1.311.508 1.76.653.74.235 1.413.202 1.94.122.593-.09 1.835-.747 2.095-1.471.26-.723.26-1.342.181-1.471-.078-.129-.282-.206-.593-.363z" />
      </svg>
      <span>Fale Comigo</span>
    </motion.a>
  );
}
