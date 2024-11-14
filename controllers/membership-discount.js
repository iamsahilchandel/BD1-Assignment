const { discountPercentage } = require('../constants');

const MemberShipDiscount = (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember;

  if (isMember === 'true') {
    const discountAmount = cartTotal * (discountPercentage / 100);
    cartTotal = cartTotal - discountAmount;
  }

  res.send(cartTotal.toString());
};

module.exports = MemberShipDiscount;
