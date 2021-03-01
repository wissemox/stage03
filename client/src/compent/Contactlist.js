import React ,{useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {GetallContact} from '../js/action/authActions'
import ContactlistMap from './ContactlistMap'

const Contactlist = () => {
    const dispatch = useDispatch()
    const getUser =() =>dispatch(GetallContact())
    useEffect(()=>{
        getUser()
    },[])
    const alluser = useSelector((state)=>state.authReducer.Alluser.alluser)
    return (
        <div className="Desingner">
                {console.log(alluser)}
                {alluser&&alluser.map((el)=><ContactlistMap el={el}/>)}
            
        </div>
    )
}

export default Contactlist
