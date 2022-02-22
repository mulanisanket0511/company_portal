import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { FaUserCheck } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import axios from "axios";
import { CardContent, Grid, Typography } from "@mui/material";
import Admindetail from "./Admindetail";
import { typography } from "@mui/system";

export const Profile = () => {
  const [user, setuser] = React.useState([]);
  const id = localStorage.getItem("user");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${id}`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      })
      .then((res) => {
        setuser(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Admindetail />
      <div className="background"></div>
      <Card
        style={{
          width: "78%",
          marginLeft: "290px",
          height: "622px",
          marginTop: "-666px",
        }}
      >
        <div className="container">
          <div className="picture">
            <img
              style={{
                borderRadius: "110px",
                width: "112px",
                height: "112px",
                marginLeft: "6px",
                marginTop: "4px",
              }}
              src={user.pic}
              alt="profile"
            />
          </div>
          <div className="name">
            {user.name}
            <div className="admin">{user.role}</div>
          </div>
        </div>
        <hr />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="name1">Profile Details</div>
            <MdEmail
              style={{
                color: "rgb(116, 169, 217)",
                marginLeft: "15px",
                marginRight: "15px",
              }}
            />
            {user.email}
            <div className="phone">
              <BsTelephoneFill
                style={{
                  color: "rgb(116, 169, 217)",
                  marginLeft: "15px",
                  marginRight: "15px",
                }}
              />{" "}
              {user.phone}
            </div>
            <div className="edit">
              <button className="btn btn-primary">EDIT PROFILE</button>
            </div>
          </Grid>


          <Grid item xs={1}></Grid>
          <Grid item xs={4}>


            <Card style={{ width: "85%", height: "210px", backgroundColor: 'rgb(165, 213, 255)' }}>
              <CardContent>
                <Typography sx={{ fontWeight: "bold" }} variant="h5" gutterBottom>
                  <HiUserGroup style={{ marginBottom: "6px", marginRight: "8px" }} />
                  Total Employee
                </Typography>
                <Typography>
                  <strong style={{ fontSize: "55px" }} className="employee"> 32
                    <sup>+</sup>
                  </strong>
                </Typography>
                <button className="btn btn-dark btn-sm my-2">LEARN MORE</button>
              </CardContent>
            </Card>

            <Card style={{ width: "85%", height: "210px", marginTop: '20px', backgroundColor: 'rgb(165, 213, 255)' }}>
              <CardContent>
                <Typography sx={{ fontWeight: "bold" }} variant="h5" gutterBottom>
                 <FaMoneyBillAlt style={{ marginBottom: "6px", marginRight: "8px" }}/> Employee Salary
                </Typography>
                <Typography>
                  <strong style={{ fontSize: "55px" }} className="employee"> 4.5 L
                    <sup>+</sup>
                  </strong>
                </Typography>

              </CardContent>
            </Card>


          </Grid>
          <Grid item xs={4}>
            <Card style={{ width: "85%", height: "210px", backgroundColor: 'rgb(165, 213, 255)' }}>
              <CardContent>
                <Typography sx={{ fontWeight: "bold" }} variant="h5" gutterBottom>
                  <FaUserCheck style={{ marginBottom: "6px", marginRight: "8px" }} />
                  Present Employee
                </Typography>
                <Typography>
                  <strong style={{ fontSize: "55px" }} className="employee"> 26
                    <sup>+</sup>
                  </strong>
                </Typography>

              </CardContent>
            </Card>

            <Card style={{ width: "85%", height: "210px", marginTop: "20px", backgroundColor: 'rgb(165, 213, 255)' }}>
              <CardContent>
                <Typography sx={{ fontWeight: "bold" }} variant="h5" gutterBottom>
                  <FaUserCheck style={{ marginBottom: "6px", marginRight: "8px" }} />
                  Years Of Experience
                </Typography>
                <Typography>
                  <strong style={{ fontSize: "55px" }} className="employee"> 10
                    <sup>+</sup>
                  </strong>
                </Typography>

              </CardContent>
            </Card>

          </Grid>
        </Grid>
      </Card>
    </>
  );
};