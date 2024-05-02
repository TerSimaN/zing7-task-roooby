import Image from "next/image"
import { rooobyLogo } from "../../../public/assets/logos"
import Link from "next/link"
import Button from "../ui/Button"

const links = [
    { name: 'Product', href: '#' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Company', href: '#' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
]

const MainHeader = () => {
    return (
        <header className="bg-roooby-gray-100 py-6">
            <div className="flex flex-row items-center container">
                <Link href={'/'} className="mr-[6.25rem]">
                    <Image
                        src={rooobyLogo}
                        alt="Roooby Logo"
                    />
                </Link>
                <ul className="flex gap-12 font-inter font-medium text-sm">
                    {links.map((link, i) => (
                        <li key={link.href + i}>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-row items-center gap-5 ml-auto">
                    <Button
                        className="font-inter font-bold text-xs tracking-[-0.19px] bg-white border rounded border-roooby-gray-200 w-[4.75rem] h-8"
                        text="Log In"
                    />
                    <Button
                        className="font-inter font-bold text-white text-xs tracking-[-0.19px] bg-roooby-blue-dark rounded w-28 h-8"
                        text="Try For Free"
                    />
                </div>
            </div>
        </header>
    )
}

export default MainHeader