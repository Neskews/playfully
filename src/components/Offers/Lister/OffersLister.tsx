import React from "react";
import { TOffer } from "../types";

/**
 * Renders a list of offers
 * @example <OffersLister />
 */
const OffersLister = ({
  onListOffers,
  offers
}: {
  onListOffers: () => void;
  offers: TOffer[];
}) => {
  // if no offers available, fetch offers list
  if (!offers || offers.length === 0) onListOffers();

  // if there are offers, list them
  if (offers && offers.length > 0)
    return (
      <table>
        <thead>
          <tr>
            {Object.keys(offers[0]).map((columnName, key) => (
              <th key={key}>{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {offers.map((offer, key) => (
            <tr key={key}>
              {Object.entries(offer).map(([name, value], key) => (
                <td key={key}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );

  // otherwise state that there are no offers
  return <div>no offers found</div>;
};

export default OffersLister;
