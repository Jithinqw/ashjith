import { Suspense } from "react";
import { cmsContent } from "../../cms";
import Utils from "../../utils/utility";
import { Loader } from "../Loader/Loader";

export const InviteScene = () => {
  return (
    <>
      <div
        className="flex flex-center items-center justify-center h-screen overflow-hidden no-scrollbar"
        style={{ backgroundColor: cmsContent.config.invitecolor }}
      >
        <Suspense fallback={<Loader />}>
        <img
          src={Utils.getUrl("invite-final.png")}
          height={"400px"}
          width={"500px"}
        />
        </Suspense>
      </div>
    </>
  );
};

export default InviteScene;
