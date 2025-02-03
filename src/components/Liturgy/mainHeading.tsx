export interface IMainHeading {
  text: string;
  isCentered?: boolean;
  isLeft?: boolean;
  isRight?: boolean;
}

export const MainHeading = (props: IMainHeading) => {
  return (
    <h2 className={`text-2xl font-extrabold tracking-tight text-slate-900 sm:text-2xl mt-1 ${props.isCentered ? 'text-center' : ''} ${props.isLeft ? 'text-left' : ''} ${props.isRight ? 'text-right' : ''}`}>
      {props.text}
    </h2>
  );
};
