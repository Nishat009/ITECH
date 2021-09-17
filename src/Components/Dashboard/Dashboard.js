import React, { useContext } from "react";
import { ProductContext } from "../ProductContext/ProductContext";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import './Dashboard.css'
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});
const Dashboard = () => {
  const classes = useStyles();
  const [products, setProducts] = useContext(ProductContext);
  console.log(products);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Top 5 Product List</h1>
      <TableContainer className="tables m-auto" component={Paper}>
        <Table  className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Profit Percentage</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .sort((a, b) =>
                a.profitPercentage < b.profitPercentage ? 1 : -1
              )
              .slice(0, 5)
              .map((u, i) => (
                <StyledTableRow key={u.name} className={classes.tables}>
                  <StyledTableCell align="left">{u.name}</StyledTableCell>

                  <StyledTableCell align="left">
                    {u.profitPercentage}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
