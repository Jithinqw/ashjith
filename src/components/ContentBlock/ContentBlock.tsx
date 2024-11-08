interface IContentBlock {
  mainCta: string;
  bodyContent: string;
  isBlackSite?: boolean;
}

const ContentBlock = (props: IContentBlock) => {
  return (
    <main className={`grid min-h-full place-items-center ${props.isBlackSite ? 'bg-gray-900' : 'bg-white'} px-6 py-24 sm:py-32 lg:px-8`}>
      <div className="text-center">
        <h1 className={`mt-4 text-balance text-5xl font-semibold tracking-tight ${props.isBlackSite ? 'text-white' : 'text-gray-900'} sm:text-7xl`}>
          {props.mainCta}
        </h1>
        <p className={`mt-6 text-pretty text-lg font-medium ${props.isBlackSite ? 'text-white' : 'text-gray-500'} sm:text-xl/8`}>
          {props.bodyContent}
        </p>
      </div>
    </main>
  );
};

export default ContentBlock;
