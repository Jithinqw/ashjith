import { Suspense, useEffect, useState } from "react";
import { cmsContent } from "../../cms";
import { Header } from "../../components/Header/Header";
import Utils from "../../utils/utility";
import { Loader } from "../../components/Loader/Loader";
import { Footer } from "../../components/Footer/Footer";

const About = () => {
  const [cta, setCta] = useState<string>(cmsContent.pages.about.tentativeCta);
  useEffect(() => {
    calculateCta();
    Utils.setPageTitle("Jithin & Ashley - About");
    Utils.redirectToPageIfInviteNotFound();
  }, []);

  const calculateCta = () => {
    const currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    if (year === 2025 && month === 2) {
      setCta(cmsContent.pages.about.jobCta);
    } else if (year === 2025 && month === 1 && day > 28) {
      setCta(cmsContent.pages.about.engagedCta);
    }
  };

  return (
    <>
      <Header />
      {/* Name and details */}
      <div className="lg:mt-18 text-base pt-4 wrapper overflow-hidden">
        <section className="px-6 xl-px-2">
          <h1 className="mt-8 text-5xl md:text-7xl lg:text-9xl font-bold leading-relaxed">
            {cmsContent.pages.about.nameCta}
            <span className="text-purple-400">.</span>
          </h1>
          <p className="mt-2">
            <strong className="text-purple-400 text-3xl md:text-6xl font-semibold">
              {cta}
              <span className="text-black">.</span>
            </strong>
          </p>
        </section>
        {/* Links section */}
        <div className="flex items-center hidden md:block lg:block py-2">
          {cmsContent.pages.about &&
            cmsContent.pages.about.aboutOwner.map((e, i) => {
              return (
                <a className="mb-2 ml-6 mt-2" href={e.link} key={i}>
                  <span className="inline-block skuMorphic py-2 px-8">
                    {e.displayName}
                  </span>
                </a>
              );
            })}
        </div>
      </div>
      {/* Made with */}
      <div className="bg-white py-24 sm:py-32 mb-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900" key="2">
            {cmsContent.pages.about.madeWith.mainCta}
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {cmsContent.pages.about &&
              cmsContent.pages.about.madeWith.techStack.map((e, i) => {
                return (
                  <Suspense fallback={<Loader />}>
                    <img
                      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:animate-spin"
                      src={e.url}
                      alt={e.alt}
                      width="158"
                      height="48"
                      key={i}
                    />
                  </Suspense>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
