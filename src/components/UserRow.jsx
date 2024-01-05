export const UserRow =({id, username, email, handlerUserSelectForm,handlerRemoveUser})=> {
    return(
        <tr key={id}>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td><button className={'btn btn-secondary'}
            onClick={()=>handlerUserSelectForm({id,username, email})}
            >Update</button></td>
            <td><button className={'btn btn-danger'}
            onClick={()=> handlerRemoveUser(id)}
            >Delete</button></td>
        </tr>
    )
}