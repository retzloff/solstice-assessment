import React, { useEffect, useState } from "react";
import { Customer } from "./Customer";

export const CustomerList = () => {
  const [customers, setCustomers] = useState(null);
  let items;

  useEffect(() => {
    fetch("/api/customers")
      .then(response => response.json())
      .then(data => setCustomers(data));
  }, []);

  if (customers) {
    items = customers.map(customer => (
      <Customer
        key={customer.id}
        id={customer.id}
        firstName={customer.first_name}
        lastName={customer.last_name}
      />
    ));
    items = <ul>{items}</ul>;
  }

  return (
    <>
      <h2>Customers</h2>
      {items || <h3>Loading</h3>}
    </>
  );
};
