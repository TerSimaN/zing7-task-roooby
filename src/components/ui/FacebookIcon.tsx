import Image from "next/image"
import Link from "next/link"
import { facebookLogo } from "../../../public/assets/logos"

const FacebookIcon = () => {
    return (
        <Link href={'https://www.facebook.com/'}>
            <Image
                src={facebookLogo}
                alt="Facebook"
                width={24}
                height={24}
            />
        </Link>
    )
}

export default FacebookIcon