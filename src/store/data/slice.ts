import { TOffer } from './../../types/offer';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TOffers } from '../../types/offer';

type DataSlice = {
  offers: TOffers | [],
}

const initialState: DataSlice = {
  offers: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
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