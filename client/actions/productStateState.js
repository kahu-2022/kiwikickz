export const SHIT_IN_CART = "SHIT_IN_CART";

export function isFull() {
  return {
    type: SHIT_IN_CART,
  };
}

export const ITS_FUCKING_EMPTY = "ITS_FUCKING_EMPTY";

export function isNOTFull() {
  return {
    type: ITS_FUCKING_EMPTY,
  };
}
