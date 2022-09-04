export type TOffer = {
  id: number,
  imageUrl: string,
  name: string,
  price: number,
  description: string,
  fullDescription: string,
}

export type TOffers = Array<TOffer>;