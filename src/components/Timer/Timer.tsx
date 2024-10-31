import { useEffect, useState } from "react";
import Utils from "../../utils/utility";
import { cmsContent } from "../../cms";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(
    Utils.calculateTimeLeft(cmsContent.common.weddingDate)
  );
  const timerLabel: ReadonlyArray<string> = ["d.", "h.", "m.", "s."];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(Utils.calculateTimeLeft(cmsContent.common.weddingDate));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const resolveTimerLabel = (label: string): string => {
    return label?.toString()?.toLowerCase();
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-blue rounded-lg">
        <div className="w-32 h-32 md:w-18 md-h-14 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-2xl subpixel-antialiased">
          {timeLeft?.days + resolveTimerLabel(timerLabel[0])}
        </div>
        <div className="w-32 h-32 md:w-14 md:h-14 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-2xl subpixel-antialiased">
          {timeLeft?.hours + resolveTimerLabel(timerLabel[1])}
        </div>
        <div className="w-32 h-32 md:w-14 md:h-14 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-2xl subpixel-antialiased">
          {timeLeft?.minutes + resolveTimerLabel(timerLabel[2])}
        </div>
        <div className="w-32 h-32 md:w-14 md:h-14 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-2xl subpixel-antialiased">
          {timeLeft?.seconds + resolveTimerLabel(timerLabel[3])}
        </div>
      </div>
    </div>
  );
};

export default Timer;
