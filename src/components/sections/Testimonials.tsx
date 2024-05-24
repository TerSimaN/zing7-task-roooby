import Image from "next/image"
import { quotationMarkIcon } from "../../../public/assets/icons"
import Button from "../ui/Button"
import Author from "../ui/Author"
import { phelpsOval, rossOval, wilkinsOval } from "../../../public/assets/images"

const testimonials = [
    {
        text: `The best thing we love about Yoora is it does two-way sync with Google Apps.
                It has helped us to better organize and keep everything on track.`,
        imgSrc: rossOval,
        imgAlt: 'ross oval',
        authorName: 'Lola Ross',
        authorInfo: 'Marketing Director'
    },
    {
        text: `It has made our sales department more effective and efficient.
                It’s easy to use and it’s constantly updated.`,
        imgSrc: phelpsOval,
        imgAlt: 'phelps oval',
        authorName: 'Daisy Phelps',
        authorInfo: 'Speaker and Author, Lifeiseasy'
    },
    {
        text: `Easy to use, reasonably priced, and ensures I don’t drop the ball on following up with my leads!`,
        imgSrc: wilkinsOval,
        imgAlt: 'wilkins oval',
        authorName: 'Andrew Wilkins',
        authorInfo: 'Managing Director, Nirma Studio'
    }
]

const Testimonials = () => {
    return (
        <div className="bg-roooby-gray-100 sm:px-10 md:px-14 xl:px-0 px-4 lg:mt-32 xl:mt-[11.25rem] mt-20">
            <div className="flex flex-col max-sm:items-center container sm:py-16 lg:py-20 xl:py-[7.5rem] py-8">
                <div className="flex md:flex-row flex-col lg:gap-y-0 sm:gap-y-6 md:items-end items-center justify-between">
                    <h1 className="font-inter font-bold text-5xl leading-[3.5rem] tracking-[-0.67px] sm:text-left text-center w-full max-w-[35.5rem]">
                        We love our Customers and They love us too
                    </h1>
                    <Button
                        className="font-inter font-medium text-xl tracking-[0.43px] sm:mt-0 mt-4"
                        text="See all"
                        hasIcon="true"
                        iconColor="fill-roooby-green-400"
                        iconMargin="-ml-1"
                    />
                </div>
                <div className="flex lg:flex-row flex-col sm:gap-x-7 gap-y-14 md:mt-[4.5rem] mt-9">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col sm:max-w-none lg:max-w-[22.5rem] max-w-[22.5rem]">
                            <Image
                                src={quotationMarkIcon}
                                alt="quotation mark icon"
                            />
                            <p className="border-t border-roooby-gray-300 font-inter font-medium text-2xl leading-9 tracking-[-0.33px] pt-4 mt-8 mb-12">
                                {testimonial.text}
                            </p>
                            <Author
                                imgSrc={testimonial.imgSrc}
                                imgAlt={testimonial.imgAlt}
                                authorName={testimonial.authorName}
                                authorInfo={testimonial.authorInfo}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials