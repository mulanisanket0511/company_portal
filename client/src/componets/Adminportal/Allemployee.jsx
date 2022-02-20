import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Admindetail from "./Admindetail";
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import { Grid } from "@mui/material";

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [userdata, setUserdata] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/employee/all", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setUserdata(res.data);
        console.log(res.data);
        if (res.data.message || res.data.message === "Access Denied") {
          navigate("/");
        }
      });
  },[navigate]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Admindetail />
     
      <h2 className="heading mt-4"> All Employ Detail </h2>
   
      <Paper
        className="employ mt-xl-5 "
        sx={{ width: "80%", overflow: "hidden" }}
      >
        <TableContainer sx={{ maxHeight: 350 }}>
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
              {userdata !== undefined
                ? userdata.map((user, index) => (
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
                      <TableCell align="center">{user.password}</TableCell>
                      <TableCell align="center">
                        <Button
                          variant="success"
                          onClick={(e) => {
                            navigate(`/view/${user._id}`)
                          }}
                        >
                          {" "}
                         <RemoveRedEyeTwoToneIcon/>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={userdata.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
