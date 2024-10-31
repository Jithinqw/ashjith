import { cmsContent } from "../../cms";
import { AddToCalendarButton } from "add-to-calendar-button-react";
export interface IDateAnnocement {
  shortText: string;
  longDesc: string;
  type?: string;
  value?: string;
  onClick?: () => void;
}

export const DateAnnocement = (props: IDateAnnocement) => {
  const isAddress = props.type === "address";
  return (
    <div className="m-8 relative space-y-4">
      <div className="p-5 bg-white rounded-lg flex items-center justify-between md:space-x-8 xl:space-x-8 space-x-2">
        <div className="flex-1">
          <div className="h-6 w-24 rounded">{props.shortText}</div>
        </div>
        {isAddress && (
          <div className="w-48 h-6 rounded-lg">
            <span
              onClick={props.onClick}
              className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 cursor-pointer"
            >
              {cmsContent.pages.home.homePageBadgeCta}
            </span>
          </div>
        )}
        {!isAddress && (
          <div className="w-48 h-12 rounded-lg">
            <AddToCalendarButton
              name="Jithin & Ashley's Wedding"
              description="Invite for Jithin and Ashley's wedding"
              options={["Apple", "Google"]}
              location="https://maps.app.goo.gl/26G2eBs3Qf8kqjoD6"
              startDate="2025-02-03"
              endDate="2025-02-03"
              startTime="08:15"
              endTime="14:15"
              timeZone="Asia/Calcutta"
              useUserTZ={true}
              iCalFileName="Jithin and Ashley's Event"
              status={"TENTATIVE"}
              buttonsList
              hideTextLabelButton={true}
              buttonStyle={"round"}
              lightMode={"bodyScheme"}
            ></AddToCalendarButton>
          </div>
        )}
      </div>
    </div>
  );
};
