import React, { useState } from "react";

import { CustomerName } from "./CustomerName";

export const Customer = ({ id, firstName, lastName }) => {
  const [isSelected, setSelected] = useState(false);
  const [customer, setCustomer] = useState(null);
  let accountsList;

  function toggleDetails() {
    const nextState = !isSelected;
    setSelected(nextState);

    if (nextState && !customer) {
      fetch(`/api/customers/${id}`)
        .then(response => response.json())
        .then(data => setCustomer(data));
    }
  }

  if (customer && customer.accounts && customer.accounts.length === 0) {
    accountsList = (
      <p style={accountListStyle.noAccounts}>--- No accounts ---</p>
    );
  } else if (customer && customer.accounts && customer.accounts.length > 0) {
    accountsList = customer.accounts.map(a => (
      <li key={a.id} style={accountListStyle.accountItem}>
        <span>#{a.id}</span>
        <span>
          {a.address}, {a.city}, {a.state} {a.zip}
        </span>
      </li>
    ));
    accountsList = <ul>{accountsList}</ul>;
  }

  return (
    <li
      onClick={() => toggleDetails()}
      className="list-item--customer-name list__details-toggle">
      <CustomerName firstName={firstName} lastName={lastName} />
      {isSelected && (
        <div>
          <h3>Accounts</h3>
          {accountsList}
        </div>
      )}
    </li>
  );
};

const accountListStyle = {
  accountItem: {
    display: "grid",
    gridTemplateColumns: "4em 1fr",
    columnGap: "20px",
    lineHeight: "1.4",
    fontSize: "14px"
  },
  noAccounts: {
    fontSize: "14px",
    textAlign: "center"
  }
};
