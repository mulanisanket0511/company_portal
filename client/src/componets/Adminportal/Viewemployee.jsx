import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Carousel } from "react-bootstrap";
import axios, { Axios } from "axios";
import { CssBaseline } from "@mui/material";
import { useParams } from "react-router-dom";

const theme = createTheme();

export default function Viewemployee() {
  var { id } = useParams();
  const [employeeview, setemployeeview] = React.useState([]);
  console.log(employeeview);
  React.useEffect(() => {
    axios.get(`http://localhost:5000/employee/viewemployee/${id}`,{
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`
    }})
    .then((response) => {
      setemployeeview(response.data);
    });
  }, []);
  
  return (
    <>
      {employeeview.length !== 0 ? (
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <Grid item xs={2} sm={4} md={6}>
              <Carousel>
                
                  <Carousel.Item>
                    <img
                      className=""
                      src={employeeview.pic}
                      alt="First slide"
                      height={"800px"}
                      width={"100%"}
                    />
                  </Carousel.Item>
              </Carousel>
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div class="card" style={{width:"40rem"}}>
                  <div class="card-body">
                    <h5 class="card-title">Employee Detail</h5>
                    <h2 class="card-title"> Name:-{employeeview.name}</h2>
                    <h2 class="card-title"> Email:-{employeeview.email}</h2>
                    <h3 class="card-title">
                      Phone:-{employeeview.phone}
                    </h3>
                    <h3 class="card-title">Password:-{employeeview.password}</h3>
                    <p class="card-text">
                      
                    </p>
                    {/* <div className="container my-4">
                                    <h3>Features</h3>
                                    <hr />
                                    <ImageList className='mb-0' sx={{ width: 500, height: 450 }}>
                                        {productdata.feature.map((value, index) => (
                                            <>
                                                <ImageListItem key={index}>
                                                    <img
                                                        src={`http://localhost:5000/${value.ffile}`}
                                                        alt="img"
                                                   
                                                    />
                                                    <ImageListItemBar
                                                        title={value.detail}
                                                        position="below"
                                                    />
                                                </ImageListItem>
                                            </>
                                        ))}
                                    </ImageList>
                                </div>
                    <a href="/" class="btn btn-primary">
                      Go Homepage
                                        </a> */ }
                  </div> 
                </div>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      )
       : null
       }
    </>
  );
}
