import { InstagramHead } from "./head/InstagramHead";
import { InstagramStory } from "./story/InstagramStory";
import { OlderPostHead } from "./olderPostHead/OlderPostHead";
import { InstagramPost } from "./posts/InstagramPost";
import { cmsContent } from "../../cms";
import { useEffect, useState } from "react";
import { Reels } from "./reels/Reels";
export const Instagram = () => {
  const instagramMainFeed = cmsContent.pages.invite.instagramFeed.mainFeed;

  const [openReelWindow, setOpenReelWindow] = useState<boolean>(false);
  const [mainWindowClass, setMainWindowClass] = useState<string>(
    "relative h-[700px] w-[350px] bg-white rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black overflow-y-auto"
  );
  const onUserReelClick = (userName: string, reelId: string) => {
    setOpenReelWindow(true);
  };

  const onUserReelsClose = () => {
    setOpenReelWindow(false);
  };

  useEffect(() => {
    if (openReelWindow) {
      setMainWindowClass(
        "relative h-[700px] w-[350px] bg-white rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black overflow-hidden"
      );
    }
  }, [openReelWindow]);

  return (
    <>
      <div className="flex justify-center items-center px-10">
        {/* full app */}
        <div className={mainWindowClass}>
          <div className="absolute top-0 inset-x-0 ">
            <div className="h-6 w-40 mx-auto bg-black rounded-b-3xl"></div>
          </div>
          {/* Open Reels window */}
          {openReelWindow && <Reels onClick={onUserReelsClose} />}
          {/* App Bar */}
          <div className="relative">
            <div className="mt-2 mr-5 flex justify-end space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"
                />
              </svg>
            </div>
            <div className="h-0.5 w-10 bg-black mr-7 ml-auto mt-1.5 rounded"></div>
          </div>
          {/* Instagram Head */}
          <InstagramHead />
          {/* Instagram Stories */}
          <InstagramStory
            reelList={cmsContent.pages.invite.instagramFeed.reelsFeed}
            onClick={onUserReelClick}
          />
          {/* Older posts label */}
          <OlderPostHead />
          {/* Posts */}
          {instagramMainFeed &&
            instagramMainFeed.length > 0 &&
            instagramMainFeed.map((e, i) => {
              return (
                <div key={i}>
                  <InstagramPost post={e} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
