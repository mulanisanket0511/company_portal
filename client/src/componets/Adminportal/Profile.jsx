import React, { useEffect } from 'react'
import { ListGroupItem, ListGroup, Card, Button } from 'react-bootstrap'
import profile from '../../image/profile.jpg'
import { MdOutlineDriveFileRenameOutline, MdMarkEmailUnread } from "react-icons/md";
import { MdEmail } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import axios from 'axios';
import background from '../../image/background.jpg'
import { Grid } from '@mui/material';

export const Profile = () => {


    const [user, setuser] = React.useState([])
    const id = localStorage.getItem("user")

    useEffect(() => {
        axios.get(`http://localhost:5000/user/${id}`)
            .then((res) => {
                setuser(res.data)
                console.log(res);
            })
            .catch((err) => console.log(err))
    }, [])



    return (
        <>
            <div className="background">
            </div>
            <Card style={{ width: '78%', marginLeft: "285px", height: '575px', marginTop: "-600px" }}>
            <div className='container'>
                        <div className="picture">
                            <img style={{ borderRadius: "110px", width: "180px", height: "175px", marginLeft: "8px", marginTop: "5px" }}
                                src={user.pic} alt="profile" />
                        </div>
                        <div className="name">
                            {user.name}
                            <div className="admin">
                                {user.role}
                            </div>
                        </div>
                    </div>
                    <hr />
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                   <div className="name1">
                       Profile Details
                   </div>
                  < MdEmail style={{color:"rgb(116, 169, 217)",marginLeft:"15px",marginRight:"15px"}}/>{user.email}
                  <div className="phone">
                  <BsTelephoneFill style={{color:"rgb(116, 169, 217)",marginLeft:"15px",marginRight:"15px"}} /> {user.phone}
                  </div>
                  <button className="btn btn-primary">EDIT PROFILE</button>


                    </Grid>
                    <Grid item xs={9}>
                    </Grid>
                </Grid>


            </Card>



        </>
    )
}













































{/* <div className="row">
<div style={{ marginLeft: "150px", fontWeight: "bold", color: "green", fontFamily: "'Shizuru', 'cursive'" }} className="heading text-center">
    <h1>Profile Details :-</h1>
</div><hr />
<div className="col-2">

</div>
<div className="col-4">

    <img style={{ borderRadius: "115px", width: "222px", height: "215px", marginLeft: "100px", marginTop: "22px" }}
        src={user.pic} alt="profile" />

</div>

<div style={{ marginTop: '20px'}} className="col-6">

    <h4 style={{ fontWeight: "bold" }}> <MdOutlineDriveFileRenameOutline style={{marginRight:"10px"}}/>  {user.name} </h4><br />
    <h4 style={{ fontWeight: "bold" }}> <MdMarkEmailUnread  style={{marginRight:"10px"}}/> {user.email} </h4><br />
    <h4 style={{ fontWeight: "bold" }}> <BsTelephoneForwardFill  style={{marginRight:"10px"}}/>{user.phone}</h4><br />
    <h4 style={{ fontWeight: "bold" }}> <RiAdminFill  style={{marginRight:"10px"}}/> {user.role}</h4>

</div>

</div> */}