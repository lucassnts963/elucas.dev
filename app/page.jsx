import { Roboto, Roboto_Slab } from "next/font/google";
import { ProjectCard } from "./_components/ProjectCard";
import { Separator } from "@/components/ui/separator";

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
    <div className="text-gray-200 flex flex-col gap-4">
      <h2 className={`${roboto.className} text-red-500 text-3xl mt-32`}>
        Olá, Meu nome é Lucas
      </h2>
      <h1 className={`${robotoSlab.className} text-8xl`}>Eu faço websites.</h1>
      <p className={`${roboto.className} text-4xl`}>
        Sou um desenvolvedor especializado em criar soluções sob medida para o
        seu negócio, desde sites e aplicações simples até sistemas de gestão
        completos. Também desenvolvo bots para automatizar o atendimento e
        otimizar processos internos, ajudando sua empresa a alcançar mais
        eficiência e produtividade.
      </p>
      <h2 className={`${robotoSlab.className} text-6xl mt-32`}>Projetos</h2>
      <div className="flex flex-wrap justify-between gap-2 mt-2 mb-32">
        <ProjectCard
          title="Bot Integrando Telegra e ChatGPT"
          description="Desenvolvi uma integração entre o Telegram e o ChatGPT, criando um bot que funciona diretamente do telegram, com o intuito de demonstrar que é possível utilizar ferramentas de inteligência artificial para aprimorar sistemas de atendimento."
          image="https://i.ytimg.com/vi/BJHx1ggyfo0/hqdefault.jpg"
          link="https://www.youtube.com/watch?v=BJHx1ggyfo0&t=2s"
        />
        <ProjectCard
          title="App Prevencionista"
          description="O Prevencionista é um aplicativo que automatiza o processo de inspeções de segurança no ambiente de trabalho, permitindo a geração de relatórios e a edição de imagens de forma rápida e eficiente. Ele foi projetado para facilitar a identificação de não conformidades e o acompanhamento de ações corretivas, melhorando a gestão de segurança e reduzindo o tempo gasto com relatórios manuais."
          image="https://media.licdn.com/dms/image/v2/D4D22AQEl5qOMrwbx1w/feedshare-shrink_1280/feedshare-shrink_1280/0/1725126459603?e=1732147200&v=beta&t=V6leTGN_abrkYEKNeyO-uUArw3Xb-uael9Fmq34Fl0Y"
          link="https://www.linkedin.com/posts/lucas-santos-07446190_soluaexaeles-tecnologia-flutter-activity-7235704818680422401-9pyP?utm_source=share&utm_medium=member_desktop"
        />
        <ProjectCard
          title="Cartão de Visita Digital"
          description="O projeto DevLinks serve como uma página centralizadora de links de perfis e conteúdos relacionados ao desenvolvedor Lucas Santos. Ele inclui botões para acessar seu canal no YouTube, portfólio no GitHub, blog e perfis nas redes sociais como Instagram e LinkedIn. A interface é simples e direta, permitindo que os visitantes encontrem facilmente esses links relevantes."
          image="https://github.com/lucassnts963/devLinks/raw/master/.github/preview.jpg"
          link="https://github.com/lucassnts963/devLinks"
        />
      </div>

      <Separator />

      <footer className={`${roboto.className}`}>
        <div className="flex flex-col gap-2 justify-center">
          <span>@ 2014 - 2024</span>
          <span>Lucas Santos</span>
        </div>
      </footer>
    </div>
  );
}
