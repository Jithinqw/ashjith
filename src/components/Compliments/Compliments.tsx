import { Suspense } from "react";
import { cmsContent } from "../../cms";
import { ICompliments } from "../../utils/constants";
import { Loader } from "../Loader/Loader";

interface IRatedCompliments {
  wishes: Array<ICompliments>;
}
export const Compliments = (props: IRatedCompliments) => {
  return (
    <div className="mb-4">
      <div className="text-center">
        <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          <span
            style={{
              display: "inline-block",
              verticalAlign: "top",
              textDecoration: "inherit",
              textWrap: "balance",
            }}
          >
            {cmsContent.common.complimentsMainText}
          </span>
        </h1>
      </div>
      <div className="relative mt-8 ml-8 mr-8">
        <div className="absolute opacity-30 inset-x-0 h-px -top-px"></div>
        <div className="absolute opacity-30 inset-y-0 w-px -right-px"></div>
        <div className="absolute opacity-30 inset-y-0 w-px -bottom-px"></div>
        <div className="absolute opacity-30 inset-y-0 w-px -left-px"></div>
        <ul className="isolate grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
          {props.wishes &&
            props.wishes.length > 0 &&
            props.wishes.map((e, i) => {
              return (
                <li
                  className="flex rounded-xl bg-gray-50 ring-1 ring-gray-950/5 z-10 row-span-2 !bg-white cursor-pointer"
                  style={{
                    boxShadow:
                      "0 10px 32px rgb(33 33 38 / 0.15), 0 1px 1px rgb(0 0 0 / 0.05), 0 0 0 1px var(--tw-ring-color), 0 4px 6px rgb(33 33 38 / 0.08), 0 24px 68px rgb(33 33 38 / 0.10)",
                  }}
                  key={i}
                >
                  <Suspense fallback={<Loader />}>
                    <img
                      className="mb-10 w-auto"
                      src={e.wisherImg}
                      decoding={"async"}
                      style={{ color: "transparent" }}
                      alt="Suspense"
                      height={"8"}
                    />
                  </Suspense>
                  <figure className="flex w-full flex-col items-start p-8">
                    <blockquote className="mt-auto text-xl font-book text-gray-950">
                      <p className="relative before:absolute before:right-full before:top-0">
                        {e.mainText}
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex w-full items-center justify-between">
                      <dl className="flex flex-wrap text-sm">
                        <dt className="sr-only">Name</dt>
                        <dd className="w-full flex-none font-medium text-gray-950">
                          {e.wisherName}
                        </dd>
                        <dt className="sr-only">Role</dt>
                        <dd className="mt-0.5 text-gray-600">
                          {e.wisherRelation}
                        </dd>
                      </dl>
                    </figcaption>
                  </figure>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
