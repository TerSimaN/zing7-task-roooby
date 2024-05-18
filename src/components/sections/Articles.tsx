import Article from "../layout/Article"
import Button from "../ui/Button"

const Articles = () => {
    return (
        <div className="flex flex-col">
            <div className="flex sm:flex-row flex-col justify-between sm:items-end max-sm:items-center">
                <h1 className="font-inter font-bold sm:text-[4rem] text-5xl leading-[4.75rem] tracking-[-0.89px] max-sm:text-center">What’s new at Roooby?</h1>
                <Button
                    className="font-inter font-medium text-xl tracking-[0.43px] max-sm:px-40 max-sm:w-full"
                    text="See all"
                    hasIcon="true"
                    iconColor="fill-roooby-green-400"
                    iconMargin="-ml-1"
                />
            </div>
            <div className="flex sm:flex-row flex-col gap-x-7 max-sm:gap-y-14 max-sm:px-4 sm:mt-[4.5rem] mt-10">
                <Article
                    label="Service"
                    imgSrc="/assets/images/deliver-image.svg"
                    imgAlt="deliver image"
                    imgWidth="555"
                    header="How To Deliver a Successful Product Launch"
                    date="05 Sep 2024"
                    author="Joshua Nash"
                    className="text-3xl leading-10 tracking-[-0.44px] max-w-[34.75rem]"
                />
                <Article
                    label="Service"
                    imgSrc="/assets/images/employee-image.svg"
                    imgAlt="employee image"
                    imgWidth="555"
                    header="What Makes an Authentic Employee Profile, and Why Does It Matter?"
                    date="07 Sep 2023"
                    author="Ivan Neshev"
                    className="text-3xl leading-10 tracking-[-0.44px] max-w-[34.75rem]"
                />
            </div>
        </div>
    )
}

export default Articles