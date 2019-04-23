import {
  LIST_OFFERS,
  LIST_OFFERS_SUCCESS,
  LIST_OFFERS_ERROR
} from "../types/offer-type";

export default (
  state: any = [],
  { type, offers }: { type: string; offers: any }
): any => {
  switch (type) {
    case LIST_OFFERS:
      return state;
    case LIST_OFFERS_SUCCESS:
      return offers;
    case LIST_OFFERS_ERROR:
      return state;
    default:
      return state;
  }
};
