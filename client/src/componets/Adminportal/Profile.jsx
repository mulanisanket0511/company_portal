import React, { useEffect } from 'react'
import profile from '../../image/profile.jpg'
import { AiFillCaretRight } from "react-icons/ai";
import axios from 'axios';
import pic from '../../image/background.png'
import { Card, CardContent } from '@mui/material';

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

            <div className="row">
                <div style={{marginLeft:"150px",fontWeight:"bold",color:"green",fontFamily:"'Shizuru', 'cursive'"}} className="heading text-center">
                <h1>Profile Details :-</h1>
                </div><hr/>
                <div className="col-2">
                    
                </div>
                <div className="col-4">

                    <img style={{ borderRadius: "115px",width: "222px", height: "215px",marginLeft:"100px",marginTop:"22px"}}
                        src={user.pic} alt="profile" />

                </div>
                
                    <div style={{ marginTop: '20px' }} className="col-6">
                      
                        <h4 style={{ fontWeight: "bold" }}> <AiFillCaretRight />  Name: {user.name} </h4><br />
                        <h4 style={{ fontWeight: "bold" }}> <AiFillCaretRight />  Email: {user.email} </h4><br />
                        <h4 style={{ fontWeight: "bold" }}> <AiFillCaretRight />  Phone:  {user.phone}</h4><br />
                        <h4 style={{ fontWeight: "bold" }}> <AiFillCaretRight />  role:  {user.role}</h4>
                      
                    </div>

              

            </div>

        </>
    )
}
