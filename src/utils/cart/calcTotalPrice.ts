import { TCartOffers } from "../../types/offer";

export default (items: TCartOffers) => {
  if (items.length === 0) return 0;
  return items.reduce((summ, item) => (summ + item.price) * item.amount, 0)
}