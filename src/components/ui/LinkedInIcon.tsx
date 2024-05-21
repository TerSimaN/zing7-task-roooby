import Image from "next/image"
import Link from "next/link"
import { linkedinLogo } from "../../../public/assets/logos"

const LinkedInIcon = () => {
    return (
        <Link href={'https://www.linkedin.com/'}>
            <Image
                src={linkedinLogo}
                alt="LinkedIn"
                width={24}
                height={24}
            />
        </Link>
    )
}

export default LinkedInIcon