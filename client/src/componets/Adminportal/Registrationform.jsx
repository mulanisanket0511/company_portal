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
import { Alert, FormControl, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';

const theme = createTheme();

export default function Signup() {


    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [mobile, setmobile] = useState('')
    const [image, setimage] = useState()
    const [password, setpassword] = useState('')
    const [key, setkey] = useState("")
    const [data, setData] = useState([])
    const [value, setValue] = React.useState('employee');


    React.useEffect(() => {
        axios.get("http://localhost:5000/all")
            .then((value) => {
                setData(value.data)
            })
    }, []);

    const sendData = () => {
        const data = {
            "name": name,
            "email": email,
            "phone": mobile,
            "pic": image,
            "password": password,
            "role": value
        }
        console.log(data);

        axios.post("http://localhost:5000/add-user", data)
            .then((res) => {
                alert("Data send successfully..")
                window.location = "/"
            })
            .catch((err) => console.log(err))

    }


    var emaildata = []
    data.map((item) => (emaildata.push(item.email)))


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || mobile === "" || password === "") {
            alert("please fill-up the details")
        }
        else if (emaildata.includes(email)) {
            alert("email already exist please use other email.")
        }
        else if (value === "admin" && key !== "keyur6021") {
            alert("Enter your valid Secrate key")
        }
        else {
            sendData()
        }
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    };

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
                            {/* <Box>
                                <Form.Select onChange={(e) => (setrole(e.target.value))} style={{ border: '2px solid black' }} size='lg'>
                                    <option> Role :  </option>
                                    <option value={"admin"}>Admin</option>
                                    <option value={"employee"}>Employee</option>
                                </Form.Select>
                            </Box> */}

                            {value === "admin" ?
                                <Grid item sx={12}>
                                    <TextField
                                        style={{ marginTop: 15 }}
                                        autoComplete="given-name"
                                        name="fullname"
                                        required
                                        fullWidth
                                        id="key"
                                        onChange={(e) => setkey(e.target.value)}
                                        label="Secrate Key"
                                        autoFocus
                                    />
                                </Grid> :
                                null

                            }


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
                                    onChange={(e) => setimage(e.target.files[0])}
                                    required
                                    fullWidth
                                    id="image"
                                    label="choose image"
                                    name="Multi-files"
                                    autoComplete="image"
                                    autoFocus
                                // multiple
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="mobile"
                                    onChange={(e) => setmobile(e.target.value)}
                                    label="mobile no"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />

                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Role</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="employee" control={<Radio />} label="Employee" />
                                        <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                                    </RadioGroup>
                                </FormControl>

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