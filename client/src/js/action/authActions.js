import axios from 'axios'
import {
    GET_CONTACT
    
}from '../constant/ActionType'

export const GetallContact = () => dispatch => {
    
    axios.get('/api/auth/findalluser')
    .then(res => dispatch({type:GET_CONTACT, payload:res.data}))
    .catch(err=> console.log(err));
};
export const addProduct005 =(NewContact) => dispatch =>{ 
    axios.post("/api/auth/addContect",NewContact)
    .then(res => dispatch(GetallContact()))
    .catch(err=>console.log(err))
}
export const DeletedProduct =(id) => dispatch =>{ 
    axios.delete(`/api/auth/Deleted/${id}`)
    .then(res => dispatch(GetallContact()))
    .catch(err=>console.log(err))
}
export const UpdatedContaced =(id,NewUpdated) => dispatch =>{ 
    axios.put(`/api/auth/UserUpdated/${id}`,NewUpdated)
    .then(res => dispatch(GetallContact()))
    .catch(err=>console.log(err))
}
