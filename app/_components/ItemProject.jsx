import { Roboto, Roboto_Slab } from "next/font/google";

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

export function ItemProject({ title, description, image, link }) {
  return (
    <div className="mb-16">
      <h2
        className={`${robotoSlab.className} text-4xl text-red-500 hover:text-red-700`}
      >
        <a
          href={link}
          className="transition-colors duration-200"
          target="_blank"
        >
          {title}
        </a>
      </h2>
      <h3 className={`${roboto.className} text-lg text-gray-400 mb-4`}>
        Desenvolvimento
      </h3>
      <div className="relative h-96 overflow-hidden rounded-md mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <p className={`${roboto.className} text-2xl text-justify mt-8`}>
        {description}
      </p>
    </div>
  );
}
