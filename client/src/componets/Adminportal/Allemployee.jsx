import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import axios from "axios";

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
 const [userdata, setUserdata] = React.useState([]);
       axios.get("http://localhost:5000/employee/all")
      .then((res) => {
      setUserdata(res.data);
});



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">user id</TableCell>
              <TableCell align="center">Profile</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">Password</TableCell>
              <TableCell align="center">Action</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {userdata.map((user, index) => (
              <TableRow>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">
                  <img
                    src={`${user.pic}`}
                    style={{ borderRadius: "50%" }}
                    height={"55px"}
                    width={"55px"}
                    alt=""
                    srcset=""
                  />
                </TableCell>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.phone}</TableCell>
                <TableCell align="center">{user.pass}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="success"
                    onClick={(e) => {
                      window.location = `/update/${index}/${user._id}`;
                    }}
                  >
                    Update<i class="fa fa-download" aria-hiddern="true"></i>
                  </Button>
                </TableCell>

                <TableCell align="center">
                  {/* <Button variant="danger" onClick={(e) => del(user._id)}>
                    Delete <i class="fa fa-delete" aria-hiddern="true"></i>
                  </Button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        // count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
