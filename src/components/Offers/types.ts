/**
 * Naming convention for redux types
 * Pattern: [T|I]{Component}{Viewer}[Action|DispatchProps|State|Types]
 * Examples:
 * - IAppState
 * - IOffersListerAction
 */

export type TOffer = {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  price: number;
};

export interface IAppState {
  offers: TOffer[];
}

export interface IOffersListerState {
  offers: TOffer[];
}

export interface IOffersListerDispatchProps {
  onListOffers: () => void;
}

export type TOffersListerType = "Show all available offers";
export type TOffersListerErrorType = "Failed fetching all available offers";
export type TOffersListerSuccessType = "Successfully fetched";

type TOffersListerActionTypes =
  | TOffersListerType
  | TOffersListerErrorType
  | TOffersListerSuccessType;

export type TListOffersAction = {
  type: TOffersListerActionTypes;
  offers?: TOffer[];
};
