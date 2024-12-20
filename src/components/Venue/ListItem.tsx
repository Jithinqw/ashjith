import { Suspense } from "react";
import { cmsContent } from "../../cms";
import { Loader } from "../Loader/Loader";

export interface IListItem {
  title: string;
  id: string;
  image: string;
  starRating: number;
  rating: number;
  address: string;
  head: string;
  amenities: Array<string>;
}
export default function ListItem(props: IListItem) {
  const launchGoogleMaps = (val: string) => {
    window.open(val, "_blank")?.focus();
  };
  return (
    <article className="flex items-start space-x-6 p-6">
      <Suspense fallback={<Loader />}>
        <img
          src={props.image}
          alt=""
          width="60"
          height="88"
          className="flex-none rounded-md bg-slate-100"
        />
      </Suspense>
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-slate-900 truncate pr-20">
          {props.title}
        </h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div className="absolute top-0 right-0 flex items-center space-x-1">
            <dt className="text-sky-500">
              <span className="sr-only">Star rating</span>
              <svg width="16" height="20" fill="currentColor">
                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
              </svg>
            </dt>
            <dd>{props.starRating}</dd>
          </div>
          <div>
            <dt className="sr-only">Rating</dt>
            <dd className="px-1.5 ring-1 ring-slate-200 rounded">
              {props.rating}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Genre</dt>
            <dd className="flex items-center">
              <span
                className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 ml-2 cursor-pointer"
                onClick={() => launchGoogleMaps(props.address)}
              >
                {cmsContent.pages.venue.homePageBadgeCta}
              </span>
            </dd>
          </div>
          {props.amenities.length > 0 && (
            <div className="hidden md:block lg:block flex flex-row w-full mt-2 font-normal">
              <dt className="sr-only">amenities</dt>
              {props.amenities &&
                props.amenities.length > 0 &&
                props.amenities.map((e, i) => {
                  return (
                    <span
                      key={i}
                      className={`inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 ${
                        i > 0 ? "ml-2" : ""
                      }`}
                    >
                      <dd className="text-slate-400 ">{e}</dd>
                    </span>
                  );
                })}
            </div>
          )}
        </dl>
      </div>
    </article>
  );
}
