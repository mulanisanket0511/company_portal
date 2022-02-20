import React, { useEffect } from "react";
import {  Card } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import axios from "axios";
import { Grid } from "@mui/material";
import Admindetail from "./Admindetail";

export const Profile = () => {
  const [user, setuser] = React.useState([]);
  const id = localStorage.getItem("user");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${id}`, {
        headers: {"Authorization":`Bearer ${localStorage.getItem("token")}`}
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
          height: "575px",
          marginTop: "-666px",
        }}
      >
        <div className="container">
          <div className="picture">
            <img
              style={{
                borderRadius: "110px",
                width: "180px",
                height: "175px",
                marginLeft: "8px",
                marginTop: "5px",
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
            <button className="btn btn-primary">EDIT PROFILE</button>
          </Grid>
          <Grid item xs={9}></Grid>
        </Grid>
      </Card>
    </>
  );
};