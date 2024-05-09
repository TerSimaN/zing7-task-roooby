'use client';

import Article from "@/components/layout/Article";
import Cta from "@/components/layout/Cta";
import { getPhotos } from "@/lib/actions/photos";
import { getPosts } from "@/lib/actions/posts";
import { getUsers } from "@/lib/actions/users";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const tabs = [
    { name: 'All Articles' },
    { name: 'Sales' },
    { name: 'Marketing' },
    { name: 'Service' },
    { name: 'Product' },
    { name: 'News' }
]

const articles = [
    {
        label: 'News', imgSrc: '/assets/images/blogImages/news-image-1.svg', imgAlt: 'news-image-1',
        header: 'Learn from My Mistakes: 7 Digital Course Pitfalls to Skip', date: '29 Jun 2024', author: 'Joshua Nash'
    },
    {
        label: 'Sales', imgSrc: '/assets/images/blogImages/sales-image-1.svg', imgAlt: 'sales-image-1',
        header: 'How To Do Representation in Marketing the Right Way', date: '20 Mar 2022', author: 'Bill Holloway'
    },
    {
        label: 'Sales', imgSrc: '/assets/images/blogImages/sales-image-2.svg', imgAlt: 'sales-image-2',
        header: 'The Psychology of Short-Form Content: Why We Love...', date: '07 Jun 2024', author: 'Stephen Henderson'
    },
    {
        label: 'Sales', imgSrc: '/assets/images/blogImages/sales-image-3.svg', imgAlt: 'sales-image-3',
        header: 'The Challenger Sale model: How to lead the conversation', date: '09 Jan 2024', author: 'Joshua Nash'
    },
    {
        label: 'Product', imgSrc: '/assets/images/blogImages/product-image-1.svg', imgAlt: 'product-image-1',
        header: '3 ways To automate your lead generation process', date: '08 Jul 2024', author: 'Leroy Figueroa'
    },
    {
        label: 'Product', imgSrc: '/assets/images/blogImages/product-image-2.svg', imgAlt: 'product-image-2',
        header: 'Marketplace Monthly Apps Spotlight: Aug 2023', date: '05 Aug 2024', author: 'Joshua Nash'
    },
]

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

export default function Blog() {
    const [selected, setSelected] = useState(0);
    const [posts, setPosts] = useState([] as JsonPlaceholder.Post[]);
    const [photos, setPhotos] = useState([] as JsonPlaceholder.Photo[]);
    const [users, setUsers] = useState([] as  JsonPlaceholder.User[]);

    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data);
        });
        getPhotos().then((data) => {
            setPhotos(data);
        });
        getUsers().then((data) => {
            setUsers(data);
        });
    }, []);

    return (
        <main>
            <div className="bg-roooby-gray-100 sm:pt-[4.5rem] pt-9">
                <div className="flex flex-col container max-sm:px-4">
                    <h1 className="font-inter font-bold text-[4rem] leading-[4.75rem] tracking-[-0.89px] max-sm:text-center max-w-[40.75rem]">
                        News and insights <span className="font-inter font-bold text-roooby-gray-300 text-[4rem] leading-[4.75rem] tracking-[-0.89px] max-w-[40.75rem]">from our experts</span>
                    </h1>
                    <div className="flex flex-col sm:mt-[6.25rem] mt-12 max-w-[36.25rem]">
                        <ul className="flex flex-row max-sm:flex-wrap sm:justify-between items-center max-sm:gap-x-12 max-sm:gap-y-4">
                            {tabs.map((tab, i) => (
                                <div key={tab.name + i} className="flex flex-col items-center sm:gap-y-7 gap-y-3">
                                    <li key={i}
                                        className={`font-inter font-medium ${selected === i ? `` : `text-roooby-gray-400`} text-lg select-none`}
                                        onClick={() => setSelected(i)}
                                    >
                                        {tab.name}
                                    </li>
                                    <div className={`${selected === i ? `visible` : `invisible`} border-t-[3px] border-roooby-green-400 w-[86px] h-[3px]`}></div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex sm:flex-row flex-col flex-wrap container gap-x-3 sm:gap-y-[7.5rem] gap-y-14 max-sm:px-6 sm:pb-44 pb-20 sm:mt-[7.5rem] mt-14">
                <div className="flex sm:flex-row flex-col sm:gap-x-8 gap-y-8">
                    <div className="flex flex-col">
                        <div className="border-t border-roooby-gray-300 h-[1px]"></div>
                        <span className="font-inter font-bold uppercase text-roooby-gray-300 text-sm tracking-[1.4px] mt-6">Service</span>
                        <h1 className="font-inter font-bold text-[2.5rem] leading-[3rem] tracking-[-0.56px] mt-4 max-w-[34.75rem]">
                            <Link href={{
                                pathname: '/blog/Service',
                                query: {
                                    label: 'Service',
                                    header: 'The 2024 State of Marketing & Trends Report: Data from 1400+ Global Marketers',
                                    date: '05 Sep 2024',
                                    author: 'Maxwell Iskiev',
                                    imgSrc: '/assets/images/blogImages/service-image-1.svg'
                                }
                            }}>The 2024 State of Marketing & Trends Report: Data from 1400+ Global Marketers</Link>
                        </h1>
                        <div className="flex flex-row justify-between sm:mt-[7.25rem] mt-12">
                            <span className="font-inter font-medium text-base">05 Sep 2024,
                                <span className="font-inter font-medium text-roooby-gray-300 text-base"> by Maxwell Iskiev</span>
                            </span>
                        </div>
                        <div className="border-t border-roooby-gray-300 h-[1px] mt-6"></div>
                    </div>
                    <Image
                        src="/assets/images/blogImages/service-image-1.svg"
                        alt="service-image-1"
                        width={555}
                        height={370}
                    />
                </div>
                {posts.map((post, index) => {
                    const author = users.find((user) => user.id == post.userId);
                    const photo = photos?.[index];

                    return (
                        <Article
                            key={post.id}
                            postId={post.id}
                            label="Post"
                            imgSrc={photo?.thumbnailUrl}
                            imgAlt={photo?.title}
                            imgWidth="360"
                            imgHeight="360"
                            header={post.title}
                            text={post.body}
                            date="Date"
                            author={author?.name ?? 'Annonymous'}
                            className="text-2xl leading-9 tracking-[-0.33px]"
                        />
                    )
                })}
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
                <Article
                    label="Service"
                    imgSrc="/assets/images/blogImages/service-image-2.svg"
                    imgAlt="service-image-2"
                    header="Sales Funnels: Definition, Process, Stages and Examples"
                    date="01 Dec 2022"
                    author="Edith Rose"
                    className="text-2xl leading-9 tracking-[-0.33px]"
                />
                <Article
                    label="Sales"
                    imgSrc="/assets/images/blogImages/sales-image-4.svg"
                    imgAlt="sales-image-4"
                    header="What is a sales and how do you build one?"
                    date="29 Mar 2022"
                    author="Amanda Brooks"
                    className="text-2xl leading-9 tracking-[-0.33px]"
                />
                <Article
                    label="Service"
                    imgSrc="/assets/images/blogImages/service-image-3.svg"
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