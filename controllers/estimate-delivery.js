const EstimateDelivery = (req, res) => {
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);

  let shippingTime = 0;

  if (shippingMethod === 'express') {
    shippingTime = distance / 100; // 1 day per 100km
  } else {
    shippingTime = distance / 50; // 1 day per 50km
  }

  res.send(shippingTime.toString());
};

module.exports = EstimateDelivery;
