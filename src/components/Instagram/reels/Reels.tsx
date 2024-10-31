import { useEffect } from "react";
import Utils from "../../../utils/utility";

export interface IReels {
  onClick: () => void;
}

export const Reels = (props: IReels) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      props.onClick();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className="relative inset-0 z-10 h-[700px] w-[350px] bg-gray-400 bg-opacity-75 transition-opacity rounded-[40px] shadow-xl overflow-hidden"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative right-6">
        <div
          className="mt-2 mr-5 flex justify-end cursor-pointer"
          onClick={props.onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {/* Timer */}
      <div className="w-[310px] h-1 bg-white rounded ml-2 overflow-hidden">
        <div className="h-1 rounded w-24 bg-gradient-to-tr from-yellow-400 to-fuchsia-600"></div>
      </div>
      {/* Reel Head */}
      <div className="flex justify-between">
        <div className="flex flex-row">
          <img
            src={Utils.getUrl('ashjithlogo.png')}
            className="rounded-full h-8 w-8 m-2"
          />
          <span className="font-semibold text-white mt-2 ml-1">asdasd</span>
        </div>
      </div>
      {/* main content */}
      <div className="flex h-[700px] w-[350px]">
        <img src={Utils.getUrl('bg.png')} />
      </div>
    </div>
  );
};
