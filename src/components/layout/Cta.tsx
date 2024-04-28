import Image from "next/image"
import { keyboardArrowRightBlackIcon } from "../../../public/assets/icons"

const Cta = () => {
    return (
        <div className="relative flex flex-row justify-between bg-roooby-teal pl-[9.5rem] h-[29.25rem]">
            <div className="flex flex-col z-10 pr-[32.25rem] py-[7.5rem]">
                <h1 className="font-inter font-bold text-white text-[4rem] leading-[4.5rem] tracking-[-0.89px]">Ready to supercharge your business?</h1>
                <p className="font-inter font-medium text-white text-lg leading-7 opacity-75 h-14">
                    Ask about <span className="font-inter font-black text-white text-lg leading-7">Roooby</span> products,
                    pricing, implementation, or anything else.
                    Our highly trained reps are standing by, ready to help.
                </p>
            </div>
            <div className="absolute right-0 bg-cta-shape py-[12.5rem] w-[41rem] h-[29.25rem]">
                <div className="flex flex-col gap-6 ml-[14.25rem] w-full max-w-60">
                    <button className="flex flex-row font-inter font-bold text-lg tracking-[-0.25px] bg-white rounded-lg shadow-2xl ml-4 py-5 pl-8 w-[12.5rem]">
                        Try For Free
                        <Image
                            src={keyboardArrowRightBlackIcon}
                            alt="arrow right black icon"
                            width={24}
                            height={24}
                            className="ml-5"
                        />
                    </button>
                    <span className="font-inter font-medium text-white text-sm">Full access. No credit card required.</span>
                </div>
            </div>
        </div>
    )
}

export default Cta