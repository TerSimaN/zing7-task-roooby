import Article from "@/components/layout/Article";
import Cta from "@/components/layout/Cta";

export default function Blog() {
    return (
        <main className="col-span-12">
            <div className="flex flex-row flex-wrap gap-x-7 gap-y-[7.5rem] bg-white pb-44 mx-auto mt-[7.5rem] max-w-[71.25rem]">
                <Article
                    label="News"
                    imgSrc=""
                    imgAlt=""
                    header="Learn from My Mistakes: 7 Digital Course Pitfalls to Skip"
                    date="29 Jun 2024"
                    author="Joshua Nash"
                />
                <Article
                    label="Sales"
                    imgSrc=""
                    imgAlt=""
                    header="How To Do Representation in Marketing the Right Way"
                    date="20 Mar 2022"
                    author="Bill Holloway"
                />
                <Article
                    label="Sales"
                    imgSrc=""
                    imgAlt=""
                    header="The Psychology of Short-Form Content: Why We Love..."
                    date="07 Jun 2024"
                    author="Stephen Henderson"
                />
                <Article
                    label="Sales"
                    imgSrc=""
                    imgAlt=""
                    header="The Challenger Sale model: How to lead the conversation"
                    date="09 Jan 2024"
                    author="Joshua Nash"
                />
                <Article
                    label="Product"
                    imgSrc=""
                    imgAlt=""
                    header="3 ways To automate your lead generation process"
                    date="08 Jul 2024"
                    author="Leroy Figueroa"
                />
                <Article
                    label="Product"
                    imgSrc=""
                    imgAlt=""
                    header="Marketplace Monthly Apps Spotlight: Aug 2023"
                    date="05 Aug 2024"
                    author="Joshua Nash"
                />
                <div className="flex flex-row gap-x-8">
                    <Article
                        label="Marketing"
                        imgSrc=""
                        imgAlt=""
                        header="Email marketing best practices: 10 experts share their email tips"
                        textSize="2rem"
                        lineHeight="42px"
                        letterSpacing="-0.44px"
                        date="23 Nov 2023"
                        author="Joshua Nash"
                        width="34.75rem"
                    />
                    <div className="flex flex-col gap-y-12">
                        <Article />
                        <Article />
                        <Article />
                    </div>
                </div>
                <Article
                    label="Service"
                    imgSrc=""
                    imgAlt=""
                    header="Sales Funnels: Definition, Process, Stages and Examples"
                    date="01 Dec 2022"
                    author="Edith Rose"
                />
                <Article
                    label="Sales"
                    imgSrc=""
                    imgAlt=""
                    header="What is a sales and how do you build one?"
                    date="29 Mar 2022"
                    author="Amanda Brooks"
                />
                <Article
                    label="Service"
                    imgSrc=""
                    imgAlt=""
                    header="10 real estate cold calling scripts to increase lead "
                    date="27 Dec 2022"
                    author="Roxie Sandoval"
                />
            </div>
            <Cta />
        </main>
    );
}