import {UserForm} from "./UserForm.jsx";

export const UserModalForm =({initialUserForm,handlerAddUser, userSelected})=> {
    return (
        <div>
            <h2>Agregar Datos</h2>
            <div>
                <UserForm
                    initialUserForm={initialUserForm}
                    handlerAddUser={handlerAddUser}
                    userSelected={userSelected}
                />
            </div>
        </div>

    )
}