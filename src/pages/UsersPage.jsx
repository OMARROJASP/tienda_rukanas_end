import {UsersList} from "../components/UsersList.jsx";
import {useUsers} from "../hooks/useUsers.js";
import {UserModalForm} from "../components/UserModalForm.jsx";
import {useEffect} from "react";


export const UsersPage =()=> {

    const {
        users,
        initialUserForm,
        userSelected,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectForm,
        handlerCleanForm,
        getUsers
    } = useUsers()

    useEffect(() => {
        getUsers();
    }, []);
    return(
        <>
            <UserModalForm
                initialUserForm={initialUserForm}
                handlerAddUser={handlerAddUser}
                userSelected={userSelected}
            />

            <UsersList
                users={users}
                handlerRemoveUser={handlerRemoveUser}
                handlerUserSelectForm={handlerUserSelectForm}
            />
        </>


    )
}