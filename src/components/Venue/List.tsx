export interface IList {
  children?: JSX.Element | JSX.Element[];
}
export const List = (props: IList) => {
  return <ul className="divide-y divide-slate-100">{props.children}</ul>;
};
