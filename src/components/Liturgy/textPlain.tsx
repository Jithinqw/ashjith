export interface IPlainText {
  text: string;
  isCentered?: boolean;
  isLeft?: boolean;
  isRight?: boolean;
}

export const TextPlain = (props: IPlainText) => {
  return <p className={`mt-0.5 ${props.isCentered ? 'text-center' : ''} ${props.isLeft ? 'text-left' : ''} ${props.isRight ? 'text-right' : ''}`}>{props.text}</p>;
};
