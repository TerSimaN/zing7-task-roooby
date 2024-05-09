import Article from "@/components/layout/Article";
import Image from "next/image";
import { facebookLogo, linkedinLogo, twitterLogo } from "../../../../public/assets/logos";
import { insertLinkIcon } from "../../../../public/assets/icons";
import { getPostById } from "@/lib/actions/posts";
import { getPhotoById } from "@/lib/actions/photos";
import { getUserByPostId } from "@/lib/actions/users";
import { getCommentByPostId } from "@/lib/actions/comments";

type Params = {
    params: {
        article: number
    },
    searchParams: {
        label: string,
        imgSrc: string,
        imgAlt: string,
        header: string,
        date: string,
        author: string
    }
}

export default async function BlogDetails(props: Params) {
    let post = await getPostById(props.params.article);
    let comments = await getCommentByPostId(props.params.article);
    let photo = await getPhotoById(post.id);
    let author = await getUserByPostId(post.userId);

    return (
        <main>
            <div className="bg-roooby-gray-100 sm:pt-[4.5rem] pt-9">
                <div className={`flex flex-col items-center sm:gap-y-12 gap-y-8 container max-sm:px-4 ${photo?.url === undefined ? `pb-8` : ``}`}>
                    <div className="flex flex-col max-w-[46.75rem]">
                        <span className="font-inter font-bold uppercase text-roooby-gray-300 text-sm tracking-[1.4px]">{props.searchParams.label ?? 'Post'}</span>
                        <div className="border-t border-roooby-gray-300 mt-4 h-[1px]"></div>
                        <h1 className="font-inter font-bold sm:text-5xl text-4xl leading-[3.5rem] tracking-[-0.67px] max-sm:text-center mt-4">{post?.title ?? props.searchParams.header}</h1>
                        <span className="font-inter font-medium text-base max-sm:text-center mt-6">{props.searchParams.date ?? 'Date'}, <span className="text-roooby-gray-300">by {author?.name ?? props.searchParams.author}</span></span>
                    </div>
                    <Image
                        src={`${photo?.url ?? props.searchParams.imgSrc}`}
                        alt={`${photo?.title ?? props.searchParams.imgAlt}`}
                        width={`${photo?.url !== undefined ? 600 : 945}`}
                        height={`${photo?.url !== undefined  ? 600 : 511}`}
                        className={`${photo?.url === undefined ? `hidden` : ``}`}
                    />
                </div>
            </div>
            <div className="flex flex-col max-sm:px-4 mx-auto sm:mt-[6.25rem] mt-12 max-w-[46.75rem]">
                <p className="font-inter font-medium text-2xl leading-9 tracking-[-0.33px]">{post?.body}</p>
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
                    src="/assets/images/blogImages/blogDetailsImages/blog-content-image.svg"
                    alt="blog-content-image"
                    width={748}
                    height={405}
                    className="sm:mt-[4.5rem] mt-9"
                />
                <div className="flex flex-col gap-y-4 sm:mt-[4.5rem] mt-9">
                    <h1 className="font-inter font-bold text-5xl tracking-[-0.67px]">What is a sales funnel?</h1>
                    <p className="font-inter font-normal text-lg leading-7">
                        In order to fully answer the question “What is a sales funnel?”, we need to tackle the different steps of the funnel.
                        While different organizations have their own ways of managing and naming the sales process and customer touchpoints,
                        these are usually structured into three distinct stages.
                    </p>
                </div>
                <div className="flex flex-col sm:mt-[4.5rem] mt-10">
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
                                    src={`${photo?.url ?? '/assets/images/blogImages/blogDetailsImages/shawOval.svg'}`}
                                    alt={`${photo?.title ?? 'shaw oval'}`}
                                    width={54}
                                    height={48}
                                />
                                <div className="flex flex-col gap-y-2 ml-5">
                                    <h1 className="font-inter font-bold text-base">{author?.name ?? 'Brandon Shaw'}</h1>
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
                <h1 className="font-inter font-bold text-xl leading-9 tracking-[-0.33px] mt-4">Comments: <br /></h1>
                <div className="flex flex-col gap-6">
                    {comments?.map((comment) => (
                        <p key={comment.id} className="flex flex-col font-inter font-normal text-md leading-6 tracking-[-0.33px]">
                            <span className="font-medium text-lg">{comment.name}:</span>{comment.body}
                        </p>
                    ))}
                </div>
            </div>
            <div className="bg-roooby-gray-100 max-sm:px-4 sm:py-[7.5rem] py-14 sm:mt-[11.25rem] mt-20">
                <div className="flex flex-col gap-y-[4.5rem] container">
                    <h1 className="font-inter font-bold sm:text-[4rem] text-6xl leading-[4.5rem] tracking-[-0.89px] max-sm:text-center">More from this topic</h1>
                    <div className="flex sm:flex-row flex-col items-center sm:gap-x-7 gap-y-7">
                        <Article
                            label="Sales"
                            header="The best cities for sales careers in 2022"
                            date="20 Mar 2023"
                            author="Bill Holloway"
                            imgSrc="/assets/images/blogImages/blogDetailsImages/blog-image-1.svg"
                            imgAlt="blog-image-1"
                        />
                        <Article
                            label="Sales"
                            header="What is a sales Yoora and how do you build one?"
                            date="29 Mar 2023"
                            author="Amanda Brooks"
                            imgSrc="/assets/images/blogImages/blogDetailsImages/blog-image-2.svg"
                            imgAlt="blog-image-2"
                        />
                        <Article
                            label="Service"
                            header="10 real estate cold calling scripts to increase"
                            date="27 Dec 2023"
                            author="Roxie Sandoval"
                            imgSrc="/assets/images/blogImages/blogDetailsImages/blog-image-3.svg"
                            imgAlt="blog-image-3"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}