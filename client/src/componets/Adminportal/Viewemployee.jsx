import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PaidIcon from '@mui/icons-material/Paid'; 
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import Admindetail from "./Admindetail";
import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";

const theme = createTheme();
export default function Viewemployee() {
   const navigate = useNavigate()
  var { id } = useParams();
  const [employeeview, setemployeeview] = React.useState([]);
  const [holiday, setholiday] = React.useState([]);
  const [sallery, setsallery] = React.useState([]);
  console.log(employeeview);
  React.useEffect(() => {
    axios.get(`http://localhost:5000/employee/viewemployee/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((response) => {
        setemployeeview(response.data);
      });
  }, []);
  const email= {
    name: employeeview.name,
    to_email: email,
    holiday: holiday,
    sallery: sallery,
  };

 init("user_AWXu32CCuDFQigjASbRix");
 const confirmeemail = () => {
  emailjs.send("service_dp8vt3p","template_6auk0r2",email);
  navigate("/all-employee");
 }
  return (
    <>
      <Admindetail />
      <div className="background">
      <div className="main">
        {employeeview.length !== 0 ? (
          <ThemeProvider theme={theme}>
            <Grid container style={{}}>
              <Grid item sm={4} xs={4}>
              </Grid>
              <Grid component={Paper} style={{marginTop: "11%"}} item sm={6} xs={6}>
                  <CardActionArea component="a" href="#">
                    <Card sx={{ display: {sm:'flex',xs:"block"} }}>
                      <CardMedia
                        component="img"
                        sx={{ width:{sm:260,xs:"100%"}, display: "block" }}
                        image={employeeview.pic}
                        alt={employeeview.pic}
                      />
                      <CardContent  sx={{ flex: 1 }}>
                      <div className="text-center" style ={{color:"blue",fontSize:"18px"}}>Employee Detail </div>
                        <Typography  component="h2" variant="h5">
                        <PersonIcon/> <div className="icon mx-4 mt-1">{employeeview.name} </div>
                        </Typography>
                        <Typography   variant="h5" >
                        <EmailIcon/><div className="icon mx-4 mt-1">{employeeview.email} </div>
                        </Typography>
                        <Typography  variant="h5" >
                         <LocalPhoneIcon/><div className="icon mx-4 mt-1">{employeeview.phone} </div>
                        </Typography>
                         <Typography  variant="h5" >
                         <HolidayVillageIcon/><div className="icon mx-4 mt-1">holiday</div>
                        </Typography>
                        <Typography  variant="h5" >
                         <PaidIcon/><div className="icon mx-4 mt-1">sallary </div>
                        </Typography>
                        <button className="btn button btn-primary " onClick={(e) => confirmeemail(e)}>Confirm</button>
                      </CardContent>
                      
                        
                    </Card>
                  </CardActionArea>
              </Grid>
              <Grid item sm={2} xs={2}></Grid>
            </Grid>
          </ThemeProvider>

        )
          : null
        }
      </div>
      </div>
    </>
  );
}
