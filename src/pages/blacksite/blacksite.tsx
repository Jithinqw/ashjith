import { useEffect } from "react";
import { cmsContent } from "../../cms";
import Utils from "../../utils/utility";

const BlackSite = () => {
  useEffect(() => {
    Utils.setPageTitle("BlackSite");
  }, []);

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          {cmsContent.pages.blacksite.mainCta}
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          {cmsContent.pages.blacksite.bodyDescription}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href={cmsContent.pages.blacksite.goHomeLink}
            className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            {cmsContent.pages.blacksite.goHomeCta}
          </a>
          <a
            href={cmsContent.pages.blacksite.contactHostLink}
            className="text-sm font-semibold text-gray-900"
          >
            {cmsContent.pages.blacksite.contactHostCta}{" "}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default BlackSite;
