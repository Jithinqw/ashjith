import { cmsContent } from "../../cms";
import Utils from "../../utils/utility";

export const InviteScene = () => {
  return (
    <>
      <div
        className="flex flex-center items-center justify-center h-screen overflow-hidden no-scrollbar"
        style={{ backgroundColor: cmsContent.config.invitecolor }}
      >
        <img
          src={Utils.getUrl("invite-final.png")}
          height={"400px"}
          width={"500px"}
        />
      </div>
    </>
  );
};

export default InviteScene;
