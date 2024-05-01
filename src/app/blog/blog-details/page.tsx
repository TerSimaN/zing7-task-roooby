import Article from "@/components/layout/Article";
import Image from "next/image";
import { facebookLogo, linkedinLogo, twitterLogo } from "../../../../public/assets/logos";
import { insertLinkIcon } from "../../../../public/assets/icons";

export default function BlogDetails() {
    return (
        <main>
            <div className="bg-roooby-gray-100 pt-[4.5rem]">
                <div className="flex flex-col items-center gap-y-12 container">
                    <div className="flex flex-col max-w-[46.75rem]">
                        <span className="font-inter font-bold uppercase text-roooby-gray-300 text-sm tracking-[1.4px]">Sales</span>
                        <div className="border-t border-roooby-gray-300 mt-4 h-[1px]"></div>
                        <h1 className="font-inter font-bold text-5xl leading-[3.5rem] tracking-[-0.67px] mt-4">The Psychology of Short-Form Content: Why We Love Bite</h1>
                        <span className="font-inter font-medium text-base mt-6">05 Sep 2024, <span className="text-roooby-gray-300">by Joshua Nash</span></span>
                    </div>
                    <Image
                        src="/assets/images/blogImages/blogDetailsImages/blog-header-image.svg"
                        alt="blog-header-image"
                        width={945}
                        height={511}
                    />
                </div>
            </div>
            <div className="flex flex-col mx-auto mt-[6.25rem] max-w-[46.75rem]">
                <p className="font-inter font-medium text-2xl leading-9 tracking-[-0.33px]">
                    The Psychology of Short-Form Content: Why We Love Bite-Sized Videos.
                    The Psychology of Short-Form Content: Why We Love Bite-Sized Videos.
                    The Psychology of Short-Form Content: Why We Love Bite-Sized Videos
                </p>
                <div className="flex flex-col gap-y-4">
                    <h1 className="font-inter font-bold text-5xl tracking-[-0.67px] mt-10">What is a sales funnel?</h1>
                    <p className="font-inter font-normal text-lg leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        <br />
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>
                    <div className="flex flex-col">
                        <div className="border-t border-roooby-gray-300 h-[1px]"></div>
                        <p className="font-inter font-medium text-2xl leading-9 mt-6">
                            “At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident”
                        </p>
                        <span className="font-inter font-medium text-roooby-gray-300 text-base mt-8">Matthew Barker</span>
                        <div className="border-t border-roooby-gray-300 mt-6 h-[1px]"></div>
                    </div>
                </div>
                <Image
                    src="/assets/images/blogImages/blogDetailsImages/blog-content-image.png"
                    alt="blog-content-image"
                    width={748}
                    height={405}
                    className="mt-[4.5rem]"
                />
                <div className="flex flex-col gap-y-4 mt-[4.5rem]">
                    <h1 className="font-inter font-bold text-5xl tracking-[-0.67px]">What is a sales funnel?</h1>
                    <p className="font-inter font-normal text-lg leading-7">
                        In order to fully answer the question “What is a sales funnel?”, we need to tackle the different steps of the funnel.
                        While different organizations have their own ways of managing and naming the sales process and customer touchpoints,
                        these are usually structured into three distinct stages.
                    </p>
                </div>
                <div className="flex flex-col mt-[4.5rem]">
                    <h1 className="font-inter font-bold text-[2rem] leading-10 tracking-[-0.44px]">1. Top of the sales funnel: Awareness and discovery</h1>
                    <p className="font-inter font-normal text-lg leading-7 mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        <br />
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                        nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>
                    <div className="flex flex-col mt-4">
                        <div className="border-t border-roooby-gray-300 h-[1px]"></div>
                        <div className="flex flex-row items-center justify-between mt-6">
                            <div className="flex flex-row">
                                <Image
                                    src="/assets/images/blogImages/blogDetailsImages/shawOval.svg"
                                    alt="shaw oval"
                                    width={54}
                                    height={48}
                                />
                                <div className="flex flex-col gap-y-2 ml-5">
                                    <h1 className="font-inter font-bold text-base">Brandon Shaw</h1>
                                    <span className="font-inter font-normal text-roooby-gray-500 text-sm">Founder & CEO</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-x-4">
                                <Image
                                    src={facebookLogo}
                                    alt="Facebook"
                                    width={24}
                                    height={24}
                                />
                                <Image
                                    src={twitterLogo}
                                    alt="Twitter"
                                    width={24}
                                    height={24}
                                />
                                <Image
                                    src={linkedinLogo}
                                    alt="LinkedIn"
                                    width={24}
                                    height={24}
                                />
                                <Image
                                    src={insertLinkIcon}
                                    alt="insert link"
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                        <div className="border-t border-roooby-gray-300 mt-6 h-[1px]"></div>
                    </div>
                </div>
            </div>
            <div className="bg-roooby-gray-100 py-[7.5rem] mt-[11.25rem]">
                <div className="flex flex-col gap-y-[4.5rem] container">
                    <h1 className="font-inter font-bold text-[4rem] leading-[4.5rem] tracking-[-0.89px]">More from this topic</h1>
                    <div className="flex flex-row gap-x-7">
                        <Article
                            label="Sales"
                            header="The best cities for sales careers in 2022"
                            date="20 Mar 2023"
                            author="Bill Holloway"
                            imgSrc="/assets/images/blogImages/blogDetailsImages/blog-image-1.png"
                            imgAlt="blog-image-1"
                        />
                        <Article
                            label="Sales"
                            header="What is a sales Yoora and how do you build one?"
                            date="29 Mar 2023"
                            author="Amanda Brooks"
                            imgSrc="/assets/images/blogImages/blogDetailsImages/blog-image-2.png"
                            imgAlt="blog-image-2"
                        />
                        <Article
                            label="Service"
                            header="10 real estate cold calling scripts to increase"
                            date="27 Dec 2023"
                            author="Roxie Sandoval"
                            imgSrc="/assets/images/blogImages/blogDetailsImages/blog-image-3.png"
                            imgAlt="blog-image-3"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}