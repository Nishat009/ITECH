import React from "react";
import { useContext } from "react";
import { ProductContext } from "../ProductContext/ProductContext";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import { TablePagination } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
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
    minWidth: 700,
  },
});
const ShowProduct = () => {
  const classes = useStyles();
  const [products, setProduct] = useContext(ProductContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  // pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  console.log(products);
  return (
    <div className="container mt-5">
      <h1 className=" text-center m-5">Product List</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>

              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Price</StyledTableCell>
              <StyledTableCell align="left">Profit Percentage</StyledTableCell>
              <StyledTableCell align="left">Product Type</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((u) => (
                <StyledTableRow key={u.name} className={classes.tables}>
                  <StyledTableCell align="left">{u.id}</StyledTableCell>
                  <StyledTableCell align="left">{u.name}</StyledTableCell>
                  <StyledTableCell align="left">{u.price}</StyledTableCell>
                  <StyledTableCell align="left">
                    {u.profitPercentage}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {u.productType}
                  </StyledTableCell>

                  <StyledTableCell align="left">
                    <div className="d-flex">
                      {/* <CreateIcon
                          onClick={() => handleUpdate(u._id)}
                          className="icon"
                        /> */}

                      <Link to={"/delete/" + u.id}>
                        <Button className="action__btn" variant="danger">
                          Delete
                        </Button>
                      </Link>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default ShowProduct;
