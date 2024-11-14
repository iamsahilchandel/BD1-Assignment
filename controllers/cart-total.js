const CartTotal = (req, res) => {
  try {
    let newItemPrice = parseFloat(req.query.newItemPrice);
    let cartTotal = parseFloat(req.query.cartTotal);

    cartTotal = cartTotal + newItemPrice;

    res.status(200).send(cartTotal.toString());
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: 'Internal Server Error' });
  }
};

module.exports = CartTotal;
