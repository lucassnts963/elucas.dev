"use client";

import { Roboto, Roboto_Slab } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { motion } from "framer-motion";
import { WhatsAppButton } from "../_components/WhatsAppButton";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export default function AboutPage() {
  return (
    <div className="text-gray-200 flex flex-col items-center gap-4 mt-8">
      {/* Título com animação */}
      <motion.h1
        className={`${robotoSlab.className} text-4xl md:text-6xl text-center mt-8 md:mt-32`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Sobre mim
      </motion.h1>

      {/* Imagem de perfil com animação */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src="/profile.jpeg"
          width={250}
          height={250}
          className="rounded-full"
          alt="Foto de Perfil"
        />
      </motion.div>

      {/* Texto sobre mim com animação */}
      <motion.div
        className="mt-16 flex flex-col"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p
          className={`${roboto.className} text-center text-lg md:text-2xl mb-8`}
        >
          Olá! Meu nome é Lucas Santos, e sou apaixonado por tecnologia e
          inovação. Ao longo dos anos, desenvolvi minhas habilidades como
          Engenheiro de Produção e Desenvolvedor de Software, sempre em busca de
          soluções práticas e eficientes para desafios reais. Com um forte foco
          em desenvolvimento mobile e web, utilizando tecnologias como Flutter,
          React e Node.js, estou constantemente explorando maneiras de otimizar
          processos e criar experiências digitais impactantes. Atualmente,
          trabalho como Técnico de Planejamento em projetos de montagem
          mecânica, o que me proporciona uma visão prática de grandes
          empreendimentos industriais. Minha experiência me levou a desenvolver
          aplicativos e ferramentas que não só agilizam o trabalho, mas também
          incentivam o engajamento dos colaboradores. Sempre me desafio a
          aprender algo novo, seja em desenvolvimento de software, gerenciamento
          de projetos, ou análise de dados com ferramentas como Power BI e Excel
          avançado. Acredito no poder da tecnologia para transformar o mundo ao
          nosso redor, e minha missão é contribuir para essa transformação,
          oferecendo soluções criativas e funcionais. Fique à vontade para
          explorar mais sobre os projetos que tenho realizado e entrar em
          contato. Vamos juntos construir algo incrível!
        </p>
      </motion.div>

      {/* Botão do WhatsApp com animação */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <WhatsAppButton />
      </motion.div>

      <Separator />

      {/* Rodapé com animação */}
      <motion.footer
        className={`${roboto.className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="flex flex-col gap-2 justify-center items-center">
          <span>@ 2014 - 2024</span>
          <span>Lucas Santos</span>
        </div>
      </motion.footer>
    </div>
  );
}
