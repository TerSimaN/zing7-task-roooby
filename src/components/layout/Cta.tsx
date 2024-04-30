import Button from "../ui/Button"

const Cta = () => {
    return (
        <div className="bg-cta-background">
            <div className="flex flex-row container gap-x-24 h-[29.25rem]">
                <div className="flex flex-col gap-y-6 py-[7.5rem]">
                    <h1 className="font-inter font-bold text-white text-[4rem] leading-[4.5rem] tracking-[-0.89px] max-w-[48.25rem]">Ready to supercharge your business?</h1>
                    <p className="font-inter font-medium text-white text-lg leading-7 opacity-75 max-w-[35.75rem] h-14">
                        Ask about <span className="font-inter font-black text-white text-lg leading-7">Roooby</span> products,
                        pricing, implementation, or anything else.
                        Our highly trained reps are standing by, ready to help.
                    </p>
                </div>
                <div className="flex flex-col gap-y-6 pt-[12.75rem] w-full max-w-60">
                    <Button
                        className="gap-x-5 font-inter font-bold text-lg tracking-[-0.25px] bg-white rounded-lg shadow-2xl ml-4 py-5 pl-8 w-[12.5rem]"
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