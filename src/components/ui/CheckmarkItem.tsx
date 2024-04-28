import Image from "next/image"
import { checkmarkIcon } from "../../../public/assets/icons"

const CheckmarkItem = ({ text = '' }) => {
    return (
        <div className="flex flex-row items-start gap-x-6">
            <Image
                src={checkmarkIcon}
                alt="checkmarkIcon"
                className="mt-1"
            />
            <p className="font-inter font-normal text-lg leading-7 tracking-[0.2px]">{text}</p>
        </div>
    )
}

export default CheckmarkItem