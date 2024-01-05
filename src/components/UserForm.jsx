import {useEffect, useState} from "react";

export const UserForm =({initialUserForm,userSelected, handlerAddUser})=> {
    const [userForm, setUserForm] = useState(userSelected);
    const {id,username, password, email} = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: '',
        });
    }, [userSelected]);

    const onInputChange =({target})=> {
        const {name, value} = target;

        setUserForm({
            ...userForm,
            [name]: value
        })
    }

    const onSubmit = (event)=> {
        event.preventDefault()
        if (!username || (!password && id === 0) || !email){
            alert('Lleno todos los cuadros')
        }else {
            handlerAddUser(userForm)
            setUserForm(initialUserForm)
        }


    }

return(

       <form onSubmit={onSubmit}>
           <input
            className={'form-control w-25'}
            placeholder={'Ingrese Nombre'}
            name={'username'}
            value={username}
            onChange={onInputChange}
           />
           <input
               className={'form-control w-25'}
               placeholder={'Ingrese contraseña'}
               name={'password'}
               value={password}
               onChange={onInputChange}
           />
           <input
               className={'form-control w-25'}
               placeholder={'Ingrese Correo'}
               name={'email'}
               value={email}
               onChange={onInputChange}
           />

           <button  className="btn btn-primary" type={"submit"}>Agregar</button>

       </form>
    )
}