import { TOffer } from './../../types/offer';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TOffers } from '../../types/offer';

type DataSlice = {
  offers: TOffers | [],
  offer: TOffer | undefined,
}

const initialState: DataSlice = {
  offers: [],
  offer: undefined,
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<TOffers>) => {
      state.offers = action.payload;
    },
    setOffer: (state, action: PayloadAction<TOffer | undefined>) => {
      state.offer = action.payload;
    },
    addOffer: (state, action: PayloadAction<TOffer>) => {
      state.offers = [...state.offers, action.payload];
    },
    removeOffer: (state, action: PayloadAction<number>) => {
      state.offers.filter(offer => offer.id !== action.payload);
    },
    clearOffers: (state) => {
      state.offers = [];
    }
  }
})

export default dataSlice.reducer;

export const { setOffers, setOffer, addOffer, removeOffer, clearOffers } = dataSlice.actions;