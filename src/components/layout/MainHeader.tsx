import Image from "next/image"
import { rooobyLogo } from "../../../public/assets/icons"

const links = [
    { name: 'Product', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Company', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' }
]

const mainHeader = () => {
    return (
        <header className="col-span-12 py-6">
            <div className="flex flex-row items-center">
                <a href="/" className="mr-[6.25rem]">
                    <Image
                        src={rooobyLogo}
                        alt="Roooby Logo"
                        width={95}
                        height={28}
                    />
                </a>
                <ul className="flex gap-12 font-inter font-medium text-sm">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-row items-center gap-5 ml-auto">
                    <button className="font-inter font-bold text-xs tracking-[-0.19px] bg-white border rounded border-[#DCDCDC] w-[4.75rem] h-8">
                        Log In
                    </button>
                    <button className="font-inter font-bold text-white text-xs tracking-[-0.19px] bg-[#150050] rounded w-28 h-8">
                        Try For Free
                    </button>
                </div>
            </div>
        </header>
    )
}

export default mainHeader