import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex-row justify-between h-[10vh] w-[100vw]">
            <nav className="flex justify-between bg-white m-[1em]">
                <Image src="/psu.png" alt="logo" width={75} height={50} />
                <ul className="flex justify-between gap-5 self-center">
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </nav>
        </header>
    )
}