import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';
import {useDispatch ,useSelector} from 'react-redux'
import {DeletedProduct } from '../js/action/authActions'
import EditModal from './EditModal'
import './Navbar.css'
const ContactlistMap = ({el}) => {
    const dispatch = useDispatch()
    const Deleted08 = () =>{
        dispatch(DeletedProduct(el._id))
    }
     
  return (
    <>
     
     
     <div className="DesignCard">
    {console.log(el._id)}
      <Card className="Background" body inverse style={{ backgroundColor: '#333' }}>
        <CardTitle tag="h5">{el.name}</CardTitle>
        <CardText>{el.descraption}</CardText>
        <CardText>{el.email}</CardText>
        <div className="Buttton">
            <div className="Updated">
        <EditModal el={el}/>
        <Button onClick={Deleted08} className="ButtonMargin">Delete</Button>
        </div>
        </div>
      </Card>
      </div>
      <Card>
       
       
      </Card>
      
   </>
  );
};

export default ContactlistMap;
