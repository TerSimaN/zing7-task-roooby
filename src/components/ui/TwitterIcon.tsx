import Image from "next/image"
import Link from "next/link"
import { twitterLogo } from "../../../public/assets/logos"

const TwitterIcon = () => {
    return (
        <Link href={'https://twitter.com/'}>
            <Image
                src={twitterLogo}
                alt="Twitter"
                width={24}
                height={24}
            />
        </Link>
    )
}

export default TwitterIcon