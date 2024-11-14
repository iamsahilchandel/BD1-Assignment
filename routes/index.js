const express = require('express');
const CartTotal = require('../controllers/cart-total');
const MemberShipDiscount = require('../controllers/membership-discount');
const CalculateTax = require('../controllers/calculate-tax');
const EstimateDelivery = require('../controllers/estimate-delivery');
const ShippingCost = require('../controllers/shipping-cost');
const LoyaltyPoints = require('../controllers/loyalty-points');

const router = express.Router();

/**
 * Declare all routes here
 */

router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'app is up and running' });
});

router.get('/cart-total', CartTotal);
router.get('/membership-discount', MemberShipDiscount);
router.get('/calculate-tax', CalculateTax);
router.get('/estimate-delivery', EstimateDelivery);
router.get('/shipping-cost', ShippingCost);
router.get('/loyalty-points', LoyaltyPoints);

module.exports = router;
