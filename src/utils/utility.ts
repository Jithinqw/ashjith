export default class Utils {
  static getRandomArbitrary = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  /**
   * @function pad
   * @description Append `0` if
   * value length less than `2`.
   * @param {number} value
   * @returns {string}
   */
  static pad = (value: number): string => {
    let str = value.toString();
    while (str.length < 2) {
      str = `0${str}`;
    }
    return str === `60` ? `00` : str;
  };

  /**
   * @function calculateTimeLeft
   * @description calculate remiaining
   * time from date in props.
   * @returns {string}
   */
  static calculateTimeLeft = (endtime: string) => {
    const deadlineStr = endtime;
    const deadline = deadlineStr ? Date.parse(deadlineStr) : 0;
    const diff = deadline - new Date().getTime();
    let days: string;
    let hours: string;
    let minutes: string;
    let seconds: string;

    if (diff > 0) {
      const daysCalc: number = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hoursCalc: number = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutesCalc: number = Math.floor((diff / 1000 / 60) % 60);
      const secondsCalc: number = Math.floor((diff / 1000) % 60);
      days = this.pad(daysCalc);
      hours = this.pad(hoursCalc);
      minutes = this.pad(minutesCalc);
      seconds = this.pad(secondsCalc);
      return {
        days,
        hours,
        minutes,
        seconds,
      };
    }
    return null;
  };

  static diablePageLoad = (isPagesDisabled: boolean, redirectUrl: string) => {
    if (window && window !== undefined && isPagesDisabled) {
      window.location.replace(redirectUrl);
    }
  };

  /**
   * @function getUrl
   * @description Construct image URL
   * @param imagePath
   * @returns {string}
   */
  static getUrl = (imagePath: string): string => {
    let completePath = "";
    if (window && typeof window !== "undefined" && imagePath) {
      completePath = window.location.origin + "/" + imagePath;
    }
    return completePath;
  };

  /**
   * @function isEmptyobject
   * @param obj
   * @returns {boolean}
   */
  static isEmptyobject = <T>(obj: T): boolean => {
    return (
      obj === null ||
      typeof obj === "undefined" ||
      typeof obj !== "object" ||
      Object.keys(obj).length === 0
    );
  };

  /**
   * @function isEmpty
   * @param str
   * @returns {boolean}
   */
  static isEmpty = (str: any): boolean => {
    return !str || str.length === 0;
  };

  /**
   * @function recordKeys
   * @param object 
   * @returns 
   */
  static recordKeys = <K extends PropertyKey, T>(object: Record<K, T>) => {
    return Object.keys(object) as K[];
  };

  /**
   * @function recordEntries
   * @param object 
   * @returns 
   */
  static recordEntries = <K extends PropertyKey, T>(object: Record<K, T>) => {
    return Object.entries(object) as [K, T][];
  };

  /**
   * @function getRecordByKeys
   * @param object 
   * @param key 
   * @returns 
   */
  static getRecordByKeys = (object: any, key?: string | null) => {
    const currentRecord = object[String(key)];
    if(!Utils.isEmpty(currentRecord)) {
      return currentRecord;
    }
    return '';
  }

  /**
   * @function setPageTitle
   * @function sets a page name
   * @param {string} pageName 
   */
  static setPageTitle = (pageName: string) => {
    if(typeof window !== 'undefined' && typeof document !== 'undefined') {
      document.title = pageName;
    }
  }

  /**
   * @function appendInviteHash
   * @param {string} pageUrl 
   * @returns 
   */
  static appendInviteHash = (pageUrl: string) => {
    if(window && typeof window !== 'undefined') {
      let hashValue = window.localStorage.getItem("inviteHash");
      return pageUrl + `/?inviteRecord=${hashValue}`
    }
  }

  static escapeRegEx = (fullText: string) => {
    const escapeRE = new RegExp(/([.*+?^=!:$(){}|[\]\/\\])/g)
    return fullText.replace(escapeRE, "\\$1")
  }
}
