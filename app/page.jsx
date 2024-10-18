"use client";

import { Roboto, Roboto_Slab } from "next/font/google";
import { ProjectCard } from "./_components/ProjectCard";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { WhatsAppButton } from "./_components/WhatsAppButton";

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

export default function Home() {
  return (
    <div className="text-gray-200 flex flex-col gap-4 container mx-auto px-4 lg:px-16">
      {/* Animação de entrada do texto */}
      <motion.h2
        className={`${roboto.className} text-red-500 text-3xl md:text-4xl mt-16 md:mt-32`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Olá, Meu nome é Lucas
      </motion.h2>

      <motion.h1
        className={`${robotoSlab.className} text-6xl md:text-8xl`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Eu faço websites.
      </motion.h1>

      <motion.p
        className={`${roboto.className} text-lg md:text-4xl`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Sou um desenvolvedor especializado em criar soluções sob medida para o
        seu negócio, desde sites e aplicações simples até sistemas de gestão
        completos. Também desenvolvo bots para automatizar o atendimento e
        otimizar processos internos, ajudando sua empresa a alcançar mais
        eficiência e produtividade.
      </motion.p>

      <motion.h2
        className={`${robotoSlab.className} text-6xl mt-16 md:mt-32`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projetos
      </motion.h2>

      {/* Grid de Projetos com animação de hover */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-8">
        <motion.div whileHover={{ scale: 1.05 }}>
          <ProjectCard
            title="Bot Integrando Telegra e ChatGPT"
            description="Desenvolvi uma integração entre o Telegram e o ChatGPT, criando um bot que funciona diretamente do telegram, com o intuito de demonstrar que é possível utilizar ferramentas de inteligência artificial para aprimorar sistemas de atendimento."
            image="https://i.ytimg.com/vi/BJHx1ggyfo0/hqdefault.jpg"
            link="https://www.youtube.com/watch?v=BJHx1ggyfo0&t=2s"
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <ProjectCard
            title="App Prevencionista"
            description="O Prevencionista é um aplicativo que automatiza o processo de inspeções de segurança no ambiente de trabalho, permitindo a geração de relatórios e a edição de imagens de forma rápida e eficiente."
            image="https://media.licdn.com/dms/image/v2/D4D22AQEl5qOMrwbx1w/feedshare-shrink_1280/feedshare-shrink_1280/0/1725126459603?e=1732147200&v=beta&t=V6leTGN_abrkYEKNeyO-uUArw3Xb-uael9Fmq34Fl0Y"
            link="https://www.linkedin.com/posts/lucas-santos-07446190_soluaexaeles-tecnologia-flutter-activity-7235704818680422401-9pyP?utm_source=share&utm_medium=member_desktop"
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <ProjectCard
            title="Cartão de Visita Digital"
            description="O projeto DevLinks serve como uma página centralizadora de links de perfis e conteúdos relacionados ao desenvolvedor Lucas Santos. Inclui botões para acessar YouTube, GitHub, blog e redes sociais como Instagram e LinkedIn."
            image="https://github.com/lucassnts963/devLinks/raw/master/.github/preview.jpg"
            link="https://github.com/lucassnts963/devLinks"
          />
        </motion.div>
      </div>
      <WhatsAppButton />

      <Separator />

      {/* Rodapé */}
      <footer
        className={`${roboto.className} flex flex-col gap-2 justify-center items-center py-4`}
      >
        <span>@ 2014 - 2024 Lucas Santos</span>
        <span>Todos os direitos reservados.</span>
      </footer>
    </div>
  );
}
