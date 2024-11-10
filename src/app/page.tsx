import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-slate-800">
      <div className="flex pl-28 pt-24 justify-around">
    <div>
      <h1 className="text-white font-bold text-6xl">Hi, I am Hasan Ullah Khan</h1>
      <h2 className="text-cyan-500 text-3xl font-semibold mt-5">FRONTEND DEVELOPER</h2>
      <p className="text-white w-5/6 text-2xl mt-9">Aspiring Software Developer with a passion for learning and building software solutions. Proficient in basic programming concepts and currently enhancing skills in languages like [ TypeScript, Tailwind-Css and Css]. Eager to contribute to development teams, solve problems, and grow in the field of 
      software development. Motivated to work on real-world projects and collaborate in a dynamic environment</p>
      <button className=" rounded-xl text-black bg-cyan-600 font-bold w-28 h-12 my-12 hover:bg-white">
        <Link href="/contact">contact me</Link></button>
    </div>
    <div className="pr-64 pt-8"> 
      {/* <img className="" src="image/pic1.jpg" alt="" /> */}
      <Image className="h-98"
      src="/image/authorpic.jpg" alt=""
      width={1200}
      height={1200}
      />
    </div>
    </div>
    </main>
  );
}
