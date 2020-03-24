const express = require("express");
const router = express.Router();

const sortBy = require("lodash/sortBy");

const { accounts, customers } = require("../data/initial.json");

// GET api/customers
// @desc    Retrieve a list of customers
router.get("/", (req, res) => {
  const customerList = sortBy(customers, ["last_name", "first_name"]).map(
    c => ({
      id: c.id,
      first_name: c.first_name,
      last_name: c.last_name
    })
  );
  res.json(customerList);
});

// GET api/customers/:id
// @desc    Retrieve the details for the requested customer
router.get("/:id", (req, res) => {
  const id = +req.params.id;

  const customer = customers.find(c => c.id === id);
  customer.accounts = accounts.filter(a => a.customer_id === id);

  if (customer) res.json(customer);
  else res.send(404);
});

module.exports = router;
