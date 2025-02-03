export interface IList {
  listItems: Array<string>;
  listStyle?: "none" | "number" | "bullet";
}

export const List = (props: IList) => {
  return (
    <ul
      className={`${props.listStyle === "none" ? "list-none" : ""} ${
        props.listStyle === "bullet" ? "list-disc" : ""
      } ${props.listStyle === "number" ? "list-decimal" : ""} px-8`}
    >
      {props.listItems &&
        props.listItems.length > 0 &&
        props.listItems.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
    </ul>
  );
};
