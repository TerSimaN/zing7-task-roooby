import Image from "next/image"
import { amazonLogo, atlassianLogo, cannonLogo, googleLogo, walmartLogo } from "../../../public/assets/logos"

const logos = [
    { imgSrc: googleLogo, imgAlt: 'Google logo' },
    { imgSrc: atlassianLogo, imgAlt: 'Atlassian logo' },
    { imgSrc: cannonLogo, imgAlt: 'Cannon logo' },
    { imgSrc: walmartLogo, imgAlt: 'Walmart logo' },
    { imgSrc: amazonLogo, imgAlt: 'Amazon logo' },
]

const Clients = ({ className = '' }) => {
    return (
        <div className={`flex flex-row items-center justify-between ${(className !== '') ? `${className}` : `mt-32 mb-[5.25rem]`}`}>
            <span className="font-inter font-medium text-base tracking-[-0.22px]">Trusted by 1,000+ customers</span>
            {logos.map((logo, i) => (
                <Image
                    src={logo.imgSrc}
                    alt={logo.imgAlt}
                    key={i}
                />
            ))}
        </div>
    )
}

export default Clients