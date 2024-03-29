import {useReducer, useState} from "react";
import {usersReducer} from "../routes/usersReducer.js";
import {findAll, remove, save, update} from "../services/useService.js";

const initialUsers =[]
const initialUserForm={
    id: 0,
    username: '',
    password: '',
    email: '',
}
export const useUsers =()=> {

    const [users, dispatch] = useReducer(usersReducer,initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);


    const getUsers = async ()=> {
        const result = await findAll();
        console.log(result.data);
        dispatch({
            type: 'loadingUsers',
            payload: result.data
        })
    }

    const handlerAddUser = async (user)=> {
      let response;
      if(user.id=== 0){
          response = await save(user);
      }else {
          response = await update(user);
      }

      dispatch({
          type: (user.id == 0) ? 'addUser': 'updateUser',
          payload: response.data,
      })
    }

    const handlerRemoveUser = (id) => {
        remove(id)
        dispatch({
            type: 'removeUser',
            payload: id,
        })
    }

    const handlerUserSelectForm = (user) => {
        setUserSelected({...user})
    }

    const handlerCleanForm = ()=> {
        setUserSelected(initialUserForm);
    }

    return {
        users,
        initialUserForm,
        userSelected,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectForm,
        handlerCleanForm,
        getUsers,
    }

}