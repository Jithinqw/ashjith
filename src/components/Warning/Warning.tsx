import { cmsContent } from "../../cms";

export interface IWarningBanner {
  onClick?: () => void;
}

export const Warning = (props: IWarningBanner) => {
  return (
    <div className="transition transform fixed z-100 bottom-0 inset-x-0 pb-2 sm:pb-5 opacity-100 scale-100 translate-y-0 ease-out duration-500">
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4">
        <div className="p-2 rounded-lg bg-gray-900 shadow-lg sm:p-3">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <p className="ml-3 font-medium text-white">
                <span className="lg:hidden">
                  <span className="sr-only">{cmsContent.warning.boldHeadingSr}</span>
                </span>
                <span className="lg:inline text-gray-400">
                  <strong className="text-white font-semibold mr-1">
                    {cmsContent.warning.noteHeading}
                  </strong>
                  <span className="xl:inline">
                    {cmsContent.warning.mainHeading}
                  </span>
                </span>
              </p>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
                aria-label="Hide banner"
                onClick={props.onClick}
              >
                <svg
                  className="h-6 w-6 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
