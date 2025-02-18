import { features } from "@/constants";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <main className="flex flex-col flex-1 p-2 lg:p-5 bg-gradient-to-bl from-white to-blue-600 overflow-scroll">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col mx-auto max-w-7xl justify-center items-center">
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
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 hover:scale-105 duration-300">
            <Image
              src="/landscape-placeholder.svg"
              alt="app screenshot"
              width={2432}
              height={1442}
              className="mb-[0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 "
            />
            <div aria-hidden="true" className="relavite">
              <div className="absolute -inset-x-32 bottom-0  bg-gradient-to-t from-white/95 pt-[5%]"></div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="flex items-start gap-3">
                <feature.icon
                  className="h-5 w-5 text-blue-600 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-semibold text-gray-900">
                    {feature.name}
                  </dt>
                  <dd>{feature.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
};

export default Home;
