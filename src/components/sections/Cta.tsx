import Button from "../ui/Button"

const Cta = () => {
    return (
        <div className="bg-cta-background lg:h-[29.25rem] sm:h-80 h-96">
            <div className="flex sm:flex-row flex-col container lg:gap-x-24 gap-x-12 sm:px-8 xl:px-0 h-full">
                <div className="flex flex-col sm:gap-y-6 gap-y-3 sm:px-0 px-2 sm:my-auto max-sm:mt-auto">
                    <h1 className="font-inter font-bold text-white lg:text-[4rem] text-4xl lg:leading-[4.5rem] leading-12 tracking-[-0.89px] max-sm:text-center lg:max-w-[48.25rem]">Ready to supercharge your business?</h1>
                    <p className="font-inter font-medium text-white text-lg leading-7 max-sm:text-center opacity-75 max-w-[35.75rem] lg:h-14">
                        Ask about <span className="font-inter font-black text-white text-lg leading-7">Roooby</span> products,
                        pricing, implementation, or anything else.
                        Our highly trained reps are standing by, ready to help.
                    </p>
                </div>
                <div className="flex flex-col max-sm:items-center lg:gap-y-6 gap-y-3 lg:mt-[12.75rem] lg:mb-0 my-auto w-full sm:max-w-60">
                    <Button
                        className="sm:gap-x-5 font-inter font-bold text-lg tracking-[-0.25px] bg-white rounded-lg shadow-2xl sm:ml-4 py-5 sm:pl-8 max-sm:px-24 sm:w-[12.5rem] w-[20rem]"
                        text="Try For Free"
                        hasIcon="true"
                        iconColor="fill-black"
                    />
                    <span className="font-inter font-medium text-white text-sm">Full access. No credit card required.</span>
                </div>
            </div>
        </div>
    )
}

export default Cta