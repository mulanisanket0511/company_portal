import React, { useEffect } from 'react'
import {ListGroupItem,ListGroup,Card}  from 'react-bootstrap'
import profile from '../../image/profile.jpg'
import {MdOutlineDriveFileRenameOutline,MdMarkEmailUnread} from "react-icons/md";
import {BsTelephoneForwardFill} from 'react-icons/bs'
import {RiAdminFill} from 'react-icons/ri'
import axios from 'axios';
import background from '../../image/background.jpg'

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
    
<Card style={{ width: '78%',marginLeft:"285px",height:'580px'}}>

  <Card.Body>
      <div className="row">
          <div className="col-2">
          <img style={{ borderRadius: "88px", width: "170px", height: "170px", marginLeft: "15px"}}
        src={user.pic} alt="profile" />
          </div>
          <div className="col-4"></div>
          <div className="col-6"></div>
      </div>

  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

</div>

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