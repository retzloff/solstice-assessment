import React, { useEffect, useState } from "react";

import { CustomerName } from "./CustomerName";

export const AccountList = () => {
  const [accounts, setAccounts] = useState(null);
  let items;

  useEffect(() => {
    fetch("/api/accounts")
      .then(response => response.json())
      .then(data => setAccounts(data));
  }, []);

  if (accounts) {
    items = accounts.map(account => (
      <li
        key={account.id}
        className="list-item--account"
        style={styles.accountCard}>
        <div style={styles.customerTile}>
          <span style={styles.customerTileTitle}>Customer</span>
          <CustomerName
            firstName={account.customer.first_name}
            lastName={account.customer.last_name}
          />
        </div>

        <address style={styles.address}>
          <div>{account.address}</div>
          <div>
            <span style={styles.cityStateCode}>{account.city}</span>
            <span style={styles.cityStateCode}>{account.state}</span>
            <span style={styles.cityStateCode}>{account.zip_code}</span>
          </div>
        </address>

        <div style={styles.tile}>
          <span style={styles.tileTitle}>Capacity Share</span>
          {account.capacity_share || "-"}
        </div>

        <div style={styles.tile}>
          <span style={styles.tileTitle}>Solar Farm ID</span>
          {account.solar_farm_id || "-"}
        </div>

        <div style={styles.footer}>Created at {account.created_date}</div>
      </li>
    ));
  }

  return (
    <>
      <h2>Accounts</h2>
      {items ? <ul>{items}</ul> : <h3>Loading</h3>}
    </>
  );
};

const styles = {
  accountCard: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "auto 1fr auto",
    gridGap: "12px"
  },
  customer: {
    padding: "8px",
    border: "solid 1px hsl(0, 0%, 86%)",
    textAlign: "center",
    fontSize: "1.2rem",
    fontWeight: "500"
  },
  address: {
    justifySelf: "right",
    alignSelf: "center",
    fontSize: "0.9rem",
    fontStyle: "normal"
  },
  cityStateCode: {
    paddingLeft: "0.25em"
  },
  tile: {
    padding: "8px",
    border: "solid 1px hsl(0, 0%, 86%)",
    textAlign: "center",
    fontSize: "1.2rem",
    fontWeight: "500"
  },
  customerTile: {
    fontSize: "1.2rem",
    fontWeight: "500"
  },
  tileTitle: {
    display: "block",
    paddingBottom: "4px",
    fontSize: "0.9rem",
    fontWeight: "400",
    color: "hsl(0, 0%, 46%)"
  },
  customerTileTitle: {
    display: "block",
    fontSize: "0.9rem",
    fontWeight: "400",
    color: "hsl(0, 0%, 46%)"
  },
  footer: {
    gridColumn: "1/-1",
    textAlign: "right",
    fontSize: "0.8rem",
    color: "hsl(0, 0%, 66%)"
  }
};
