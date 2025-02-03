import { Suspense } from "react";
import { cmsContent } from "../../cms";
import Utils from "../../utils/utility";
import { alphaTestFlag } from "../../utils/constants";
import { DateAnnocement } from "../DateAnnoncement/DateAnnocement";
import { Loader } from "../Loader/Loader";

export const InviteHero = () => {
  const isDateAnnoncementEnabled =
    alphaTestFlag["date-annocement-animation"] === true;

  const launchGoogleMaps = (val: string) => {
    window.open(val, "_blank")?.focus();
  };

  return (
    <div className="overflow-hidden bg-white py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {cmsContent.pages.home.annoncementHeroText}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {cmsContent.pages.home.annoncementHeroDescription}
              </p>
              {!isDateAnnoncementEnabled && (
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {cmsContent.pages.home.bullets.map((e, i) => {
                    return (
                      <div className="relative pl-9" key={i}>
                        <dt className="inline font-semibold text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 0 1-.82-1.256A8 8 0 0 1 18 9a22.47 22.47 0 0 1-1.228 7.351.75.75 0 1 1-1.417-.49A20.97 20.97 0 0 0 16.5 9 6.5 6.5 0 0 0 10 2.5ZM4.333 4.416a.75.75 0 0 1 .218 1.038A6.466 6.466 0 0 0 3.5 9a7.966 7.966 0 0 1-1.293 4.362.75.75 0 0 1-1.257-.819A6.466 6.466 0 0 0 2 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 0 1 1.038-.219ZM10 6.12a3 3 0 0 0-3.001 3.041 11.455 11.455 0 0 1-2.697 7.24.75.75 0 0 1-1.148-.965A9.957 9.957 0 0 0 5.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 0 1 8.996.084V9.15l-.005.297a.75.75 0 1 1-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 0 0-3-2.965Zm0 2.13a.75.75 0 0 1 .75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 1 1-1.186-.918A13.687 13.687 0 0 0 9.25 9a.75.75 0 0 1 .75-.75Zm3.529 3.698a.75.75 0 0 1 .584.885 18.883 18.883 0 0 1-2.257 5.84.75.75 0 1 1-1.29-.764 17.386 17.386 0 0 0 2.078-5.377.75.75 0 0 1 .885-.584Z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          {e.shortDesc}
                        </dt>
                        <dd className="inline">{e.longDesc}</dd>
                      </div>
                    );
                  })}
                </dl>
              )}
              {isDateAnnoncementEnabled && (
                <div className="relative">
                  <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
                  <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
                  <div className="absolute -bottom-42 left-12 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
                  {cmsContent.pages.home.dateAnnocementFeed &&
                    cmsContent.pages.home.dateAnnocementFeed.length > 0 &&
                    cmsContent.pages.home.dateAnnocementFeed.map((e, i) => {
                      return (
                        <DateAnnocement
                          key={i}
                          longDesc={e?.longDesc}
                          shortText={e?.shortText}
                          type={e?.type}
                          onClick={() =>
                            launchGoogleMaps(e.value ? e.value : "")
                          }
                          value={e?.value}
                        />
                      );
                    })}
                </div>
              )}
            </div>
          </div>
          <Suspense fallback={<Loader />}>
            <img
              src={Utils.getUrl(
                cmsContent.pages.invite.InviteHeroSection.heroImage
              )}
              alt={cmsContent.pages.invite.InviteHeroSection.heroImageAlt}
              className="w-[32rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width="1432"
              height="7442"
              loading="lazy"
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
