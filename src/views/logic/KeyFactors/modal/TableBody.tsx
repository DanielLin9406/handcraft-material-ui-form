import React from "react";
// import MuiTableBody from "@material-ui/core/TableBody";
// import MuiTableCell from "@material-ui/core/TableCell";
// import MuiTableRow from "@material-ui/core/TableRow";

export const TableBody = () => <div></div>;
// export const TableBody = MuiTableBody;
export const TableRow = ({ children, ...props }) => {
  return (
    <div></div>
    // <MuiTableRow hover tabIndex={-1} {...props}>
    //   {children}
    // </MuiTableRow>
  );
};
export const TableCell = ({ children, width, ...props }) => {
  return (
    <div></div>
    // <MuiTableCell align="left" style={{ width }} {...props}>
    //   {children}
    // </MuiTableCell>
  );
};
