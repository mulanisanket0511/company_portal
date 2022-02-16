import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";



const theme = createTheme();

export default function Signup(props) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [image, setimage] = useState();
  const [password, setpassword] = useState("");
  const [data, setData] = useState([]);
  const [role, setrole] = React.useState();
  const [value, setValue] = React.useState("");
  if (!props.role) {
    //admin
    axios.get("http://localhost:5000/all").then((res) => {
      setData(res.data);
    });
  }
  else {
    //employee
    axios.get("http://localhost:5000/all").then((res) => {
      setData(res.data);
    });
  }

  const sendData = () => {

    var data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("phone", phone);
    data.append("password", password);
    data.append("pic", image);
    data.append("role", role);


    console.log(data);
    if (!props.role) {
      //admin
      axios.post("http://localhost:5000/add-user", data)
        .then((res) => {
          console.log(res);
          alert("Data send successfully..");
          window.location = "/";
        })
        .catch((err) => console.log(err));
    }
    else {
      //employee
      axios.post("http://localhost:5000/add-user", data)
        .then((res) => {
          console.log(res);
          alert("Data send successfully..");
          window.location = "/";
        })
        .catch((err) => console.log(err));

    }
  };

  var emaildata = [];
  data.map((item) => emaildata.push(item.email));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "" || password === "") {
      alert("please fill-up the details");
    } else if (emaildata.includes(email)) {
      alert("email already exist please use other email.");
    } else {
      sendData();
    }
  };



  return (
    <>
      <div className="row" style={{ display: "flex", justifyContent: "center" }}>
        <div className="col-4 card" style={{ width: "450px", marginTop: "50px" }}>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ mt: 2, bgcolor: "black" }}>
                  <LockOutlinedIcon />
                </Avatar>

                <Typography

                  style={{ marginBottom: 20 }}
                  component="h4"
                  variant="h4"
                >
                    {props.name}
                              
                </Typography>

                <Box noValidate sx={{ mt: 0 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    onChange={(e) => setname(e.target.value)}
                    label="name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    onChange={(e) => setemail(e.target.value)}
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <input
                    margin="normal"
                    type="file"
                    onChange={(e) => setimage(e.target.files[0])}
                    required
                    fullWidth
                    id="image"
                    label="choose image"
                    name="Multi-files"
                    autoComplete="image"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    onChange={(e) => setphone(e.target.value)}
                    label="phone no"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />

                  <TextField
                    margin="normal"
                    id="outlined-select-role"
                    required
                    fullWidth
                    autoFocus
                    label="Enter rsYour Role"
                    value={role}
                    onChange={(e) => setrole(e.target.value)}
                  >
                  </TextField>

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    onChange={(e) => setpassword(e.target.value)}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    onClick={(e) => handleSubmit(e)}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign up
                  </Button>
                </Box>
              </Box>

            </Container>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
