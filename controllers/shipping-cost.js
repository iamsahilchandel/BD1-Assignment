const ShippingCost = (req, res) => {
  const weight = parseFloat(req.query.weight);
  const distance = parseFloat(req.query.distance);

  const shippingCost = weight * distance * 0.1;

  res.send(shippingCost.toString());
};

module.exports = ShippingCost;
