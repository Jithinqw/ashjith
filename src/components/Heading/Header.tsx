import React from "react";
import { cmsContent } from "../../cms/index";
import "./Heading.css";
import 'papperanimate';

export const Header = () => {
  const [mobileViewMenu, setMobileViewMenu] = React.useState(false);

  const setMenuStatus = () => {
    setMobileViewMenu(!mobileViewMenu);
  };

  return (
    <div>
      <div className="relative z-20">
        <div className="flex items-center justify-between px-4 py-5 mx-auto max-w-7xl sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <a href="/" className="flex">
              <span className="sr-only">AshJith</span>
              <p className="rye-regular papperanimate_animated papperanimate_rubberBand">AJ</p>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              type="button"
              aria-expanded="false"
              onClick={setMenuStatus}
            >
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <div className="flex space-x-10">
              {cmsContent &&
                cmsContent.heading &&
                cmsContent.heading.headingPages &&
                cmsContent.heading.headingPages.length > 0 &&
                cmsContent.heading.headingPages.map((e, i) => {
                  return (
                    <a
                      href={e.source}
                      key={i}
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      {e.headingTitle}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      {mobileViewMenu && (
        <div className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden">
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="rye-regular papperanimate_animated papperanimate_pulse">AJ</p>
                </div>
                <div className="-mr-2">
                  <button
                    className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                    type="button"
                    tabIndex={0}
                    onClick={setMenuStatus}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                      aria-hidden="true"
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
            <div className="px-5 py-6">
              <div className="grid grid-cols-2 gap-4">
                {cmsContent && cmsContent.heading &&
                    cmsContent.heading.headingPages &&
                    cmsContent.heading.headingPages.length > 0 &&
                    cmsContent.heading.headingPages.map((e, i) => {
                    return (
                      <a
                        href={e.source}
                        key={i}
                        className="text-base font-medium text-gray-500 hover:text-gray-900">
                        {e.headingTitle}
                      </a>
                    );
                  })}
              </div>
              <div className="mt-6">
                <a
                  href="/"
                  className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-cloud-burst-600 hover:bg-primary-700"
                >
                  Get started
                  <span className="logo-full"></span>
                </a>
                <p className="mt-6 text-base font-medium text-center text-gray-500">
                  <a
                    className="text-primary-600 hover:text-primary-500"
                    href="/validate"
                  >
                    About this website
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
