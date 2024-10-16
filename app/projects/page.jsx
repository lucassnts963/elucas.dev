import { Roboto, Roboto_Slab } from "next/font/google";
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

import { ItemProject } from "../_components/ItemProject";

export default function ProjectsPage() {
  return (
    <div className="text-gray-200 flex flex-col gap-4  mt-32">
      <h1 className={`${robotoSlab.className} text-8xl text-center mt-32`}>
        Projetos
      </h1>
      <div className="mt-16 flex flex-col">
        <ItemProject
          title="Bot Integrando Telegra e ChatGPT"
          description="Desenvolvi um chatbot inteligente que interage com usuários do Telegram de forma natural e personalizada. Utilizei a poderosa tecnologia de linguagem natural do ChatGPT e a plataforma Telegram para criar um assistente virtual capaz de responder a perguntas e manter conversas significativas. Esse projeto demonstra minhas habilidades em desenvolvimento de software, integração de APIs e criação de interfaces conversacionais."
          image="https://i.ytimg.com/vi/BJHx1ggyfo0/hqdefault.jpg"
          link="https://www.youtube.com/watch?v=BJHx1ggyfo0&t=2s"
        />
        <ItemProject
          title="App Prevencionista"
          description="O Prevencionista é um aplicativo que automatiza o processo de inspeções de segurança no ambiente de trabalho, permitindo a geração de relatórios e a edição de imagens de forma rápida e eficiente. Ele foi projetado para facilitar a identificação de não conformidades e o acompanhamento de ações corretivas, melhorando a gestão de segurança e reduzindo o tempo gasto com relatórios manuais."
          image="https://media.licdn.com/dms/image/v2/D4D22AQEl5qOMrwbx1w/feedshare-shrink_1280/feedshare-shrink_1280/0/1725126459603?e=1732147200&v=beta&t=V6leTGN_abrkYEKNeyO-uUArw3Xb-uael9Fmq34Fl0Y"
          link="https://www.linkedin.com/posts/lucas-santos-07446190_soluaexaeles-tecnologia-flutter-activity-7235704818680422401-9pyP?utm_source=share&utm_medium=member_desktop"
        />
        <ItemProject
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
