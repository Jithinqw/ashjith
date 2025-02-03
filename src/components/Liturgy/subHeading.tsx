export interface ISubHeading {
  text: string;
  isCentered?: boolean;
  isLeft?: boolean;
  isRight?: boolean;
}
export const SubHeading = (props: ISubHeading) => {
  return (
    <h2
      className={`text-lg font-extrabold tracking-tight text-slate-900 sm:text-lg mt-1 ${
        props.isCentered ? "text-center" : ""
      } ${props.isLeft ? 'text-left' : ''} ${props.isRight ? 'text-right' : ''}`}
    >
      {props.text}
    </h2>
  );
};
