import { Roboto, Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export default function SocialPage() {
  return (
    <div className="text-gray-200 flex items-center justify-center h-36">
      <h2 className={`${robotoSlab.className} text-6xl`}>Em desenvolvimento</h2>
    </div>
  );
}
