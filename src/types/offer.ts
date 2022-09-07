export type TOffer = {
  id: number,
  imageUrl: string,
  name: string,
  price: number,
  description: string,
  fullDescription: string,
  weight: string,
  composition: string,
}

export type TOffers = Array<TOffer>;

export type TCartOffer = {
  id: string,
  imageUrl: string,
  name: string,
  price: number,
  description: string,
  fullDescription: string,
  amount: number,
  weight: string,
  composition: string,
}

export type TCartOffers = Array<TCartOffer>;