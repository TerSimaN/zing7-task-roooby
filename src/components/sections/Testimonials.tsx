import Image from "next/image"
import { quotationMarkIcon } from "../../../public/assets/icons"
import Button from "../ui/Button"
import Author from "../ui/Author"
import { phelpsOval, rossOval, wilkinsOval } from "../../../public/assets/images"

const Testimonials = () => {
    return (
        <div className="bg-roooby-gray-100 sm:mt-[11.25rem] mt-20">
            <div className="flex flex-col max-sm:items-center container sm:py-[7.5rem] max-sm:py-16">
                <div className="flex sm:flex-row flex-col justify-between sm:items-end max-sm:items-center">
                    <h1 className="font-inter font-bold text-5xl leading-[3.5rem] tracking-[-0.67px] max-sm:text-center w-full max-w-[35.5rem]">We love our Customers and They love us too</h1>
                    <Button
                        className="font-inter font-medium text-xl tracking-[0.43px] max-sm:px-40 max-sm:mt-4 max-sm:w-full"
                        text="See all"
                        hasIcon="true"
                        iconColor="fill-roooby-green-400"
                        iconMargin="-ml-1"
                    />
                </div>
                <div className="flex sm:flex-row flex-col sm:gap-x-7 max-sm:gap-y-14 sm:mt-[4.5rem] mt-9">
                    <div className="flex flex-col max-w-[22.5rem]">
                        <Image
                            src={quotationMarkIcon}
                            alt="quotation mark icon"
                        />
                        <div className="border-t border-roooby-gray-300 mt-4 h-[1px]"></div>
                        <p className="font-inter font-medium text-2xl leading-9 tracking-[-0.33px] mt-6 mb-12">
                            The best thing we love about Yoora is it does two-way sync with Google Apps.
                            It has helped us to better organize and keep everything on track.
                        </p>
                        <Author
                            imgSrc={rossOval}
                            imgAlt="ross oval"
                            authorName="Lola Ross"
                            authorInfo="Marketing Director"
                        />
                    </div>
                    <div className="flex flex-col max-w-[22.5rem]">
                        <Image
                            src={quotationMarkIcon}
                            alt="quotation mark icon"
                        />
                        <div className="border-t border-roooby-gray-300 mt-4 h-[1px]"></div>
                        <p className="font-inter font-medium text-2xl leading-9 tracking-[-0.33px] mt-6 mb-12">
                            It has made our sales department more effective and efficient.
                            It’s easy to use and it’s constantly updated.
                        </p>
                        <Author
                            imgSrc={phelpsOval}
                            imgAlt="phelps oval"
                            authorName="Daisy Phelps"
                            authorInfo="Speaker and Author, Lifeiseasy"
                        />
                    </div>
                    <div className="flex flex-col max-w-[22.5rem]">
                        <Image
                            src={quotationMarkIcon}
                            alt="quotation mark icon"
                        />
                        <div className="border-t border-roooby-gray-300 mt-4 h-[1px]"></div>
                        <p className="font-inter font-medium text-2xl leading-9 tracking-[-0.33px] mt-6 mb-12">
                            Easy to use, reasonably priced, and ensures I don’t drop the ball on following up with my leads!
                        </p>
                        <Author
                            imgSrc={wilkinsOval}
                            imgAlt="wilkins oval"
                            authorName="Andrew Wilkins"
                            authorInfo="Managing Director, Nirma Studio"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials