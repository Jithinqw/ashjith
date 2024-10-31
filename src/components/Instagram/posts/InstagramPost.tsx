import { Suspense } from "react";
import { StackedInstagramImage } from "../stackedImage/StackedImage";
import { Loader } from "../../Loader/Loader";

export interface ILikes {
  userImage: string;
  userName: string;
}

export interface IPost {
  userName: string;
  userImage: string;
  userSubText?: string;
  postImage: string;
  postDescription: string;
  likes: Array<ILikes>;
  appPostedDate: string;
}

export interface IInstagramPost {
  post: IPost;
}

export const InstagramPost = (props: IInstagramPost) => {
  return (
    <div>
      {/* Post Bar */}
      <div className="flex justify-between mt-4 ml-1 h-10 shadow-xl">
        <div className="justify-start">
          <div className="flex flex-row">
            <Suspense fallback={<Loader />}>
              <img
                src={props.post.userImage}
                className="rounded-full h-8 w-8"
              />
            </Suspense>
            <div className="flex flex-col ml-1">
              <span className="text-sm">{props.post.userName}</span>
              <span className="suggestedText">{props.post.userSubText}</span>
            </div>
          </div>
        </div>
        <div className="justify-end">
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-indigo-700/10 cursor-pointer">
            Follow
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 inline-flex ml-2 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>
      {/* Post body */}
      <div>
        <Suspense fallback={<Loader />}>
          <img src={props.post.postImage} />
        </Suspense>
      </div>
      {/* Post actions bar */}
      <div className="flex justify-between mt-2 ml-2">
        <div className="justify-start">
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </div>
        </div>
        <div className="justify-end mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </div>
      </div>
      {/* Post Like Bar */}
      <div className="flex flex-row mt-2 ml-2">
        <StackedInstagramImage />
        <span className="postDescriptionText mr-1 font-semibold">{`${props?.post?.likes?.[0]?.userName}`}</span>
        <span className="postDescriptionText">and</span>
        <span className="postDescriptionText ml-1">{`${props?.post?.likes.length}`}</span>
        <span className="postDescriptionText font-semibold ml-1">others</span>
      </div>

      {/* Post description */}
      <div className="flex flex-row ml-2">
        <div>
          <span className="font-sm font-semibold">{props.post.userName}</span>
        </div>
        <span className="ml-1 postDescriptionText">
          {props.post.postDescription}
        </span>
      </div>
      {/* Post date */}
      <div className="flex ml-2">
        <span className="suggestedText text-grey-200">
          {props.post.appPostedDate}
        </span>
      </div>
    </div>
  );
};
