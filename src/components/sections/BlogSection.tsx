import Link from "next/link"
import Article from "../layout/Article"

const moreArticles = [
    {
        label: 'Product', header: 'Access Roooby leads features on your mobile',
        date: '11 Aug 2023', author: 'Joshua Nash'
    },
    {
        label: 'Sales', header: 'Sales presentations: templates, examples and ideas on how to present like a pro',
        date: '11 Oct 2022', author: 'Laura Ryan'
    },
    {
        label: 'News', header: 'How To Deliver a Successful Product Launch',
        date: '30 Jan 2022', author: 'Alice Washington'
    },
]

const BlogSection = () => {
    return (
        <div className="flex sm:flex-row flex-col container gap-x-8">
            <Article
                label="Marketing"
                imgSrc="/assets/images/blogImages/marketing-image-1.svg"
                imgAlt="marketing-image-1"
                imgWidth="555"
                imgHeight="370"
                header="Email marketing best practices: 10 experts share their email tips"
                date="23 Nov 2023"
                author="Joshua Nash"
                className="text-3xl leading-10 tracking-[-0.44px] max-sm:mb-8 max-w-[34.75rem] h-[5.25rem]"
            />
            <div className="flex flex-col sm:gap-y-12 gap-y-8 pt-9 max-w-[34.75rem]">
                {moreArticles.map((article, i) => (
                    <div key={i} className="flex flex-col">
                        <div className="border-t border-roooby-gray-300 h-[1px]"></div>
                        <h1 className="font-inter font-bold text-2xl leading-9 tracking-[-0.33px] mt-4 sm:pr-16">
                            <Link href={{
                                pathname: `/blog/${article.label}`,
                                query: {
                                    label: `${article.label}`,
                                    header: `${article.header}`,
                                    date: `${article.date}`,
                                    author: `${article.author}`
                                }
                            }}>{article.header}</Link>
                        </h1>
                        <div className="flex flex-row justify-between mt-6">
                            <span className="font-inter font-medium text-base">{article.date},
                                <span className="font-inter font-medium text-roooby-gray-300 text-base"> by {article.author}</span>
                            </span>
                            <span className="font-inter font-bold uppercase text-roooby-gray-300 text-sm tracking-[1.4px]">{article.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogSection