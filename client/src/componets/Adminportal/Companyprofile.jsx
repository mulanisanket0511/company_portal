import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import pic from '../../image/employees.jpg'
import pic1 from '../../image/technologies.png'
import pic2 from '../../image/projects.jpg'
import pic3 from '../../image/pending.jpg'
import pic4 from '../../image/web.png'
import pic5 from '../../image/app.png'
import { Container, Grid } from '@mui/material';
import SentimentSatisfiedAltSharpIcon from '@mui/icons-material/SentimentSatisfiedAltSharp';
import { FcPlus } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";
import { SiWebpack } from "react-icons/si";

import { Box, typography } from '@mui/system';


export default function Companyprofile() {
    return (
        <>

            <Container maxWidth="md">
                <Typography
                    style={{ fontWeight: "bold" }}
                    variant="h5"
                    sx={{ ml:25 }}
                    align="center"
                    color='success.main'
                    gutterBottom
                >
                    CAREERS
                </Typography>
                <Typography style={{ fontWeight: "bold" }} sx={{ ml: 25 }} variant="h3" align="center" color="text.secondary" paragraph>

                    Let's crack it Together

                </Typography>
                <Typography sx={{ ml: 25 }} variant="h5" align="center" color="primary.main" paragraph>
                    It’s not just work. It’s a journey.Your Success is Our Priority. <SentimentSatisfiedAltSharpIcon sx={{ color: "pink", fontSize: "75px" }} />
                </Typography>
            </Container>



            {/*  card section start */}


            <Grid style={{ width: "80%", marginLeft: "250px" }} container spacing={2}>
                <Grid item xs={3}>
                    <Card sx={{ border: 1, borderRadius: 5, borderColor: "rgb(235, 235, 235)", backgroundColor: "rgb(208, 242, 255)" }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={pic}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography style={{ fontWeight: "bold", color: "black" }} gutterBottom variant="h5" component="div">
                                Devlopers :-
                            </Typography>
                            <Typography variant="body2" color="Text.secondary">
                                Webbrains Technologies is a full-fledged mobile and web app development company. we have a 25+ Devlopers in our company.
                            </Typography>

                            {/* <button style={{marginLeft:"90px",marginTop:"10px"}} type="button" class="btn btn-outline-primary">View</button> */}

                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={3}>

                    <Card sx={{ border: 1, borderRadius: 5, borderColor: "rgb(235, 235, 235)", backgroundColor: "rgb(200, 250, 205)" }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={pic1}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography style={{ fontWeight: "bold", color: "black" }} gutterBottom variant="h5" component="div">
                                Technologies :-
                            </Typography>
                            <Typography variant="body2" color="Text.secondary">
                                An intern is a trainee who has signed on with an organisation for a brief period. An intern’s goal is to gain work experience.
                            </Typography>

                            {/* <button style={{marginLeft:"90px",marginTop:"10px"}} type="button" class="btn btn-outline-primary">View</button> */}

                        </CardContent>
                    </Card>
                </Grid>


                <Grid item xs={3}>

                    <Card sx={{ border: 1, borderRadius: 5, borderColor: "rgb(235, 235, 235)", backgroundColor: "rgb(252, 245, 146)" }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={pic2}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography style={{ fontWeight: "bold", color: "black" }} gutterBottom variant="h5" component="div">
                                projects :-
                            </Typography>
                            <Typography variant="body2" color="Text.secondary">
                                the imformation about the projects, we will proud to say we have complete  the 1500+ projects in our company & thank you.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>


                <Grid item xs={3}>

                    <Card sx={{ border: 1, borderRadius: 5, borderColor: "rgb(235, 235, 235)", backgroundColor: "rgb(255, 231, 217)" }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={pic3}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography style={{ fontWeight: "bold", color: "black" }} gutterBottom variant="h5" component="div">
                                pending project :-
                            </Typography>
                            <Typography variant="body2" color="Text.secondary">
                                A Webbrains Technologies right now working with three large projects. to working with React js with a frontend and node js with a backend.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Typography style={{ fontWeight: "bold", color: "rgb(51, 51, 51)" }} sx={{ ml: 25, mt: 5 }} variant="h3" align="center" paragraph>
                Our Expertise In
            </Typography>

            <Typography style={{ fontWeight: "bold", color: "rgb(51, 51, 51)" }} sx={{ ml: 27, mt: 2 }} variant="h6" align="center" paragraph>
                We provide full-tech solutions to retain the attention of the target audience and leave a long-term impression on the business.
            </Typography>

            <hr class="featurette-divider" style={{ marginTop: 25 }} />
            <div class="row featurette">
                <div class="col-md-2">
                </div>

                <div class="col-md-6">
                    <h2 class="featurette-heading" style={{ fontWeight: "bold", marginTop: 10 }}><SiWebpack /> Web <BsArrowRight /> <span class="text-muted"></span></h2>
                    <p class="lead" style={{ fontSize: "18px" }}>Today, the single-page web apps are replacing the traditional websites with the agile web app development by making use of different technologies that comprise all the necessary functionalities.</p>

                    <Container sx={{ display: 'flex' }}>
                        <Typography sx={{ ml: 10 }} component="div">
                            <Box sx={{ fontWeight: 'bold', m: 5, fontSize: 25 }}><FcPlus style={{ fontSize: "22px" }} /> PHP</Box>
                            <Box sx={{ fontWeight: 'bold', m: 5, fontSize: 25 }}><FcPlus style={{ fontSize: "22px" }} /> Node-js</Box>
                            <Box sx={{ fontWeight: 'bold', m: 5, fontSize: 25 }}><FcPlus style={{ fontSize: "22px" }} /> React-js</Box>
                            <Box sx={{ fontWeight: 'bold', m: 5, fontSize: 25 }}><FcPlus style={{ fontSize: "22px" }} /> Vue.js</Box>
                        </Typography>
                        <Typography sx={{ ml: 18 }} component="div">
                            <Box sx={{ fontWeight: 'bold', m: 5, fontSize: 25 }}><FcPlus style={{ fontSize: "22px" }} /> Laraval</Box>
                            <Box sx={{ fontWeight: 'bold', m: 5, fontSize: 25 }}><FcPlus style={{ fontSize: "22px" }} /> Angular-js</Box>
                            <Box sx={{ fontWeight: 'bold', m: 5, fontSize: 25 }}><FcPlus style={{ fontSize: "22px" }} /> Wordpress</Box>
                            <Box sx={{ fontWeight: 'bold', m: 5, fontSize: 25 }}><FcPlus style={{ fontSize: "22px" }} /> Mongodb</Box>
                        </Typography>
                    </Container>
                </div>

                <div class="col-md-4" style={{ marginTop: 16 }}>
                    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ width: 485, height: 550 }} src={pic4} />
                </div>
            </div>


            <hr class="featurette-divider" style={{ marginTop: 25 }} />

            <div class="row featurette">
                <div class="col-md-2">
                </div>
                <div class="col-md-4" style={{ marginTop: 16 }}>
                    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={pic5} />

                </div>
                <div class="col-md-6" >
                    <h2 class="featurette-heading" style={{ marginTop: 10, fontWeight: "bold" }}><SiWebpack />  Mobile Apps <BsArrowRight /> <span class="text-muted"></span></h2>
                    <p class="lead" style={{ fontSize: '18px' }}>Mobile apps are redesigning the way we interact with services and empowers businesses to engage with customers. We have a dedicated team of mobile app developers to facilitate great business solutions. </p>


                    <Container sx={{ display: 'flex' }}>
                        <Typography sx={{ ml: 10 }} component="div">
                            <Box sx={{ fontWeight: 'bold', m: 5, fontSize: 25 }}><FcPlus style={{ fontSize: "22px" }} /> iOS</Box>
                            <Box sx={{ fontWeight: 'bold', m: 5, fontSize: 25 }}><FcPlus style={{ fontSize: "22px" }} /> Android</Box>
                        </Typography>
                        <Typography sx={{ ml: 18 }} component="div">
                            <Box sx={{ fontWeight: 'bold', m: 5, fontSize: 25 }}><FcPlus style={{ fontSize: "22px" }} /> React-Native</Box>
                            <Box sx={{ fontWeight: 'bold', m: 5, fontSize: 25 }}><FcPlus style={{ fontSize: "22px" }} /> Flutter</Box>
                        </Typography>
                    </Container>
                </div>
            </div>


            <hr class="featurette-divider" style={{ marginTop: 25 }} />
            <div class="row featurette">
                <div class="col-md-2">
                </div>

                <div class="col-md-6">
                    <h2 class="featurette-heading" style={{ fontWeight: "bold", marginTop: 10 }}><SiWebpack /> E-Commerce <BsArrowRight /> <span class="text-muted"></span></h2>
                    <p class="lead" style={{ fontSize: '18px'}}>The paradigm of digital e-commerce has taken a swing from web to mobile apps. Streamline your business requirements with Webbrains Technologies – one of the prominent e-commerce development company to boost your customer relationship.</p>

                    <Container sx={{ display: 'flex' }}>
                        <Typography sx={{ ml:8}} component="div">
                            <Box sx={{ fontWeight: 'bold', m: 5, fontSize: 25 }}><FcPlus style={{ fontSize: "22px" }} /> Shopify</Box>
                            <Box sx={{ fontWeight: 'bold', m: 5, fontSize: 25 }}><FcPlus style={{ fontSize: "22px" }} /> WooCommerce </Box>
                        </Typography>
                        <Typography sx={{ ml: 18 }} component="div">
                            <Box sx={{ fontWeight: 'bold', m: 5, fontSize: 20 }}><FcPlus style={{ fontSize: "22px" }} /> Magento</Box>
                        </Typography>
                    </Container>
                </div>

                <div class="col-md-4" style={{ marginTop: 16 }}>
                    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ width: 485, height: 550 }} src={pic4  }/>
                </div>
            </div>

        </>
    );
}
