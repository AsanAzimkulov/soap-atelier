import { TCartOffer, TCartOffers } from "../../types/offer";

export default function getMinigyCartString(cart: { items: TCartOffers, totalPrice: number }) {

  const getCartItemInfo = (item: TCartOffer) => {
    return `id:${item.id}/${item.amount}шт.`
  }

  let resultString = '';

  cart.items.forEach(item => {
    resultString += '-' + getCartItemInfo(item);
  });
  if (resultString.length === 0) {
    return 'Пусто.'
  }

  return resultString += `Стоимость:${cart.totalPrice}сом.`
};