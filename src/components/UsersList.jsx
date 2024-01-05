import {UserRow} from "./UserRow.jsx";

export const UsersList =({users, handlerRemoveUser, handlerUserSelectForm})=> {
    return(
        <table className={'table table-hover table-striped'}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>userName</th>
                    <th>email</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {

                users.map(user => (
                    <UserRow
                        key={user.id}
                        id={user.id}
                        username={user.username}
                        email={user.email}
                        handlerUserSelectForm={handlerUserSelectForm}
                        handlerRemoveUser={handlerRemoveUser}
                    />
                ))
            }
            </tbody>
        </table>
    )
}