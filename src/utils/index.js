export const calculateTotal = (storage, pricePerGB, upfrontPayment) => {
  if (upfrontPayment === "Yes") {
    return 0.9 * storage * pricePerGB;
  } else {
    return storage * pricePerGB;
  }
};
