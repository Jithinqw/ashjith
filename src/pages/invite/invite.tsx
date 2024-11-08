import { useEffect, useState } from "react";
import { alphaTestFlag, eInviteRecord, IInvite } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";
import Utils from "../../utils/utility";
import { Modal } from "../../components/Modal/Modal";
import { Instagram } from "../../components/Instagram/Instagram";
import { Header } from "../../components/Header/Header";
import InviteScene from "../../components/InviteScene/InviteScene";
import { cmsContent } from "../../cms";
import { InviteModal } from "../../components/Modal/InviteModal";

const EInvite = () => {
  const [searchParams] = useSearchParams();
  const [inviteRecord, setInviteRecord] = useState<IInvite>();
  const [isUserNotInvited, setUserNotInvited] = useState<boolean>(false);
  const [userInviteModal, setInviteModal] = useState<boolean>(true);

  const isInstagramComponentEnabled =
    alphaTestFlag["enable-instagram-component"] === true;

  useEffect(() => {
    Utils.setPageTitle("Jithin & Ashley - Invitation");
    if (window && typeof window !== "undefined") {
      const d = searchParams.get("inviteRecord");
      const refJson = d ? d : "";
      Utils.redirectToPageIfInviteNotFound(true, refJson);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (window && typeof window !== "undefined") {
      const d = searchParams.get("inviteRecord");
      const refJson = d ? d : "";
      window.localStorage.setItem("inviteHash", refJson);
    }
  }, []);

  useEffect(() => {
    const inviteRecordFromS = searchParams.get("inviteRecord");
    if (!Utils.isEmpty(inviteRecordFromS)) {
      setInviteRecord(Utils.getRecordByKeys(eInviteRecord, inviteRecordFromS));
    }
    if (
      !Utils.isEmptyobject(inviteRecord) &&
      inviteRecord?.isInviteSend === false
    ) {
      setUserNotInvited(true);
    } else if (Utils.isEmpty(inviteRecordFromS)) {
      setUserNotInvited(true);
    }
    console.log(inviteRecord);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inviteRecord]);

  const onGoHomeBtnClick = () => {
    window.location.href = window.location.origin + "/";
  };

  const onDismissInviteClick = () => {
    setInviteModal(false);
  };

  return (
    <>
      <Header colorDrop={cmsContent.config.invitecolor} />
      {isUserNotInvited && (
        <Modal
          events={{
            onClickGoHome: onGoHomeBtnClick,
          }}
        />
      )}
      {!isUserNotInvited && (
        <>
          {userInviteModal && (
            <InviteModal
              data={{ name: inviteRecord?.name }}
              events={{
                onClickGoHome: onGoHomeBtnClick,
                onClickAccept: onDismissInviteClick,
              }}
            />
          )}
          <InviteScene />
          {isInstagramComponentEnabled && <Instagram />}
        </>
      )}
    </>
  );
};

export default EInvite;
