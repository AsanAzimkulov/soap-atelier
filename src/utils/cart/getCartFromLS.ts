import { LS } from "../../types/const";
import calcCartTotalPrice from "./calcTotalPrice";

export default () => {
  const data = localStorage.getItem(LS.CART);
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcCartTotalPrice(items);

  return {
    items,
    totalPrice
  }
}