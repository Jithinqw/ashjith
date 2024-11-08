import { Suspense, useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import Utils from "../../utils/utility";
import { useSearchParams } from "react-router-dom";
import { eInviteRecord, IInvite } from "../../utils/constants";
import { Modal } from "../../components/Modal/Modal";
import { cmsContent } from "../../cms";
import { Compliments } from "../../components/Compliments/Compliments";
import { Loader } from "../../components/Loader/Loader";

const OurStory = () => {
  const [searchParams] = useSearchParams();
  const [inviteRecord, setInviteRecord] = useState<IInvite>();
  const [isUserNotInvited, setUserNotInvited] = useState<boolean>(false);
  useEffect(() => {
    Utils.setPageTitle("Jithin & Ashley - Our Story");
  }, []);

  useEffect(() => {
    if (window && typeof window !== "undefined") {
      const d = searchParams.get("inviteRecord");
      const refJson = d ? d : "";
      window.localStorage.setItem("inviteHash", refJson);
    }
    Utils.redirectToPageIfInviteNotFound();
  }, []);

  useEffect(() => {
    const inviteRecordFromS = searchParams.get("inviteRecord");
    if (!Utils.isEmpty(inviteRecordFromS)) {
      setInviteRecord(Utils.getRecordByKeys(eInviteRecord, inviteRecordFromS));
    }
    if (
      !Utils.isEmptyobject(inviteRecord) &&
      inviteRecord?.isInviteSend === false
    ) {
      setUserNotInvited(true);
    } else if (Utils.isEmpty(inviteRecordFromS)) {
      setUserNotInvited(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inviteRecord]);

  const onGoHomeBtnClick = () => {
    window.location.href = window.location.origin + "/";
  };

  return (
    <>
      {isUserNotInvited && (
        <Modal
          events={{
            onClickGoHome: onGoHomeBtnClick,
          }}
        />
      )}
      {!isUserNotInvited && (
        <>
          <Header />
          <div>
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                  className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                      width="200"
                      height="200"
                      x="50%"
                      y="-1"
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                    <path
                      d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                      strokeWidth="0"
                    />
                  </svg>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth="0"
                    fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                  />
                </svg>
              </div>
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                  <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                      <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        {cmsContent.pages.ourstory.mainCta}
                      </h1>
                      <p className="mt-6 text-xl leading-8 text-gray-700">
                        {cmsContent.pages.ourstory.mainDescription}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                  <Suspense fallback={<Loader />}>
                    <img
                      className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                      src={Utils.getUrl(
                        cmsContent.pages.invite.InviteHeroSection.heroImage
                      )}
                      alt="hero image"
                    />
                  </Suspense>
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                  <div className="lg:pr-4">
                    <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                      <p>
                        {cmsContent.pages.ourstory.mainDescriptionLongText}
                      </p>
                      
                      <p className="mt-8">
                        {cmsContent.pages.ourstory.lowDeckDescriptionText}
                      </p>
                      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                        {cmsContent.pages.ourstory.inviteHeading}
                      </h2>
                      <p className="mt-6">
                        {cmsContent.pages.ourstory.inviteDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Compliments wishes={cmsContent.compliments} />
          </div>
        </>
      )}
    </>
  );
};

export default OurStory;
