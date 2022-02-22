import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import { Card, CardActionArea, CardContent, CardMedia, CssBaseline, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const theme = createTheme();
export default function Viewemployee() {
  var { id } = useParams();
  const [employeeview, setemployeeview] = React.useState([]);
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

  return (
    <>
      <div className="main">
        {employeeview.length !== 0 ? (
          <ThemeProvider theme={theme}>
            <Grid container style={{ marginTop: "7%" }}>
              <Grid item sm={2} xs={2}>
              </Grid>
              <Grid component={Paper} item sm={8} xs={8}>
                  <CardActionArea component="a" href="#">
                    <Card sx={{ display: {sm:'flex',xs:"block"} }}>
                      <CardMedia
                        component="img"
                        sx={{ width:{sm:260,xs:"100%"}, display: "block" }}
                        image={employeeview.pic}
                        alt={employeeview.pic}
                      />
                      <CardContent className="text-center" sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                        Name:-{employeeview.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                        Email:-{employeeview.email}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                         Phone:- {employeeview.phone}
                        </Typography>
                        <Typography variant="subtitle1">
                         Password:-  {employeeview.password}
                        </Typography>
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
    </>
  );
}
