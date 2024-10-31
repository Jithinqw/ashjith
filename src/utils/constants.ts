export interface IInvite {
  name: string;
  isInviteSend?: boolean;
}

export interface ICompliments {
  mainText: string;
  wisherName: string;
  wisherRole: string;
  wisherRelation: string;
  wisherImg?: string;
}

export const eInviteRecord: Record<string, IInvite> = {
  "1f82d8c0-96e7-4567-8013-034cbbe079e6": {
    name: "Jithin",
    isInviteSend: true,
  },
  "527be0ec-845a-4bd7-b584-45afc6969daf": {
    name: "Ashely",
    isInviteSend: true,
  },
  "6f9b6e0d-536a-4caf-a6ee-5a23ff210ecc": {
    name: "General",
    isInviteSend: true,
  },
  "1818a4b8-7ba3-4b7a-bb83-fb453ac979cb": {
    name: "Zacharia / Jessy Zacharia",
    isInviteSend: true,
  },
  "1818a4b8-7ba3-4b7a-bb83-fb453ac479cb": {
    name: "Timothy",
    isInviteSend: true,
  },
  "1818a466-7ba3-4b7a-bb83-fb453ac479cb": {
    name: "Kiran",
    isInviteSend: true,
  },
  "4818a4b8-7ba3-4b7a-bb83-fb453ac479cb": { name: "Sara", isInviteSend: true },
  "4818a4b8-7ba3-4b7a-bb83-fb453ac559cb": { name: "Family", isInviteSend: true },
  "be9b6b7a-2519-4bea-9491-c5d26a311359": { name: "Joe", isInviteSend: true },
  "be9b6b7a-2519-4bea-9496-c5d26a311359": {
    name: "Saji Uncle",
    isInviteSend: true,
  },
  "de9b6b7a-2519-4bea-9496-c5d26a311359": {
    name: "Ponnachayan and Family",
    isInviteSend: true,
  },
  "c903f930-098b-4124-b76b-a83a2d3f7e7b": {
    name: "Issac Thomas / Gigi Thomas",
    isInviteSend: true,
  },
};

export const alphaTestFlag = {
  "enable-instagram-component": false,
  "date-annocement-animation": false,
};
