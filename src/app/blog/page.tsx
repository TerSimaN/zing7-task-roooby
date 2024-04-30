import Article from "@/components/layout/Article";
import Cta from "@/components/layout/Cta";
import Image from "next/image";

const articles = [
    {
        label: 'News', imgSrc: '/assets/images/blogImages/news-image-1.png', imgAlt: 'news-image-1',
        header: 'Learn from My Mistakes: 7 Digital Course Pitfalls to Skip', date: '29 Jun 2024', author: 'Joshua Nash'
    },
    {
        label: 'Sales', imgSrc: '/assets/images/blogImages/sales-image-1.png', imgAlt: 'sales-image-1',
        header: 'How To Do Representation in Marketing the Right Way', date: '20 Mar 2022', author: 'Bill Holloway'
    },
    {
        label: 'Sales', imgSrc: '/assets/images/blogImages/sales-image-2.png', imgAlt: 'sales-image-2',
        header: 'The Psychology of Short-Form Content: Why We Love...', date: '07 Jun 2024', author: 'Stephen Henderson'
    },
    {
        label: 'Sales', imgSrc: '/assets/images/blogImages/sales-image-3.png', imgAlt: 'sales-image-3',
        header: 'The Challenger Sale model: How to lead the conversation', date: '09 Jan 2024', author: 'Joshua Nash'
    },
    {
        label: 'Product', imgSrc: '/assets/images/blogImages/product-image-1.png', imgAlt: 'product-image-1',
        header: '3 ways To automate your lead generation process', date: '08 Jul 2024', author: 'Leroy Figueroa'
    },
    {
        label: 'Product', imgSrc: '/assets/images/blogImages/product-image-2.png', imgAlt: 'product-image-2',
        header: 'Marketplace Monthly Apps Spotlight: Aug 2023', date: '05 Aug 2024', author: 'Joshua Nash'
    },
]

export default function Blog() {
    return (
        <main>
            <div className="bg-roooby-gray-100 pt-[4.5rem]">
                <div className="flex flex-col container">
                    <h1 className="font-inter font-bold text-[4rem] leading-[4.75rem] tracking-[-0.89px] max-w-[40.75rem]">
                        News and insights <span className="font-inter font-bold text-roooby-gray-300 text-[4rem] leading-[4.75rem] tracking-[-0.89px] max-w-[40.75rem]">from our experts</span>
                    </h1>
                    <div className="flex flex-col mt-[6.25rem] max-w-[36.25rem]">
                        <ul className="flex flex-row justify-between items-center">
                            <li className="font-inter font-medium text-lg">All Articles</li>
                            <li className="font-inter font-medium text-roooby-gray-400 text-lg">Sales</li>
                            <li className="font-inter font-medium text-roooby-gray-400 text-lg">Marketing</li>
                            <li className="font-inter font-medium text-roooby-gray-400 text-lg">Service</li>
                            <li className="font-inter font-medium text-roooby-gray-400 text-lg">Product</li>
                            <li className="font-inter font-medium text-roooby-gray-400 text-lg">News</li>
                        </ul>
                        <div className="border-t-[3px] border-roooby-green-400 mt-7 w-[86px] h-[3px]"></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap container gap-x-3 gap-y-[7.5rem] bg-white pb-44 mt-[7.5rem]">
                <div className="flex flex-row gap-x-8">
                    <div className="flex flex-col">
                        <div className="border-t border-roooby-gray-300 h-[1px]"></div>
                        <span className="font-inter font-bold uppercase text-roooby-gray-300 text-sm tracking-[1.4px] mt-6">Service</span>
                        <h1 className="font-inter font-bold text-[2.5rem] leading-[3rem] tracking-[-0.56px] mt-4 max-w-[34.75rem]">
                            The 2024 State of Marketing & Trends Report: Data from 1400+ Global Marketers
                        </h1>
                        <div className="flex flex-row justify-between mt-[7.25rem]">
                            <span className="font-inter font-medium text-base">05 Sep 2024,
                                <span className="font-inter font-medium text-roooby-gray-300 text-base"> by Maxwell Iskiev</span>
                            </span>
                        </div>
                        <div className="border-t border-roooby-gray-300 h-[1px] mt-6"></div>
                    </div>
                    <Image
                        src="/assets/images/blogImages/service-image-1.png"
                        alt="service-image-1"
                        width={555}
                        height={370}
                    />
                </div>
                {articles.map((article, i) => (
                    <Article
                        key={i}
                        label={article.label}
                        imgSrc={article.imgSrc}
                        imgAlt={article.imgAlt}
                        header={article.header}
                        date={article.date}
                        author={article.author}
                        className="text-2xl leading-9 tracking-[-0.33px]"
                    />
                ))}
                <div className="flex flex-row container gap-x-8">
                    <Article
                        label="Marketing"
                        imgSrc="/assets/images/blogImages/marketing-image-1.png"
                        imgAlt="marketing-image-1"
                        imgWidth="555"
                        imgHeight="370"
                        header="Email marketing best practices: 10 experts share their email tips"
                        date="23 Nov 2023"
                        author="Joshua Nash"
                        className="text-3xl leading-10 tracking-[-0.44px] h-[5.25rem] max-w-[34.75rem]"
                    />
                    <div className="flex flex-col gap-y-12 pt-9 max-w-[34.75rem]">
                        <div className="flex flex-col">
                            <div className="border-t border-roooby-gray-300 h-[1px]"></div>
                            <h1 className="font-inter font-bold text-2xl leading-9 tracking-[-0.33px] mt-4">Access Roooby leads features on your mobile</h1>
                            <div className="flex flex-row justify-between mt-6">
                                <span className="font-inter font-medium text-base">11 Aug 2023,
                                    <span className="font-inter font-medium text-roooby-gray-300 text-base"> by Joshua Nash</span>
                                </span>
                                <span className="font-inter font-bold uppercase text-roooby-gray-300 text-sm tracking-[1.4px]">Product</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="border-t border-roooby-gray-300 h-[1px]"></div>
                            <h1 className="font-inter font-bold text-2xl leading-9 tracking-[-0.33px] mt-4">Sales presentations: templates, examples and ideas on how to present like a pro</h1>
                            <div className="flex flex-row justify-between mt-6">
                                <span className="font-inter font-medium text-base">11 Oct 2022,
                                    <span className="font-inter font-medium text-roooby-gray-300 text-base"> by Laura Ryan</span>
                                </span>
                                <span className="font-inter font-bold uppercase text-roooby-gray-300 text-sm tracking-[1.4px]">Sales</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="border-t border-roooby-gray-300 h-[1px]"></div>
                            <h1 className="font-inter font-bold text-2xl leading-9 tracking-[-0.33px] mt-4">How To Deliver a Successful Product Launch</h1>
                            <div className="flex flex-row justify-between mt-6">
                                <span className="font-inter font-medium text-base">30 Jan 2022,
                                    <span className="font-inter font-medium text-roooby-gray-300 text-base"> by Alice Washington</span>
                                </span>
                                <span className="font-inter font-bold uppercase text-roooby-gray-300 text-sm tracking-[1.4px]">News</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Article
                    label="Service"
                    imgSrc="/assets/images/blogImages/service-image-2.png"
                    imgAlt="service-image-2"
                    header="Sales Funnels: Definition, Process, Stages and Examples"
                    date="01 Dec 2022"
                    author="Edith Rose"
                    className="text-2xl leading-9 tracking-[-0.33px]"
                />
                <Article
                    label="Sales"
                    imgSrc="/assets/images/blogImages/sales-image-4.png"
                    imgAlt="sales-image-4"
                    header="What is a sales and how do you build one?"
                    date="29 Mar 2022"
                    author="Amanda Brooks"
                    className="text-2xl leading-9 tracking-[-0.33px]"
                />
                <Article
                    label="Service"
                    imgSrc="/assets/images/blogImages/service-image-3.png"
                    imgAlt="service-image-3"
                    header="10 real estate cold calling scripts to increase lead "
                    date="27 Dec 2022"
                    author="Roxie Sandoval"
                    className="text-2xl leading-9 tracking-[-0.33px]"
                />
            </div>
            <Cta />
        </main>
    );
}