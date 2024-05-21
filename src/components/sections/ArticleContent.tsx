import Image from "next/image"
import { insertLinkIcon } from "../../../public/assets/icons"
import LinkedInIcon from "../ui/LinkedInIcon"
import TwitterIcon from "../ui/TwitterIcon"
import FacebookIcon from "../ui/FacebookIcon"
import Link from "next/link"

type Props = {
    post: JsonPlaceholder.Post,
    comments: JsonPlaceholder.Comment[],
    photo: JsonPlaceholder.Photo,
    author: JsonPlaceholder.User,
    isVisible: boolean
}

const ArticleContent = (props: Props) => {
    return (
        <div className="flex flex-col sm:px-8 lg:px-0 px-4 mx-auto lg:mt-[6.25rem] mt-12 max-w-[46.75rem]">
            <p className={`${props.isVisible ? `` : `hidden`} font-inter font-medium text-2xl leading-9 tracking-[-0.33px]`}>{props.post?.body}</p>
            <div className={`flex flex-col gap-y-4 ${props.isVisible ? `mt-10` : `sm:mt-10 mt-0`}`}>
                <h1 className="font-inter font-bold sm:text-5xl text-4xl tracking-[-0.67px]">What is a sales funnel?</h1>
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
                    <p className="border-t border-roooby-gray-300 font-inter font-medium text-2xl leading-9 pt-6">
                        “At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident”
                    </p>
                    <span className="border-b border-roooby-gray-300 font-inter font-medium text-roooby-gray-300 text-base pb-6 mt-8">
                        Matthew Barker
                    </span>
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
                <h1 className="font-inter font-bold sm:text-5xl text-4xl tracking-[-0.67px]">What is a sales funnel?</h1>
                <p className="font-inter font-normal text-lg leading-7">
                    In order to fully answer the question “What is a sales funnel?”, we need to tackle the different steps of the funnel.
                    While different organizations have their own ways of managing and naming the sales process and customer touchpoints,
                    these are usually structured into three distinct stages.
                </p>
            </div>
            <div className="flex flex-col sm:mt-[4.5rem] mt-10">
                <h1 className="font-inter font-bold sm:text-[2rem] text-2xl leading-10 tracking-[-0.44px]">1. Top of the sales funnel: Awareness and discovery</h1>
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
                    <div className="flex sm:flex-row flex-col sm:items-center justify-between sm:gap-y-0 gap-y-6 border-y border-roooby-gray-300 sm:py-6 py-4">
                        <div className="flex flex-row">
                            <Image
                                src={`${props.photo?.url ?? '/assets/images/blogImages/blogDetailsImages/shawOval.svg'}`}
                                alt={`${props.photo?.title ?? 'shaw oval'}`}
                                width={54}
                                height={48}
                            />
                            <div className="flex flex-col gap-y-2 ml-5">
                                <h1 className="font-inter font-bold text-base">{props.author?.name ?? 'Brandon Shaw'}</h1>
                                <span className="font-inter font-normal text-roooby-gray-500 text-sm">Founder & CEO</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-4">
                            <FacebookIcon />
                            <TwitterIcon />
                            <LinkedInIcon />
                            <Link href={'#'}>
                                <Image
                                    src={insertLinkIcon}
                                    alt="insert link"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${props.isVisible ? `` : `hidden`}`}>
                <h1 className="font-inter font-bold text-xl leading-9 tracking-[-0.33px] mt-4">Comments:<br /></h1>
                <div className="flex flex-col gap-6">
                    {props.comments?.map((comment) => (
                        <p key={comment.id} className="flex flex-col font-inter font-normal text-md leading-6 tracking-[-0.33px]">
                            <span className="font-medium text-lg">{comment.name}:</span>{comment.body}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArticleContent