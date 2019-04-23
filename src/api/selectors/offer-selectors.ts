import { TOffer } from "../../components/Offers/types";

/**
 * Extracts the offers from the current state.
 * @example offers(state)
 */
export const offers = ({
  offers
}: {
  offers: TOffer[];
}): { offers: TOffer[] } => ({
  offers
});
