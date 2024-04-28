import Image from "next/image"
import { keyboardArrowRightBlackIcon } from "../../../public/assets/icons"

const Cta = () => {
    return (
        <div className="flex flex-row bg-cta-background h-[29.25rem]">
            <div className="flex flex-col py-[7.5rem] ml-[9.5rem]">
                <h1 className="font-inter font-bold text-white text-[4rem] leading-[4.5rem] tracking-[-0.89px] max-w-[48.25rem]">Ready to supercharge your business?</h1>
                <p className="font-inter font-medium text-white text-lg leading-7 opacity-75 max-w-[35.75rem] h-14">
                    Ask about <span className="font-inter font-black text-white text-lg leading-7">Roooby</span> products,
                    pricing, implementation, or anything else.
                    Our highly trained reps are standing by, ready to help.
                </p>
            </div>
            <div className="flex flex-col gap-y-6 pt-[12.75rem] ml-[6.5rem] w-full max-w-60">
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
            {/* <div className={`bg-[${bgColor}] pl-[4.98rem]`}>
                <svg width="1440" height="468" viewBox="0 0 1440 468" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1440" height="468" fill={`${bgColor}`} />
                    <mask id="mask0_1_74" style={{ 'maskType': 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="468">
                        <path d="M0 0H1440V468H0V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_1_74)">
                        <rect x="1439.67" width="452" height="540" transform="rotate(90 1439.67 0)" fill="#FFE377" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M785.122 458.241L785 468L1553 468C1553 255.923 1381.08 84 1169 84C960.185 84 790.299 250.673 785.122 458.241Z" fill="#00CC61" />
                    </g>
                </svg>
            </div> */}
        </div>
    )
}

export default Cta