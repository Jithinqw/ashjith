export interface IStory {
  userReelName: string;
  userReelImageSrc: string;
  userReelImageAlt?: string;
  reelId: string;
}
export interface IInstagramStory {
  reelList: Array<IStory>;
  onClick: (reelName: string, reelId: string) => void;
}

export const InstagramStory = (props: IInstagramStory) => {
  return (
    <ul className="flex space-x-1 mt-4 ml-2 mr-2">
      <li className="flex flex-col items-center space-y-1">
        <div className="relative -p-2 rounded-full">
          <a href="#" className="block bg-white p-1 rounded-full">
            <img
              className="h-14 w-14 rounded-full"
              src="http://localhost:3000/ashjithlogo.png"
            />
          </a>
          <button className="absolute bottom-0 right-0 bg-blue-500 h-4 w-4 rounded-full font-semibold border-white flex justify-center items-center font-mono right-1 text-white">
            +
          </button>
        </div>
        <a href="#">You</a>
      </li>
      {props.reelList &&
        props.reelList.length > 0 &&
        props.reelList.map((e, i) => {
          return (
            <li className="flex flex-col items-center space-y-1" key={i} onClick={() => props.onClick(e.userReelName,e.reelId)}>
              <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
                <a href="#" className="block bg-white p-1 rounded-full">
                  <img
                    className="h-14 w-14 rounded-full"
                    src={e.userReelImageSrc}
                  />
                </a>
              </div>
              <a href="#">{e.userReelName}</a>
            </li>
          );
        })}
    </ul>
  );
};
