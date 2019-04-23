import { connect } from "react-redux";
import { listOffers } from "../../../api/actions/offer-actions";
import { TListOffersAction } from "../types";
import { Dispatch } from "redux";
import {
  IOffersListerState,
  IAppState,
  IOffersListerDispatchProps
} from "../types";
import { offers } from "../../../api/selectors/offer-selectors";
import OffersLister from "./OffersLister";

const mapDispatchToProps = (
  dispatch: Dispatch<TListOffersAction>
): IOffersListerDispatchProps => ({
  onListOffers: () => listOffers()(dispatch)
});

export default connect<
  IAppState,
  IOffersListerDispatchProps,
  {},
  IOffersListerState
>(
  offers,
  mapDispatchToProps
)(OffersLister);
