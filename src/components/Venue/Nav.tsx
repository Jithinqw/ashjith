export interface INav {
  children: JSX.Element | JSX.Element[];
}
export const Nav = (props: INav) => {
  return (
    <nav className="py-4 px-6 text-sm font-medium">
      <ul className="flex space-x-3">{props.children}</ul>
    </nav>
  );
};
