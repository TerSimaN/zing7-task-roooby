import { fosterOval, gibbsOval } from "../../../public/assets/images"
import Author from "../ui/Author"

const Stats = () => {
    return (
        <div className="flex flex-col sm:px-0 px-4">
            <h1 className="font-inter font-bold text-5xl sm:leading-[4.25rem] tracking-[-0.67px] max-sm:text-center">Real-life results and revenue</h1>
            <span className="font-inter font-normal text-roooby-gray-600 text-lg leading-7 max-sm:text-center mt-3">See how companies like yours have smashed their sales success goals</span>
            <div className="flex lg:flex-row flex-col xl:gap-x-[9.25rem] gap-x-16 sm:gap-y-8 border-t border-roooby-gray-300 sm:mt-[4.5rem] mt-12 pt-12">
                <div className="flex flex-col sm:gap-y-6 max-sm:gap-y-2">
                    <h1 className="font-inter font-bold sm:text-7xl text-6xl leading-[4.5rem] tracking-[-1px] xl:text-wrap text-nowrap">
                        $2.5 M
                    </h1>
                    <span className="font-inter font-bold text-xl">Generate sales</span>
                </div>
                <div className="flex flex-col gap-y-8 max-sm:mt-6">
                    <p className="font-inter font-medium sm:text-3xl text-2xl leading-10 tracking-[-0.44px] w-full max-w-[47rem]">
                        Using Кирилица CRM is one of the best decisions we’ve ever made.
                        We’ve seen our annual revenue explode, and the outlook just keeps getting sunnier.
                    </p>
                    <Author
                        imgSrc={fosterOval}
                        imgAlt="foster oval"
                        authorName="Nellie Foster"
                        authorInfo="Founder & CEO, Foster Business Strategies"
                    />
                </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-x-[9.25rem] sm:gap-y-8 border-t border-roooby-gray-300 sm:mt-[4.5rem] mt-12 pt-12">
                <div className="flex flex-col sm:gap-y-6 max-sm:gap-y-2">
                    <h1 className="font-inter font-bold sm:text-7xl text-6xl leading-[4.5rem] tracking-[-1px]">45%</h1>
                    <span className="font-inter font-bold text-xl">Grew revenue</span>
                </div>
                <div className="flex flex-col gap-y-8 lg:ml-auto max-sm:mt-6">
                    <p className="font-inter font-medium sm:text-3xl text-2xl leading-10 tracking-[-0.44px] w-full max-w-[47rem]">
                        Yoora is created for sales people. It’s the kind of software that just works.
                        I don’t have to try to make it work. It already does. It’s just perfect.
                    </p>
                    <Author
                        imgSrc={gibbsOval}
                        imgAlt="gibbs oval"
                        authorName="Lawrence Gibbs"
                        authorInfo="Marketing Director"
                    />
                </div>
            </div>
        </div>
    )
}

export default Stats