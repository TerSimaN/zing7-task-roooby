import Article from "../layout/Article"
import Button from "../ui/Button"

const Articles = () => {
    return (
        <div className="flex flex-col">
            <div className="flex md:flex-row flex-col sm:gap-y-0 gap-y-4 justify-between max-sm:justify-center md:items-end items-center">
                <h1 className="font-inter font-bold lg:text-[4rem] text-5xl sm:leading-[4.75rem] leading-[3.5rem] tracking-[-0.89px] max-sm:text-center">
                    What’s new at Roooby?
                </h1>
                <Button
                    className="font-inter font-medium text-xl tracking-[0.43px]"
                    text="See all"
                    hasIcon="true"
                    iconColor="fill-roooby-green-400"
                    iconMargin="-ml-1"
                />
            </div>
            <div className="flex sm:flex-row flex-col lg:gap-x-7 gap-x-5 sm:gap-y-0 gap-y-14 sm:px-0 px-4 lg:mt-[4.5rem] mt-10">
                <Article
                    articleAtr={{
                        label: "Service",
                        imgSrc: "/assets/images/deliver-image.svg",
                        imgAlt: "deliver image",
                        imgWidth: 555,
                        imgHeight: 370,
                        header: "How To Deliver a Successful Product Launch",
                        date: "05 Sep 2024",
                        author: "Joshua Nash"
                    }}
                    classNameAtr={{
                        headingAtr: "lg:text-3xl text-2xl leading-10 tracking-[-0.44px]",
                        articleMaxWidth: "max-w-[34.75rem]"
                    }}
                />
                <Article
                    articleAtr={{
                        label: "Service",
                        imgSrc: "/assets/images/employee-image.svg",
                        imgAlt: "employee image",
                        imgWidth: 555,
                        imgHeight: 370,
                        header: "What Makes an Authentic Employee Profile, and Why Does It Matter?",
                        date: "07 Sep 2023",
                        author: "Ivan Neshev"
                    }}
                    classNameAtr={{
                        headingAtr: "lg:text-3xl text-2xl leading-10 tracking-[-0.44px]",
                        articleMaxWidth: "max-w-[34.75rem]"
                    }}
                />
            </div>
        </div>
    )
}

export default Articles