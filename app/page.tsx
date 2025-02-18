import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    name: "Store your PDF documents",
    description:
      "Keep all your important PDF files securely stored and easily accessible anytime, anywhere.",
    icon: GlobeIcon,
  },
  {
    name: "Advanced PDF Analysis",
    description:
      "Leverage smart algorithms to analyze and extract valuable insights from your documents.",
    icon: BrainCogIcon,
  },
  {
    name: "Effortless Viewing",
    description:
      "Enjoy an intuitive interface for quick and seamless PDF viewing on any device.",
    icon: EyeIcon,
  },
  {
    name: "Responsive Design",
    description:
      "Access your PDFs from anywhere, whether you're on a desktop, tablet, or smartphone.",
    icon: MonitorSmartphoneIcon,
  },
  {
    name: "Robust Infrastructure",
    description:
      "Experience reliable, high-performance backend operations for all your document needs.",
    icon: ServerCogIcon,
  },
  {
    name: "Lightning Fast Processing",
    description:
      "Process your PDFs at incredible speeds with our cutting-edge technology.",
    icon: ZapIcon,
  },
];

const Home = () => {
  return (
    <main className="flex-1 p-2 lg:p-5 bg-gradient-to-bl from-white to-blue-600 overflow-scroll">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col mx-auto max-w-7xl justify-center items-center px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              Engage with Your PDFs Like Never Before
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Have a conversation with your PDFs.
            </p>
            <p className="text-base mt-6 leading-7 ">
              Introducing{" "}
              <span className="text-blue-600 font-semibold">Chat with PDF</span>
            </p>
            <p className="mt-4 text-gray-700">
              <span className=" text-blue-600">Chat with PDF</span> turns your
              documents into interactive experiences. Upload a PDF, ask
              questions,{" "}
              <span className="font-semibold">get instant summaries,</span> and
              extract key insights effortlessly.
            </p>
          </div>
          <Link
            className={`${buttonVariants({ variant: "default" })} mt-10`}
            href={"/dashboard"}
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
