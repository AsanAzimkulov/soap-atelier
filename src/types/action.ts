import { RootState } from "../store/store";
import { addOffer, clearOffers, setOffers } from "../store/data/slice";
import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

export type Actions =
  | ReturnType<typeof setOffers>
  | ReturnType<typeof addOffer>
  | ReturnType<typeof clearOffers>


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, RootState, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<RootState, AxiosInstance, Actions>