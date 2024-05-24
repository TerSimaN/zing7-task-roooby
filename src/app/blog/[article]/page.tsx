import Article from "@/components/layout/Article";
import Image from "next/image";
import { getPostById } from "@/lib/actions/posts";
import { getPhotoById } from "@/lib/actions/photos";
import { getUserByPostId } from "@/lib/actions/users";
import { getCommentByPostId } from "@/lib/actions/comments";
import { date } from "@/config/constants";
import ArticleContent from "@/components/sections/ArticleContent";

type Params = {
    params: {
        article: string
    },
    searchParams: {
        label: string,
        header: string,
        date: string,
        author: string,
        imgSrc: string,
        imgAlt: string
    }
}

export default async function BlogDetails(props: Params) {
    let id: number = Number.parseInt(props.params.article, 10);
    let isVisible: boolean = false;

    if (id) {
        isVisible = true;
    }

    let post = await getPostById(id);
    let comments = await getCommentByPostId(id);
    let photo = await getPhotoById(post.id);
    let author = await getUserByPostId(post.userId);

    return (
        <main>
            <div className="bg-roooby-gray-100 sm:pt-[4.5rem] pt-9">
                <div className='flex flex-col items-center sm:gap-y-12 gap-y-8 container sm:px-8 lg:px-0 px-4'>
                    <div className="flex flex-col max-w-[46.75rem]">
                        <span className="border-b border-roooby-gray-300 font-inter font-bold uppercase text-roooby-gray-300 text-sm tracking-[1.4px] pb-4">
                            {props.searchParams.label ?? 'Post'}
                        </span>
                        <h1 className="font-inter font-bold sm:text-5xl text-4xl leading-[3.5rem] tracking-[-0.67px] max-sm:text-center mt-4">
                            {post?.title ?? props.searchParams.header}
                        </h1>
                        <span className="font-inter font-medium text-base max-sm:text-center mt-6">
                            {props.searchParams.date ?? date}, <span className="text-roooby-gray-300">by {author?.name ?? props.searchParams.author}</span>
                        </span>
                    </div>
                    <Image
                        src={`${photo?.url ?? props.searchParams.imgSrc ?? '/'}`}
                        alt={`${photo?.title ?? props.searchParams.imgAlt ?? 'image alt not found'}`}
                        width={945}
                        height={511}
                        className={`${isVisible || (props.searchParams.imgSrc !== undefined) ? `` : `hidden`} object-cover w-[59rem] h-[32rem]`}
                    />
                </div>
            </div>
            <ArticleContent isVisible={isVisible} post={post} comments={comments} photo={photo} author={author} />
            <div className="bg-roooby-gray-100 lg:px-8 xl:px-0 px-4 lg:py-[7.5rem] py-14 lg:mt-[11.25rem] mt-20">
                <div className="container flex flex-col sm:gap-y-[4.5rem] gap-y-9">
                    <h1 className="font-inter font-bold sm:text-[4rem] text-5xl sm:leading-[4.5rem] tracking-[-0.89px] max-lg:text-center">More from this topic</h1>
                    <div className="flex sm:flex-row flex-col lg:justify-normal sm:justify-center max-sm:items-center lg:gap-x-5 xl:gap-x-7 gap-x-3 gap-y-7">
                        <Article
                            articleAtr={{
                                label: "Sales",
                                imgSrc: "/assets/images/blogImages/blogDetailsImages/blog-image-1.svg",
                                imgAlt: "blog-image-1",
                                header: "The best cities for sales careers in 2022",
                                date: "20 Mar 2023",
                                author: "Bill Holloway"
                            }}
                            classNameAtr={{articleMaxWidth: "sm:max-md:max-w-52 md:max-lg:max-w-60 lg:max-xl:max-w-80 max-w-[22.5rem]"}}
                        />
                        <Article
                            articleAtr={{
                                label: "Sales",
                                imgSrc: "/assets/images/blogImages/blogDetailsImages/blog-image-2.svg",
                                imgAlt: "blog-image-2",
                                header: "What is a sales Yoora and how do you build one?",
                                date: "29 Mar 2023",
                                author: "Amanda Brooks"
                            }}
                            classNameAtr={{articleMaxWidth: "sm:max-md:max-w-52 md:max-lg:max-w-60 lg:max-xl:max-w-80 max-w-[22.5rem]"}}
                        />
                        <Article
                            articleAtr={{
                                label: "Service",
                                imgSrc: "/assets/images/blogImages/blogDetailsImages/blog-image-3.svg",
                                imgAlt: "blog-image-3",
                                header: "10 real estate cold calling scripts to increase",
                                date: "27 Dec 2023",
                                author: "Roxie Sandoval"
                            }}
                            classNameAtr={{articleMaxWidth: "sm:max-md:max-w-52 md:max-lg:max-w-60 lg:max-xl:max-w-80 max-w-[22.5rem]"}}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}