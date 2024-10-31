import React from "react";

export interface INavItem {
  href?: string;
  isActive?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}
export const NavItem = (props: INavItem) => {
  return (
    <li>
      <span
        className={`block px-3 py-2 rounded-md cursor-pointer ${
          props?.isActive ? "bg-sky-500 text-white" : "bg-slate-50"
        }`}
        onClick={props?.onClick}
      >
        {props?.children}
      </span>
    </li>
  );
};
