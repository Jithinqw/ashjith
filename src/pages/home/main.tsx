import { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { cmsContent } from "../../cms";
import Utils from "../../utils/utility";
import { InviteHero } from "../../components/InviteHero/InviteHero";

const Main = () => {
  useEffect(() => {
    Utils.setPageTitle("Jithin & Ashley - Home");
    if (cmsContent.config.isPagesDisabled) {
      Utils.diablePageLoad(
        cmsContent.config.isPagesDisabled,
        cmsContent.config.defaultRedirectUrl
      );
    }
  }, []);

  return (
    <div>
      {/* Head */}
      <header className="relative">
        <div className="px-4 sm:px-6 md:px-8 main">
          <div className="absolute inset-0 bottom-10 bg-bottom bg-no-repeat">
            <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"></div>
          </div>
          <Header />
        </div>
      </header>
      {/* Body */}
      <div className="overflow-hidden">
        <InviteHero />
      </div>
    </div>
  );
};

export default Main;
