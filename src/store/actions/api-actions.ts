import { generatePath } from "react-router";
import { ThunkActionResult } from "../../types/action";
import { APIRoute } from "../../types/const";
import { TOffers, TOffer } from "../../types/offer";
import { setOffers, setOffer } from "../data/slice";

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<TOffers>(APIRoute.Offers);
    dispatch(setOffers(data));
  }

export const fetchOfferAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<TOffer>(generatePath(APIRoute.Offer, { id }));
    dispatch(setOffer(data));
  }