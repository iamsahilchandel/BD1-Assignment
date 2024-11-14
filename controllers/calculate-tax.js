const { taxRate } = require('../constants');

const CalculateTax = (req, res) => {
  const cartTotal = parseFloat(req.query.cartTotal);

  const totalTax = cartTotal * (taxRate / 100);

  res.send(totalTax.toString());
};

module.exports = CalculateTax;
