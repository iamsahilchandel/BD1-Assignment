const { loyalityRate } = require('../constants');

const LoyaltyPoints = (req, res) => {
  const purchaseAmount = parseFloat(req.query.purchaseAmount);

  const loyaltyPoints = purchaseAmount * loyalityRate;

  res.send(loyaltyPoints.toString());
};

module.exports = LoyaltyPoints;
