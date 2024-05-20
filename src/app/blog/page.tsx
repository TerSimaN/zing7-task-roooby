'use client';

import Article from "@/components/layout/Article";
import BlogSection from "@/components/sections/BlogSection";
import Cta from "@/components/sections/Cta";
import { date } from "@/config/constants";
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

export default function Blog() {
    const [selected, setSelected] = useState(0);
    const [posts, setPosts] = useState([] as JsonPlaceholder.Post[]);
    const [photos, setPhotos] = useState([] as JsonPlaceholder.Photo[]);
    const [users, setUsers] = useState([] as JsonPlaceholder.User[]);

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
            <div className="bg-roooby-gray-100 lg:px-0 px-4 xl:pt-[4.5rem] pt-9">
                <div className="container flex flex-col max-xl:items-center">
                    <h1 className="font-inter font-bold text-[4rem] leading-[4.75rem] tracking-[-0.89px] max-xl:text-center max-w-[40.75rem]">
                        News and insights <span className="font-inter font-bold text-roooby-gray-300 text-[4rem] leading-[4.75rem] tracking-[-0.89px]">from our experts</span>
                    </h1>
                    <div className="max-sm:hidden">
                        <ul className="flex flex-row items-center justify-between xl:gap-x-0 gap-x-8 mt-[6.25rem] max-w-[36.25rem]">
                            {tabs.map((tab, i) => (
                                <li key={i}
                                    className={`border-b-[3px] font-inter font-medium ${selected === i ? `border-roooby-green-400` : `border-transparent text-roooby-gray-400`} text-lg pb-7 cursor-pointer select-none`}
                                    onClick={() => setSelected(i)}
                                >
                                    {tab.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="sm:hidden mt-12 mb-6 w-full max-w-sm">
                        <select className="rounded-md bg-white font-inter font-medium text-lg select-none pl-3 pr-10 py-2 w-full" name="lang">
                            {tabs.map((tab, i) => (
                                <option key={i} value={tab.name}>{tab.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col max-lg:items-center sm:gap-y-20 xl:gap-y-[7.5rem] gap-y-14 sm:px-2.5 md:px-12 lg:px-8 xl:px-0 px-6 sm:pb-44 pb-20 sm:mt-16 xl:mt-[7.5rem] mt-14">
                <div className="relative flex lg:flex-row flex-col gap-x-8 gap-y-6">
                    <div className="flex flex-col max-w-fit">
                        <span className="border-t border-roooby-gray-300 font-inter font-bold uppercase text-roooby-gray-300 text-sm tracking-[1.4px] pt-6">Service</span>
                        <h1 className="font-inter font-bold xl:text-[2.5rem] text-4xl leading-[3rem] tracking-[-0.56px] mt-4 max-w-[34.75rem]">
                            <Link href={{
                                pathname: '/blog/Service',
                                query: {
                                    label: 'Service',
                                    header: 'The 2024 State of Marketing & Trends Report: Data from 1400+ Global Marketers',
                                    date: '05 Sep 2024',
                                    author: 'Maxwell Iskiev',
                                    imgSrc: '/assets/images/blogImages/service-image-1.svg',
                                    imgAlt: 'service-image-1'
                                }
                            }}>
                                <span className="absolute inset-0"></span>
                                The 2024 State of Marketing & Trends Report: Data from 1400+ Global Marketers
                            </Link>
                        </h1>
                        <div className="flex flex-row justify-between border-b border-roooby-gray-300 pb-5 sm:mt-14 md:mt-16 lg:mt-[4.5rem] xl:mt-[7.5rem] mt-12">
                            <span className="font-inter font-medium text-base">05 Sep 2024,
                                <span className="font-inter font-medium text-roooby-gray-300 text-base"> by Maxwell Iskiev</span>
                            </span>
                        </div>
                    </div>
                    <Image
                        src="/assets/images/blogImages/service-image-1.svg"
                        alt="service-image-1"
                        width={555}
                        height={370}
                    />
                </div>
                <div className="flex sm:flex-row flex-col flex-wrap max-sm:items-center lg:justify-normal justify-between lg:gap-x-7 sm:gap-y-[7.5rem] gap-y-14 md:px-5 lg:px-0">
                    {posts.map((post, index) => {
                        const author = users.find((user) => user.id == post.userId);
                        const photo = photos?.[index];

                        return (
                            <Article
                                key={post.id}
                                postId={post.id}
                                articleAtr={{
                                    label: "Post",
                                    imgSrc: photo?.thumbnailUrl,
                                    imgAlt: photo?.title,
                                    imgWidth: 360,
                                    imgHeight: 360,
                                    header: post.title,
                                    date: date,
                                    author: (author?.name ?? 'Annonymous')
                                }}
                                text={post.body}
                                classNameAtr={{ headingAtr: "text-2xl leading-9 tracking-[-0.33px]" }}
                            />
                        )
                    })}
                    {articles.map((article, i) => (
                        <Article
                            key={i}
                            articleAtr={{
                                label: article.label,
                                imgSrc: article.imgSrc,
                                imgAlt: article.imgAlt,
                                header: article.header,
                                date: article.date,
                                author: article.author
                            }}
                            classNameAtr={{ headingAtr: "text-2xl leading-9 tracking-[-0.33px]" }}
                        />
                    ))}
                    <BlogSection />
                    <Article
                        articleAtr={{
                            label: "Service",
                            imgSrc: "/assets/images/blogImages/service-image-2.svg",
                            imgAlt: "service-image-2",
                            header: "Sales Funnels: Definition, Process, Stages and Examples",
                            date: "01 Dec 2022",
                            author: "Edith Rose"
                        }}
                        classNameAtr={{ headingAtr: "text-2xl leading-9 tracking-[-0.33px]" }}
                    />
                    <Article
                        articleAtr={{
                            label: "Sales",
                            imgSrc: "/assets/images/blogImages/sales-image-4.svg",
                            imgAlt: "sales-image-4",
                            header: "What is a sales and how do you build one?",
                            date: "29 Mar 2022",
                            author: "Amanda Brooks"
                        }}
                        classNameAtr={{ headingAtr: "text-2xl leading-9 tracking-[-0.33px]" }}
                    />
                    <Article
                        articleAtr={{
                            label: "Service",
                            imgSrc: "/assets/images/blogImages/service-image-3.svg",
                            imgAlt: "service-image-3",
                            header: "10 real estate cold calling scripts to increase lead ",
                            date: "27 Dec 2022",
                            author: "Roxie Sandoval"
                        }}
                        classNameAtr={{ headingAtr: "text-2xl leading-9 tracking-[-0.33px]" }}
                    />
                </div>
            </div>
            <Cta />
        </main>
    );
}