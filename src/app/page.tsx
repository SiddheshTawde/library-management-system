import Image from "next/image";
import { ModeToggle } from "./theme-toggle-button";
import Logo from "@root/assets/logo.png";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between bg-neutral-100 dark:bg-neutral-900 w-full py-4 px-12">
        <Link href="https://www.iitb.ac.in" className="flex items-center gap-4">
          <Image src={Logo} alt="Logo" width={56} height={56} />

          <div className="flex flex-col">
            <span className="text-2xl font-black">भारतीय प्रौद्योगिकी संस्थान, मुंबई</span>
            <span className="text-base">Indian Institute of Technology, Bombay</span>
          </div>
        </Link>
        <ModeToggle />
      </header>
      <main>
        <h1>Hello World</h1>
      </main>
    </>
  )
}
