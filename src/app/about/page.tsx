export default function About() {
    return (

        <div className="bg-slate-800 text-white pb-20">
            <div className=" flex justify-center font-bold text-3xl pt-10">
                <h1>About me</h1></div>
            <div className="flex">
                <div className=" w-1/2 ml-28 mt-16 font-semibold text-2xl">
                    <h2 className="text-cyan-500 text-3xl font-semibold my-5">FRONTEND DEVELOPER</h2>
                    <p>
                        I am an accomplished Frontend Developer specializing in TypeScript and Next.js, with an understanding of building modern, scalable web applications. My expertise extends to creating dynamic user interfaces that enhance the overall user experience. With a focus on clean, maintainable code and industry best practices, I ensure that each project I work on is both efficient and future-proof. <br />
                        My passion for continuous learning keeps me up-to-date with the latest industry trends, and I am always eager to take on new challenges in web development.
                    </p>
                </div>

                <img className=" mt-24 mx-28 rounded-full h-80 w-80" src="image/coding3.jfif" alt="" />
            </div>
            <div className="flex justify-center font-bold text-3xl my-14">
                <h1>My Projects</h1>
            </div>
            <div className="flex justify-evenly items-center">
                <div className=" p-8 shadow-2xl">
                    <img src="/image/calculator2.png" alt="" />
                    <h4>calculator</h4>
                </div>
                <div className="p-8 shadow-2xl">
                    <img src="/image/numberguessing.webp" alt="" className="h-56"/>
                    <h4>Number guessing game</h4>
                </div>
                <div className="p-3 shadow-2xl ">
                    <img src="/image/atm2.png" alt="" className="h-72 " />
                    <h4>calculator</h4>
                </div>
            </div>
        </div>
    )
}