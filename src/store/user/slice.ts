import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOffer, TCartOffers, TCartOffer } from "../../types/offer";
import calcTotalPrice from '../../utils/cart/calcTotalPrice';
import getCartFromLS from "../../utils/cart/getCartFromLS";

type TUserSlice = {
  items: TCartOffers | [],
  totalPrice: number,
}

const { items, totalPrice } = getCartFromLS();

const initialState: TUserSlice = {
  items,
  totalPrice,
}



const userSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<TCartOffers>) {
      state.items = action.payload;
      state.totalPrice = calcTotalPrice(state.items);
    },
    addItem(state, action: PayloadAction<TOffer>) {
      if (state.items.some((item) => +item.id === action.payload.id)) {
        state.items = state.items.map((item: TCartOffer) => {
          let incrementedItem = { ...item };
          if (+item.id === action.payload.id) {
            incrementedItem.amount++
          }
          return incrementedItem;
        }) as unknown as TCartOffers;
      } else {
        const newCartItem = { ...action.payload, id: +action.payload.id } as unknown as TCartOffer;
        newCartItem.amount = 1;
        state.items = [...state.items, newCartItem];
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    decrementItem(state, action: PayloadAction<number>) {
      if (state.items.some((item) => +item.id === action.payload)) {
        state.items = state.items.map((item: TCartOffer) => {
          if (+item.id === action.payload) {
            if (item.amount === 1) {
              return null;
            }
            item.amount--;
          }
          return item;
        }) as unknown as TCartOffers;
      }
      state.items = state.items.filter(item => item !== null);
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => +item.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  }
});

export default userSlice.reducer;

export const { setCart, addItem, removeItem, decrementItem, clearCart } = userSlice.actions;