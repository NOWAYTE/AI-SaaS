import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  ZapIcon,
  SearchIcon
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    name: "Smart Document Search",
    description: "Easily search and find specific information within your PDFs using our advanced AI-powered search capabilities.",
    icon: SearchIcon,
  },
  {
    name: "Contextual Q&A",
    description: "Ask questions about your PDFs and get accurate, context-aware answers instantly.",
    icon: GlobeIcon,
  },
  {
    name: "Automated Summarization",
    description: "Receive concise summaries of lengthy PDFs, saving you time and effort in extracting key points.",
    icon: ZapIcon,
  },
  {
    name: "Keyword Extraction",
    description: "Automatically identify and highlight important keywords and phrases within your documents.",
    icon: EyeIcon,
  },
  {
    name: "Data Extraction",
    description: "Efficiently extract structured data such as tables, lists, and forms from your PDFs.",
    icon: BrainCogIcon,
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] overflow-hidden">
      <div className="text-white p-2 lg:p-5">
        <div className="py-24 sm:py-32 rounded-md drop-shadow-xl">
          <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">
                Your Interactive Document Companion
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-6xl">
                Transform PDFs into Interactive Conversations
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                Introducing{" "}
                <span className="text-2xl font-bold text-[#EB3678]">queryDocs</span>
                <br />
                <br />
                Simply upload your documents, and our chatbot will assist with answering questions, summarizing content, and addressing all your inquiries. Designed for everyone,
                <span className="text-indigo-200"> queryDocs </span>{" "}
                converts static PDFs into{" "}
                <span className="font-bold text-[#FB773C]">interactive dialogues</span>
                {" "}dramatically enhancing productivity with seamless efficiency.
              </p>
            </div>
            <Button asChild className="mt-10 bg-[#FB773C] font-bold text-base">
              <Link href="/dashboard">Get started</Link>
            </Button>
          </div>

          <div className="relative pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image
                src="https://i.imgur.com/VciRSTI.jpeg"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              />
              <div aria-hidden="true" className="relative">
                <div className="absolute bottom-0 -inset-x-32 bg-neutral-950/10 pt-[5%]" />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8 pt-16">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-50 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map(feature => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-50">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-[#FB773C]" />
                  </dt>
                  <dd>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}
