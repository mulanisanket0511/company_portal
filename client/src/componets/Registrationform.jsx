import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from 'axios'
import { Form } from 'react-bootstrap'

const theme = createTheme();

export default function Signup() {


    const [email, setemail] = React.useState('')
    const [name, setname] = useState('')
    const [mobile, setmobile] = useState('')
    const [image, setimage] = useState()

    const [password, setpassword] = useState('')
    const [data, setData] = useState([])


    var emaildata = []
    data.map((item) => (emaildata.push(item.email)))


    const handleSubmit = (e) => {

        if (name === '' || email === '' || mobile === "" || password === "") {
            alert("please fill-up the details")
        }
        else if (emaildata.includes(email)) {
            alert("email already exist please use other email.")
        }
        else {
            const dat = new FormData()

            dat.append("name", name)
            dat.append("email", email)
            dat.append("mobile", mobile)
            dat.append("password", password)
            for (let i = 0; i < image.length; i++) {
                dat.append("pic", image[i])
            }

            alert("user Save successfully..!!")

            window.location = "/"
        }
    }
    return (

        <div className="row" style={{ display: "flex", justifyContent: "center" }}>
            <div className="col-4 card" style={{ width: "450px", marginTop: "50px" }}>
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{

                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 2, bgcolor: 'black' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography style={{ marginBottom: 20 }} component="h4" variant="h4">
                                Sign up
                            </Typography>
                            <Box>
                            <Form.Select style={{border: '2px solid black'}} size='lg' aria-label="Default select example">
                                <option> Role :  </option>
                                <option value="1">Admin</option>
                                <option value="2">Employee</option>
                            </Form.Select>
                            </Box>

                            <Box noValidate sx={{ mt: 1 }}>
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
                                    onChange={(e) => setimage(e.target.files)}
                                    required
                                    fullWidth
                                    id="image"
                                    label="choose image"
                                    name="Multi-files"
                                    autoComplete="image"
                                    autoFocus
                                    multiple
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="mobile no."
                                    onChange={(e) => setmobile(e.target.value)}
                                    label="mobile no"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
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
    );
}