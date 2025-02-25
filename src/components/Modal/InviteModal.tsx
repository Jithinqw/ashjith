import { cmsContent } from "../../cms";
import Utils from "../../utils/utility";

export interface IInviteModal {
  data?: {
    name?: string;
  };
  events?: {
    onClickGoHome?: () => void;
    onClickAccept?: () => void;
  };
}

export const InviteModal = (props: IInviteModal) => {
  const constructDescription = () => {
    const name = !Utils.isEmpty(props.data?.name) ? props.data?.name : "";
    if (name?.toLowerCase() === "general" || typeof name === "undefined") {
      return (
        cmsContent.modal.inviteModalhi +
        " " +
        "Sir / Madam" +
        "," +
        " " +
        cmsContent.modal.inviteModalDescription
      );
    }
    return (
      cmsContent.modal.inviteModalhi +
      " " +
      props?.data?.name +
      "," +
      " " +
      cmsContent.modal.inviteModalDescription
    );
  };
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    {cmsContent.modal.inviteModalHeading}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {constructDescription()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                onClick={props?.events?.onClickAccept}
              >
                {cmsContent.modal.inviteModalAccept}
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={props?.events?.onClickGoHome}
              >
                {cmsContent.modal.inviteModalReject}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
