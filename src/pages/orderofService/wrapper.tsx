import { ReactElement } from "react";

export interface IWrapper {
  ele: Array<ReactElement>;
}
const Wrapper = (props: IWrapper) => {
  return (
    <>
      {props &&
        props.ele.length > 0 &&
        props.ele.map((e, i) => {
          return <div key={i}>{e}</div>;
        })}
    </>
  );
};

export default Wrapper;
