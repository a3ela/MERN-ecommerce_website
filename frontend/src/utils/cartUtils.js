export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // shipping price if the order is 100 then its free, else 10
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

  //tax price
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

  // total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
