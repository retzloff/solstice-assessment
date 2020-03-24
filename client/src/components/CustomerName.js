import React from "react";

export const CustomerName = ({ firstName = "", lastName = "" }) => {
  return <>{[lastName, firstName].join(", ")}</>;
};
