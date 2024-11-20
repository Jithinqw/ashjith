import { useEffect } from "react";
import { cmsContent } from "../../cms";
import Utils from "../../utils/utility";
import { Footer } from "../../components/Footer/Footer";

const DigitalRights = () => {
  useEffect(() => {
    Utils.setPageTitle("Terms & Privacy Policy | AshJith");
  }, []);

  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          {cmsContent.pages.drm.mainCta}
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <p className="mt-4 text-base leading-7 text-slate-600">
          {cmsContent.pages.drm.lastUpdatedOn}
        </p>
      </div>
      <div className="mx-auto max-w-[40rem] prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600 px-4">
        <p>{cmsContent.pages.drm.mainDec}</p>
        {cmsContent.pages.drm.terms &&
          cmsContent.pages.drm.terms.length > 0 &&
          cmsContent.pages.drm.terms.map((e, i) => {
            return (
              <div key={i} className="last:mb-2">
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-2xl mt-1">
                  {e.heading}
                </h2>
                <p className="mt-0.5">{e.desc}</p>
              </div>
            );
          })}
      </div>
      <Footer />
    </>
  );
};

export default DigitalRights;
