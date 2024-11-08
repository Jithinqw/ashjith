import { cmsContent } from "../../cms";

export const Footer = () => {
  return (
    <footer className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div className="items-centers grid grid-cols-1 justify-between gap-4 border-t border-gray-100 py-6 md:grid-cols-2">
        <p className="text-sm/6 text-slate-600 max-md:text-center">
          {cmsContent.footer.madeWith}
        </p>
        <div className="flex items-center justify-center space-x-4 text-sm/6 font-semibold text-slate-900 md:justify-end">
          <a href={cmsContent.footer.drmLink}>{cmsContent.footer.drmCta}</a>
        </div>
      </div>
    </footer>
  );
};
