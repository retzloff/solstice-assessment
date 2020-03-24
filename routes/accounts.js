const express = require("express");
const router = express.Router();

const { accounts, customers } = require("../data/initial.json");

// GET api/accounts
// @desc    Retrieve a list of accounts
router.get("/", (req, res) => {
  const accountsWithCustomers = accounts.map(a => {
    const customer = customers.find(c => c.id === a.customer_id);

    return { ...a, customer };
  });
  res.json(accountsWithCustomers);
});

module.exports = router;
