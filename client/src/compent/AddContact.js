/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import {useDispatch } from 'react-redux'
import {addProduct005} from '../js/action/authActions'
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [name , setname]=useState()
  const [lastName , setlastName]=useState()
  const [email , setemail]=useState()
  const [password , setpassword]=useState()
  const [descraption , setdescraption]=useState()
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch()
  const Adduser = () =>{
    dispatch(addProduct005({name,lastName,email,password,descraption}))
    toggle()
  }
  return (
    <div className="Addc">
      <Button  body inverse style={{ backgroundColor: '#333' }} onClick={toggle}>Add</Button>
      <Modal className="Add02" isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add Contact</ModalHeader>
        <ModalBody>
            <div className="Inputt">
                {console.log(name)}
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
          <Button color="primary" onClick={Adduser}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
