import Link from "next/link"
export default function Header(){
    return(
        <div>
        <header className="flex justify-between px-28 bg-slate-800 h-24 items-center font-semibold text-cyan-500">
          <div>
            <h1 className="text-3xl">My Portfolio</h1>
          </div>
          <div className="space-x-6 text-lg">
            <Link href="/">Home</Link>
            <Link href="/about">About me</Link>
            <Link href="/contact">Contact me</Link>
          </div>
        </header>
      </div>
    )
}