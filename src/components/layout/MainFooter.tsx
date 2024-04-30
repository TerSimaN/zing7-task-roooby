import Image from "next/image"
import { languageIcon } from "../../../public/assets/icons"
import { facebookLogo, linkedinLogo, rooobyLogo, twitterLogo } from "../../../public/assets/logos";
import Link from "next/link"

const links = [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookies', href: '#' }
]

const sections = [
    {
        name: 'Company',
        links: [
            { name: 'About', href: '#' },
            { name: 'Pricing', href: '#' },
            { name: 'Jobs', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Careers', href: '#' }
        ]
    },
    {
        name: 'Product',
        links: [
            { name: 'Sales software', href: '#' },
            { name: 'Features', href: '#' },
            { name: 'Privacy', href: '#' },
            { name: 'Marketplace', href: '#' },
            { name: 'Status', href: '#' },
            { name: 'API', href: '#' }
        ]
    },
    {
        name: 'Discover',
        links: [
            { name: 'Partner Program', href: '#' },
            { name: 'Get our newsletter', href: '#' },
            { name: 'Sales Pipeline', href: '#' },
            { name: 'What is CRM?', href: '#' },
            { name: 'CRM Comparison', href: '#' },
            { name: 'Resources', href: '#' }
        ]
    },
    {
        name: 'Help Center',
        links: [
            { name: 'Community', href: '#' },
            { name: 'Knowledge Base', href: '#' },
            { name: 'Academy', href: '#' },
            { name: 'Support', href: '#' }
        ]
    }
]

const MainFooter = () => {
    return (
        <footer className="mt-[9.25rem]">
            <div className="flex flex-row justify-between container">
                <div className="flex flex-col">
                    <Link href={'/'}>
                        <Image
                            src={rooobyLogo}
                            alt="Roooby Logo"
                        />
                    </Link>
                    <p className="font-inter font-normal text-roooby-gray-500 text-sm leading-6 mt-6 w-[16.5rem]">
                        We built an elegant solution.
                        <br />
                        Our team created a fully integrated sales and marketing solution for SMBs
                    </p>
                    <div className="flex flex-row gap-4 mt-6 w-[6.5rem] h-6">
                        <Image
                            src={twitterLogo}
                            alt="Twitter"
                            width={24}
                            height={24}
                        />
                        <Image
                            src={facebookLogo}
                            alt="Facebook"
                            width={24}
                            height={24}
                        />
                        <Image
                            src={linkedinLogo}
                            alt="LinkedIn"
                            width={24}
                            height={24}
                        />
                    </div>
                </div>
                <div className="flex flex-row items-start justify-between w-full max-w-[768px]">
                    {sections.map((section) => (
                        <div key={section.name} className="flex flex-col gap-y-3">
                            <h2 className="font-inter font-bold text-base">{section.name}</h2>
                            <ul className="font-intet font-normal text-sm leading-9 tracking-[0.2px]">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-t border-roooby-gray-300 opacity-25 mt-[6.25rem] mx-auto w-full max-w-[85rem] h-[1px]"></div>
            <div className="flex flex-row items-center justify-between container mt-10 mb-10">
                <span className="font-inter font-normal text-roooby-gray-500 text-sm tracking-[0.2px]">© Copyright 2024</span>
                <ul className="flex flex-row items-center justify-between font-inter font-normal text-sm tracking-[0.2px] w-[23rem]">
                    {links.map((link, i) => (
                        <li key={i}>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-row items-center">
                    <Image
                        src={languageIcon}
                        alt="Language Icon"
                        width={24}
                        height={24}
                    />
                    <span className="font-inter font-medium text-sm tracking-[0.2px] ml-2 -mr-1">English</span>
                    <svg className="fill-roooby-gray-300" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.94 6L8 9.09042L11.06 6L12 6.95142L8 11L4 6.95142L4.94 6Z" />
                    </svg>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter