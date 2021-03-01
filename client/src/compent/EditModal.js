/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import {useDispatch , useSelector } from 'react-redux'

import React, { useState } from 'react';
import {UpdatedContaced} from '../js/action/authActions'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditModal = ({el}) => {

  const [idd , setidd]=useState(el&&el._id)
  const [modal, setModal] = useState(false);
  const [name , setname]=useState()
  const [lastName , setlastName]=useState()
  const [email , setemail]=useState()
  const [password , setpassword]=useState()
  const [descraption , setdescraption]=useState()
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch()
  const Updated = () =>{
    dispatch(UpdatedContaced(idd,{name,lastName,email,password,descraption}))
    toggle()
  }
  const IDuser = useSelector(state => state.authReducer.Alluser.alluser)
  return (
    <div className="Addc02">
      <Button  body inverse style={{ backgroundColor: '#333' }} onClick={toggle}>Edit</Button>
      <Modal className="Add02" isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} >
        <ModalHeader toggle={toggle}>Add Contact</ModalHeader>
        <ModalBody>
          
           <p>{idd}</p>
            <div className="Inputt">
                {console.log(idd)}
                {console.log(lastName)}
         <p>name</p>
         <input value={name}  onChange={(e)=>setname(e.target.value)}/>
         <p>lastName</p>
         <input value={lastName}  onChange={(e)=>setlastName(e.target.value)}/>
         <p>email</p>
         <input value={email}  onChange={(e)=>setemail(e.target.value)}/>
         <p>password</p>
         <input value={password}  onChange={(e)=>setpassword(e.target.value)} type="password"/>
         <p>descraption</p>
         <input value={descraption}  onChange={(e)=>setdescraption(e.target.value)}/>
         </div>
        </ModalBody>
        <ModalFooter>
            
          <Button color="primary" onClick={Updated}>Updated</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditModal;
