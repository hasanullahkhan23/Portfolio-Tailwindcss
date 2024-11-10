import Link from "next/link"
export default function Footer() {
    return (
        <footer className="bg-slate-800 items-center">
            <div className="flex justify-around text-white pt-10 shadow-2xl">
                <div>
                    <ul>
                    <li><Link href="#">Facebook</Link></li>
                    <li><Link href="#">Instagram</Link></li>
                    <li><Link href="#">LinkedIn</Link></li>
                    </ul>
                </div>
                <div>
                <p>Phone: 0331-1122333 | Email:Adventure@gmail.com</p>
                </div>
            </div>
        </footer>
    )
}