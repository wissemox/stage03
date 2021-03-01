import {
    GET_CONTACT 
} 
from '../constant/ActionType'
const Alluser01 = {
    Alluser: [],
  };
   const userall = (state = Alluser01, { type, payload }) => {
    switch (type) {
        case GET_CONTACT  :
            return {
                ...state,
                Alluser:payload,
               
              };
      default:
        return state;
    }
  };
  export default userall