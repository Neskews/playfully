import {
  LIST_OFFERS,
  LIST_OFFERS_SUCCESS,
  LIST_OFFERS_ERROR
} from "../types/offer-type";
import { TListOffersAction, TOffer } from "../../components/Offers/types";
import { Dispatch } from "redux";

const success = (offers: TOffer[]): TListOffersAction => ({
  type: LIST_OFFERS_SUCCESS,
  offers
});

const error = (): TListOffersAction => ({ type: LIST_OFFERS_ERROR });

export const listOffers = () => (
  dispatch: Dispatch<TListOffersAction>
): void => {
  dispatch({ type: LIST_OFFERS });

  fetch("http://localhost:1234/offers.json")
    .then(response => response.json())
    .then(offers => dispatch(success(offers)))
    .catch(() => dispatch(error()));
};
