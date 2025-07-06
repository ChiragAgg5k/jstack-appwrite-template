import { cn } from "@/lib/utils";
import { RecentPost } from "./components/post";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex-col items-center justify-center relative isolate">
      <div className="absolute inset-0 -z-10 opacity-50 mix-blend-soft-light bg-[url('/noise.svg')] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-16">
        <h1
          className={cn(
            "inline-flex tracking-tight flex-col gap-1 transition text-center",
            "font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-none lg:text-[4rem]",
            "bg-gradient-to-r from-20% bg-clip-text text-transparent",
            "from-white to-gray-50",
            "flex flex-row items-center justify-center gap-2",
          )}
        >
          <span>JStack</span>+<span className="text-[#f02d65]">Appwrite</span>
        </h1>

        <p className="text-[#ececf399] text-lg/7 md:text-xl/8 text-pretty sm:text-wrap sm:text-center text-center mb-8">
          The stack for building seriously fast, lightweight and{" "}
          <span className="inline sm:block">
            end-to-end typesafe Next.js apps,
          </span>
          <span className="text-[#f02d65]">
            and build like a team of hundreds_
          </span>
        </p>

        <RecentPost />

        <div className="flex flex-row items-center justify-center gap-2">
          <Link
            href="https://jstack.app/blog"
            className={cn(
              "text-white text-sm",
              "hover:text-[#f02d65] transition-colors",
            )}
          >
            Learn how to get started {"->"}
          </Link>
        </div>
      </div>
    </main>
  );
}
